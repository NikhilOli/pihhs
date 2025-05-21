"use client";
import { Button } from "@/ui/shadcn/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
            {/* Logo */}
            <Link href="/">
            <div className="flex items-center gap-2">
                {/* Logo Image here */}
                <span className="text-[26px] font-extrabold tracking-tight text-primary-100">
                pIHHs
                </span>
            </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
            {["/", "/about", "/services", "/contact", "/pricing"].map((path, idx) => {
                const name = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
                return (
                <Link
                    key={idx}
                    href={path}
                    className="text-sm font-medium text-gray-700 hover:text-[#ce7041] transition-all"
                >
                    {name}
                </Link>
                );
            })}
            <Link href="/register">
                <Button className="rounded-full text-base bg-secondary-100 hover:bg-[#b7582d] px-6 py-2 text-white">
                Get Started
                </Button>
            </Link>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
