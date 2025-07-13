import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

function Nav() {
  return (
    <div className="w-full h-[70px]    flex justify-between items-center px-[32px] ">
      <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow-xl ">
        <MdFastfood className="w-[25px] h-[25px] text-green-500" />
      </div>

      <form className="w-[70%] h-[45px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl">
        <FaSearch className="text-green-400 w-[13px] h-[13px]" />
        <input
          type="text"
          className="w-[100%] outline-none text-[15px]"
          placeholder="Search Items .."
        />
      </form>

      <div className="w-[50px] h-[50px] bg-white flex items-center justify-center relative rounded-md shadow-xl ">
        <span className="absolute top-0 right-2 text-green-500 font-semibold text-[15px] ">
          0
        </span>
        <LuShoppingBag className="w-[25px] h-[25px] text-green-500 " />
      </div>
    </div>
  );
}

export default Nav;
