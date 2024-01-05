export type CardIcon = {
  coverImage: string;
  animatedIcon?: string;
};

export type CardProps = {
  icon: CardIcon;
  name: string;
  description: string;
  price: number;
};
