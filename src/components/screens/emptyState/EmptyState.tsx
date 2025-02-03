import React, { useContext } from "react";
import { Image, View } from "react-native";

import { styles } from "./emptyState.style";
import { CustomText } from "../../atoms/customText/CustomText";
import { GlobalContext } from "../../../store/GlobalContext";

interface EmptyStateProps {
  title: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title }) => {
  const { isDarkMode } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/empty.png")}
      />
      <CustomText
        style={[styles.title, isDarkMode && styles.darkTitle]}
        type="default"
        text={title}
      />
    </View>
  );
};
