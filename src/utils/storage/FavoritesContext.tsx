import React, { createContext, useState, useEffect, useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import { saveFavorites, getFavorites } from "./storage";

interface FavoritesContextProps {
  favorites: any[];
  toggleFavorite: (item: any) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const toast = useToast();

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await getFavorites();
      setFavorites(storedFavorites);
    };

    loadFavorites();
  }, []);

  const toggleFavorite = (item: any) => {
    const isFav = favorites.some((fav) => fav.id === item.id);
    const newFavorites = isFav
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];
    setFavorites(newFavorites);
    saveFavorites(newFavorites);

    if (isFav) {
      toast.show(`${item.title} removed from favorites`, { type: "warning" });
    } else {
      toast.show(`${item.title} added to favorites`, { type: "success" });
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
