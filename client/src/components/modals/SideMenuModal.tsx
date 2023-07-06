import { RxCross2 } from "react-icons/rx"
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

interface SideMenuModalProps {
  handleSideMenu: () => void;
  sideMenuOpen: boolean;
}

const SideMenuModal: React.FC<SideMenuModalProps> = ({
  handleSideMenu,
  sideMenuOpen
}) => {
  const darkTheme = useAppSelector(state => state.theme.dark);
  const loggedUser = useAppSelector(state => state.user);


  return (
    <div className="
      dark:text-neutral-100
      text-zinc-900
      
      block
      sm:hidden
    ">
      <div className={`
        w-[17rem]
        h-screen
        p-3
        fixed
        top-0
        z-40

        dark:bg-[#15202B]
        bg-white
        
        transition
        duration-500
        ${sideMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center">
          <div className="font-semibold">
            Account info
          </div>
          <div
            onClick={handleSideMenu}
            className='
                cursor-pointer
                p-1.5
                hover:bg-neutral-200/20
                rounded-full
                transition
            '
          >
            <RxCross2 size={20} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }} />
          </div>
        </div>
        <div className="-ml-1.5 mt-2 w-[3.2rem]">
          <Link to='/profile'>
            {
              loggedUser.avatar && (
                  <img
                      src={loggedUser.avatar} 
                      alt="avatar" 
                      className="
                      object-cover
                      w-12
                      h-12
                      p-1.5
                      dark:bg-[#15202B]
                      bg-white
                      rounded-full
                      cursor-pointer
                      hover:bg-neutral-500/10
                      "
                  />
              )
            }
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <div className="font-bold text-lg capitalize">
            {
                loggedUser.username
            }
          </div>
          <div className="text-slate-500/80 text-sm flex gap-4">
            <div>
                <span className="dark:text-white text-black">{0}</span> Following
            </div>
            <div className="text-slate-500/80">
                <span className="dark:text-white text-black">{0}</span> Followers
            </div>
          </div>
        </div>
        <div className="mt-1 border-t border-neutral-500/50">
          <Link to='/profile'>
            <div className="
              flex
              items-center
              gap-4
              font-semibold
              cursor-pointer
              rounded
              mt-2
              px-1
              py-2
              hover:bg-neutral-500/20
              transition
            ">
              <BsFillPersonFill size={28} /> Profile
            </div>
          </Link>
          <Link to='/settings'>
            <div className="
              flex
              items-center
              gap-4
              font-semibold
              mt-2
              cursor-pointer
              rounded
              px-1
              py-2
              hover:bg-neutral-500/20
              transition
            ">
              <CiSettings size={28} /> Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenuModal