"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-blue-500 text-lg font-bold">Multi-Tenant Blog</div>
                <div className="flex items-center space-x-4">
                    <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
                    <UserButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;