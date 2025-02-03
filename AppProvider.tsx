import React, { useContext } from "react";
import { View } from "react-native";
import { PortalProvider } from "@gorhom/portal";

import { lightTheme, darkTheme } from "./globalStyle";
import { Navigation } from "./src/components/navigation/Navigation";
import { GlobalContext } from "./src/store/GlobalContext";
import Loader from "./src/components/screens/loader/Loader";

export const AppProvider: React.FC = () => {
  const { appLoading, isDarkMode } = useContext(GlobalContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[theme.container, { flex: 1 }]}>
      <PortalProvider>
        <Navigation />
      </PortalProvider>
      {appLoading && <Loader />}
    </View>
  );
};
