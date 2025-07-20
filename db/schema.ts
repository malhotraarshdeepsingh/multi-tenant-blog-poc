import { pgTable, varchar, uuid, text } from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  orgId: text().notNull(),
});

export type CreateBlogType = typeof blogsTable.$inferInsert;
export type BlogType = typeof blogsTable.$inferSelect;
