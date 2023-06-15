import {
  RiNotification2Line,
  RiHome7Fill,
  CiSearch,
  BiEnvelope,
  BsTwitter,
  BsBookmark,
  BsFillPersonFill,
  AiOutlinePlus,
  CiSettings,
  HiOutlineSearch
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
    icon: HiOutlineSearch,
    route: '/'
  },
  {
    label: 'Settings',
    icon: CiSettings,
    route: '/settings'
  }
]

const loggedInCat = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Profile',
  'Settings'
]

const LeftBar: React.FC<LeftBarProps> = ({}) => {
  const [ selectedCat, setSelectedCat ] = useState()
  const loggedUser = useAppSelector(state => state.user)

  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    navigate(route);
  }

  const handleChangeCat = () => {

  }

  return (
      <div className="h-20 sm:h-full sm:col-span-1 lg:col-span-1 xl:col-span-2 bg-[#15202B]">
        {
          Object.keys(loggedUser).length > 0 ? (
              <div className="h-full bg-[#15202B] grid grid-cols-4 sm:grid-cols-1 sm:h-3/4 sm:w-2/4 sm:absolute right-0 gap-5 w-4/4  xl:w-2/4  left-0 ">
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4 ">
                    <button className="">{<BsTwitter />}</button>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<RiHome7Fill />}</button>
                    <p className="xl:flex hidden">Home</p>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<CiSearch />}</button>
                    <p className="xl:block hidden ">Search</p>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<RiNotification2Line />}</button>
                    <p className="xl:block hidden">Notifications</p>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<BiEnvelope />}</button>
                    <p className="xl:block hidden">Messages</p>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<BsBookmark />}</button>
                    <p className="xl:block hidden">Bookmark</p>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
                  <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                    <button className="">{<BsFillPersonFill />}</button>
                    <p className="xl:block hidden">Profile</p>
                  </div>
                </div>
                <div className="text-white justify-center items-center text-[2.8rem] hidden sm:flex bg-[#1D9BF0] rounded-[100%] w-[10rem] h-[10rem] absolute bottom-10 left-20 xl:right-0">
                  <button className="">{<AiOutlinePlus />}</button>
                </div>
              </div>
          ) : (
            <div className="pt-4 mr-4 flex flex-col gap-1 items-end xl:items-start">
              <div className="text-white text-2xl xl:justify-end xl:text-2xl">
                <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
                  <button 
                    
                    className="
                      flex
                      gap-3
                      items-center
                      p-3
                      xl:ml-1
                      hover:bg-neutral-200/20
                      rounded-full
                      transition  
                    "
                  >
                    {<BsTwitter size={32} />}
                  </button>
                </div>
              </div>
              {
                loggedOutCat.map(category => (
                  <LeftBarCategory
                    label={category.label ? category.label : ''}
                    onClick={handleCategoryClick}
                    icon={category.icon}
                    route={category.route}
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
