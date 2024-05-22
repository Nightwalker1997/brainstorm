'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ScrollParallax } from 'react-just-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { heroIcons } from '@/constants';
import Section from '@/components/Seciton';
import Generating from '@/components/Generating';
import Button from '@/components/Button';
import BackgroundCircles from './BackgroundCircles';
import Gradient from './Gradient';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';

const Hero = () => {
    const parallaxRef = useRef(null);
    return (
        <Section
            id="Hero"
            className="pt-48"
            crosses
        >
            <div className="container relative" ref={parallaxRef}>
                <div 
                    className="
                        relative 
                        z-1 
                        text-center 
                        mx-auto 
                        max-w-[62rem] 
                        mb-8 md:mb-10 lg:mb-12

                        flex
                        flex-col
                        items-center
                    "
                >
                    <h1 className="h1 mb-6 [text-shadow:_4px_4px_2px_rgb(72_12_128_/_40%)]">
                        Explore the Possibilities of AI Chatting with&nbsp; 
                        <span className="relative inline-block">
                            Brainwave
                            <span 
                                className="
                                    absolute
                                    top-full
                                    left-0
                                    w-full
                                    xl:-mt-2
                                    bg-gradient-to-r
                                    from-primary
                                    to-secondary
                                    h-1
                                    rounded-full
                                    aspect-square
                                "
                            />
                        </span>
                    </h1>
                    <p 
                        className="
                            [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]
                            body-1
                            max-w-3xl
                            mx-auto
                            mb-6
                            text-tx-base
                            lg:bg-8
                        "
                    >
                        Unleash the power pf AI within Brainwave. 
                        Upgrade your Productivity with Brainwave, 
                        the open AI chat app :)
                    </p>
                    <Button 
                        white 
                        href='#pricing' 
                        className="
                            [text-shadow:_4px_4px_2px_rgb(72_12_168_/_30%)]
                            hover:[text-shadow:_2px_2px_1px_rgb(72_12_168_/_25%)]
                        "
                    >
                        Get Started
                    </Button>
                </div>

                <div 
                    className="
                        relative
                        max-w-96
                        mx-auto
                        md:max-w-5xl
                        xl:mb-4
                    "
                >
                    <div 
                        className="
                            relative
                            z-1 
                            p-0.5
                            rounded-3xl 
                            bg-gradient-to-br
                            from-tertiary
                            via-secondary
                            to-quaternary
                        "
                    >
                        <div 
                            className="
                                relative 
                                bg-bg-base 
                                rounded-3xl
                            "
                        >
                            <div 
                                className="
                                    rounded-b-3xl 
                                    relative
                                "
                            >
                                <Image 
                                    src={"/static/hero-background.jpg"}
                                    alt='hero'
                                    width={1024}
                                    height={490}
                                    className="w-full rounded-3xl"
                                    loading="lazy"
                                />
                                
                                <Generating 
                                    className="
                                        absolute 
                                        left-4
                                        right-4
                                        bottom-5
                                        md:left-1/2
                                        md:right-auto
                                        md:bottom-8
                                        md:w-[32rem]
                                        md:-translate-x-1/2
                                    "
                                />

                                <ScrollParallax 
                                    isAbsolutelyPositioned
                                >
                                    <ul 
                                        className="
                                            hidden 
                                            absolute 
                                            -left-32 
                                            bottom-32
                                            h-12
                                            px-1 py-1
                                            bg-bg-base
                                            bg-opacity-40
                                            backdrop-blur
                                            rounded-md
                                            shadow-sm
                                            shadow-tx-base
                                            border
                                            border-bg-lightest
                                            ronded-2xl
                                            lg:flex
                                            lg:items-center
                                            lg:justify-center
                                        "
                                    >
                                        {heroIcons.map((icon, index) => (
                                            <li 
                                                key={index} 
                                                className="
                                                    px-5 py-2 
                                                    flex items-center
                                                "
                                            >
                                                <FontAwesomeIcon 
                                                    icon={icon} 
                                                    size="lg"
                                                    className="cursor-pointer"/>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification 
                                        
                                        title="Code genration"
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                    </div>
                        <Gradient />
                    
                    <div className="inline-flex fixed top-0 right-0 bottom-0 left-0 z-[-1]">
                        <div className="flex shrink-0">
                            <Image
                                src={"/static/wp7865107-robot-ultra-hd-wallpapers.jpg"}
                                alt='heroCoverImage'
                                width={1920}
                                height={1080}
                                quality={10}
                                className="
                                    mx-auto 
                                    min-[1920px]:w-[100vw]
                                    blur-sm
                                "
                            />
                        </div>
                        <BackgroundCircles parallaxRef={parallaxRef} />
                    </div>

                </div>

                <CompanyLogos />
            </div>
        </Section>
    )
}

export default Hero;