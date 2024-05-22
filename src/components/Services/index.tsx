'use client';

import Section from "@/components/Seciton";
import Heading from "@/components/Heading";
import Image from "next/image";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Generating from "../Generating";
import PhotoChatMessage from './PhotoChatMessage';
import VideoChatMessage from "./VideoChatMessage";
import VideoBar from "./VideoBar";


const Services = () => {
    return (
        <Section
            id='how-to-use'
            crosses
            customPadding
            className='z-10 bg-gray-700/85'
        >   
            <div className="container relative z-2 lg:flex lg:flex-col pt-12">
                <Heading 
                    title="Genrative AI made for creators."
                    text="Brainwave unlocks potential of AI-powered applications." 
                    className="
                        text-center 
                        md:max-w-md 
                        lg:max-w-2xl
                        [text-shadow:_4px_4px_2px_rgb(72_12_128_/_40%)]
                    " 
                />

                <div className="relative">
                    <div 
                        className="
                            relative 
                            z-1 
                            flex items-center 
                            h-[39rem] mb-5 p-8 lg:p-20
                            border border-bg-dark 
                            rounded-3xl 
                            overflow-hidden 
                            xl:h-[46rem]
                        "
                    >
                        <div 
                            className="
                                absolute 
                                top-0 left-0 right-0
                                w-full h-full 
                                pointer-events-none 
                                xl:w-auto
                            "
                        >
                            <Image
                                src="/static/howtouse/robotic-wallpapers.jpg"
                                height={9900}
                                width={2000}
                                alt=""
                                className="
                                    w-full h-full 
                                    object-cover md:object-right
                                "
                            />
                        </div>

                        <div 
                            className="
                                relatve 
                                z-1 
                                max-w-[24rem]
                                p-8
                                rounded-xl 
                                ml-auto
                                [text-shadow:_0px_0px_12px_rgb(0_0_0_/_100%)]
                                bg-gray-500/45
                                text-tx-lightest
                            "
                        >
                            <h4 className="h4 mb-4">
                                Smatest AI
                            </h4>
                            <p className="body-2 mb-12">
                                Brain unlocks the potential of AI-powered applications
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.map((item, index) => (
                                    <li 
                                        key={index} 
                                        className="
                                            flex items-start 
                                            py-4 
                                            border-t border-bg-dark
                                        "
                                    >
                                        <FontAwesomeIcon 
                                            icon={faCheckCircle} 
                                            size="xl"
                                            className="
                                                text-primary
                                                bg-tx-lightest
                                                rounded-full
                                            "
                                        />
                                        <p className="ml-4">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Generating 
                            className="
                                absolute 
                                left-4
                                right-4
                                bottom-5
                                
                                md:left-1/2
                                md:right-auto
                                md:bottom-8
                                sm:w-full md:w-[32rem] lg:w-[48rem]
                                md:-translate-x-1/2
                                border-[1px]
                                border-bg-light
                            "
                        />
                    </div>
                
                    <div 
                        className="
                            relative 
                            z-1 
                            grid gap-5 lg:grid-cols-2
                        "
                    >
                        <div 
                            className="
                                relative 
                                min-h-[39rem] 
                                border border-bg-lightest 
                                rounded-3xl 
                                overflow-hidden
                            "
                        > 
                            <div 
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/static/howtouse/robotic-wallpapers-2.jpg"
                                    height={9900}
                                    width={2000}
                                    alt="ImageCover"
                                    className="
                                        w-full h-full 
                                        object-cover
                                    "
                                />
                            </div>

                            <div 
                                className="
                                    absolute 
                                    inset-0 
                                    flex flex-col justify-end 
                                    px-8 pb-4 pt-8 
                                    bg-gradient-to-b from-gray-900/10 to-gray-900/90
                                "
                            >
                                <h4 className="h4 mb-4">
                                    Photo Editing
                                </h4>
                                <p className="body-2 mb-12">
                                    Automaticallly enhance your Photos
                                    usign our AI app&apos;s photo editing feature. Try it now!
                                </p>
                            </div>

                            <PhotoChatMessage />
                        </div>

                        <div 
                            className="
                                p-4 
                                bg-gray-900/75
                                rounded-2xl 
                                overflow-hidden 
                                lg:min-h-[46rem]
                            "
                        >
                            <div 
                                className="py-12 px-4 xl:px-8"
                            >
                                <h4 className="h4 mb-4">
                                    video genration
                                </h4>
                                <p className="body-2 mb-8 text-tx-base">
                                    The world&apos;s most powerful AI photo and video art genration engine. what will you create?
                                </p>

                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map((icon, index) => (
                                        <li 
                                            key={index}
                                            className={`
                                                flex items-center justify-center
                                                ${index === 2 
                                                    ? 'w-12 h-12 p-0.25 bg-conic-gradient md:w-16 md:h-16' 
                                                    : 'flex w-10 h-10 bg-bg-darkest md:w-15 md:h-15'
                                                }
                                                rounded-2xl
                                            `}
                                        >
                                            <div className={`${index === 2 ? "flex items-center justify-center w-full h-full bg-bg-dark rounded-2xl" : ""}`}>
                                                <FontAwesomeIcon icon={icon} size="2xl"/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div 
                                className="
                                    relative
                                    h-[20rem] md:h-[25rem]
                                    bg-bg-darkest
                                    rounded-xl
                                    overflow-hidden

                                "
                            >
                                <Image
                                    src="/static/howtouse/robotic-wallpapers-3.jpg"
                                    height={9900}
                                    width={2000}
                                    alt="ImageCover"
                                    className="
                                        w-full h-full 
                                        object-cover
                                    "
                                />

                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="h-12"/>
        </Section>
    )
}

export default Services;