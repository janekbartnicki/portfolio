import { VscBellDot, VscBroadcast, VscError, VscJson, VscRadioTower, VscRemote, VscSourceControl, VscSync, VscWarning } from "react-icons/vsc";

const Footer: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 cursor-default">
            <div className="w-full text-[#9097a5] text-sm bg-[#21252b] flex flex-row justify-between">
                <div className="flex flex-row space-x-3 [&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:space-x-2">
                    <div className="bg-[#528bff] w-8 flex flex-col align-middle items-center justify-center">
                        <VscRemote className="text-[#acd1e2] h-3.5 w-3.5"/>
                    </div>
                    <div>
                        <VscSourceControl/> main*
                        <VscSync/>
                    </div>
                    <div>
                        <VscError className="mr-1"/> 0
                        <VscWarning className="mr-1"/> 0
                    </div>
                    <span>Prettier: ...</span>
                    <span><VscRadioTower className="mr-1"/> 0</span>
                </div>
                <div className="hidden lg:flex flex-row space-x-3 [&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:space-x-2 mr-2">
                    <span>
                        Ln 25, Col 4
                    </span>
                    <span>
                        Spaces: 4
                    </span>
                    <span>
                        UTF-8
                    </span>
                    <span>
                        CRLF
                    </span>
                    <span>
                        <VscJson className="mr-1"/> TypeScript JSX
                    </span>
                    <span>
                        <VscBroadcast className="mr-1"/> Go Live
                    </span>
                    <span>
                        <VscBellDot/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;