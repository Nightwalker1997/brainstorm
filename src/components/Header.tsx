'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return(
        <div
            className="
                static 
                top-0 
                z-50 
                w-full
                bg-bg-dark
                backdrop-blur-sm
                border-b
                border-bg-darker

                flex
                items-center
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
            </div>
     
        </div>
    )
}

export default Header;