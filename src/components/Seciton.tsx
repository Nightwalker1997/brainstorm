'use client';

import { FC, ReactNode } from 'react'; 
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type SectionProps = {
    className?: string;
    id?: string;
    crosses?: boolean;
    customPadding?: boolean;
    crossesOffset?: string;
    children: ReactNode;

}

const Section:FC<SectionProps> = ({
    className,
    id,
    crosses,
    customPadding,
    crossesOffset,
    children
}) => {
    return(

        <div
            id={id}
            className={clsx(`
                relative
            `, 
                customPadding || `py-10 lg:py-16 xl:py-20 ,
                ${crosses ? "lg:py-32 xl:py-40" : ''}`,
                className
            )}
        >
            {children}

            <div 
                className="
                    hidden
                    absolute
                    top-0
                    w-0.25
                    bg-gray-50/35

                    pointer-events-none
                    md:block
                    lg:right-7.5
                    xl:right-10 
                    h-full 
                    right-5
                    
                " 
            />
            <div 
                className="
                    hidden
                    absolute
                    top-0
                    w-0.25
                    bg-gray-50/35

                    pointer-events-none
                    md:block
                    lg:left-7.5
                    xl:left-10 
                    h-full 
                    left-5
                    
                " 
            />

            {crosses && (
                <div 
                    className={clsx(`
                        hidden
                        absolute
                        top-0
                        left-7.5
                        right-7.5
                        h-0.25
                        bg-gray-50/35
                        pointer-events-none
                        md:block
                        xl:left-10
                        xl:right-10
                    `,
                        crossesOffset
                    )}
                />
            )}
        </div>
    )
}

export default Section;