import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./careersHero.module.scss";

interface careersHeroProps {}

export const CareersHero: React.FC<careersHeroProps> = ({}) => {
  return (
    <section className={`${styles.hero} animated fadeInLeft`}>
      <div
        className={` ${styles.headSection} d-flex flex-column  justify-content-center h-100 animated fadeInLeft `}>
        <div>
          <p className={styles.whiteText}>
            Explore your <span className={styles.goldenText}>dream</span>
            <br></br>
            <span className={styles.goldenText}>
              job<span className={styles.whiteText}> today.</span>
            </span>
          </p>
          <button className={styles.button}>
            Make a request{" "}
            <span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.buttonIcon}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
