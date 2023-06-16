import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    value: string;
    outline?: boolean;
    small?: boolean;
    thick?: boolean;
    disabled?: boolean;
    textSize?: string;
    icon?: IconType;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    value,
    outline,
    textSize,
    small,
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
            ${thick ? 'py-3' : ''}
            ${small ? ' w-[85px]' : 'w-full'}
            ${textSize ? `text-${textSize}` : ''}
            ${outline ? '' : 'bg-white'}
            ${outline ? 'text-white' : 'text-black'}
            ${outline ? 'hover:bg-white/10' : 'hover:bg-white/[0.85]'}
            ${outline ? 'border-white/25 border-2' : ''}
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