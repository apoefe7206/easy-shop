import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";

import { navigationRef } from "./utils/helpers/navigation";
import { globalStyle } from "./globalStyle";
import { renderAlert } from "./utils/helpers/renderAlert";
import { AppProvider } from "./AppProvider";
import NetworkProvider from "./NetworkProvider";
import GlobalState from "./src/store/GlobalStore";
import { FavoritesProvider } from "./src/utils/storage/FavoritesContext";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={globalStyle.flex1}>
      <NavigationContainer ref={navigationRef}>
        <NetworkProvider>
          <ToastProvider
            placement="top"
            renderType={{
              success: (toast) => renderAlert("success", toast),
              error: (toast) => renderAlert("error", toast),
              warning: (toast) => renderAlert("warning", toast),
              info: (toast) => renderAlert("info", toast),
            }}
            offset={50}
            duration={3000}
          >
            <GlobalState>
              <FavoritesProvider>
                <AppProvider />
              </FavoritesProvider>
            </GlobalState>
          </ToastProvider>
        </NetworkProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
