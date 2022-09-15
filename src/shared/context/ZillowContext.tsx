import { createContext, useState } from "react";
import { contextTypes } from "../../types";

const ZillowContext = createContext<contextTypes | null>(null);

export const ZillowContextProvider: React.FC<any> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ZillowContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ZillowContext.Provider>
  );
};

export default ZillowContext
