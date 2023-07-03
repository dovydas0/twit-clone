import React, { useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io';
import { setDark } from '../store/features/ThemeSlice';
import { useAppDispatch } from "../store/store";
import Button from './custom_elements/Button';

interface SettingsCatContentProps {
    darkTheme: boolean;
    category: string;
    handleCategoryClick?: (category: string) => void;
}

const SettingsCatContent: React.FC<SettingsCatContentProps> = ({
    darkTheme,
    category,
    handleCategoryClick
}) => {
    let content;

    const dispatch = useAppDispatch();

    const handleGoBack = () => {
        if (handleCategoryClick) {
            handleCategoryClick('')
        }
    }

    const handleDefaultTheme = () => {
        document.body.classList.remove('dark');
        document.body.style.background = '#fff';
        dispatch(setDark({ dark: false }));
        localStorage.setItem('dark', 'off');
    }
    
    const handleDimTheme = () => {
        if (document.body.classList.contains('dark')) {
            return;
        }
        else {
            document.body.classList.add('dark');
            document.body.style.background = '#15202B';
            dispatch(setDark({ dark: true }));
            localStorage.setItem('dark', 'on');
        }
    }

    if (category === 'Display') {
        content = (
            <>
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
                    <div className='my-8 text-2xl font-semibold'>
                        Background
                    </div>
                    <div className='flex justify-center gap-4 items-start'>
                        <button
                            onClick={handleDefaultTheme}
                            className={`
                                rounded-sm
                                font-semibold
                                flex
                                justify-center
                                items-align
                                p-1.5
                                transition
                                w-64
                                bg-white
                                text-zinc-900
                                ${!darkTheme ? 'outline-2 outline outline-sky-500' : ''}
                            `}
                        >
                            Default
                        </button>
                        <button
                            onClick={handleDimTheme}
                            className={`
                                rounded-sm
                                font-semibold
                                flex
                                justify-center
                                items-align
                                p-1.5
                                w-64
                                transition
                                text-neutral-100
                                bg-[#15202B]
                                ${darkTheme ? 'outline-2 outline outline-sky-500' : ''}
                            `}
                        >
                            Dim
                        </button>
                    </div>
                </div>
            </>
        )
    } 
    
    else {
        content = (
            <>
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
            </>
        )
    }

  return (
    <div className='p-4 h-full dark:text-neutral-100 text-zinc-900 dark:bg-[#15202B] bg-white'>
        {content}
    </div>
  )
}

export default SettingsCatContent