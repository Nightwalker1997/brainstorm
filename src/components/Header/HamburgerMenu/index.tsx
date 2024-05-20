'use client';

import Rings from "./Rings";
import SideLines from "./SideLine";
import BackgroundCircles from "./BackgroundCircles";
import Image from 'next/image';


const HamburgerMenu = () => {
    return (
      <div 
            className="
                absolute
                inset-0 
                pointer-events-none 
                lg:hidden
            "
        >
            <div className="absolute inset-0 opacity-[.03]">
                <Image
                    src={'/static/background.jpg'}
                    fill
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div> 
    
            <Rings />
    
            <SideLines />
    
            <BackgroundCircles />
        </div>
    );
};

export default HamburgerMenu;