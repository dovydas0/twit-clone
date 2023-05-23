import React from "react";
import {
  RiNotification2Line,
  RiHome7Fill,
  CiSearch,
  BiEnvelope,
  BsTwitter,
  BsBookmark,
  BsFillPersonFill,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
} from "react-icons/all";
import { FaBeer } from "react-icons/fa";

function LeftBar() {
  return (
    <div className="h-full bg-[#15202B] relative ">
      <div className="h-full bg-[#15202B] grid  sm:grid-cols-1 sm:h-4/4 sm:w-full sm:absolute right-0 gap-5 mt-2 w-full">
        <div className="h-full bg-[#15202B] grid grid-cols-4 sm:grid-cols-1 sm:h-3/4 sm:w-2/4 sm:absolute right-0 gap-5 w-4/4  xl:w-2/4  left-0 ">
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4 ">
              <button className="">{<BsTwitter />}</button>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<RiHome7Fill />}</button>
              <p className="xl:flex hidden">Home</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<CiSearch />}</button>
              <p className="xl:block hidden ">Search</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<RiNotification2Line />}</button>
              <p className="xl:block hidden">Notifications</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<BiEnvelope />}</button>
              <p className="xl:block hidden">Messages</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<BsBookmark />}</button>
              <p className="xl:block hidden">Bookmark</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center text-[2.8rem] xl:justify-end xl:text-[3rem]">
            <div className="xl:flex gap-3 xl:h-full justify-start items-center w-2/4">
              <button className="">{<BsFillPersonFill />}</button>
              <p className="xl:block hidden">Profile</p>
            </div>
          </div>
        </div>
        <div className="text-white justify-center items-center text-[2.8rem] hidden sm:flex bg-[#1D9BF0] rounded-[100%] w-[10rem] h-[10rem] absolute bottom-10 left-20 xl:right-0">
          <button className="">{<AiOutlinePlus />}</button>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
