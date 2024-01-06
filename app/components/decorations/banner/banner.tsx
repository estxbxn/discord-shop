import Image from "next/image";
import styles from "./banner.module.css";
import { BannerProps } from "./types";

function Banner({ icon, subTitle, bannerUrl }: BannerProps) {
  return (
    <div
      className={styles.banner}
      style={{
        background: `url(${bannerUrl}) 0% 0% / cover border-box border-box`,
        outlineColor: `rgba(0, 57, 77, 0.4)`,
      }}
    >
      <Image
        alt="Category Banner"
        src={icon.categoryIcon}
        width={icon.width}
        height={icon.height}
      />
      <div className="subtitle">{subTitle}</div>
    </div>
  );
}

export default Banner;
