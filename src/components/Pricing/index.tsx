'use client'

import Image from 'next/image';
import Link from 'next/link';
import Section from "@/components/Seciton";
import Heading from '@/components/Heading';
import PricingList from './PricingList';
import { LeftLine, RightLine } from './PricingLines';

const Pricing = () => {
    return (
        <Section
            id='pricing'
            crosses
            customPadding
            className='overflow-hidden z-10 bg-gray-700/80'
        >   
            <div 
                className="
                    container 
                    relative 
                    z-2 
                    lg:flex lg:flex-col 
                    pt-12
                "
            >
                <div className="relative flex justify-center mb-14">
                    <Image
                        src="/static/pricing/4-small.png"
                        height={255}
                        width={255}
                        alt=""
                        className="relative z-1"
                    />
                </div>
                    
                <Heading 
                    tag="Get started with Brainwave"
                    title="Pay once, use forever"
                />
                <div className="realtive">
                    <RightLine />
                    <PricingList />
                    <LeftLine />
                </div>
                <div className='flex justify-center items-center mt-10 uppercase'>
                    <Link href='/' className="text-xs font-code font-bold hover:underline">
                        See the full details
                    </Link>
                </div>
            </div>

            <div className='h-12' />
        </Section>
    )
}

export default Pricing;