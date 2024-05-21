'use client';

const Blink = () => {
    return (
        <>
            <span 
                className="
                    absolute
                    top-24
                    left-12
                    h-4
                    w-4
                    bg-tx-darkest 
                    rounded-full
                    animate-ping
                    opacity-25
                    z-0
                "
            />
            <span 
                className="
                    absolute
                    top-12
                    right-12
                    h-8
                    w-8
                    bg-tx-darkest 
                    rounded-full
                    animate-ping
                    opacity-15
                    z-0
                "
            />
            <span 
                className="
                    absolute
                    bottom-8
                    right-4
                    h-3
                    w-3
                    bg-tx-darkest 
                    rounded-full
                    animate-ping
                    opacity-20
                    z-0
                "
            />
        </>
    )
}

export default Blink;