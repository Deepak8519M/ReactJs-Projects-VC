import React from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";

function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-4  w-full cursor-pointer">
        {Categories.map((item) => {
          return (
            <div className="w-[120px] h-[120px] bg-white flex items-center gap-2 p-4 justify-center flex-col text-[16px] font-semibold text-gray-600 rounded-sm shadow-xl hover:bg-green-200 transition-all duration-200 hover:text-black ">
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex-wrap gap-5 px-5 pt-8 pb-8 flex justify-center items-center">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
