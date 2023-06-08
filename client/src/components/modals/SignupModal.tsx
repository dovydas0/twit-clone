import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Input from '../custom_elements/Input';
import Button from '../custom_elements/Button';
import DropdownSelector from '../custom_elements/DropdownSelector';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

enum SIGNUP {
    ACCOUNT_TYPES = 0,
    CREATE_ACCOUNT = 1

}

const Modal = () => {
    const [ showContent, setShowContent ] = useState(SIGNUP.ACCOUNT_TYPES);
    const [ disabled, setDisabled ] = useState(false);
    const { 
        handleSubmit, 
        register, 
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            day: '',
            month: '',
            year: '',
        }
    })

    const navigate = useNavigate();
    let content;

    const months = ["", 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ["", '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const years = ["", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", 
    "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", 
    "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", 
    "1953", "1952", "1951", "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930", 
    "1929", "1928", "1927", "1926", "1925", "1924", "1923", "1922", "1921", "1920", "1919", "1918", "1917", "1916", "1915", "1914", "1913", "1912", "1911", "1910", "1909", "1908", "1907", "1906",
    "1905", "1904", "1903", "1902", "1901", "1900"]


    const createAccount: SubmitHandler<FieldValues> = async (data) => {        
        
        // constructing dob property
        data.dob = data.day + "-" + data.month + "-" + data.year;

        delete data.day
        delete data.month
        delete data.year;

        data.dob = new Date(data.dob).toLocaleDateString("en-GB");
        data.avatar = 'default_avatar.jpg';

        // request
        const createAccount = axios.post(import.meta.env.VITE_API_SERVER_URL + '/users', data);
        
        // Posting data to server
        const accountRequest = await toast.promise(createAccount, {
                loading: 'Creating account...',
                success: 'Account created successfully!',
                error: 'Error creating account.'
            }
        )

        if (accountRequest.status === 200) {
            navigate('/');
        }        

    }

    if (showContent === SIGNUP.ACCOUNT_TYPES) {
        content = (
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
                    sm:h-[95%]
                    sm:w-[36rem]
                    sm:rounded-2xl
                    md:h-[95%]
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
                                onClick={() => {}}
                                />
                            <Button
                                value="Sign up with Apple"
                                icon={BsApple}
                                onClick={() => {}}
                            />
                            <div className='flex justify-center -mb-2'>
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                                or
                                <div className='before:content-[""] w-full mx-2 border-b border-neutral-200/20 -translate-y-1/2'></div>
                            </div>
                            <Button
                                value="Create account"
                                onClick={() => setShowContent(SIGNUP.CREATE_ACCOUNT)}
                            />
                            <div className='-mt-2 text-slate-400 text-xs tracking-wider'>
                                By signing up, you agree to the Terms of Service 
                                and Privacy Policy, including Cookie Use.
                            </div>
                            <div className='my-6 mb-36 text-slate-400 text-sm tracking-wider'>
                                Have an account already?
                                <Link to="/login">
                                    <span className='
                                        text-sky-500
                                        cursor-pointer
                                        hover:underline
                                        ml-1
                                    '>
                                        Log in
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    if (showContent === SIGNUP.CREATE_ACCOUNT) {
        content = (
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
                    relative
                    overflow-auto
                    sm:h-[640px]
                    sm:w-[36rem]
                    sm:rounded-2xl
                    md:h-[640px]
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
                        mx-auto
                        px-8
                        max-w-lg
                        mb-5
                    '>
                        <div className=' mt-4 flex flex-col gap-5'>
                            <div className='text-3xl font-semibold mb-2'>
                                Create your account
                            </div>
                            <Input
                                required
                                id='username'
                                placeholder='Name'
                                type='text'
                                RegExPattern={new RegExp('^[a-zA-Z-0-9]{4,20}$')}
                                register={register}
                                errors={errors}
                                />
                            <Input
                                required
                                id='email'
                                placeholder='Email'
                                type='email'
                                RegExPattern={new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$')}
                                register={register}
                                errors={errors}
                                />
                            <Input
                                required
                                id='password'
                                placeholder='Password'
                                type='password'
                                RegExPattern={new RegExp('^[a-zA-Z-0-9]{6,}$')}
                                register={register}
                                errors={errors}
                            />
                            <div className='mt-2'>
                                <div className='mb-1 text-md text-white font-bold'>
                                    Date of Birth
                                </div>
                                <div className='text-slate-400 text-xs tracking-wider'>
                                    This will not be shown publicly. Confirm your own age, 
                                    even if this account is for a business, a pet, or something else.
                                </div>
                                <div className='mt-4 flex h-16 border-yellow-500 border'>
                                    <DropdownSelector
                                        id='month'
                                        label='Month'
                                        widthClass='custom_month_width'
                                        register={register}
                                        options={months}
                                        errors={errors}
                                    />
                                    <DropdownSelector
                                        id='day'
                                        label='Day'
                                        widthClass='custom_day_width'
                                        register={register}
                                        options={days}
                                        errors={errors}
                                    />
                                    <DropdownSelector
                                        id='year'
                                        label='Year'
                                        widthClass='custom_year_width'
                                        register={register}
                                        options={years}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='
                        bg-[#15202B]
                        w-full
                        py-6
                        sticky
                        bottom-0
                        z-50
                        border-t
                        border-neutral-200/25
                    '>
                        <div className='
                            w-96
                            m-auto
                        '>
                            <Button
                                thick
                                disabled={disabled}
                                value="Create account"
                                onClick={handleSubmit(createAccount)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
        <>
            { content }
        </>
    )
}

export default Modal