import LeftBar from "./LeftBar";
import MidBar from "./midbar/MidBar";
import RightBar from "./RightBar";
import Footer from "./Footer";

const Home = () => {

  return (
    <>
        <div className="border-2 border-green-400 h-20 sm:h-full sm:col-span-1 xl:col-span-2">
            <LeftBar />
        </div>
        <div className="border-2 border-red-400  sm:col-span-4 h-full xl:col-span-2">
            <MidBar />
        </div>
        <div className="border-2 border-amber-500 sm:col-span-1 h-[7rem] sm:h-full xl:col-span-2">
            <RightBar />
        </div>
        <Footer />
    </>
  )
}

export default Home