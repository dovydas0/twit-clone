import { Route } from "react-router-dom";
import { useState } from 'react';

import LeftBar from "./LeftBar";
import MidBar from "./midbar/MidBar";
import RightBar from "./RightBar";

import LoginModal from "./modals/LoginModal";
import Button from "./custom_elements/Button";

const Home = () => {
    const [ loginModalOpen, setLoginModalOpen ] = useState(false);


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

        {/* MAKE SEPARATE COMPONENT */}
        <div className="
            fixed
            bottom-0
        ">
            <div className="w-screen h-20 bg-sky-500 flex flex-col justify-center items-center">
                <div>
                    <div>
                        Don't miss what's happening
                    </div>
                    <div>
                        People on Twitter are the first to know.
                    </div>
                </div>
                <div>
                    <Button
                        value="Sing up"
                        small
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home