'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { disablePageScroll, enablePageScroll} from 'scroll-lock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import useLocationHash from '@/hooks/useLocationHash';
import { navigation } from '@/constants';
import Button from "@/components/Button";
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const hash = useLocationHash();
    
    const toggleMenu = () => {
        if(openMenu){
            setOpenMenu(false);
            enablePageScroll();
        }else{
            setOpenMenu(true);
            disablePageScroll();
        }
    }

    const handleClick = () => {
        if(!openMenu) return;

        setOpenMenu(false);
        enablePageScroll();
    }

    return(
        <div
            className={clsx(`
                fixed 
                top-0
                left-0
                h-20
                z-50 
                w-full
                lg:backdrop-blur-sm
                border-b
                border-bg-darker
                mb-2.5
                
                flex
                items-center
            `,
            openMenu ? "bg-bg-darker" : "bg-bg-dark bg-opacity-80 backdrop-blur-sm"
            )}
        >
          
            <div
                className="
                    flex 
                    items-center
                    justify-between
                    w-full
                    
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
                        z-30
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
                    className={clsx(`
                        fixed
                        top-20
                        left-0
                        right-0
                        bottom-0
                        bg-bg-darker
                        lg:static
                        lg:flex
                        lg:mx-auto
                        lg:bg-transparent
                    `,
                        openMenu ? 'flex' : 'hidden'
                    )}
                >
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            justify-center
                            w-full
                            m-auto
                            lg:flex-row
                        "
                    >
                        {navigation.map(item => (
                            <Link 
                                key={item.id} 
                                href={item.url}
                                onClick={handleClick}
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

                    <HamburgerMenu />
                
                </nav>

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


            <Button
                    onClick={toggleMenu}
                    className="mr-8 lg:hidden"
                >
                    <FontAwesomeIcon icon={openMenu ? faX : faBars} size='xl' />
            </Button>
        </div>
    )
}

export default Header;