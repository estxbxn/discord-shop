import { CardProps } from "./types";

import styles from "./card.module.css";
import Image from "next/image";

function Card({ icon, name, description, price }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.productName}>{name}</div>
      </div>
      <div className={styles.productDetailsWrapper}>
        
      </div>
    </div>
  );
}

export default Card;
