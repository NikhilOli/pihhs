import { ServiceData } from "@/lib/serviceData";
import Image from "next/image";
import React from "react";

const ServiceCard: React.FC<ServiceData> = ({ title, imageUrl, description }) => {
    return (
        <div className="imageContainer min-h-[480px] flex flex-col gap-4 mt-6 w-full sm:w-[45%] md:w-[30%] lg:w-1/4 justify-center items-center h-full text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
                className="border-black border-2 rounded-md shadow-md cursor-pointer"
                alt="service"
                src={imageUrl}
                width={226}
                height={301}
            />
            <h2 className="text-2xl font-semibold text-tertiary-100 mt-4">
                {title}
            </h2>
            <p className="text-gray-600 line-clamp-4">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
