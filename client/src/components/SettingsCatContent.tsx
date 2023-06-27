import React from 'react'
import { IoMdArrowBack } from 'react-icons/io';

interface SettingsCatContentProps {
    category: string;
    handleCategoryClick?: (category: string) => void;
}

const SettingsCatContent: React.FC<SettingsCatContentProps> = ({
    category,
    handleCategoryClick
}) => {

    const handleGoBack = () => {
        if (handleCategoryClick) {
            handleCategoryClick('')
        }
    }

  return (
    <div className='p-4 h-screen bg-[#15202B]'>
        <div className='flex items-center'>
            <div 
                onClick={handleGoBack}
                className="
                    block
                    rounded-full
                    p-2
                    mr-6
                    cursor-pointer
                    lg:hidden
                    hover:bg-white/10
                    "
                >
                <IoMdArrowBack size={22} />
            </div>
            <p className='text-xl font-semibold'>
                {category}
            </p>
        </div>
        <div className='flex flex-col'>
            <div className='mx-auto my-8 text-2xl font-semibold'>
                Settings are unavailable
            </div>
            <div className='text-center'>
                These settings aren’t available because they 
                apply to non-essential cookies. Since you’ve 
                already opted out of those, we’re only using 
                cookies that collect necessary data from your device.
            </div>
        </div>
    </div>
  )
}

export default SettingsCatContent