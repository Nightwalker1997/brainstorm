'use client';

const Gradient = () => {
    return (
        <>
            <div 
                className="
                    relative 
                    z-1 
                    h-6 
                    mx-2.5 
                    bg-bg-dark 
                    border-b-[1px]
                    shadow-xl 
                    rounded-b-3xl
                    lg:h-6 
                    lg:mx-8
                " 
            />
            <div 
                className="
                    relative 
                    z-1 
                    h-6 
                    mx-6 
                    bg-bg-light
                    bg-opacity-40
                    shadow-xl 
                    rounded-b-3xl
                    lg:h-6 
                    lg:mx-20
                " 
            />
        </>
    );
};

export default Gradient;