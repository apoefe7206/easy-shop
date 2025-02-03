import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./customSearch.style";
import CustomIcon from "../../../../assets/CustomIcon";

interface CustomSearchProps {
  onChangeText: (text: string) => void;
}

export const CustomSearch: React.FC<CustomSearchProps> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your search"
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <CustomIcon style={styles.icon} name="search" />
      </TouchableOpacity>
    </View>
  );
};
