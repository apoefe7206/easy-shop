import React, { useContext } from "react";
import { View } from "react-native";

import { GlobalContext } from "../../../store/GlobalContext";

export const Home: React.FC = () => {
  const { setAppLoading } = useContext(GlobalContext);
  setAppLoading(false);
  return (
    <View>
      <View></View>
    </View>
  );
};
