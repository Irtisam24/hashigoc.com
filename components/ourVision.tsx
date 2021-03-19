import React, { useRef } from "react";
import { Col, Image, Row } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";

import styles from "./ourVision.module.scss";

export const OurVision = () => {
  const refArc = useRef();
  const isVisible = useOnScreen(refArc);
  return (
    <section
      className={
        isVisible
          ? `animated fadeInLeft ${styles.archSection}`
          : `${styles.archSection}`
      }
      ref={refArc}>
      <Row>
        <Col lg='4' sm='12'>
          <div className='d-flex flex-column marginRight widthDesktop'>
            <h6 className={styles.headingArc}>Our Vision</h6>
            <p className={`mt-5 mb-3 ${styles.whiteText}`}>
              In <span className={`${styles.goldenText}`}>Harmony</span>
              <br></br>
              <span className={`${styles.with} ml-5`}>with</span>
            </p>
            <div className={styles.normalParagraph}>
              {" "}
              <p
                className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
                Hashi Group of Companies works in establishing mega projects in
                the prominent cities of Pakistan. Hashi Group Of Companies not
                only upgrades the lifestyle of the people but also creates an
                amazing opportunity for the investors who have money in their
                hands & looking for a safe, secure & profitable investment.
                Hashi Group Of Companies also has a number of child companies to
                serve the public in multiple ways
              </p>
              <p className={`normalParagraph`}>
                {" "}
                The 4 child companies include SHR Marketing 360 for all types of
                marketing’s, Hash Real Estate & Builders to give property sale &
                purchase & advisory services, & AASANI to give all the
                maintenance services at your doorstep. Hashi Group of Companies,
                the name is quality.
              </p>
            </div>
          </div>
        </Col>
        <Col xl={{ span: "8" }} lg='12' md='12'>
          <Image src='/assets/images/ourVision.jpg' className={styles.image} />
        </Col>
      </Row>
    </section>
  );
};
