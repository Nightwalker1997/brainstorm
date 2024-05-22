'use client';

import { pricing } from "@/constants";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";



const PricingList = () => {
    return (
        <div className="flex gap-4 max-lg:flex-wrap">
            {pricing.map(item => (
                <div
                    key={item.id}
                    className="
                        w-72 max-lg:w-full h-full lg:w-auto 
                        px-6
                        bg-gray-900/80
                        border border-bg-darker 
                        rounded-[2rem]  
                        even:py-14 odd:py-8 odd:my-4
                        [&>h4]:first:text-color-2
                        [&>h4]:even:text-color-1
                        [&>h4]:last:text-color-3

                    "
                >
                    <h4 className="h4 mb-4">
                        {item.title}
                    </h4>
                    <p 
                        className="
                            body-2 
                            min-h-16
                            mb-3
                            text-tx-darker
                        "
                    >
                        {item.description}
                    </p>
                    <div className="flex items-center h-24">
                        {item.price && (
                            <>
                                <div className="h3">$</div>
                                <div className="text-[5.5rem] leading-none font-bold">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>
                    <Button
                        className="w-full mb-6 bg-whtie"
                        href={item.price 
                                ? "/pricing"
                                :  "mailto:gholamreza.fallah2208@gmail.com"
                            }
                        white={!!item.price}
                    >
                        {item.price ? "Get started" : "Contact us"}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li 
                                key={index}
                                className="flex items-start py-5 border-t border-bg-lighter gap-4"
                            >
                                <FontAwesomeIcon 
                                    icon={faCheckCircle} 
                                    size="lg" 
                                    className="text-primary" 
                                />
                                <p className="body-2">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default PricingList;
