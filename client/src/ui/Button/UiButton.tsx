
import type { ReactNode } from "react";

interface UiButtonProps { buttonType: "primary" | "secondary"; type?: "button" | "submit"; buttonName: string; onClick?: () => void; className?: string, icon?: ReactNode }

const UiButton = ({ buttonType, type, buttonName, onClick, className, icon }: UiButtonProps) => {
    if (buttonType === "primary") {

        return (
            <button type={type} onClick={onClick} className={`text-white bg-primary ring-1 ring-primary w-44 rounded-sm ${className}`} >
                {icon && icon}  {buttonName}
            </button>
        )
    } else {
        return (
            <button type={type} onClick={onClick} className={`text-primary ring-1 ring-gray w-44 h-8 rounded-sm ${className}`}>
                {buttonName}
            </button>
        )
    }
}

export default UiButton
