import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";


export const UserLessonsCompleteTable = pgTable('User_lesson_complete', {
    userId: uuid()
        .notNull()
        .references(() => UserTable.id, { onDelete: 'cascade' }),
    lessonId: uuid()
        .notNull()
        .references(() => LessonTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt
},
    t = [primaryKey({ columns: [true.userId, true.lessonId] })]
)