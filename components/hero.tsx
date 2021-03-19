
import React from "react";

import styles from "./hero.module.scss";

interface heroProps {}

export const Hero: React.FC<heroProps> = () => {
  return (
    <section className={`${styles.hero} `}>
      <video className={`${styles.video}`} autoPlay muted>
        <source src='/assets/images/headerVideo.m4v' type='video/mp4' />
      </video>

    
    </section>
  );
};
