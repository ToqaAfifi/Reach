import { useEffect, useState } from "react";

const useWindowDimensions = () => {

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        
        window.addEventListener("resize", () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });

        return () => {
            window.removeEventListener("resize", () => {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            });
        };
    }, [])

    return { dimensions: windowSize };
}

export default useWindowDimensions;