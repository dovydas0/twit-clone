import { RxCross2 } from "react-icons/rx"
import { useAppSelector } from "../../store/store";

interface SideMenuModalProps {
  handleSideMenu: () => void;
}

const SideMenuModal: React.FC<SideMenuModalProps> = ({
  handleSideMenu
}) => {
  const darkTheme = useAppSelector(state => state.theme.dark);


  return (
    <div className="
      dark:text-neutral-100
      text-zinc-900
      
      block
      sm:hidden
    ">
      <div 
        onClick={handleSideMenu}
        className="
          z-30
          absolute
          top-0
          left-0
          w-screen
          h-screen
          bg-neutral-500/50
        "
      >
      </div>
      <div className="
        w-[17rem]
        p-3
        absolute
        top-0
        z-40

        dark:bg-[#15202B]
        bg-white

        transition
      ">
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
      </div>
    </div>
  )
}

export default SideMenuModal