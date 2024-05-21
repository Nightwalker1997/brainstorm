'use client';

import { companyLogos } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";

const CompanyLogos = () => {
    return (
        <div
            className="
                relative
                hidden lg:flex lg:flex-col
                mt-10
                z-10
            "
        >
            <h5
                className="
                    tagline
                    mt-4
                    text-center
                    text-tx-base
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]
                "
            >
                Helping people create beautifull content at 
            </h5>
            <ul className="flex">
                {companyLogos.map(item => (
                    <li 
                        key={item.id}
                        className={clsx(`
                            flex flex-1
                            items-center justify-center
                            gap-3
                            h-32 text-2xl
                        `, item.class)}
                    >
                        <Image
                            src={item.src}
                            height={32}
                            width={32}
                            alt={item.name}
                        />
                        <span className={``}>
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos
