import LeftBar from "./components/LeftBar";
import MidBar from "./components/midbar/MidBar";
import RightBar from "./components/RightBar";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const modalOpen = true;


  return (
    <>
      <div className=" sm:grid sm:grid-cols-6 sm:gap-2 bg-[#15202B]">
        <div className="border-2 border-green-400 h-20 sm:h-full sm:col-span-1 xl:col-span-2">
          <LeftBar />
        </div>
        <div className="border-2 border-red-400  sm:col-span-4 h-full xl:col-span-2">
          <MidBar />
        </div>
        <div className="border-2 border-amber-500 sm:col-span-1 h-[7rem] sm:h-full xl:col-span-2">
          <RightBar />
        </div>
        {
          modalOpen ?
            <Modal />
            :
            ''
        }
      </div>
    </>
  );
}

export default App;
