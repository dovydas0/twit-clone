import { IoMdArrowBack } from "react-icons/io"
import { useAppSelector } from "../../store/store"
import { useNavigate } from "react-router";
import { useState } from "react";
import Button from "../custom_elements/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import EditProfileModal from "../modals/EditProfileModal";

const categories = [
    {
        category: "Tweets",
        emptyContentHeader: "You don't have any Tweets yet",
        emptyContentText: "When you Tweet something, they will show up here."
    },
    {
        category: "Replies",
        emptyContentHeader: "You don't have any replies yet",
        emptyContentText: "When you reply to tweets, they will show up here."
    },
    {
        category: "Media",
        emptyContentHeader: "Lights, camera... attachments!",
        emptyContentText: "When you send Tweets with photos or videos in them, they will show up here."
    },
    {
        category: "Likes",
        emptyContentHeader: "You don't have any likes yet",
        emptyContentText: "Tap the heart on any Tweet to show it some love. When you do, it'll show up here."
    }
]

const ProfilePage = () => {
    const loggedUser = useAppSelector(state => state.user)
    const [ selectedCat, setSelectedCat ] = useState(categories[0].category)
    const [ openedEditProfile, setOpenedEditProfile ] = useState(false)

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const date = new Date(loggedUser.created_at as string);
    const JoinedDate = date.toLocaleString('default', { month: 'long'}) + ' ' + date.getFullYear();

    const handleProfileEditModal = () => {
        setOpenedEditProfile(state => !state)
    }

    return (
      <div className="
          sm:col-span-8
          xl:h-auto
          md:h-full
          h-full
          overflow-scroll
          sm:mb-0
          mb-12
          lg:col-span-6
          xl:col-span-6
          xl:ml-[223px] 
          sm:ml-[76px]
          
          border-neutral-500/50
          border
          dark:text-neutral-100
          text-zinc-900
          dark:bg-[#15202B]
          bg-white
      ">
        <div>
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
                        {loggedUser.username}
                    </div>
                    <div className="text-slate-500/80 text-sm tracking-wider">
                        {loggedUser.tweet_count} Tweets
                    </div>
                </div>
            </div>
            {
                loggedUser.cover_image ? (
                    <div className="h-56 overflow-hidden">
                        <img 
                            src={loggedUser.cover_image}
                            alt="cover image"
                            className="m-auto w-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="bg-slate-600 h-56 overflow-hidden">
                    </div>
                )
            }
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
                                h-36
                                p-1.5
                                dark:bg-[#15202B]
                                bg-white
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
                        themeable
                        themedHover
                        color='white'
                        value='Edit profile'
                        onClick={handleProfileEditModal}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3 px-4 mt-4">
                <div className="font-bold text-2xl capitalize">
                    {
                        loggedUser.username
                    }
                </div>
                <div className="flex gap-2 items-center text-slate-500/80">
                    <FaRegCalendarAlt /> Joined {JoinedDate}
                </div>
                <div className="text-slate-500/80 flex gap-4">
                    <div>
                        <span className="dark:text-white text-black">{0}</span> Following
                    </div>
                    <div className="text-slate-500/80">
                        <span className="dark:text-white text-black">{0}</span> Followers
                    </div>
                </div>
            </div>
            <div className='
                mt-8
                flex
                justify-around
            '>
            {
                categories.map(category => (
                        <div 
                            key={category.category}
                            onClick={() => setSelectedCat(category.category)}
                            className="
                                hover:bg-white/10
                                text-center
                                h-14
                                flex
                                pt-[0.9rem]
                                font-semibold
                                text-lg
                                w-full
                                cursor-pointer
                            "
                        >
                            <p className={`
                                border-sky-500
                                ${category.category === selectedCat ? 'border-b-4' : ''}                                    
                                w-fit
                                mx-auto
                            `}>
                                {category.category}
                            </p>
                        </div>
                    )
                )
            }
            </div>
            <div
                className="
                    flex
                    border-neutral-500/50
                    border-t
                    px-4
                "
            >
                {
                    categories.map(category => (
                        category.category === selectedCat && (
                            <div 
                                key={category.category}
                                className="
                                    mt-10
                                    mb-14
                                    mx-auto
                                    w-96
                                    flex
                                    flex-col
                                    gap-4
                                "
                            >
                                <div className="font-bold text-3xl">
                                    {
                                        category.emptyContentHeader
                                    }
                                </div>
                                <div className="text-md text-slate-500/80">
                                    {
                                        category.emptyContentText
                                    }
                                </div>
                            </div>
                        )
                    ))
                }
            </div>
        </div>
        {
            openedEditProfile && (
                <EditProfileModal handleProfileEditModal={handleProfileEditModal} />
            )
        }
      </div>
    )
}

export default ProfilePage