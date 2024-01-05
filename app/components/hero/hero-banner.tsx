import Image from "next/image";
import styles from "./hero-banner.module.css";

type HeroBannerProps = {
  title: string;
  subTitle: string;
  bannerUrl: string;
};

function HeroBanner({ title, subTitle, bannerUrl }: HeroBannerProps) {
  return (
    <div
      className={styles.heroBanner}
      style={{
        background: `center/cover no-repeat url(${bannerUrl}),lightgray`,
      }}
    >
      <div className={styles.heroDescription}>
        <h2 className={styles.heroTitle}>{title}</h2>
        <div className={styles.heroSubTitle}>{subTitle}</div>
      </div>
      <div className={styles.heroArts}>
        <Image
          className={styles.heroArtsGrid}
          alt=""
          src="/assets/img/hero/grid.png"
          width="402"
          height="484"
        />
        <Image
          className={styles.heroArtsGridSmol}
          alt=""
          src="/assets/img/hero/grid-smol.png"
          width="85"
          height="60"
        />
        <Image
          className={styles.heroArtsGridMedium}
          alt=""
          src="/assets/img/hero/grid-medium.png"
          width="178"
          height="106"
        />
        <Image
          className={styles.heroArtsHand}
          alt=""
          src="/assets/img/hero/hand.png"
          width="265"
          height="238"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
