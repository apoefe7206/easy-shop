import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabs from "../bottomTabs/BottomTabs";
import { globalStyle } from "../../../../globalStyle";
import { appColors } from "../../../../appColors";

export type MainStackParamList = {
  BottomTabs: undefined;
};

export const MainStack = () => {
  const Stack = createStackNavigator<MainStackParamList>();

  return (
    <View style={globalStyle.flex1}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: appColors.redOrj,
            },
            headerTintColor: "#fff",
            headerTitle: "Easy Shop",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
