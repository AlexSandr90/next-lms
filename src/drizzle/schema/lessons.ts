import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { CourseTable } from "./course";
import { relations } from "drizzle-orm";
import { CourseSectionTable } from "./courseSection";

export const lessonsStatuses = ['public', 'private', 'preview'] as const;
export type LessonsStatus = (typeof lessonsStatuses)[number];
export const courseSectionEnum = pgEnum(
    'course_section_status',
    lessonsStatuses
);

export const LessonTable = pgTable('lessons', {
    id,
    name: text().notNull(),
    status: courseSectionEnum().notNull().default('private'),
    order: integer().notNull(),
    sectionId: uuid()
        .notNull()
        .references(() => CourseTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt,
});

export const LessonRelationships = relations(LessonTable, ({ one, many }) => ({
    section: one(CourseSectionTable, {
        fields: [LessonTable.sectionId],
        references: [CourseSectionTable.id]
    }),
    userLessonComplete: many(UserLessonsCompleteTable)

})
)

