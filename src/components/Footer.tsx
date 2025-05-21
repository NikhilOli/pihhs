import React from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-[#f8f8f8] text-gray-700 py-10 px-4">
            <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 text-center md:text-left items-center">
                {/* Quick Links */}
                <nav className="flex justify-center md:justify-start gap-6 flex-wrap">
                {["About", "Contact", "Jobs", "Press kit"].map((item, idx) => (
                    <Link key={idx} href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-[#ce7041]">
                    {item}
                    </Link>
                ))}
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center gap-6">
                    <Link href="#" aria-label="Twitter"><FaXTwitter size={22} style={{ color: '#009961' }} /></Link>
                    <Link href="#" aria-label="LinkedIn"><FiLinkedin size={22} style={{ color: '#009961' }} /></Link>
                    <Link href="#" aria-label="Instagram"><FaInstagram size={22} style={{ color: '#009961' }} /></Link>
                    <Link href="#" aria-label="WhatsApp"><FaWhatsapp size={22} style={{ color: '#009961' }} /></Link>
                    </div>

                    {/* Copyright */}
                    <aside className="text-sm">
                    <p>
                        <span className="text-secondary-200">© {new Date().getFullYear()}</span> All rights reserved by
                        <br />
                        <span className="text-secondary-200 font-medium">Passion Institute of Handwriting Honing Skills</span>
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
