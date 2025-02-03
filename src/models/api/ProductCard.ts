export type ProductCardData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductCardResponse = ProductCardData[];
