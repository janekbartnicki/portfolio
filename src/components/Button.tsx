import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonContent: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ buttonContent, className }) => {
    return (
        <div>
            <button
                className={twMerge('m-3 custom-button border border-black py-2 px-6 hover:text-white hover:bg-black transition-all shadow-lg hover:translate-x-2 hover:-translate-y-2 ease before:block before:absolute hover:before:border hover:before:border-black  before:h-10 before:inset-3 before:-translate-x-6 before:-z-10 before:border-white before:transition-all', className)}
            >
                {buttonContent}
            </button>
        </div>
    )
}

export default Button;