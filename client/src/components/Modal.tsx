import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Input from './custom_elements/Input';


const Modal = () => {
  return (
    <div className="
        inset-0
        flex
        justify-center
        items-center
        fixed
        bg-neutral-500/30
    ">
        <div className="
            bg-[#15202B]
            rounded-none
            w-full
            h-full
            sm:h-auto
            sm:w-[36rem]
            sm:rounded-2xl
            md:h-auto
            md:w-[36rem]
            md:rounded-2xl
        ">
            <div className='flex items-center m-3'>
                <div 
                    className='cursor-pointer p-1.5 hover:bg-neutral-200/20 rounded-full transition'
                    onClick={() => {}}>
                    <RxCross2 size={22} />
                </div>
                <div className='absolute left-1/2 -translate-x-4'>
                    <img src="/twitter_logo.png" alt="logo" className='w-9' />
                </div>
            </div>
            <div className='
                flex
                justify-center
                items-center
                h-full
            '>
                <div className='w-72 mt-4 mb-10 flex flex-col gap-5 justify-center'>
                    <div className='text-3xl font-semibold mb-3'>
                        Sign in to Twitter
                    </div>
                    <button className='
                        bg-white
                        rounded-full
                        text-black
                        font-semibold
                        flex
                        justify-center
                        items-align
                        p-2
                        gap-1
                        hover:bg-white/90
                        transition
                    '>
                        <FcGoogle size={20} />
                        Sign in with Google
                    </button>
                    <button className='
                        bg-white
                        rounded-full
                        text-black
                        font-semibold
                        flex
                        justify-center
                        items-align
                        p-2
                        gap-1
                        hover:bg-white/90
                        transition
                    '>
                        <BsApple size={20} />
                        Sign in with Apple
                    </button>
                    <div className='flex justify-center -mb-2'>
                        <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                        or
                        <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                    </div>
                    <Input placeholder="Phone, email, or username" />
                    <button 
                        onClick={() => {}}
                        className='
                            bg-white
                            rounded-full
                            text-black
                            font-semibold
                            flex
                            justify-center
                            items-align
                            p-2
                            hover:bg-white/90
                            transition
                        '
                    >Next</button>
                    <button 
                        onClick={() => {}}
                        className='
                            bg-[#15202B]
                            rounded-full
                            text-white
                            font-semibold
                            flex
                            justify-center
                            items-align
                            p-2
                            text-sm
                            border-neutral-200/25
                            border
                            hover:bg-neutral-200/10
                            transition
                        '
                    >Forgot password?</button>
                    <div className='my-6 mb-12 text-slate-400 text-sm tracking-wider'>
                        Don't have an account? 
                        <span 
                            onClick={() => {}}
                            className='
                                text-sky-500
                                cursor-pointer
                                hover:underline
                                ml-1
                            '
                        >
                            Sign up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal