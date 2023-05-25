import { useRef, useState } from 'react';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    placeholder
}) => {
    // To check if input field is empty
    const [ value, setValue ] = useState(''); 

    const inputRef = useRef<HTMLInputElement>(null);

    const handleLabelClick = () => {
        inputRef.current?.focus();
    }

  return (
    <div className="w-full relative">
        <input 
            ref={inputRef}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className='
                peer
                w-full
                bg-[#15202B]
                outline-none
                px-2
                pt-6
                pb-2
                rounded
                border-neutral-200/25
                focus:border-sky-500
                focus:border-2
                border
            '    
        />
        <label 
            onClick={handleLabelClick}
            className={`
                absolute
                top-[17px]
                left-2
                origin-[0]
                tracking-wide
                cursor-text
                text-slate-400/80
                peer-placeholder-shown:scale-100
                peer-focus:scale-[80%]
                peer-focus:-translate-y-3
                peer-focus:text-sky-600
                transition
                ${ value.length !== 0 ? 'scale-[80%] -translate-y-3' : ''}
            `}
        >
            {placeholder}
        </label>
    </div>
  )
}

export default Input