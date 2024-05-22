'use client';

import Section from "@/components/Seciton";
import Heading, { Tagline } from "../Heading";
import { roadmap } from "@/constants";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

const RoadMap = () => {
  return (
        <Section
                id='roadmap'
                crosses
                customPadding
                className='z-10 bg-gray-700/85 overflow-hidden'
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
                    <Heading 
                        tag="Ready to get started"
                        title="What we're working on"
                    />

                    <div 
                        className="
                            relative 
                            grid gap-6 
                            md:grid-cols-2 md:gap-4 
                            md:pb-24
                        "
                    >
                        {roadmap.map(item => {
                            const status = item.status === "done" ? "Done" : "In progress";
                            return(
                                <div 
                                    key={item.id}
                                    className={`
                                        md:flex 
                                        even:md:translate-y-[7rem] 
                                        p-0.25 
                                        rounded-[2.5rem] 
                                        ${item.colorful 
                                            ? 'bg-conic-gradient' 
                                            : 'bg-bg-dark'
                                        }
                                    `}
                                >
                                    <div 
                                        className="
                                            relative 
                                            p-8 
                                            bg-bg-base 
                                            rounded-[2.5rem] 
                                            overflow-hidden 
                                            xl:p-8
                                        "
                                    >
                                        <div 
                                            className="
                                                absolute 
                                                top-0 left-0 right-0 bottom-0 
                                                max-w-full
                                            "
                                        >
                                            <Image 
                                                src="/static/roadmap/grid.png"
                                                height={550}
                                                width={550}
                                                alt="Grid"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="realtive z-2">
                                            <div 
                                                className=" 
                                                    flex items-center justify-between 
                                                    mb-8 md:mb-12
                                                "
                                            >
                                                
                                                <Tagline>
                                                    {item.date}
                                                </Tagline>
                                                
                                                <div 
                                                    className="
                                                        flex items-center 
                                                        px-4 py-1 
                                                        bg-tx-lightest text-bg-darkest 
                                                        rounded
                                                    "
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={item.status === 'done' ? faCheckCircle : faSpinner}
                                                        size="lg"
                                                        className="mr-2.5"
                                                    />
                                                    <div className="tagline">
                                                        {status}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-10 -my-10 -mx-15">
                                                <Image
                                                    src={item.imageUrl}
                                                    width={630}
                                                    height={720}
                                                    alt={item.title}
                                                    className="w-full"
                                                />
                                            </div>
                                            <h4 className="h4 mb-4">
                                                {item.title}
                                            </h4>
                                            <p className="body-2 text-tx-darker">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="h-12" />
        </Section>
    )
}

export default RoadMap
