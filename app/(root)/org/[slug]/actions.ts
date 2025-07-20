"use server";

import { CreateBlogType, blogsTable } from "@/db/schema";
import { db } from "@/db";

export async function createBlog(blog: CreateBlogType) {
  const [result] = await db.insert(blogsTable).values(blog).returning({
    id: blogsTable.id,
  });
  return result.id;
}
