import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }: { children: React.ReactNode }) => {
  const [appLoading, setAppLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        appLoading,
        setIsDarkMode,
        setAppLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
