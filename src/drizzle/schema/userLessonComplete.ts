import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { LessonTable } from "./lesson";
import { relations } from "drizzle-orm";

export const UserLessonsCompleteTable = pgTable('user_lesson_complete', {
    userId: uuid()
        .notNull()
        .references(() => UserTable.id, { onDelete: 'cascade' }),
    lessonId: uuid()
        .notNull()
        .references(() => LessonTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt
},
    t => [primaryKey({ columns: [t.userId, t.lessonId] })]
);

export const UserLessonCompleteRelationShips = relations(
    UserLessonsCompleteTable, ({ one }) => ({
        user: one(UserTable, {
            fields: [UserLessonsCompleteTable.userId],
            references: [UserTable.id]
        }),
        lesson: one(LessonTable, {
            fields: [UserLessonsCompleteTable.lessonId],
            references: [LessonTable.id]
        })
    })
)
