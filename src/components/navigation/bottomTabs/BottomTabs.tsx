import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import CustomIcon from "../../../../assets/CustomIcon";
import { Home } from "../../screens/home/Home";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   switch (route.name) {
        //     case "Home":
        //       iconName = "home-solid";
        //       break;
        //     case "Jobs":
        //       iconName = "briefcase";
        //       break;
        //     case "RoadMap":
        //       iconName = "roadmap";
        //       break;
        //     case "MyLearning":
        //       iconName = "id-management";
        //       break;
        //     case "Profile":
        //       iconName = "people";
        //       break;
        //     default:
        //       iconName = "";
        //   }

        //   return <CustomIcon name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
