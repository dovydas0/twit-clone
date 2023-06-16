import { useState } from 'react';
import { useAppSelector } from '../store/store'
import SettingsCatContent from './SettingsCatContent';
import SettingsCategories from './SettingsCategories';


const Settings = () => {
    const [ selectedCat, setSelectedCat] = useState('Personalization and data')

    const loggedUser = useAppSelector(state => state.user);
    let content;

    const handleCategoryClick = (value: string) => {
        setSelectedCat(value)
    }

    if (Object.keys(loggedUser).length > 0) {
        content = (
            <div className=''>
                Settings
            </div>
        )
    }

    else {
        content = (
            <>
                {/* sm:w-[648px] */}
                <div className="sm:max-w-[628px] sm:min-w-[540px] sm:col-span-6 lg:min-w-0 lg:w-auto lg:col-span-3 xl:col-span-3 border-white/20 border bg-[#15202B]">
                    <SettingsCategories categoryClick={handleCategoryClick} selectedCat={selectedCat} />
                </div>
                {/* block sm:hidden */}
                <div className="block sm:hidden lg:block lg:col-span-5 xl:col-span-4 border-white/20 border-r bg-[#15202B]">
                    <SettingsCatContent category={selectedCat} />
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