import React from "react";
import Nav from "../components/Nav";
import Categories from "../Category";

function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-4 bg-red-300 w-full">
        {Categories.map((item) => {
          return (
            <div className="w-[100px] h-[100px] bg-white flex items-center gap-2 p-4 justify-center flex-col">
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
