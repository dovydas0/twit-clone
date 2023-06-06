
interface DropdownSelectorProps {
    label: string;
    span?: number;
    options: string[];
    width: number;
    onChange?: (value: string) => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    label,
    span,
    options,
    width,
    onChange,
}) => {
  return (
    <div>
        
        <select className={`
            peer
            w-[${width}px]
            bg-[#15202B]
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
        `}>
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