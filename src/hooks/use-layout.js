import { useEffect, useState } from "react";

const useLayout = () => {

    const [layout, setLayout] = useState('desktop');

    useEffect(() => {

        window.addEventListener("resize", () => {
            if (window.innerWidth <= 600) {
                setLayout("mobile");
            }
            else {
                setLayout("desktop");
            }
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth <= 600) {
                    setLayout("mobile");
                }
                else {
                    setLayout("desktop");
                }
            });
        };
    }, [])



    return { layout };
}

export default useLayout;