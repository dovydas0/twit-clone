import { useState } from 'react';
import { useAppSelector } from '../store/store'
import SettingsCatContent from './SettingsCatContent';
import SettingsCategories from './SettingsCategories';

interface SettingsProps {
    darkTheme: boolean;
}

const Settings: React.FC<SettingsProps> = ({
    darkTheme
}) => {
    const [ selectedCat, setSelectedCat] = useState('')

    const loggedUser = useAppSelector(state => state.user);
    let content;

    const handleCategoryClick = (value: string) => {
        setSelectedCat(value)
    }

    if (Object.keys(loggedUser).length > 0) {
        content = (
            <>
                <div className="h-full xl:ml-[223px] ml-[76px] sm:col-span-9 lg:min-w-0 lg:w-auto lg:col-span-4 xl:col-span-5 border-neutral-500/50 border dark:bg-[#15202B] bg-white">
                    <SettingsCategories
                        categoryClick={handleCategoryClick} 
                        selectedCat={selectedCat}
                    />
                    {
                        selectedCat && (
                            <div className="absolute top-0 lg:w-full settings-category-size h-full block sm:block lg:hidden mr-4">
                                <SettingsCatContent handleCategoryClick={handleCategoryClick} category={selectedCat} darkTheme={darkTheme} />
                            </div>
                        )
                    }
                </div>
                <div className="hidden sm:hidden lg:block lg:col-span-5 xl:col-span-4 border-neutral-500/50 border-r dark:bg-[#15202B] bg-white">
                    {
                        selectedCat === '' ? (
                            <div className='flex flex-col'>
                                <div className='mx-auto mt-20 text-2xl font-semibold text-white/60 tracking-wide'>
                                    Please select a category
                                </div>
                            </div>
                        ) : (
                            <SettingsCatContent category={selectedCat} darkTheme={darkTheme} />
                        )
                    }
                </div>
            </>
        )
    }

    else {
        content = (
            <>
                <div className="
                    h-full
                    sm:ml-[77px]
                    sm:col-span-9
                    lg:min-w-0
                    lg:w-auto
                    lg:col-span-4
                    xl:col-span-5
                    xl:ml-[223px]
                    border-neutral-500/50
                    border
                    dark:bg-[#15202B]
                    bg-white
                ">
                    <SettingsCategories
                        categoryClick={handleCategoryClick} 
                        selectedCat={selectedCat}
                    />
                    {
                        selectedCat && (
                            <div className="
                                absolute
                                top-0
                                lg:w-full
                                settings-category-size-xs
                                settings-category-size
                                h-full
                                block
                                sm:block
                                lg:hidden
                                mr-4
                            ">
                                <SettingsCatContent handleCategoryClick={handleCategoryClick} category={selectedCat} darkTheme={darkTheme} />
                            </div>
                        )
                    }
                </div>
                <div className="hidden sm:hidden lg:block lg:col-span-5 xl:col-span-4 border-neutral-500/50 border-r dark:bg-[#15202B] bg-white">
                    {
                        selectedCat === '' ? (
                            <div className='flex flex-col'>
                                <div className='mx-auto mt-20 text-2xl font-semibold text-white/60 tracking-wide'>
                                    Please select a category
                                </div>
                            </div>
                        ) : (
                            <SettingsCatContent category={selectedCat} darkTheme={darkTheme} />
                        )
                    }
                </div>
            </>
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default Settings