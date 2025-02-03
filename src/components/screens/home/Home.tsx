import React, { useContext, useState } from "react";
import { View, FlatList, Modal } from "react-native";

import { GlobalContext } from "../../../store/GlobalContext";
import { useQueryFetch } from "../../../../utils/hooks/useFetch/useQueryFetch";
import { ProductCard } from "../../molecules/productCard/ProductCard";
import { styles } from "./home.style";
import {
  ProductCardData,
  ProductCardResponse,
} from "../../../models/api/ProductCard";
import { useFavorites } from "../../../utils/storage/FavoritesContext";
import { ProductDetail } from "../productDetail/ProductDetail";
import { globalStyle } from "../../../../globalStyle";

export const Home: React.FC = () => {
  const { isDarkMode } = useContext(GlobalContext);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardData | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: { data: products = [] } = {} } = useQueryFetch<
    ProductCardResponse[]
  >("GET", "products", "/products");

  const handleCardPress = (product: ProductCardData) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <View style={[styles.container, isDarkMode && globalStyle.darkContainer]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            image={item.image}
            isFavorite={isFavorite(item.id)}
            toggleFavorite={() => toggleFavorite(item)}
            callback={() => handleCardPress(item)}
          />
        )}
      />
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <ProductDetail
            title={selectedProduct.title}
            description={selectedProduct.description}
            price={selectedProduct.price}
            image={selectedProduct.image}
            isFavorite={isFavorite(selectedProduct.id)}
            toggleFavorite={() => toggleFavorite(selectedProduct)}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </View>
  );
};
