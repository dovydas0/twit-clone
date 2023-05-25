import { IconType } from "react-icons";

interface ButtonProps {
    value: string;
    outline?: boolean;
    small?: boolean;
    textSize?: string;
    icon?: IconType;
    onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
    value,
    outline,
    textSize,
    small,
    icon: Icon,
    onClick
}) => {
  return (
    <button 
        onClick={onClick}
        className={`
            rounded-full
            font-semibold
            flex
            justify-center
            items-align
            p-2
            gap-1
            transition
            ${small ? ' w-20' : ''}
            ${textSize ? `text-${textSize}` : ''}
            ${outline ? 'bg-[#15202B]' : 'bg-white'}
            ${outline ? 'text-white' : 'text-black'}
            ${outline ? 'hover:bg-neutral-200/10' : 'hover:bg-white/90'}
            ${outline ? 'border-neutral-200/25 border' : ''}
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