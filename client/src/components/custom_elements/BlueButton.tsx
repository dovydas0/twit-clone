import React from 'react'

interface BlueButtonProps {
    value: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({
    value
}) => {
  return (
    <button className='
        bg-sky-500
        p-1.5
        px-5
        h-10
        font-semibold
        rounded-full
    '>
        {value}
    </button>
  )
}

export default BlueButton