import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-4  w-full cursor-pointer">
          {Categories.map((item) => {
            return (
              <div
                className="w-[120px] h-[120px] bg-white flex items-center gap-2 p-4 justify-center flex-col text-[16px] font-semibold text-gray-600 rounded-sm shadow-xl hover:bg-green-200 transition-all duration-200 hover:text-black"
                onClick={() => filter(item.name)}
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex-wrap gap-5 px-5 pt-8 pb-8 flex justify-center items-center">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      <div
        className={`  w-full md:w-[35vw] h-[100vh] bg-white fixed top-0 right-0 shadow-xl p-5 ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 `}
      >
        <header className="w-[100%]  flex justify-between items-center ">
          <span className="text-green-400 text-[20px] font-semibold">
            Order Items
          </span>
          <RxCross2
            className="text-green-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>

        <Card2 />
      </div>
    </div>
  );
}

export default Home;
