'use client';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const Generating = ({
    className
} : {
    className?:string
}) => {
 
    return (
        <div 
            className={clsx(`
                flex 
                items-center 
                h-12
                px-6
                bg-bg-darker
                bg-opacity-80
                rounded-3xl
                text-base
            `,
                className
            )}
        >
            <FontAwesomeIcon 
                icon={faSpinner} 
                size="lg"
                className="pr-2.5 text-primary" 
            />
            <span className="font-semibold">
                AI is generating
            </span>
        </div>
    ); 
}

export default Generating;