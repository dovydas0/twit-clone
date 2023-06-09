import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Input from '../custom_elements/Input';
import Button from '../custom_elements/Button';
import { Link } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

enum SIGNIN {
    EMAIL_AUTHENTICATION,
    PASSWORD_AUTHENTICATION
}

const LoginModal = () => {
    const [ showContent, setShowContent ] = useState(SIGNIN.EMAIL_AUTHENTICATION)
    const [ email, setEmail ] = useState('')
    let content;
    const { 
        handleSubmit,
        register,
        formState: {
            errors
        } 
    } = useForm<FieldValues>();


    const handleEmailSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const email = data.email.trim();        
    
            if (!email) {
                toast.error('Please enter a valid email');
                return;
            }
            
            await axios.post(import.meta.env.VITE_API_SERVER_URL + '/users/email', { email })
            
            setEmail(email);
            setShowContent(SIGNIN.PASSWORD_AUTHENTICATION)
        } catch (error) {
            toast.error('User not found');
            
        }        
    }
    
    if (showContent === SIGNIN.EMAIL_AUTHENTICATION) {
        content = (
            <div className="
                inset-0
                flex
                justify-center
                items-center
                absolute
                bg-neutral-500/30
            ">
                <div className="
                    bg-[#15202B]
                    rounded-none
                    w-full
                    h-full
                    flex
                    flex-col
                    overflow-auto
                    sm:h-[90%]
                    sm:w-[36rem]
                    sm:rounded-2xl
                    md:h-[660px]
                    md:w-[36rem]
                    md:rounded-2xl
                ">
                    <div className='flex items-center p-3 sticky top-0 z-50 bg-[#15202B]'>
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
                        flex-col
                        overflow-x-hidden
                        items-center
                        w-full
                        mx-auto
                        px-8
                    '>
                        <div className=' w-80 mt-4 mb-10 flex flex-col gap-5'>
                            <div className='text-3xl font-semibold mb-3'>
                                Sign in to Twitter
                            </div>
                            <div>
                                {email}
                            </div>
                            <Button
                                value="Sign in with Google"
                                icon={FcGoogle}
                                onClick={() => {}}
                                />
                            <Button
                                value="Sign in with Apple"
                                icon={BsApple}
                                onClick={() => {}}
                            />
                            <div className='flex justify-center -mb-2'>
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                                or
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                            </div>
                            <Input
                                required
                                id="email"
                                placeholder="Email"
                                type="email"
                                register={register}
                                RegExPattern={new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$')}
                                errors={errors}
                            />
                            <Button
                                value="Next"
                                onClick={handleSubmit(handleEmailSubmit)}
                            />
                            <Button
                                outline
                                value="Forgot password?"
                                textSize="sm"
                                onClick={() => {}}
                            />
                            <div className='my-6 mb-12 text-slate-400 text-sm tracking-wider'>
                                Don't have an account? 
                                <Link to="/signup">
                                    <span className='
                                        text-sky-500
                                        cursor-pointer
                                        hover:underline
                                        ml-1
                                    '>
                                        Sign up
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (showContent === SIGNIN.PASSWORD_AUTHENTICATION) {
        content = (
            <div className="
                inset-0
                flex
                justify-center
                items-center
                absolute
                bg-neutral-500/30
            ">
                <div className="
                    bg-[#15202B]
                    rounded-none
                    w-full
                    h-full
                    flex
                    flex-col
                    overflow-auto
                    sm:h-[90%]
                    sm:w-[36rem]
                    sm:rounded-2xl
                    md:h-[660px]
                    md:w-[36rem]
                    md:rounded-2xl
                ">
                    <div className='flex items-center p-3 sticky top-0 z-50 bg-[#15202B]'>
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
                        flex-col
                        overflow-x-hidden
                        items-center
                        w-full
                        mx-auto
                        px-8
                    '>
                        <div className=' w-80 mt-4 mb-10 flex flex-col gap-5'>
                            <div className='text-3xl font-semibold mb-3'>
                                Sign in to Twitter
                            </div>
                            
                            <Input
                                required
                                id="email"
                                placeholder="Email"
                                type="email"
                                register={register}
                                RegExPattern={new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$')}
                                errors={errors}
                            />
                            {email}
                            <Button
                                value="Next"
                                onClick={handleSubmit(handleEmailSubmit)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default LoginModal