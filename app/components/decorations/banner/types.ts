export type BannerIcon = {
  categoryIcon: string;
  width?: number;
  height?: number;
};

export type BannerProps = {
  icon: BannerIcon;
  subTitle: string;
  bannerUrl: string;
};
