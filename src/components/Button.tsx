'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type ButtonProps = {
    children:   ReactNode;
    className?: string;
    href?:      string;
    onClick?:   () => void;
}

const Button:FC<ButtonProps> = ({
    className,
    href,
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
        bg-bg-dark
        px-4 py-1
        h-11
        teansition-colors
        hover:text-tx-darkest
        
        border-none
        rounded-b-lg
        rounded-tl-lg
        rounded-tr-3xl

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

        hover:z-1
        hover:text-tx-lightest
        hover:shadow
    `,
    className);

    const spanClasses = clsx(`
        relative
        z-10
    `);

    const renderButton = () => (
        <button
            type='button'
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