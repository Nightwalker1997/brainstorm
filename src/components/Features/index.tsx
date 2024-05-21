'use client';

import Section from "@/components/Seciton";
import Heading from "./Heading";
import { benefits } from "@/constants";
import Card from "./Card";


const Features = () => {
    return (
        <Section 
            id="features"
            crosses
            customPadding
            className="z-10 bg-gray-700/75"
        >
            <div className="container relative z-2 pt-12 ">
                <Heading 
                    title="Chat Smarter, Not Harder with Brainwave AI." 
                    className="
                        text-center 
                        md:max-w-md 
                        lg:max-w-2xl
                        [text-shadow:_4px_4px_2px_rgb(72_12_128_/_40%)]
                    " 
                />

                <div 
                    className="flex flex-wrap gap-10 pb-10"
                >
                    {benefits.map(item => <Card item={item} key={item.id} />)}
                </div>

            </div>
        </Section>
    )
}

export default Features;