'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/constants';
import { usePathname, useParams, useSearchParams,useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useLocationHash from '@/hooks/useLocationHash';
import Button from './Button';

const Header = () => {

    const hash = useLocationHash();
    

    return(
        <div
            className="
                static 
                top-0
                left-0
                z-50 
                w-full
                bg-bg-dark
                backdrop-blur-sm
                border-b
                border-bg-darker

                flex
                items-center
                justify-between
            "
        >
          
            <div
                className="
                    flex 
                    items-center 
                    px-5 
                    lg:px-7.5 
                    xl:px-10 
                    max-lg:py-4
                "
            >
                <Link
                    href="#"
                    className="
                        flex 
                        items-center 
                    "
                >
                    <Image 
                        src={"/icons/brain.png"}
                        height="40"
                        width="40"
                        alt='Brainwave'
                    />
                    <span 
                        className="
                            font-bold
                            text-2xl
                            px-2.5
                        "
                    >
                        Brainwave
                    </span>
                </Link>

                <nav
                    className="
                        hidden
                        fixed
                        top-5
                        left-0
                        right-0
                        bottom-0
                        bg-bg-darker
                        lg:static
                        lg:flex
                        lg:mx-auto
                        lg:bg-transparent

                    "
                >
                    <div
                        className="
                            relative
                            z-2
                            flex
                            flex-col
                            items-center
                            justify-center
                            m-auto
                            lg:flex-row
                        "
                    >
                        {navigation.map(item => (
                            <Link 
                                key={item.id} 
                                href={item.url}
                                className={clsx(`
                                    block
                                    relative
                                    font-code
                                    text-2xl
                                    uppercase
                                    text-tx-light
                                    transition-colors
                                    hover:text-primary
                                    px-6 py-6
                                    md:py-8
                                    lg:-mr-0.5
                                    lg:text-xs
                                    lg:font-semibold
                                    lg:leading-5
                                    lg:hover:text-tx-lighter
                                    xl:px-12
                                `,
                                item.onlyMobile && "lg:hidden",
                                item.url === hash ? "z-2 lg:text-tx-lightest" : "lg:text-tx-darkest"  
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            <div 
                className="
                    hidden 
                    lg:flex 
                    lg:items-center
                    lg:mr-12
                "
            >
                <Link
                    href="#signup"
                    className="
                        button    
                        hidden
                        mr-8
                        text-tx-darkest
                        transition-colors
                        hover:text-tx-lighter
                        lg:block
                    "
                >
                    New account
                </Link>
                <Button
                    href="#login"
                    className="hidden lg:flex"
                >
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Header;