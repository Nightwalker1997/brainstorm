'use client';

import Section from '@/components/Seciton';
import { socials } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
    return (
        <Section
            id='roadmap'
            crosses
            customPadding
            className='z-10 bg-gray-700/90 py-8'
        >   
            <div    
                className="
                    container 
                    flex
                    sm:justify-between
                    justify-cneter items-center 
                    gap-10 max-sm:flex-col
                "
            >
                <p className="caption text-tx-light lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map(item => (
                        
                        <Link 
                            href={item.url}
                            target='_blank'
                            key={item.id}
                            className="
                                flex items-center justify-center 
                                w-10 h-10 
                                bg-bg-darker 
                                rounded-full 
                                transition-colors 
                                hover:bg-bg-base
                            "
                        >
                            <FontAwesomeIcon icon={item.iconUrl} />
                        </Link>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Footer
