import {
    IoIosArrowForward
} from 'react-icons/all'
import { useAppSelector } from '../store/store';

const categories = [
    "Personalization and data",
    "your twitter data",
    "cookie preferences",
    "additional resources",
    "Display"
]

interface SettingsCategoriesProps {
    categoryClick: (value: string) => void;
    selectedCat: string;
}

const SettingsCategories: React.FC<SettingsCategoriesProps> = ({
    categoryClick,
    selectedCat
}) => {
    const darkTheme = useAppSelector(state => state.theme.dark);    

  return (
    <div className='dark:text-neutral-100 text-zinc-900'>
        <div className='text-xl text- font-semibold m-3'>
            Settings
        </div>
        <div className='py-1'>
            <div className='text-xl font-semibold m-3'>
                Privacy
            </div>
            <div
                onClick={() => categoryClick(categories[0])}
                className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    hover:bg-neutral-500/5
                    transition
                    cursor-pointer
                    ${selectedCat === categories[0] ? 'border-r-2 border-sky-500' : ''}
                `}
            >
                Personalization and data <IoIosArrowForward size={21} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }} />
            </div>
            <div
                onClick={() => categoryClick(categories[1])}
                className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    hover:bg-white/5
                    transition
                    cursor-pointer
                    ${selectedCat === categories[1] ? 'border-r-2 border-sky-500' : ''}
                `}
            >
                Your twitter data <IoIosArrowForward size={21} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }}  />
            </div>
            <div
                onClick={() => categoryClick(categories[2])}
                className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    hover:bg-white/5
                    transition
                    cursor-pointer
                    ${selectedCat === categories[2] ? 'border-r-2 border-sky-500' : ''}
                `}
            >
                <div>
                    <div>Cookie preferences</div>
                    <div className='text-gray-400/80 text-sm'>Manage your cookie experience on Twitter.</div>
                </div>
                <IoIosArrowForward size={21} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }}  />
            </div>
            <div className='m-3'>
                These settings apply to this browser or 
                device while you’re logged out. They don’t 
                have any effect when you’re logged in.
            </div>
        </div>
        <hr className='border-neutral-500/50' />
        <div>
            <div className='text-xl font-semibold m-3'>
                General
            </div>
            <div
                onClick={() => categoryClick(categories[3])}
                className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    hover:bg-white/5
                    transition
                    cursor-pointer
                    ${selectedCat === categories[3] ? 'border-r-2 border-sky-500' : ''}
                `}
            >
                Additional resources <IoIosArrowForward size={21} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }}  />
            </div>
            <div
                onClick={() => categoryClick(categories[4])}
                className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    hover:bg-white/5
                    transition
                    cursor-pointer
                    ${selectedCat === categories[4] ? 'border-r-2 border-sky-500' : ''}
                `}
            >
                Display <IoIosArrowForward size={21} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }}  />
            </div>
        </div>
    </div>
  )
}

export default SettingsCategories