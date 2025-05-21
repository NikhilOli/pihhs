"use client";
import React from "react";

const Pricing = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#5f687b] mb-4">
                        Join Our 10-Day Handwriting Mastery Camp ✍️
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Designed for school students & early learners — learn calligraphy,
                        cursive & mono cursive in a fun and competitive way!
                    </p>
                    </div>

                    {/* Pricing Box */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center shadow-inner">
                    <p className="text-md text-[#5f687b] font-medium mb-1">
                        One-Time Fee Only
                    </p>
                    <h2 className="text-5xl font-extrabold text-gray-900">
                        रू799 <span className="text-base font-medium text-gray-500">/ 10 Days</span>
                    </h2>

                    {/* CTA Button */}
                    <button className="mt-6 px-6 py-3 rounded-lg bg-[#10bc69] text-white text-sm font-semibold hover:bg-[#009961] transition">
                        Enroll Now
                    </button>

                    {/* Payment Methods */}
                    <div className="mt-6 w-full">
                        <p className="text-center text-sm font-semibold text-gray-700 mb-3">
                        Pay via:
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">💚 eSewa</span>
                        <span className="flex items-center gap-2">💜 Khalti</span>
                        <span className="flex items-center gap-2">🏦 Bank Transfer</span>
                        <span className="flex items-center gap-2">💸 PayPal</span>
                        </div>
                    </div>
                    </div>

                    {/* Course Benefits */}
                    <div className="mt-10">
                    <h3 className="text-xl font-semibold text-[#5f687b] mb-4">
                        What You'll Get:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">✅ 7 Days of Expert Teaching</li>
                        <li className="flex items-start gap-2">✅ 2 Days of Personal Evaluation</li>
                        <li className="flex items-start gap-2">✅ Final Day: Handwriting Competition 🏆</li>
                        <li className="flex items-start gap-2">✅ Chance to Win Cashback & Gift Hampers 🎁</li>
                        <li className="flex items-start gap-2">✅ Printable Practice Sheets</li>
                        <li className="flex items-start gap-2">✅ Certificate of Completion</li>
                        <li className="flex items-start gap-2">✅ Motivation to Build Confidence</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
