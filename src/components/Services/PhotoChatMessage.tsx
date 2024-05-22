'use client';

import ChatBubbleWing from './ChatBubbleWing';

const PhotoChatMessage = () => {
    return (
        <div 
            className="
                absolute 
                top-12 right-12 
                max-w-[17.5rem] lg:max-w-[17.5rem]
                py-6 px-8 
                bg-black/75 
                rounded-t-xl rounded-bl-xl 
                font-code 
                text-base
                lg:top-16 lg:right-[8.75rem]
            "
        >
            Hey Brainwave, enhance this photo

            <ChatBubbleWing 
                className="absolute left-full bottom-0" 
            />
        </div>
    );
};
export default PhotoChatMessage;
  