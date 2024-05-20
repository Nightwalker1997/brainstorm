'use client';

const SideLines = () => {
    return (
        <>
            {/* left */}
            
            <div 
                className="
                    absolute 
                    h-full 
                    left-4 
                    w-0.25 
                    bg-bg-lightest
                    bg-gradient-to-b
                    from-primary
                    to-secondary
                "
            />

            {/* right */}
            <div 
                className="
                    absolute 
                    h-full 
                    right-4 
                    w-0.25 
                    bg-bg-lightest
                    bg-gradient-to-b
                    from-secondary
                    to-primary
                "
            />
        </>
    );
};

export default SideLines;