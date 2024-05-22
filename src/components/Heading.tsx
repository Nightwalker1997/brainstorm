'use clinet';

import clsx from "clsx";
import { Children } from "react";

const Heading = ({
    title,
    className,
    text,
    tag
}:{
    title?: string,
    className?: string,
    text?: string,
    tag?: string
}) => {
    return (
        <div
            className={clsx(`
                max-w-[50rem]
                mx-auto
                mb-12 lg:mb-20
                
            `, className)}
        >
            {tag && 
                <Tagline className="justify-center">
                    {tag}
                </Tagline>
            }
            {title && 
                <h2 className="h2 text-center">
                    {title}
                </h2>  
            }
            {text && <p className="body-2 mt-4 text-tx-base">{text}</p>}
        </div>
    )
}

export default Heading;


export const Tagline = ({ 
    children, 
    className 
}:{ 
    children:React.ReactNode,
    className?: string
}) => {
    return(
        <div 
            className={clsx(`
                tagline 
                flex
                items-center
                md:text-center

            `, className)}
        >
            [ 
            <div className="m-3 text-tx-light">
                {children}
            </div>
            ]
        </div>
    )
}