"use client";
import * as React from "react";

import Navbar from "@/app/components/navbar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useOrganization } from "@clerk/nextjs";

import { createBlog } from "./actions";

export default function OrganizationPage() {
    const [blog, setblog] = React.useState("");
    const [title, setTitle] = React.useState("");
    const { organization } = useOrganization();

    const handleSubmit = async () => {
        console.log("Blog submitted:", { title, blog });
        if (!organization) {
            console.error("No organization found");
            return;
        }
        await createBlog({ title, content: blog.trim(), orgId: organization?.id });
    };

    return (
        <main>
            <Navbar />
            <div className="p-10">
                <Input
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Write your blog here..."
                    value={blog}
                    onChange={(e) => setblog(e.target.value)}
                    className="mt-4 mb-4"
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </main>
    );
}
