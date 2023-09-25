import { VscInfo } from "react-icons/vsc";
import useWindowSize from "../hooks/useWindowSize";
import Footer from "./Footer";
import LeftNavBar from "./LeftNavBar";
import MobileUpperNavBar from "./MobileUpperNavBar";
import UpperNavBar from "./UpperNavBar";

const CodeWindow: React.FC = () => {
    const windowSize = useWindowSize();

    return (
        <>
            <div className="absolute top-0 left-0 right-0">
                {windowSize < 675 ? 
                        <>
                            <MobileUpperNavBar/>
                            <p className="text-xs text-[#9097a5] bg-[#333842] py-1 flex flex-row justify-center items-center">
                                <VscInfo className="mr-2"/>For the best possible experience try the desktop website.
                            </p>
                            <div className="absolute top-9">
                                <LeftNavBar/>
                            </div>
                        </>
                        : <>
                            <UpperNavBar/>
                            <div className="absolute top-9">
                                <LeftNavBar/>
                            </div>
                        </>
                }
            </div>
            <Footer/>
        </>
    )
}

export default CodeWindow;