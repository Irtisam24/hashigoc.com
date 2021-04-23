import React, { useRef } from "react";
import { Col, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";

import styles from "./location.module.scss";

interface locationProps {}

export const Location: React.FC<locationProps> = () => {
  const locationRef = useRef();
  const isVisible = useOnScreen(locationRef);
  return (
    <section
      className={
        isVisible
          ? `${styles.interiorSection} animated fadeInRight`
          : `${styles.interiorSection}`
      }
      ref={locationRef}>
      {/* DeskTop View */}
      <div
        className={`d-flex justify-content-center mb-3 ${styles.desktopView}`}>
        <h6 className={styles.headingInterior}>Location</h6>
      </div>
      <Row className={styles.desktopView}>
        <Col lg={{ span: "6" }}>
          <Image src='/assets/images/Location.jpg' className={styles.image} 
          alt='Hashi group of Companies'/>
        </Col>

        <Col lg='6' sm='12'>
          <div className='d-flex flex-column marginLeft mt-lg-5'>
            <p className={` ${styles.goldenText}`}>
              <span className={`${styles.whiteText}`}>Convenience </span>
              Commitment <span className={`${styles.whiteText}`}>Clarity</span>
            </p>
            <p className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
              Both of our offices are located right on the cusp of Bahria Town
              and DHA catering to our clients from all over. Our Head office is
              located right next to the DHA Phase 2 Gate 1 and our Corporate
              office is in Bahria Town Phase 7 right next to Clock tower
              conveniently located on the Bahria’s exit of DHA Phase 1.
            </p>
          </div>
        </Col>
      </Row>
      {/*xxxxxx End DeskTop View  xxxxxxxxxx*/}

      {/* Mobile View */}
      <Row className={styles.mobileView}>
        <Col sm='12'>
          <div className='d-flex flex-column widthDesktop'>
            <h6 className={styles.headingInterior}>Location</h6>
            <p className={` ${styles.goldenText} ${styles.mainHeading}`}>
              Commitment
            </p>
            <div className={styles.normalParagraph}>
              <p
                className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
                Both of our offices are located right on the cusp of Bahria Town
                and DHA catering to our clients from all over. Our Head office
                is located right next to the DHA Phase 2 Gate 1 and our
                Corporate office is in Bahria Town Phase 7 right next to Clock
                tower conveniently located on the Bahria’s exit of DHA Phase 1.
              </p>
            </div>
          </div>
        </Col>
        <Col sm='12'>
          <Image src='/assets/images/Location.jpg' className={styles.image} 
          alt='Hashi group of Companies'/>
        </Col>
      </Row>
      {/* xxxxx END mobile View */}
    </section>
  );
};
