'use clinet';

import clsx from "clsx";

const Heading = ({
    title,
    className,
    text
}:{
    title?: string,
    className?: string,
    text?: string
}) => {
    return (
        <div
            className={clsx(`
                max-w-[50rem]
                mx-auto
                mb-12 lg:mb-20
            `, className)}
        >
            {title && 
                <h2 className="h2">
                    {title}
                </h2>  
            }
            {text && <p className="body-2 mt-4 text-tx-base">{text}</p>}
        </div>
    )
}

export default Heading;