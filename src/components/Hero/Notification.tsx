'use client';

import clsx from "clsx";
import {notificationImages} from '@/constants';
import Image from "next/image";

const Notification = ({
    className,
    title
}:{
    className?: string,
    title?: string
}) => {
    return (
        <div
            className={clsx(`
                hidden 
                absolute 
                -right-16 
                top-48
                shadow-sm
                shadow-tx-base
                ronded-2xl
                lg:flex
                lg:items-center
                lg:justify-center
                items-center
                p-4 pr-6
                bg-bg-lighter
                bg-opacity-50
                backdrop-blur-md
                border
                border-tx-darkest
                rounded-2xl
                gap-5

            `)}
        >
            <span 
                className="absolute -top-1 -right-1 animate-ping h-4 w-4 rounded-full bg-red-400 opacity-75"
            /> 
            <Image
                src={'/static/notification/image-1.png'}
                width={64}
                height={64}
                alt="Notification Image"
                className="rounded-md"
            />
           <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">
                    {title}
                </h6>
                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((item, index) => (
                            <li 
                                key={index}
                                className="
                                    h-6 w-6 
                                    border-2 border-bg-light
                                    rounded-full
                                    overflow-hidden
                                    -right-1
                                "
                            >
                                <Image
                                    src={item}
                                    height={20}
                                    width={20}
                                    alt="ProfileImage"
                                    className="w-full rounded-full"
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="font-light text-xs text-tx-dark">
                        1m ago
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Notification;
