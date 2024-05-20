'use client';

const BackgroundCircles = () => {
    return (
        <>
            <div 
                className="
                    absolute 
                    top-[4.4rem] 
                    left-[2rem] 
                    w-2 
                    h-2 
                    rounded-full
                    bg-gradient-to-b 
                    from-[#DD734F] 
                    to-[#1A1A32] 
                " 
            />
            <div 
                className="
                    absolute 
                    top-[11.2rem] 
                    right-[8rem] 
                    w-4 
                    h-4 
                    rounded-full
                    bg-gradient-to-b 
                    from-[#B9AEDF] 
                    to-[#1A1A32] 
                "
            />
            <div 
                className="
                    absolute 
                    top-[25rem] 
                    left-[3rem]
                    w-6 
                    h-6 
                    rounded-full
                    bg-gradient-to-b 
                    from-[#88E5BE] 
                    to-[#1A1A32] 
                "
            />
            <div 
                className="
                    absolute 
                    top-[5rem] 
                    left-[8rem] 
                    w-8 
                    h-8 
                    rounded-full
                    bg-gradient-to-b 
                    from-primary 
                    to-[#1A1A32] 
                " 
            />
            <div 
                className="
                    absolute 
                    bottom-[2rem] 
                    right-[8rem]
                    w-3 
                    h-3 
                    rounded-full
                    bg-gradient-to-b 
                    from-secondary 
                    to-[#1A1A32] 
                "
            />
            <div 
                className="
                    absolute 
                    bottom-[8rem] 
                    left-12 
                    w-6 
                    h-6 
                    rounded-full
                    bg-gradient-to-b 
                    from-tertiary 
                    to-[#1A1A32] 
                "
            />
        </>
    );
};

  export default BackgroundCircles;