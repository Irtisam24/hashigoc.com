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
      <div className='d-flex justify-content-center mb-3'>
        <h6 className={styles.headingArc}>Our Vision</h6>
      </div>
      <Row>
        <Col lg='6' sm='12'>
          <div className='d-flex flex-column mt-lg-5'>
            <p className={`mt-4 mb-1 ${styles.whiteText}`}>
              In <span className={`${styles.goldenText}`}>Harmony</span>
              <span className={`${styles.whiteText}`}> with the city</span>
            </p>
            <div className={`${styles.normalParagraph}`}>
              {" "}
              <p
                className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
                Hashi Group of Companies strives to change the way you think
                about construction by not applying the traditional methods but
                by bringing innovative techniques in Pakistan to improve the
                processes and quality of the final product. By not settling for
                anything less than excellence in every company in the group, we
                have elevated the industry standards.
              </p>
              <p className={`normalParagraph`}>
                {" "}
                Our vision is to help the real estate industry evolve to a point
                where it has transparency, affordability and each project is
                compliant with environmental friendliness.
              </p>
            </div>
          </div>
        </Col>
        <Col xl={{ span: "6" }} md='12'>
          <Image src='/assets/images/ourVision.jpg' className={styles.image} alt='Our Vision'/>
        </Col>
      </Row>
    </section>
  );
};
