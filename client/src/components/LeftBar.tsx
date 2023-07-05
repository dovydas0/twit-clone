import {
  RiNotification2Line,
  RiHome7Fill,
  BiEnvelope,
  BsTwitter,
  BsFillPersonFill,
  CiSettings,
  CiSearch,
  BsThreeDots
} from "react-icons/all";
import { useState } from 'react';
import { useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";
import LeftBarCategory from "./LeftBarCategory";

interface LeftBarProps {
}

const loggedOutCat = [
  {
    icon: BsTwitter,
    route: '/'
  },
  {
    label: 'Explore',
    icon: CiSearch,
    route: '/'
  },
  {
    label: 'Settings',
    icon: CiSettings,
    route: '/settings'
  }
]

const loggedInCat = [
  {
    icon: BsTwitter,
    route: '/'
  },
  {
    label: 'Home',
    icon: RiHome7Fill,
    route: '/'
  },
  {
    label: 'Explore',
    icon: CiSearch,
    route: '/'
  },
  {
    label: 'Notifications',
    icon: RiNotification2Line,
    route: '/notifications'
  },
  {
    label: 'Messages',
    icon: BiEnvelope,
    route: '/messages'
  },
  {
    label: 'Profile',
    icon: BsFillPersonFill,
    route: '/profile'
  },
  {
    label: 'Settings',
    icon: CiSettings,
    route: '/settings'
  }
]

const LeftBar: React.FC<LeftBarProps> = ({}) => {
  const [ profileClick, setProfileClick ] = useState(false)
  const [ selectedCat, setSelectedCat ] = useState('')
  const loggedUser = useAppSelector(state => state.user)

  const navigate = useNavigate();

  const handleCategoryClick = (route: string, label: string) => {
    setSelectedCat(label);
    navigate(route);
  }

  const handleSignOut = async () => {
    document.cookie = "USER_TOKEN=; expires=true; path=/"
    navigate('/');
    document.location.reload()
  }

  return (
    <>
      {
        profileClick && (
          <>
            <div 
              onClick={() => setProfileClick(state => !state)}
              className="
                z-40
                fixed
                top-0
                left-0
                w-full
                h-full
              "
            >
            </div>                    
            <div className="
              dark:bg-[#15202B]
              bg-white
              dark:text-neutral-100
              text-zinc-900
              pop-up_shadow
              fixed
              shadow-lg
              rounded-xl
              bottom-20
              z-50
              py-2
              w-64
              border-neutral-500/50
              border
            ">
              <div
                onClick={handleSignOut}
                className="
                  hover:bg-neutral-500/5
                  font-bold
                  text-lg
                  px-3
                  py-2
                  w-full
                  cursor-pointer
                "
              >
                Log out {loggedUser.username}
              </div>
            </div>
          </>
        )
      }
      <div className="
        h-14
        left-0
        border-t
        border-neutral-500/50
        z-10
        bottom-[72px]
        fixed
        flex
        justify-center
        items-center
        w-screen

        sm:bottom-0
        sm:border-none
        sm:left-auto
        sm:fixed
        sm:w-auto
        sm:h-screen
        sm:items-start
        sm:col-span-1
        lg:col-span-1
        xl:col-span-2

        dark:bg-[#15202B]
        bg-white
        dark:text-neutral-100
        text-zinc-900
      ">
        {
          Object.keys(loggedUser).length > 0 ? (
            <div className="
              gap-1
              flex
              flex-row
              justify-evenly
              w-screen
              
              sm:w-auto
              sm:pt-4
              sm:pr-3.5
              sm:flex-col
              sm:items-end
              xl:items-start
            ">
              {
                loggedInCat.map(category => (
                  <LeftBarCategory
                    key={category.label ? category.label : 'logo'}
                    label={category.label ? category.label : ''}
                    onClick={handleCategoryClick}
                    icon={category.icon}
                    route={category.route}
                    selected={category.label === selectedCat}
                  />
                ))
              }
              <div className="sticky top-0 sm:bottom-3 sm:-mr-2 xl:pr-2 xl:w-full">
                <button 
                onClick={() => {setProfileClick(prev => !prev)}}
                className={`
                    flex
                    justify-between
                    w-full
                    gap-3
                    items-center
                    p-3
                    xl:py-3
                    xl:px-4
                    hover:bg-neutral-500/10
                    rounded-full
                    transition  
                `}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={loggedUser.avatar || 'default_avatar.jpg'}
                      className="rounded-full object-cover w-10 h-10"
                      alt="user image"
                    />
                    <b className="hidden xl:block text-lg">{loggedUser.username}</b>
                  </div>
                  <BsThreeDots size={18} className='hidden xl:block' />
                </button>
              </div>
            </div>
          ) : (
            <div className="
              flex
              flex-row
              justify-evenly
              w-screen
              gap-1

              sm:w-auto
              sm:pt-4
              sm:mr-3
              sm:flex-col
              sm:items-end
              xl:w-[12.9rem]
              xl:items-start
            ">
              {
                loggedOutCat.map(category => (
                  <LeftBarCategory
                    key={category.label ? category.label : 'logo'}
                    label={category.label ? category.label : ''}
                    onClick={handleCategoryClick}
                    icon={category.icon}
                    route={category.route}
                    selected={category.label === selectedCat}
                  />
                ))
              }
            </div>
          )
        }
      </div>
    </>
  );
}

export default LeftBar;
