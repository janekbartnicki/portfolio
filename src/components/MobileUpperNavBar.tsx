import { VscSearch, VscThreeBars } from "react-icons/vsc";

const MobileUpperNavBar: React.FC = () => {
    return (
        <div className="bg-[#21252b]  text-[#9097a5] flex flex-row justify-between w-full">
            <div className="flex flex-row align-middle items-center">
                <img src="/images/vscode_logo.png" alt="Logo VSC" className="w-7 h-7 m-3"/>
                <VscThreeBars className="w-8 h-8 cursor-pointer hover:bg-[#33373b] rounded-md"/>
            </div>
            <div className="flex justify-center align-middle items-center">
                <div className='bg-[#2c3036] text-center rounded-lg border-[#42474f] border-[1px] flex flex-row items-center align-middle px-10 text-sm space-x-2 py-1 mr-5'>
                    <VscSearch/><a href='https://github.com/janekbartnicki' className='hover:underline'>janekbartnicki/portfolio</a>
                </div> 
            </div>
        </div>
    )
}

export default MobileUpperNavBar;