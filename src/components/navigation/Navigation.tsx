import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainStack } from "./stacks/MainStack";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};
