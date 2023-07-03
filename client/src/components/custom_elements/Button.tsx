import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    themeable?: boolean;
    value: string;
    outline?: boolean;
    small?: boolean;
    medium?: boolean
    big?: boolean
    thick?: boolean;
    disabled?: boolean;
    textSize?: string;
    icon?: IconType;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    themeable,
    value,
    outline,
    textSize,
    small,
    medium,
    big,
    disabled,
    thick,
    icon: Icon,
    onClick
}) => {
    
  return (
    <button 
        onClick={onClick}
        disabled={disabled}
        className={`
            rounded-full
            font-semibold
            flex
            justify-center
            items-align
            p-1.5
            transition
            ${themeable ? 'border' : ''}
            ${thick ? 'py-3' : ''}
            ${small ? 'px-3 py-1.5' : ''}
            ${medium ? 'px-6' : ''}
            ${big ? 'w-full' : ''}
            ${textSize ? `text-${textSize}` : ''}
            ${outline ? '' : 'bg-white'}
            ${outline ? 'text-white' : 'text-black'}
            ${outline ? 'hover:bg-white/10' : 'hover:bg-white/[0.85]'}
            ${outline ? 'border-white/25 border' : 'dark:border-none border-neutral-500/50'}
            ${disabled ? 'bg-white/50' : ''}
            ${disabled ? 'hover:bg-white/50' : ''}
        `
    }>
        { Icon &&
            <Icon size={20} />
        }
        {value}
    </button>
  )
}

export default Button