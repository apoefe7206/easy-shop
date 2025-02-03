import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalContext } from "../../../store/GlobalContext";
import { appColors } from "../../../../appColors";

import CustomIcon from "../../../../assets/CustomIcon";
import { Home } from "../../screens/home/Home";
import { Favorites } from "../../screens/favorites/Favorites";
import { Settings } from "../../screens/settings/Settings";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { isDarkMode } = useContext(GlobalContext);

  const tabBarOptions = {
    activeTintColor: isDarkMode ? appColors.darkText : appColors.lightText,
    inactiveTintColor: isDarkMode ? appColors.lightText : appColors.darkText,
    style: {
      backgroundColor: isDarkMode ? appColors.upMaroon : appColors.redOrj,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Favorites":
              iconName = "favorite";
              break;
            case "Settings":
              iconName = "settings";
              break;
            default:
              iconName = "";
          }

          return <CustomIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: tabBarOptions.activeTintColor,
        tabBarInactiveTintColor: tabBarOptions.inactiveTintColor,
        tabBarStyle: tabBarOptions.style,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
