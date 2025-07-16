import React, { createContext } from "react";
export const dataContext = createContext();

function UserContext({ children }) {
  return <div>{children}</div>;
}

export default UserContext;
