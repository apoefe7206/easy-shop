import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { styles } from "./productDetail.style";
import { CustomText } from "../../atoms/customText/CustomText";
import CustomIcon from "../../../../assets/CustomIcon";
import { GlobalContext } from "../../../store/GlobalContext";

interface ProductDetailProps {
  image: string;
  title: string;
  price: number;
  description: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
  callback?: () => void;
  handleCloseModal: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  image,
  title,
  description,
  price,
  isFavorite,
  toggleFavorite,
  callback,
  handleCloseModal,
}) => {
  const { isDarkMode } = useContext(GlobalContext);
  return (
    <>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, isDarkMode && styles.darkModalView]}>
          <TouchableOpacity
            onPress={toggleFavorite}
            style={styles.iconContainer}
          >
            <CustomIcon
              style={styles.icon}
              name={isFavorite ? "favorite-fill" : "favorite"}
            />
          </TouchableOpacity>
          <Image source={{ uri: image }} style={styles.image} />
          <CustomText style={styles.title} type="default" text={title} />
          <CustomText
            style={[styles.description, isDarkMode && styles.darkDescription]}
            type="default"
            text={description}
          />
          <Text style={styles.price}>{price}</Text>
          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </View>
    </>
  );
};
