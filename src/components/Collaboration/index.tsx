'use client';

import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Section from '@/components/Seciton';
import { 
    collabApps, 
    collabContent, 
    collabText 
} from '@/constants'
import {
    LeftCurve,
    RightCurve
} from './Collaboration';

import Button from '@/components/Button';

const Collaboration = () => {
    return (
        <Section
            id=''
            crosses
            customPadding
            className='z-10 bg-gray-700/85'
        >
            <div 
                className="container relative z-2 lg:flex pt-12"
            >
                <div className="max-w-[48rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className='max-w-[22rem] mb-10 md:mb-14'>
                        {collabContent.map(item => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <h6 className="body-2 ml-5">
                                        {item.title}
                                    </h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-tx-lighter">
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    
                    <Button className="xl:mt-[9.5rem] xl:ml-12">
                        TRY IT AGAIN
                    </Button>

                </div>
                <div>
                    <p 
                        className="
                            body-2 
                            my-4
                            md:mb-16 lg:mb-32 lg:mx-auto
                            lg:w-96
                            text-tx-light font-light
                        "
                    >
                        {collabText}
                    </p>

                    <div 
                        className="
                            relative 
                            left-1/2
                            flex mb-12
                            w-96 aspect-square 
                            border border-bg-darker 
                            rounded-full 
                            -translate-x-1/2 
                            scale-75 md:scale-100
                            
                        "
                    >
                        <div
                            className="
                                flex w-60 aspect-square m-auto 
                                border border-bg-darker 
                                rounded-full
                            "
                        >
                            <div 
                                className="
                                    w-24 aspect-square 
                                    m-auto p-0.5 
                                    bg-conic-gradient 
                                    rounded-full
                                "
                            >

                                <div
                                    className="
                                        flex items-center justify-center
                                        w-full h-full 
                                        bg-bg-darker
                                        rounded-full
                                    "
                                >
                                    
                                    <Image 
                                        src="/icons/brain.png"
                                        height={48}
                                        width={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul className=''>
                            {collabApps.map((item, index) => (
                                <li 
                                    key={item.id}
                                    className={`
                                        absolute
                                        top-0
                                        left-1/2 h-1/2
                                        -ml-6
                                        origin-bottom
                                        rotate-${
                                            index * 45 
                                        }
                                    `}    
                                >
                                    <div 
                                        className={`
                                            relative
                                            -top-[1.6rem]
                                            flex
                                            w-14 h-14
                                            bg-bg-dark
                                            border
                                            border-bg-lightest
                                            rounded-xl
                                            p-2
                                            bg-opacity-5
                                        `}
                                    >
                                        <Image
                                            src={item.icon}
                                            height={item.height}
                                            width={item.width}
                                            alt={item.title}
                                            className={`
                                                p-auto
                                                m-auto
                                                -rotate-${
                                                    index * 45 
                                                }
                                            `}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Collaboration;