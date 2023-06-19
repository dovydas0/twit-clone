import React from 'react'

interface BlueButtonProps {
    value: string;
    onClick?: (event: React.MouseEvent) => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({
    value,
    onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className='
          bg-sky-500
          p-1.5
          px-5
          h-10
          font-semibold
          rounded-full
          hover:bg-sky-600
          transition
      '
    >
        {value}
    </button>
  )
}

export default BlueButton