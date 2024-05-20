'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type ButtonProps = {
    children:   ReactNode;
    className?: string;
    href?:      string;
    onClick?:   () => void;
    white?: boolean;
}

const Button:FC<ButtonProps> = ({
    className,
    href,
    white,
    onClick,
    children
}) => {
    const classes = clsx(`
        button
        relative
        infline-flex
        flex
        items-center
        justify-center
        
        px-4 py-1
        h-11
        w-fit
        teansition-colors
        
        rounded-b-lg
        rounded-tl-lg
        rounded-tr-3xl
    `,
    white 
    ?  `
        bg-tx-light
        text-bg-dark
        border-2
        border-bg-darkest
        hover:text-bg-darkest
        hover:bg-tx-dark
    ` 
    :   `
        hover:text-tx-darkest
        border-none
        bg-bg-dark
        after:content-['']
        after:absolute
        after:h-[107%]
        after:w-[104%]
        after:bg-gradient-to-br
        after:from-quaternary 
        after:to-tertiary
        after:z-[-1]
        after:border-none
        after:rounded-b-lg
        after:rounded-tl-lg
        after:rounded-tr-3xl

        lg:hover:z-1
        lg:hover:text-tx-lightest
    `,
    className);

    const spanClasses = clsx(`
        relative
        z-10
    `);

    const renderButton = () => (
        <button
            onClick={onClick}
            className={classes}
        >
            <span className={spanClasses}>
                {children}
            </span>
        </button>
    );

    const renderLink = () => (
        <Link href={href || ''} className={classes}>
            <span className={spanClasses}>
                {children}
            </span>
        </Link>
    )

    return href ? renderLink() : renderButton();
}

export default Button;