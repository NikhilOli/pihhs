import Image from 'next/image';
import React from 'react';
import heroImg from '../../../public/heroImg.jpg';
import { Button } from '@/ui/shadcn/button';
import { Calendar, PenTool, Gift } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-14 px-6 gap-10">
            {/* Text Left */}
            <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#5f687b] leading-tight">
                Beautiful Handwriting Starts Here 🖋️
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#5f687b] max-w-xl">
                Enroll in our 10-day course designed for school students and early learners! 
                Master calligraphy, cursive & mono cursive from scratch — 7 days of teaching, 2 days of evaluation, and a grand competition on Day 10!
            </p>
            <p className="mt-2 text-[#060606] font-semibold text-lg">
                Just रू799 – Get started today and win gift hampers or full cashback!
            </p>

            <Link href="/pricing">
                <Button className="mt-6 text-white rounded-full text-base bg-[#10bc69] px-6 py-3 hover:bg-[#009961] transition-all">
                Enroll Now
                </Button>
            </Link>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                <PenTool size={28} className="text-[#10bc69]" />
                <span className="text-[#5f687b] text-sm font-medium">Learn Calligraphy & Cursive</span>
                </div>
                <div className="flex items-center gap-3">
                <Calendar size={28} className="text-[#10bc69]" />
                <span className="text-[#5f687b] text-sm font-medium">10-Day Fun Program</span>
                </div>
                <div className="flex items-center gap-3">
                <Gift size={28} className="text-[#10bc69]" />
                <span className="text-[#5f687b] text-sm font-medium">Cashback & Gift Hampers</span>
                </div>
                <div className="flex items-center gap-3">
                <PenTool size={28} className="text-[#10bc69]" />
                <span className="text-[#5f687b] text-sm font-medium">Boost Confidence & Creativity</span>
                </div>
            </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
            <Image
                src={heroImg}
                alt="Handwriting Course"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto shadow-md"
            />
            </div>
        </div>
        </div>
    );
};

export default Hero;
