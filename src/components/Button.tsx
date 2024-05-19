'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type ButtonProps = {
    className: string;
    href: string;
    onClick: () => void;
    children: ReactNode;
}

const Button:FC<ButtonProps> = ({
    className,
    href,
    onClick,
    children
}) => {
    const classes = clsx();

    const spanClasses = clsx();

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
        <Link href={href} className={classes}>
            <span className={spanClasses}>
                {children}
            </span>
        </Link>
    )

    return href ? renderLink() : renderButton();
}

export default Button;