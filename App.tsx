import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";

import { navigationRef } from "./utils/helpers/navigation";
import { globalStyle } from "./globalStyle";
import { renderAlert } from "./utils/helpers/renderAlert";
import { AppProvider } from "./AppProvider";
import GlobalState from "./src/store/GlobalStore";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={globalStyle.flex1}>
      <NavigationContainer ref={navigationRef}>
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
            <AppProvider />
          </GlobalState>
        </ToastProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
