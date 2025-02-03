import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { CustomText } from "../../atoms/customText/CustomText";
import { styles } from "./productCard.style";
import CustomIcon from "../../../../assets/CustomIcon";
import { GlobalContext } from "../../../store/GlobalContext";

interface ProdutCardProps {
  image: string;
  title: string;
  price: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
  callback?: () => void;
}

export const ProductCard: React.FC<ProdutCardProps> = ({
  image,
  title,
  price,
  isFavorite,
  toggleFavorite,
  callback,
}: ProdutCardProps) => {
  const { isDarkMode } = useContext(GlobalContext);
  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.container, isDarkMode && styles.darkContainer]}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <CustomText style={styles.title} text={title} type="default" />
        <Text style={styles.price}>{price} $</Text>
      </View>
      <TouchableOpacity onPress={toggleFavorite} style={styles.iconContainer}>
        <CustomIcon
          style={styles.icon}
          name={isFavorite ? "favorite-fill" : "favorite"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
