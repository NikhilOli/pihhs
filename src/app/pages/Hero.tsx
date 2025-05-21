import Image from 'next/image';
import React from 'react';
import heroImg from '../../../public/heroImg.jpg';
import { Button } from '@/ui/shadcn/button';
import { Link, LockIcon, Scale, Scaling } from 'lucide-react';

const Hero = () => {
    return (
        <div className="border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-10 gap-10">
            {/* Left Content */}
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-primary-500">Welcome to pIHHs</h1>
                <p className="mt-4 text-lg text-primary-100">
                    Your one-stop solution for all your needs.
                </p>
                <Button className="mt-6 text-white rounded-full text-base outline-none border-none bg-secondary-100 border px-[25px] py-2 transition-all hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
                    Get Started
                </Button>
                <div className="iconWithInfo mt-6 flex">
                    <div className='flex items-center gap-2 w-40 py-2 justify-between gap-x-4'>
                        <LockIcon size={30} />
                        <span className='text-primary-100 text-sm font-medium'>Speed and Security</span>
                    </div>
                    <div className='flex items-center gap-2 w-40 py-2 justify-between gap-x-4'>
                        <Scaling size={30} />
                        <span className='text-primary-100 text-sm font-medium'>Flexibility & Scalability</span>
                    </div>
                    <div className='flex items-center gap-2 w-40 py-2 justify-between gap-x-4'>
                        <Link size={30} />
                        <span className='text-primary-100 text-sm font-medium'>Better Collaboration</span>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-1/2">
            <Image
                src={heroImg}
                alt="billboard"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
            />
            </div>
        </div>
        </div>
    );
};

export default Hero;
