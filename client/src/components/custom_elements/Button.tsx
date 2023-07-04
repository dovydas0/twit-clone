import { IconType } from "react-icons";

interface ButtonProps {
    themeable?: boolean;
    themedHover?: boolean;
    whiteHover?: boolean;
    value: string;
    outline?: boolean;
    color?: string;
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
    themedHover,
    whiteHover,
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
            ${thick ? 'py-3' : ''}
            ${small ? 'px-3 py-1.5' : ''}
            ${medium ? 'px-6' : ''}
            ${big ? 'w-full' : ''}
            ${textSize ? `text-${textSize}` : ''}
            ${outline ? `dark:text-white` : 'text-black'}
            ${outline ? 'dark:hover:bg-white/10 hover:bg-neutral-500/10' : ''}
            ${!outline && themedHover ? 'dark:hover:bg-white/[0.85]' : ''}
            ${outline ? 'dark:border-white/25 border-neutral-500/50 border' : ''}
            ${!outline || !themedHover ? 'bg-white' : ''}
            ${themeable ? 'border-neutral-500/50 border' : ''}
            ${themedHover ? 'dark:hover:bg-white/10 hover:bg-neutral-500/10' : ''}
            ${whiteHover ? 'hover:bg-white/80 border-white/20 border' : ''}
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