import { useState } from 'react';
import { useAppSelector } from '../store/store'
import SettingsCatContent from './SettingsCatContent';
import SettingsCategories from './SettingsCategories';


const Settings = () => {
    const [ selectedCat, setSelectedCat] = useState('')

    const loggedUser = useAppSelector(state => state.user);
    let content;

    const handleCategoryClick = (value: string) => {
        setSelectedCat(value)
    }

    if (Object.keys(loggedUser).length > 0) {
        content = (
            <>
                <div className="xl:ml-[223px] ml-[76px] sm:col-span-9 lg:min-w-0 lg:w-auto lg:col-span-4 xl:col-span-5 border-white/20 border bg-[#15202B]">
                    <SettingsCategories 
                        categoryClick={handleCategoryClick} 
                        selectedCat={selectedCat}
                    />
                    {
                        selectedCat && (
                            <div className="absolute top-0 block sm:block lg:hidden mr-4">
                                <SettingsCatContent handleCategoryClick={handleCategoryClick}  category={selectedCat} />
                            </div>
                        )
                    }
                </div>
                <div className="hidden sm:hidden lg:block lg:col-span-5 xl:col-span-4 border-white/20 border-r bg-[#15202B]">
                    {
                        selectedCat === '' ? (
                            <div className='flex flex-col'>
                                <div className='mx-auto mt-20 text-2xl italic text-white/60 tracking-wide'>
                                    Please select a category
                                </div>
                            </div>
                        ) : (
                            <SettingsCatContent category={selectedCat} />
                        )
                    }
                </div>
            </>
        )
    }

    else {
        content = (
            <>
                <div className="xl:ml-[223px] ml-[76px] sm:col-span-9 lg:min-w-0 lg:w-auto lg:col-span-4 xl:col-span-5 border-white/20 border bg-[#15202B]">
                    <SettingsCategories 
                        categoryClick={handleCategoryClick} 
                        selectedCat={selectedCat}
                    />
                    {
                        selectedCat && (
                            <div className="absolute top-0 block sm:block lg:hidden mr-4">
                                <SettingsCatContent handleCategoryClick={handleCategoryClick}  category={selectedCat} />
                            </div>
                        )
                    }
                </div>
                <div className="hidden sm:hidden lg:block lg:col-span-5 xl:col-span-4 border-white/20 border-r bg-[#15202B]">
                    {
                        selectedCat === '' ? (
                            <div className='flex flex-col'>
                                <div className='mx-auto mt-20 text-2xl italic text-white/60 tracking-wide'>
                                    Please select a category
                                </div>
                            </div>
                        ) : (
                            <SettingsCatContent category={selectedCat} />
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