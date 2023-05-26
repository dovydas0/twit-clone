import LeftBar from "./LeftBar";
import MidBar from "./midbar/MidBar";
import RightBar from "./RightBar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setState } from "../store/features/stateSlice";

const Home = () => {

    const dispatch = useAppDispatch();
    const selector = useAppSelector(state => state.state);

  return (
    <>
        <div className="h-20 sm:h-full sm:col-span-1 lg:col-span-1 xl:col-span-2 bg-[#15202B]">
            <LeftBar currentUser={true} />
        </div>
        <div className="sm:col-span-7 h-full lg:col-span-5 xl:col-span-5 border-white/20 border bg-[#15202B]">
            <MidBar />
        </div>
        <div className="sm:col-span-1 lg:col-span-3 xl:col-span-2 bg-[#15202B]">
            <RightBar />
        </div>
    </>
  )
}

export default Home