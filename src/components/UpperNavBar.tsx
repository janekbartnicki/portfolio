import { VscArrowLeft, VscArrowRight, VscSearch, VscLayoutSidebarLeft, VscLayoutPanel, VscLayoutSidebarRightOff, VscLayout, VscMultipleWindows, VscThreeBars } from 'react-icons/vsc';
import { AiOutlineClose, AiOutlineLine } from 'react-icons/ai';
import useWindowSize from '../hooks/useWindowSize';

const UpperNavBar: React.FC = () => {

    const windowWidth = useWindowSize();

    return (
        <div className="bg-[#21252b]  text-[#9097a5] flex flex-row justify-between w-full h-full">
            <div className="p-2 flex flex-row flex-nowrap">
                <div className="flex align-middle items-center pr-3">
                    <img src="/images/vscode_logo.png" className="w-4 h-4" alt="Logo VSC"/>
                </div>
                {windowWidth < 1400 ? 
                    <VscThreeBars className="w-5 h-5 cursor-pointer"/> : 
                    <ul className="flex flex-row text-sm cursor-pointer [&>*:hover]:bg-[#33373b] [&>*]:px-2 [&>*]:rounded-md">
                        <li>File</li>
                        <li>Edit</li>
                        <li>Selection</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Run</li>
                        <li>Terminal</li>
                        <li>Help</li>
                    </ul>
                }
            </div>
            <div className='flex flex-row items-center align-middle space-x-3'>
                <div className='flex flex-row items-center align-middle space-x-3'>
                    <VscArrowLeft/>
                    <VscArrowRight/>
                </div>
                <div className='bg-[#2c3036] text-center rounded-lg border-[#42474f] border-[1px] flex flex-row items-center align-middle md: md:lg:px-48 sm:px-10 text-sm space-x-2 py-1'>
                    <VscSearch/><a href='https://github.com/janekbartnicki' className='hover:underline'>janekbartnicki/portfolio</a>
                </div> 
            </div>
            <div className='flex flex-row space-x-3'>
                <div className='flex flex-row space-x-2 items-center align-middle pr-4 [&>*]:cursor-pointer'>
                    <VscLayoutSidebarLeft/>
                    <VscLayoutPanel/>
                    <VscLayoutSidebarRightOff/>
                    <VscLayout/>
                </div>
                <div className='flex flex-row items-center align-middle cursor-pointer [&>*]:px-4 ml-4'>
                    <AiOutlineLine className="hover:bg-[#3f4247] w-full h-full transition-all 1s"/>
                    <VscMultipleWindows className="hover:bg-[#3f4247] w-full h-full transition-all 1s"/>
                    <AiOutlineClose className="hover:bg-[#e81123] w-full h-full transition-all 1s"/>
                </div>
            </div>
        </div>
    )
}

export default UpperNavBar;