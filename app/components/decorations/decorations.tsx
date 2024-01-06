import Banner from "./banner/banner";
import Card from "./card/card";
import styles from "./decorations.module.css";

function Decorations() {
  return (
    <div className={styles.categories}>
      <div className={styles.categoryWrapper}>
        <Banner
          icon={{
            categoryIcon: "/assets/shop/categories/monster/icon.png",
            width: 367,
            height: 96,
          }}
          subTitle="Nous ne sommes pas une menace, simplement incompris."
          bannerUrl="/assets/shop/categories/monster/banner.png"
        />
        <div>
          <div className={styles.categoryTitle}>Décorations d'avatar</div>
          <div className={styles.cardsContainer}>
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
          </div>
        </div>
        <Banner
          icon={{
            categoryIcon: "/assets/shop/categories/monster/icon.png",
            width: 367,
            height: 96,
          }}
          subTitle="Nous ne sommes pas une menace, simplement incompris."
          bannerUrl="/assets/shop/categories/monster/banner.png"
        />
        <div>
          <div className={styles.categoryTitle}>Décorations d'avatar</div>
          <div className={styles.cardsContainer}>
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
            <Card
              icon={{
                coverImage: "/assets/shop/avatars/lasermi/cover.png",
                animatedIcon: "/assets/shop/avatars/lasermi/animated.gif",
              }}
              name="Beamchop"
              description="Oh, il est tellement mign- AHHH"
              price={3.99}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decorations;
