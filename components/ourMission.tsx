import React, { useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";

import styles from "./ourMission.module.scss";

export const OurMission = () => {
  const interiorRef = useRef();

  const isVisible = useOnScreen(interiorRef);

  return (
    <section
      className={
        isVisible
          ? `${styles.interiorSection} animated fadeInRight`
          : `${styles.interiorSection}`
      }
      ref={interiorRef}>
      {/* Desktop View */}
      <Row className={styles.desktopView}>
        <Col lg={{ span: "8" }}>
          <Image src='/assets/images/ourMission.jpg' className={styles.image} />
        </Col>

        <Col lg='4' sm='12'>
          <div className='d-flex flex-column marginLeft widthDesktop'>
            <h6 className={styles.headingInterior}>Our Mission</h6>
            <p className={` ${styles.whiteText} ${styles.mainHeading}`}>
              Paving Way
            </p>
            <p className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
              Because of the reliable development in business, we are satisfied
              to extend our business to new areas. This will empower us to react
              successfully to the developing needs of our clients dwelling in
              different urban areas
            </p>
            <p className={`normalParagraph`}>
              {" "}
              The new openings will be an extraordinary method to construct
              believably for the Real Estate. We are ideally expanding our
              business to new areas like: Turkey , Dubai, Karachi, Lahore.
            </p>
          </div>
        </Col>
      </Row>
      {/* xxxxxx END DESKTOP VIEW xxxxxx */}
      {/* Mobile View */}
      <Row className={styles.mobileView}>
        <Col sm='12'>
          <div className='d-flex flex-column  widthDesktop'>
            <h6 className={styles.headingInterior}>Our Mission</h6>
            <p className={` ${styles.whiteText} ${styles.mainHeading}`}>
              Paving Way
            </p>
            <div className={styles.normalParagraph}>
              <p
                className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
                Because of the reliable development in business, we are
                satisfied to extend our business to new areas. This will empower
                us to react successfully to the developing needs of our clients
                dwelling in different urban areas.
              </p>
              <p className={`normalParagraph`}>
                {" "}
                The new openings will be an extraordinary method to construct
                believably for the Real Estate. We are ideally expanding our
                business to new areas like: Turkey , Dubai, Karachi, Lahore.
              </p>
            </div>
          </div>
        </Col>
        <Col sm='12'>
          <Image src='/assets/images/ourMission.jpg' className={styles.image} />
        </Col>
      </Row>
      {/* xxxxxx END MOBILE VIEW */}
    </section>
  );
};
