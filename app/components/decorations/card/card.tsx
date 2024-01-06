"use client";

import Image from "next/image";
import Button from "../button/button";
import styles from "./card.module.css";
import { CardProps } from "./types";
import { useEffect, useState } from "react";

function Card({ icon, name, description, price }: CardProps) {
  const [isHovered, setHovered] = useState(false);

  const onHover = () => {
    console.log("hovered, so change the image to the animated state");
    setHovered(true);
  };
  const cancelHover = () => {
    console.log("not hovered, so change the image to the simple state");
    setHovered(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={onHover}
      onMouseLeave={cancelHover}
      style={{
        background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box;`,
        borderColor: `rgba(0, 57, 77, 0.4);`,
        boxShadow: `none;`,
      }}
    >
      <div
        className={styles.iconWrapper}
        role="img"
        aria-label="Avatar"
        aria-hidden="false"
        style={{
          width: `120px;`,
          height: `120px;`,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <foreignObject x="0" y="0" width="120" height="120">
            <div className={styles.iconStack}>
              <Image
                src="/assets/shop/default-avatar.png"
                width={120}
                height={120}
                alt=" "
                className={styles.icon}
                aria-hidden="true"
              />
            </div>
          </foreignObject>
        </svg>
        <svg
          width="144"
          height="144"
          viewBox="0 0 144 144"
          className={styles.iconAnimated}
          aria-hidden="true"
        >
          <foreignObject x="0" y="0" width="144" height="144">
            <div className={styles.iconStack}>
              <Image
                className={styles.icon}
                src={isHovered ? icon.animatedIcon : icon.coverImage}
                width={144}
                height={144}
                alt=" "
                aria-hidden="true"
              />
            </div>
          </foreignObject>
        </svg>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.productName}>{name}</div>
      </div>
      <div className={styles.productDetailsWrapper}>
        <div className={styles.innerBlur}>
          <div className={styles.description}>{description}</div>
          <div className={styles.priceTagsContainer}>
            <h2 className={styles.price}>{price}€</h2>
          </div>
        </div>
        <div className={styles.innerHover}>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={() => console.log("Hey :-)")}
              color="black"
              backgroundColor="linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))"
            >
              <div>Acheter pour {price}€</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
