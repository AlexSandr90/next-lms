import {relations} from "drizzle-orm";
import {integer, pgEnum, pgTable, text} from "drizzle-orm/pg-core";
import {id, createdAt, updatedAt} from "../schemaHelpers";
import {CourseProductTable} from "@/drizzle/schema/courseProduct";

export const productStatuses = ['public', 'private'] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum('product_statuses', productStatuses);

export const ProductTable = pgTable('products', {
    id,
    name: text().notNull(),
    description: text().notNull(),
    imageUtl: text().notNull(),
    priceInDollars: integer().notNull(),
    status: productStatusEnum().notNull().default('private'),
    createdAt,
    updatedAt,
});

export const ProductRelationships = relations(ProductTable, ({one, many}) => ({
    courseProducts: one(CourseProductTable)
}));