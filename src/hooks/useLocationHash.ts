'use client';

import { useParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

const getHash = () =>
    typeof window !== "undefined"
      ? decodeURIComponent(window.location.hash)
      : '';

const useLocationHash = () => {
    const [hash, setHash] = useState<string>(getHash());
    const params = useParams();
  
    useEffect(() => {
        setHash(getHash());
    }, [params]);

    console.log("useLoacationHash: ", hash);

    return hash;
}

export default useLocationHash;