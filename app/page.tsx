import styles from "@/styles/page.module.css";
import Decorations from "./components/decorations/decorations";
import HeroBanner from "./components/hero/hero-banner";

const TITLE = "Envie d'un nouveau look ?";
const SUB_TITLE =
  "Charmant. Féroce. Affamé. Quel que soit ton style, achète et collectionne tes styles préférés pour ton profil pour toutes les occasions.";
const BANNER_URL = "/assets/img/hero-banner.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner title={TITLE} subTitle={SUB_TITLE} bannerUrl={BANNER_URL} />
      <Decorations />
    </main>
  );
}
