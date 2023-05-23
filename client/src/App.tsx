import LeftBar from "./components/LeftBar";
import MidBar from "./components/midbar/MidBar";
import RightBar from "./components/RightBar";
import "./index.css";
function App() {
  return (
    <>
      <div className="h-full flex flex-col-reverse sm:grid sm:grid-cols-6 sm:gap-2 bg-[#15202B]">
        <div className="border-2 border-black h-20 sm:h-full sm:col-span-1 xl:col-span-2">
          <LeftBar />
        </div>
        <div className="border-2 border-red-400  sm:col-span-4 h-full xl:col-span-2 sm:h-full">
          <MidBar />
        </div>
        <div className="border-2 border-red-200 sm:col-span-1 h-[7rem] sm:h-full xl:col-span-2">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default App;
