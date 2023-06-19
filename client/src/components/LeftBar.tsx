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
  const [ selectedCat, setSelectedCat ] = useState('')
  const loggedUser = useAppSelector(state => state.user)

  const navigate = useNavigate();

  const handleCategoryClick = (route: string, label: string) => {
    setSelectedCat(label);
    navigate(route);
  }

  return (
      <div className="h-20 relative sm:h-full sm:col-span-1 lg:col-span-1 xl:col-span-2 bg-[#15202B]">
        {
          Object.keys(loggedUser).length > 0 ? (
            <div className="pt-4 mr-4 flex flex-col gap-1 items-end xl:items-start">
              {
                loggedInCat.map(category => (
                  <LeftBarCategory
                    label={category.label ? category.label : ''}
                    onClick={handleCategoryClick}
                    icon={category.icon}
                    route={category.route}
                    selected={category.label === selectedCat}
                  />
                ))
              }
              <div className="absolute bottom-3 xl:pr-2 xl:w-full">
                  <button 
                  onClick={() => {}}
                  className={`
                      flex
                      justify-between
                      w-full
                      gap-3
                      items-center
                      p-2
                      xl:py-3
                      xl:px-4
                      hover:bg-white/10
                      rounded-full
                      transition  
                  `}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={loggedUser.avatar || 'default_avatar.jpg'}
                        className="rounded-full w-10"
                        alt="user image"
                      />
                      <b className="hidden xl:block text-lg">{loggedUser.username}</b>
                    </div>
                    <BsThreeDots size={18} className='hidden xl:block' />
                  </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 mr-4 flex flex-col gap-1 items-end xl:items-start">
              {
                loggedOutCat.map(category => (
                  <LeftBarCategory
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
  );
}

export default LeftBar;
