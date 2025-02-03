import React, { useContext } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomTabs } from "../bottomTabs/BottomTabs";
import { globalStyle } from "../../../../globalStyle";
import { appColors } from "../../../../appColors";
import { GlobalContext } from "../../../store/GlobalContext";

export type MainStackParamList = {
  BottomTabs: undefined;
};

export const MainStack = () => {
  const { isDarkMode } = useContext(GlobalContext);
  const Stack = createStackNavigator<MainStackParamList>();

  const headerStyle = {
    backgroundColor: isDarkMode ? appColors.upMaroon : appColors.redOrj,
  };

  const headerTintColor = isDarkMode ? appColors.white : appColors.white;

  return (
    <View style={globalStyle.flex1}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: true,
            headerStyle,
            headerTintColor,
            headerTitle: "Easy Shop",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
