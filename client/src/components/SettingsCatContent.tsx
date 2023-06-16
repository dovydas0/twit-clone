import React from 'react'

interface SettingsCatContentProps {
    category: string;
}

const SettingsCatContent: React.FC<SettingsCatContentProps> = ({
    category
}) => {
  return (
    <div className='m-4'>
        <div className='flex items-center'>
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