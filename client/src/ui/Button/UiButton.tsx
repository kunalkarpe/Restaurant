
import type { ReactNode } from "react";

interface UiButtonProps { image?: string, imageClassName?: string, buttonType: "primary" | "secondary"; type?: "button" | "submit"; buttonName: string; onClick?: () => void; className?: string, icon?: ReactNode }

const UiButton = ({ buttonType, type, buttonName, onClick, className, icon, image, imageClassName }: UiButtonProps) => {
    if (buttonType === "primary") {
        return (
            <button type={type} onClick={onClick} className={`text-white cursor-pointer bg-primary ring-1 ring-primary w-44 rounded-sm ${className}`} >
                {icon && icon}  {buttonName}
            </button>
        )
    } else {
        return (
            <button type={type} onClick={onClick} className={`text-primary cursor-pointer ring-1 ring-gray w-44 h-8 flex gap-2 items-center justify-center rounded-sm ${className}`}>
                {image !== undefined && (
                    <img src={image} alt="image.jpg" className={imageClassName} />
                )}     {buttonName}
            </button>
        )
    }
}

export default UiButton
