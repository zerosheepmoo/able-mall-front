import { useState, useEffect } from "react";

/**
 *
 */
const useWindowWidthSize = (): number => {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        // state 넣기
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        // 바뀔때 콜
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};

export default useWindowWidthSize;
