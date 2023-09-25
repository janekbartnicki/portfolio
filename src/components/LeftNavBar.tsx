import { VscAccount, VscDebugAlt, VscExtensions, VscFiles, VscSearch, VscSettingsGear, VscSourceControl } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

interface LeftBarNavProps {
    vertical?: boolean;
}

const LeftNavBar: React.FC<LeftBarNavProps> = ({vertical}) => {
    // const flexDir = vertical ? 'flex-row' : 'flex-col';

    return (
        <div className="text-[#747881] flex-col bg-[#333842] w-12 flex justify-between">
            <div className="flex flex-col align-middle items-center space-y-3">
                <VscFiles className="w-full h-full p-2 text-white border-l-2 border-white"/>
                <VscSearch className="h-full w-full p-3 py-1 hover:text-white"/>
                <VscSourceControl className="h-full w-full p-3 py-1 hover:text-white"/>
                <VscDebugAlt className="h-full w-full p-3 py-1 hover:text-white"/>
                <VscExtensions className="h-full w-full p-3 py-1 hover:text-white"/>
            </div>
            <div className="[&>*]:w-7 [&>*]:h-7 [&>*:hover]:text-white flex flex-col align-middle items-center space-y-5 pt-3">
                <VscAccount/>
                <VscSettingsGear/>
            </div>
        </div>
    )
}

export default LeftNavBar;