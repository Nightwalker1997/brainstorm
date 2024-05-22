'use client';

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoBar = () => {
    return (
        <div 
            className="
                absolute 
                left-0 bottom-0 
                w-full 
                flex items-center 
                p-6 gap-4
            "
        >
       
            <FontAwesomeIcon 
                icon={faPlay} 
                size="lg" 
            />
            
            <div className="flex-1 flex items-center h-[0.4rem] bg-gray-200 rounded-full">
                <div className="w-1/2 h-[0.30rem] bg-red-600 rounded-l-full ml-0.5" />            
            </div>
        </div>
    );
};

export default VideoBar