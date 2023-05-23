
interface ContentTypeProps {
    feedType: string;
    onClick: (e: string) => void;
}

const ContentType: React.FC<ContentTypeProps> = ({
    feedType,
    onClick
}) => {

  return (
    <div className="">
        <div className="pl-3 py-3 font-semibold text-xl">
            Home
        </div>
        <div className="flex justify-center">
            <span 
                onClick={() => onClick("forYou")}
                className="
                    w-1/2
                    hover:bg-neutral-600
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
                    hover:bg-neutral-600
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