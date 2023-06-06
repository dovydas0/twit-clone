import { useRef, useState } from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";


interface InputProps {
    id: string;
    placeholder: string;
    required?: boolean;
    RegExPattern?: RegExp;
    type: string;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    required,
    RegExPattern,
    type,
    register,
    errors
}) => {
    // To check if input field is empty
    const [ value, setValue ] = useState(''); 
    
    const divRef = useRef<HTMLDivElement>(null);
    
    const handleLabelClick = () => {
        const inputEl = divRef.current?.children[0] as HTMLDivElement;
        inputEl.focus();
    }    
        

  return (
    <div ref={divRef} className="w-full relative">
        {
            register && errors ? (
                <input 
                    id={id}
                    type={type}
                    { ...register(id, {
                        onChange: (e) => setValue(e.target.value),
                        pattern: RegExPattern,
                        required
                        })
                    }
                    className={`
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
                        ${errors[id] ? 'border-rose-500' : ''}
                        ${errors[id] ? 'focus:border-rose-500' : ''}
                    `}
                />
            ) : (
                <input 
                    id={id}
                    type={type}
                    onChange={(e) => setValue(e.target.value)}
                    className={`
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
                    `}
                />
            )
        }
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