import React from 'react'
import { IconType } from 'react-icons';

interface LeftBarCategoryProps {
    label: string;
    onClick: (route: string) => void;
    icon: IconType;
    route: string;
}

const LeftBarCategory: React.FC<LeftBarCategoryProps> = ({
    label,
    onClick,
    icon: Icon,
    route
}) => {
  return (
    <div className="text-white text-2xl xl:justify-end xl:text-2xl">
        <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
            <button 
            onClick={() => onClick(route)}
            className="
                flex
                gap-3
                items-center
                p-3
                xl:px-4
                xl:py-3
                hover:bg-neutral-200/20
                rounded-full
                transition  
            "
            >
                {<Icon size={32} />}
                <b className="xl:block hidden">{label}</b>
            </button>
        </div>
    </div>
    )
}

export default LeftBarCategory