import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface DropdownSelectorProps {
    id: string;
    label: string;
    options: string[];
    widthClass: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    id,
    label,
    options,
    widthClass,
    register,
    errors
}) => {
  return (
    <div className={`relative ${widthClass}`}>
        
        <select 
            id={id}
            { ... register(id, {
                required: true,
            })}
            className={`
                peer
                bg-[#15202B]
                min-w-full
                absolute
                pt-8
                pl-[3px]
                pb-2
                border-neutral-200/25
                rounded
                outline-none
                focus:border-sky-500
                focus:border-2
                border
                ${errors[id]? 'border-red-500 ' : ''}
                ${errors[id]? ' focus:border-red-500' : ''}
            `}
        >
            {
                options.map((option, index) => (
                    <option key={index}>
                        {option}
                    </option>
                ))
            }
        </select>
        <label className="
            absolute
            z-10
            my-2
            ml-2
            text-sm
            text-slate-400/80
            peer-focus:text-sky-500
        ">
            {label}
        </label>
    </div>
  )
}

export default DropdownSelector