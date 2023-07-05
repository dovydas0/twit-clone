import { BsTwitter } from "react-icons/bs";
import { User } from "../../types/UserType";

interface ContentTypeProps {
    handleSideMenu: () => void;
    feedType: string;
    onClick: (e: string) => void;
    loggedUser: User;
}

const ContentType: React.FC<ContentTypeProps> = ({
    handleSideMenu,
    feedType,
    onClick,
    loggedUser
}) => {

  return (
    <div className="sticky top-0 mr-[1px] dark:bg-[#15202B]/80 bg-white/80 backdrop-blur-md">
        {/* Mobile screens */}
        <div className="flex sm:hidden items-center pl-2 pt-2 font-semibold text-xl">
            <button 
            onClick={handleSideMenu}
            className={`
                z-10
                flex
                justify-between
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
                <img
                    src={loggedUser.avatar || 'default_avatar.jpg'}
                    className="rounded-full object-cover w-10 h-10"
                    alt="user image"
                />
            </button>
            <div className="w-full flex justify-center -ml-12">
                <BsTwitter size={28} />
            </div>
        </div>

        {/* bigger screens */}
        <div className="hidden sm:block pl-3 py-3 font-semibold text-xl">
            Home
        </div>
        <div className="flex justify-center">
            <span 
                onClick={() => onClick("forYou")}
                className="
                    w-1/2
                    hover:bg-neutral-500/50
                    mx-auto
                    flex
                    justify-center
                    transition
                    cursor-pointer
                    py-2
                "
            >
                <button className={`
                    ${feedType === 'forYou' ? 'border-b-4  border-sky-500' : ''}
                `}>
                    For you
                </button>
            </span>
            <span 
                onClick={() => onClick("following")}
                className="
                    w-1/2
                    hover:bg-neutral-500/50
                    mx-auto
                    flex
                    justify-center
                    transition
                    cursor-pointer
                    py-2
                "
            >
                <button className={`
                    ${feedType === 'following' ? 'border-b-4 border-sky-500' : ''}
                `}>
                    Following
                </button>
            </span>
        </div>
    </div>
  )
}

export default ContentType