import React from "react";

interface GlobalContextProps {
  appLoading: boolean;
  isDarkMode: boolean;
  setAppLoading: (value: boolean) => void;
  setIsDarkMode: (value: boolean) => void;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  appLoading: false,
  isDarkMode: false,
  setAppLoading: () => {},
  setIsDarkMode: () => {},
});
