import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";

import { styles } from "./settings.style";
import { CustomText } from "../../atoms/customText/CustomText";
import { GlobalContext } from "../../../store/GlobalContext";
import CustomIcon from "../../../../assets/CustomIcon";
import { globalStyle } from "../../../../globalStyle";

export const Settings: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(GlobalContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && globalStyle.darkContainer]}>
      <View style={styles.settingsContainer}>
        <CustomText
          type="default"
          text={isDarkMode ? "Dark Mode" : "Light Mode"}
          style={isDarkMode ? styles.darkText : styles.lightText}
        />
        <TouchableOpacity onPress={toggleDarkMode}>
          <CustomIcon
            style={[styles.icon, isDarkMode && styles.activeIcon]}
            name={isDarkMode ? "toggle-on" : "toggle-off"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
