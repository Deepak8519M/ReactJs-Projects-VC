import React, { createContext, useState } from "react";
export const dataContext = createContext();

function UserContext({ children }) {
  let [input, setInput] = useState("");
  let data = {input,setInput};

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
