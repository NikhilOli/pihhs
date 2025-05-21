"use client";
import React from "react";

const Pricing = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-md">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#5f687b] mb-4">
                ✍️ 10-Day Handwriting Mastery Camp
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                Make handwriting fun! Perfect for school kids — calligraphy, cursive & competitions, all in one!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">
                    रू799
                </span>
                <span className="text-sm text-gray-500 font-medium">One-Time Fee for 10 Days</span>
                </div>

                <button className="px-6 py-3 rounded-lg bg-[#10bc69] text-white text-sm font-semibold hover:bg-[#009961] transition">
                Enroll Now
                </button>

                <p className="mt-4 text-sm text-gray-500">
                Limited slots • Fun learning • Big rewards 🎁
                </p>
            </div>
        </div>
    );
};

export default Pricing;
