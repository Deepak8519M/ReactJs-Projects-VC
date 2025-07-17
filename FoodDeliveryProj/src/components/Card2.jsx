import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";

function Card2() {
  return (
    <div className="w-full h-[120px] bg-white p-2 shadow-lg flex justify-between   ">
      <div className="w-[60%] h-full  flex gap-5">
        <div className="w-[60%] bg-blue-200 h-full overflow-hidden rounded-lg">
          <img src={image1} alt="" className="w-[100%] object-cover h-[100%]" />
        </div>
        <div className="w-[40%] h-full  flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">Pancake</div>
          <div className="w-[90%] flex h-[50px] text-xl  rounded-lg overflow-hidden shadow-md font-semibold border-2 border-green-400">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-300 hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 cursor-pointer text-green-400 flex justify-center items-center">
              1
            </span>
            <button className="w-[30.2%] h-full bg-white flex justify-center items-center  text-green-300 hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-green-400 font-semibold">Rs 499/-</span>
        <RiDeleteBin6Line className="text-red-500 w-[30px] h-[30px] cursor-pointer" />
      </div>
    </div>
  );
}

export default Card2;
