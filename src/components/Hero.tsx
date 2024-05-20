'use client';

import Image from 'next/image';

import Section from '@/components/Seciton';
import Button from './Button';

const Hero = () => {
    return (
        <Section
            id="Hero"
            className="pt-[12rem] -mt-[5rem]"
            customPadding
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className="container relative">
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
                    <h1 className="h1 mb-6 [text-shadow:_1px_2px_4px_rgb(234_124_52_/_40%)]">
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
                        the open AI chat app.( :&gt; )
                    </p>
                    <Button white href='#pricing'>
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
                            bg-gradient-to-r
                            from-tertiary
                            to-quaternary
                        "
                    >
                        <div 
                            className="
                                relative 
                                bg-bg-base 
                                rounded-3xl
                                overflow-hidden
                            "
                        >
                            <div 
                                className="
                                    rounded-b-3xl 
                                    overflow-hidden 
                                    
                                "
                            >
                                <Image 
                                    src={"/static/hero-background.jpg"}
                                    alt='hero'
                                    width={1024}
                                    height={490}
                                    className="w-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* <div 
                        className="
                            absolute 
                            top-0
                            overflow-hidden
                        "
                    >
                        <Image 
                            src={"/static/hero-background.jpg"}
                            alt='hero'
                            
                            loading="lazy"

                        />
                    </div> */}
                        <div className="flex fixed top-0 right-0 bottom-0 left-0 z-[-1]">
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
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero;