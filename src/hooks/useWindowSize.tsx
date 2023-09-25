import { useState } from "react";

const useWindowSize = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    })

    return windowWidth;
}

export default useWindowSize;