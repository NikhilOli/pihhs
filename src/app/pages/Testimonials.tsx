'use client';

import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

    const testimonialData = [
    {
        id: 1,
        quote: "My handwriting used to be a mess, but after just a few weeks of following their personalized tips, I saw a huge improvement. My notes finally look neat!",
        customerName: "Aarav Sharma",
        image: "https://images.unsplash.com/photo-1727798450000-fd0e6e81c6b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbiUyMGluZGlhbiUyMHBmcHxlbnwwfHwwfHx8MA%3D%3D",
        location: "Delhi, India"
    },
    {
        id: 2,
        quote: "As a medical student, good handwriting matters during exams. Their techniques really helped me write faster and cleaner under pressure.",
        customerName: "Nisha Bhandari",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        location: "Kathmandu, Nepal"
    },
    {
        id: 3,
        quote: "I joined just to improve my signature, but ended up transforming my whole handwriting. Super helpful and easy to follow!",
        customerName: "Ravi Mehta",
        image: "https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcnNvbiUyMGluZGlhbiUyMHBmcHxlbnwwfHwwfHx8MA%3D%3D",
        location: "Bangalore, India"
    },
    {
        id: 4,
        quote: "My daughter’s handwriting has improved so much after joining the program. Her teachers even noticed the difference.",
        customerName: "Sujata Verma",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        location: "Pokhara, Nepal"
    },
    {
        id: 5,
        quote: "Even as an adult, I found the lessons super engaging. It’s never too late to improve your handwriting — I actually enjoy writing now.",
        customerName: "Liam Carter",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        location: "Melbourne, Australia"
    },
    {
        id: 6,
        quote:
        "Improving handwriting can change the way people perceive you — neater writing brings more confidence. I’ve seen it firsthand in my students.",
        customerName: "Nikhil Oli",
        image:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        location: "Dhangadhi, Nepal",
    },
    ];


const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
    };

    const current = testimonialData[currentIndex];

    return (
        <section className="bg-[#f7f7f7] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#060606] mb-2">
            What Our Clients Say
            </h2>
            <p className="text-[#5f687b] mb-10 text-lg">
            Real stories from students, professionals, and parents who transformed their handwriting.
            </p>

            <div className="relative bg-white rounded-lg shadow-md p-8 md:p-12 transition-all duration-300 min-h-[400px]">
            {/* Left Arrow */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                onClick={showPrev}
                className="p-2 bg-white border border-gray-300 rounded-full hover:bg-[#5f687b] hover:text-white"
                >
                <FaChevronLeft />
                </button>
            </div>

            {/* Right Arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                onClick={showNext}
                className="p-2 bg-white border border-gray-300 rounded-full hover:bg-[#5f687b] hover:text-white"
                >
                <FaChevronRight />
                </button>
            </div>

            {/* Testimonial Content */}
            <div key={currentIndex} className="flex flex-col items-center transition-opacity duration-500 ease-in-out opacity-100">
                <img
                src={current.image}
                alt={current.customerName}
                className="w-20 h-20 rounded-full object-cover mb-6"
                onError={(e) => {
                    (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80';
                }}
                />

                <FaQuoteLeft className="text-[#10bc69] text-3xl mb-4" />

                <p className="text-[#5f687b] italic mb-6 max-w-xl">{current.quote}</p>

                <div>
                <p className="text-[#060606] font-semibold">{current.customerName}</p>
                <p className="text-sm text-[#10bc69]">{current.location}</p>
                </div>
            </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
            {testimonialData.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-6 rounded-full transition-all duration-200 ${
                    currentIndex === index ? 'bg-[#10bc69]' : 'bg-gray-300'
                }`}
                ></button>
            ))}
            </div>
        </div>
        </section>
    );
};

export default TestimonialsSection;
