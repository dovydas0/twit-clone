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
            p-1.5
            gap-1
            transition
            ${small ? ' w-[85px]' : 'w-full'}
            ${textSize ? `text-${textSize}` : ''}
            ${outline ? '' : 'bg-white'}
            ${outline ? 'text-white' : 'text-black'}
            ${outline ? 'hover:bg-white/10' : 'hover:bg-white/[0.85]'}
            ${outline ? 'border-white/25 border-2' : ''}
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