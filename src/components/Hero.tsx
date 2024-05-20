'use client';

import Section from '@/components/Seciton';
import Button from './Button';

const Hero = () => {
    return (
        <Section
            id="Hero"
            className="pt-[12rem] -mt-[5.25]"
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
                        mb-16 md:mb-20 lg:mb-24

                        flex
                        flex-col
                        items-center
                    "
                >
                    <h1 className="h1 mb-6">
                        Explore the Possibilities of AI Chatting with 
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
                        Unleash the power pf AI within Brainwave. Upgrade your Productivity with Brainwave, the open AI chat app.( for no brainers :&gt; )
                    </p>
                    <Button white href='#pricing'>
                        Get Started
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Hero;