import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { blogsTable } from "@/db/schema";

interface Params {
    subdomain: string;
}

export default async function Home({ params }: { params: Promise<Params> }) {
    const { subdomain } = await params;

    const client = await clerkClient();
    const organization = await client.organizations.getOrganization({
        slug: subdomain,
    });
    const orgId = organization.id;

    const blogs = await db.select().from(blogsTable).where(eq(
        blogsTable.orgId,
        orgId
    ));

    return (
        <div className="p-10">
            {blogs.map(blog => 
                <div key={blog.id} className="mb-6 p-4 border rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p className="text-gray-600">{blog.content}</p>
                </div>
            )}
        </div>
    );
}