import React, { useState, useEffect, ReactNode } from "react";
import { Appearance } from "react-native";

import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }: { children: ReactNode }) => {
  const [appLoading, setAppLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === "dark");
    });

    return () => subscription.remove();
  }, []);

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
