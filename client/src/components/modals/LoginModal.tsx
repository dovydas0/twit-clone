import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import Input from '../custom_elements/Input';
import Button from '../custom_elements/Button';
import { Link } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setUser } from "../../store/features/userSlice";

enum SIGNIN {
    EMAIL_AUTHENTICATION,
    PASSWORD_AUTHENTICATION
}

const LoginModal = () => {
    const [ showContent, setShowContent ] = useState(SIGNIN.EMAIL_AUTHENTICATION)
    const [ email, setEmail ] = useState('')
    const darkTheme = useAppSelector(state => state.theme.dark);
    let content;
    const { 
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm<FieldValues>();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
    
    const handleSigninSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const password = data.password;

            if (!email || !password) {
                toast.error('Please enter email and password');
                return;
            }
            
            const user = await axios.post(import.meta.env.VITE_API_SERVER_URL + '/auth/login', { email, password }, { withCredentials: true })

            dispatch(setUser(user.data));

            toast.success('Successfully logged in');
            
            navigate('/');
        } catch (error) {            
            toast.error('Wrong password');
        }        
    }
    
    if (showContent === SIGNIN.EMAIL_AUTHENTICATION) {
        content = (
            <div className="
                inset-0
                flex
                z-20
                justify-center
                items-center
                absolute
                dark:text-neutral-100
                text-zinc-900
                dark:bg-gray-800
                bg-neutral-100
            ">
                <div className="
                    dark:bg-[#15202B]
                    bg-white
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
                    <div className='flex items-center p-3 sticky top-0 z-50 bg-white dark:bg-[#15202B]'>
                        <div 
                            className='
                                cursor-pointer
                                p-1.5
                                hover:bg-neutral-200/20
                                rounded-full
                                transition
                            '
                        >
                            <Link to="/">
                                <RxCross2 size={22} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }} />
                            </Link>
                        </div>
                        <div className='absolute left-1/2 -translate-x-4'>
                            {
                                darkTheme ? (
                                    <img src="/twitter_logo.png" alt="logo" className='w-9' />
                                ) : (
                                    <img src="/twitter_logo_dark.png" alt="logo" className='w-9' />
                                )
                            }
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
                                themeable
                                themedHover
                                value="Sign in with Google"
                                icon={FcGoogle}
                                onClick={() => {}}
                                />
                            <Button
                                themeable
                                themedHover
                                value="Sign in with Apple"
                                icon={BsApple}
                                onClick={() => {}}
                            />
                            <div className='flex justify-center -mb-2'>
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-500/50 -translate-y-1/2'></div>
                                or
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-500/50 -translate-y-1/2'></div>
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
                                themeable
                                themedHover
                                value="Next"
                                onClick={handleSubmit(handleEmailSubmit)}
                            />
                            <Button
                                themedHover
                                outline
                                themeable
                                color="white"
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
                z-20
                justify-center
                items-center
                absolute
                dark:text-neutral-100
                text-zinc-900
                dark:bg-gray-800
                bg-neutral-100
            ">
                <div className="
                    dark:bg-[#15202B]
                    bg-white
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
                    <div className='flex items-center p-3 sticky top-0 z-50 bg-white dark:bg-[#15202B]'>
                        <div className='
                            cursor-pointer
                            p-1.5
                            hover:bg-neutral-200/20
                            rounded-full
                            transition
                        '>
                            <Link to="/">
                                <RxCross2 size={22} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }} />
                            </Link>
                        </div>
                        <div className='absolute left-1/2 -translate-x-4'>
                            {
                                darkTheme ? (
                                    <img src="/twitter_logo.png" alt="logo" className='w-9' />
                                ) : (
                                    <img src="/twitter_logo_dark.png" alt="logo" className='w-9' />
                                )
                            }
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
                        h-full
                    '>
                        <div className='w-80 mt-4 mb-10 flex flex-col h-full justify-between'>
                            <div className='flex flex-col gap-5'>
                                <div className='text-3xl font-semibold mb-3'>
                                    Enter your password
                                </div>
                                <Input
                                    required
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    register={register}
                                    RegExPattern={new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$')}
                                    errors={errors}
                                    textValue={email}
                                />
                                <Input
                                    required
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <Button
                                    big
                                    themedHover
                                    themeable
                                    value="Log in"
                                    onClick={handleSubmit(handleSigninSubmit)}
                                />
                            </div>
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