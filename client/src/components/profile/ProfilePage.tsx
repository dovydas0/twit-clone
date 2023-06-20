import { IoMdArrowBack } from "react-icons/io"
import { useAppSelector } from "../../store/store"
import { useNavigate } from "react-router";
import Button from "../custom_elements/Button";
import { FaRegCalendarAlt } from "react-icons/fa";

const ProfilePage = () => {
    const loggedUser = useAppSelector(state => state.user)

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const date = new Date(loggedUser.created_at as string);
    const JoinedDate = date.toLocaleString('default', { month: 'long'}) + ' ' + date.getFullYear();


    return (
      <div className="
          sm:col-span-7
          h-full
          lg:col-span-5
          xl:col-span-5
          border-white/20
          border
        bg-[#15202B]
      ">
        <div className="
            border-red-500 border
        ">
            <div className="flex items-center px-2 py-1">
                <div 
                    onClick={handleGoBack}
                    className="
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-white/10
                        "
                    >
                    <IoMdArrowBack size={22} />
                </div>
                <div className="ml-6">
                    <div className="font-bold text-[1.4rem] capitalize">
                        {
                            loggedUser.username
                        }
                    </div>
                    <div className="text-slate-400/80 text-sm tracking-wider">
                        0 Tweets
                    </div>
                </div>
            </div>
            <div className="bg-slate-600 h-56 overflow-hidden">
                {
                    loggedUser.cover_image && (
                        <img 
                            src={loggedUser.cover_image}
                            alt="cover image"
                            className="m-auto w-full object-cover" />
                    )
                }
            </div>
            <div className="
                flex
                justify-between
                px-4
            ">
                {
                    loggedUser.avatar && (
                        <img 
                            src={loggedUser.avatar} 
                            alt="avatar" 
                            className="
                                object-cover
                                w-36
                                p-1.5
                                bg-[#15202B]
                                rounded-full
                                mt-[-4.5rem]
                            "
                        />
                    )
                }
                <div className="mt-3">
                    <Button
                        small
                        outline
                        value='Edit profile'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3 px-4 mt-4">
                <div className="font-bold text-2xl capitalize">
                    {
                        loggedUser.username
                    }
                </div>
                <div className="flex gap-2 items-center text-slate-400/80">
                    <FaRegCalendarAlt /> Joined {JoinedDate}
                </div>
                <div className="text-slate-400/80 flex gap-4">
                    <div>
                        <span className="text-white">{0}</span> Following
                    </div>
                    <div className="text-slate-400/80">
                        <span className="text-white">{0}</span> Followers
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default ProfilePage