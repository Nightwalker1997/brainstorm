'use client';

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Blink from "./Blink";

type CardProps = {
    item:{
        id: string;
        title: string;
        text: string;
        backgroundUrl: string;
        icon: any;
        imageUrl: string;
        light?: boolean;
    }
}

const Card:React.FC<CardProps> = ({
    item
}) => {
    const {
        title,
        text,
        backgroundUrl,
        icon,
        imageUrl,
        light
    } = item;

    return (
        <div 
            className={`
                relative
                p-0.5 
                hover:text-tx-darkest
                md:max-w-96

                infline-flex
                flex
                items-center
                justify-center

                px-4 py-1
                w-fit
                teansition-colors
                rounded-b-lg
                rounded-tl-lg
                rounded-tr-[4rem]

                border-none
                bg-bg-dark
                after:content-['']
                after:absolute
                after:h-[101%]
                after:w-[101%]
                after:bg-gradient-to-br
                after:from-quaternary 
                after:to-tertiary
                after:z-[-1]
                after:border-none
                after:rounded-b-lg
                after:rounded-tl-lg
                after:rounded-tr-[4rem]

                lg:hover:z-1
                lg:hover:text-white
                hover:[text-shadow:_1px_1px_0_rgb(0_0_0_/_30%)]
                
                
            `}
        >
            <div 
                className="
                
                    relative z-2 
                    flex flex-col 
                    min-h-48 p-9 
                    pointer-events-none 
                    
                "
            >
                <h5 className="h5 mb-5 h">
                    {title}
                </h5>
                <p className="body-2 mb-6 text-tx-lighter">
                    {text}
                </p>
                <div className="flex items-center justify-between w-full">
                    
                    <FontAwesomeIcon 
                        icon={icon} 
                        size="xl"
                        className="
                            p-2 
                            rounded-md  
                            bg-opacity-50 
                            w-8 h-8
                            bg-gradient-to-br
                            from-purple-600/50 
                            to-red-400/30
                        "
                    />

                    <div className="flex items-center gap-4">
                        <p
                            className="
                                ml-auto 
                                font-code 
                                text-xs 
                                font-bold 
                                text-tx-lightest 
                                uppercase 
                                tracking-wider
                            "
                        >
                            Explore more
                        </p>
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                        />
                    </div>  
                </div>
            </div>

            { light && <Blink />}
            
            <div
                className="absolute inset-0.5 "
                style={{clipPath: "url(#features)"}}
            >
                <div
                    className="
                        absolute 
                        inset-0 
                        opacity-0 
                        transit 
                        hover:opacity-20
                    "
                >
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            width={380}
                            height={362}
                            alt={title}
                            className="
                                w-full h-full 
                                object-cover
                                rounded-b-lg
                                rounded-tl-lg
                                rounded-tr-[4rem]
                            "
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
