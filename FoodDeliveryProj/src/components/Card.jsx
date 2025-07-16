import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({ name, image, id, price, type }) {
  return (
    <div className="w-[230px] h-[290px] p-2 bg-white rounded-lg flex flex-col gap-2 shadow-lg cursor-pointer border-transparent border-2  hover:border-2 hover:border-green-400">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="w-full  flex justify-between items-center">
        <div className="text-green-500 text-[17px] font-bold">Rs {price}/-</div>
        <div className="flex  justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-2  bg-[#31e527] text-white transition-all rounded-lg bg hover:bg-[#43fd39]">
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
