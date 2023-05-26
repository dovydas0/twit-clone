import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Input from '../custom_elements/Input';
import Button from '../custom_elements/Button';

import { Link } from 'react-router-dom'


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
                <div className='
                    cursor-pointer
                    p-1.5
                    hover:bg-neutral-200/20
                    rounded-full
                    transition
                '>
                    <Link to="/">
                        <RxCross2 size={22} />
                    </Link>
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
                        Join Twitter today
                    </div>
                    <Button
                        value="Sign up with Google"
                        icon={FcGoogle}
                    />
                    <Button
                        value="Sign up with Apple"
                        icon={BsApple}
                    />
                    <div className='flex justify-center -mb-2'>
                        <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                        or
                        <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                    </div>
                    <Button
                        value="Create account"
                    />
                    <div className='-mt-2 text-slate-400 text-xs tracking-wider'>
                        By signing up, you agree to the Terms of Service 
                        and Privacy Policy, including Cookie Use.
                    </div>
                    <div className='my-6 mb-36 text-slate-400 text-sm tracking-wider'>
                        Have an account already? 
                        <span 
                            onClick={() => {}}
                            className='
                                text-sky-500
                                cursor-pointer
                                hover:underline
                                ml-1
                            '
                        >
                            Log in
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal