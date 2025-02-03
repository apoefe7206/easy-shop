import React, { useContext } from "react";
import { View, FlatList } from "react-native";

import { useFavorites } from "../../../utils/storage/FavoritesContext";
import { ProductCard } from "../../molecules/productCard/ProductCard";
import { styles } from "./favorites.style";
import { GlobalContext } from "../../../store/GlobalContext";
import { globalStyle } from "../../../../globalStyle";
import { EmptyState } from "../emptyState/EmptyState";

export const Favorites: React.FC = () => {
  const { isDarkMode } = useContext(GlobalContext);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <View style={[styles.container, isDarkMode && globalStyle.darkContainer]}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              image={item.image}
              isFavorite={isFavorite(item.id)}
              toggleFavorite={() => toggleFavorite(item)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <EmptyState title="your favorites are empty please add product" />
      )}
    </View>
  );
};
