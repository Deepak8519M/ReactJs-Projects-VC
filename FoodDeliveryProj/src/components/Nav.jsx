import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);

  // useEffect(() => {
  //   if (input.trim() === "") {
  //     setCate([]); // Show nothing if input is empty
  //     return;
  //   }

  //   const newList = food_items.filter((item) =>
  //     item.food_name.toLowerCase().includes(input.toLowerCase())
  //   );

  //   setCate(newList);
  // }, [input]);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );

    setCate(newList);
  }, [input]);

  return (
    <div className="md:px-8 w-full h-[70px]    flex justify-between items-center px-2 ">
      <div className="w-[50px] h-[50px] bg-white flex items-center justify-center cursor-pointer rounded-md shadow-xl ">
        <MdFastfood className="w-[25px] h-[25px] text-green-500" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[50%] md:w-[70%] h-[45px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl"
      >
        <FaSearch className="text-green-400 w-[13px] h-[13px]" />
        <input
          type="text"
          className="text-[14px] w-[100%] outline-none md:text-[16px]"
          placeholder="Search Items .."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div
        className="w-[50px] h-[50px] cursor-pointer bg-white flex items-center justify-center relative rounded-md shadow-xl "
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 right-2 text-green-500 font-semibold text-[15px] ">
          0
        </span>
        <LuShoppingBag className="w-[25px] h-[25px] text-green-500 " />
      </div>
    </div>
  );
}

export default Nav;
