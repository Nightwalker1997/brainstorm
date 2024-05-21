'use client';

import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import Rings from './Rings';

const BackgroundCircles = ({ 
    parallaxRef
}:{
    parallaxRef: any
}) => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
        setMounted(true);
    }, []);
  
    return (
        <div 
            className="
                absolute 
                top-3/5
                left-1/2 
                w-[78rem] 
                aspect-square 
                border 
                border-n-2/5 
                rounded-full 
                -translate-x-1/2 
               
            "
        >
    
        <Rings />
  
        {/* Moving background colored circle balls */}
        <MouseParallax 
            strength={0.27} 
            parallaxContainerRef={parallaxRef}
        >
            <div 
                className="
                    absolute
                    bottom-1/2 
                    left-1/2 
                    w-0.25 
                    h-1/2
                    z-50
                    origin-bottom 
                    rotate-[45deg]
                "
            >
                <div
                    className={`
                        w-2 h-2 
                        bg-gradient-to-b from-[#DD734F] to-[#1A1A32] 
                        rounded-full 
                        transition-transform duration-500 ease-out 
                        ${mounted 
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
  
            <div 
                className="
                    absolute 
                    bottom-1/2 left-1/2 
                    w-0.25 h-1/2 
                    origin-bottom -rotate-[56deg]
                "
            >
                <div
                    className={`
                        w-4 h-4 
                        -ml-1 -mt-32 
                        bg-gradient-to-b from-[#DD734F] to-[#1A1A32] 
                        rounded-full 
                        transition-transform duration-500 ease-out 
                        ${mounted 
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
    
            <div 
                className="
                    absolute 
                    bottom-1/2 left-1/2 
                    w-0.25 h-1/2 
                    origin-bottom rotate-[54deg]
                "
            >
                <div
                    className={`
                        hidden xl:block
                        w-4 h-4 
                        -ml-1 mt-[12.9rem] 
                        bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] 
                        rounded-full 
                        transit transition-transform duration-500 ease-out 
                        ${mounted 
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
    
            <div 
                className="
                    absolute 
                    bottom-1/2 
                    left-1/2 
                    w-0.25 
                    h-1/2 
                    origin-bottom 
                    -rotate-[65deg]
                "
            >
                <div
                    className={`
                        w-3 h-3 
                        -ml-1.5 mt-52 
                        bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] 
                        rounded-full 
                        transition-transform duration-500 ease-out 
                        ${mounted 
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
    
            <div 
                className="
                    absolute
                    bottom-1/2 
                    left-1/2 
                    w-0.25 
                    h-1/2 
                    origin-bottom 
                    -rotate-[85deg]
                "
            >
                <div
                    className={`
                        w-6 h-6 
                        -ml-3 -mt-3 
                        bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] 
                        rounded-full 
                        transition-transform duration-500 ease-out 
                        ${mounted 
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
    
            <div 
                className="
                    absolute 
                    bottom-1/2 left-1/2 
                    w-0.25 h-1/2 
                    origin-bottom rotate-[60deg]
                "
            >
                <div
                    className={`
                        w-6 h-6 
                        -ml-3 -mt-3 
                        bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] 
                        rounded-full 
                        transition-transform duration-500 ease-out 
                        ${mounted
                            ? "translate-y-0 opacity-100" 
                            : "translate-y-10 opacity-0"
                        }
                    `}
                />
            </div>
        </MouseParallax>
      </div>
    );
};

export default BackgroundCircles;