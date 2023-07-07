import React from 'react'
import { IconType } from 'react-icons';

interface LeftBarCategoryProps {
    label: string;
    onClick: (route: string, label: string) => void;
    icon: IconType;
    route: string;
    selected: boolean;
}

const LeftBarCategory: React.FC<LeftBarCategoryProps> = ({
    label,
    onClick,
    icon: Icon,
    route,
    selected
}) => {
  return (
        <div className="xl:flex gap-3 xl:h-full justify-start items-center">
            <button 
            onClick={() => onClick(route, label)}
            className={`
                flex
                gap-3
                items-center
                p-3
                ${label === '' ? 'xl:px-3 xl:ml-1' : 'xl:px-4'}
                xl:py-3
                hover:bg-neutral-200/20
                rounded-full
                transition  
            `}
            >
                {<Icon size={32} />}
                {label && (
                    selected 
                    ? <b className="xl:block hidden">{label}</b>
                    : <p className="xl:block hidden">{label}</p>
                )}
            </button>
        </div>
    )
}

export default LeftBarCategory