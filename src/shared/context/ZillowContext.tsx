import { contextTypes } from "../../types";
import { createContext, useState } from "react";

const ZillowContext = createContext<contextTypes | null>(null);

export const ZillowContextProvider: React.FC<any> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <ZillowContext.Provider value={{ isLoggedIn, setIsLoggedIn , isLogin, setIsLogin}}>
      {children}
    </ZillowContext.Provider>
  );
};

export default ZillowContext
