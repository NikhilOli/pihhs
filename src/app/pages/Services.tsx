import React from "react";
import serviceData, { ServiceData } from "@/lib/serviceData";
import ServiceCard from "@/components/ServiceCard";


const Services = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col sm:px-8 mt-6">
        <main className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-100 mb-4">
                Discover Our Handwriting Enrichment Programs
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
                We offer thoughtfully crafted courses to help individuals of all ages refine their handwriting skills, boost confidence, and express creativity on paper.
            </p>
            <div className="imageContent flex gap-12 justify-center md:justify-between items-stretch ">
                {
                    serviceData.map((service: ServiceData, index) => (
                        <ServiceCard
                            key={index}
                            imageUrl={service.imageUrl}
                            title={service.title}
                            description={service.description}
                            />
                    ))
                }
            </div>
        </main>
        </div>
    );
};

export default Services;
