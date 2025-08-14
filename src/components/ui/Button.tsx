import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-xl",
    "md": "py-2 px-4 text-md rounded-md font-light flex items-center",
    "lg": "py-4 px-6 text-lg rounded-sm"
}

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} cursor-pointer`} onClick={props.onClick}>
        {props.startIcon && <div className="pr-2">
            {props.startIcon}
        </div>}
        {props.text} 
        {props.endIcon}
    </button>
}