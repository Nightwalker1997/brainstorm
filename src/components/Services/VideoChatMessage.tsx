'use client';

import Image from "next/image";
import ChatBubbleWing from "./ChatBubbleWing";

const VideoChatMessage = () => {
    return (
        <div 
            className="
                absolute 
                top-8 left-15 
                w-full max-w-[14rem] md:max-w-[17.5rem]
                pt-2.5 pr-2.5 pb-7 pl-5 
                bg-bg-base 
                rounded-t-xl rounded-br-xl 
                font-code text-base
            "
        >
            Video generated!
            <div 
                className="
                    absolute 
                    left-5 -bottom-5
                    flex items-center justify-center 
                    w-9 h-9 
                    bg-neutral 
                    rounded-xl
                "
            >
                <Image
                    src="/icons/brain.png"
                    width={26}
                    height={26}
                    alt="Brainwave"
                />
            </div>
            
            <p 
                className="
                    tagline 
                    absolute 
                    right-1.5 bottom-1.5 
                    text-[0.5rem] font-light
                    text-tx-light 
                    uppercase
                "
            >
                just now
            </p>

            <ChatBubbleWing
                className="absolute right-full bottom-0 -scale-x-100"
                pathClassName="fill-n-6"
            />
        </div>
    );
};

export default VideoChatMessage;