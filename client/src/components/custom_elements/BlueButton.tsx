import React from 'react'

interface BlueButtonProps {
    value: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({
    value,
    disabled,
    onClick
}) => {
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`
          ${disabled ? 'bg-sky-500/50' : 'bg-sky-500'}
          ${disabled ? 'text-neutral-100/70' : 'text-white'}
          dark:text-black;
          p-1.5
          px-5
          h-10
          font-semibold
          rounded-full
          tracking-wide
          hover:${disabled ? '' : 'bg-sky-600'}
          transition
      `}
    >
        {value}
    </button>
  )
}

export default BlueButton