import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "./careersAbout.module.scss";

interface careersAboutProps {}

export const CareersAbout: React.FC<careersAboutProps> = () => {
  return (
    <section className={`${styles.aboutUs}`}>
      <div>
        {/* section for desktop */}
        <Row className={styles.desktopView}>
          <Col lg='3' sm='12' md='3'>
            <div className={styles.paragraphSection}>
              <p className='normalParagraph widthDesktop'>
                {" "}
                A job at Hashi Group of Companies is a career made by you, with
                all development opportunities, benefits and a working culture
                that holds multiplicity. So, whether you’re looking for an
                internship, graduate opportunities, or a job opening to progress
                your professional career, at Hashi Group of Companies you can
                shape your own path by working with the brands and people to
                drive our justifiable business growth.
              </p>
            </div>
          </Col>
          <Col lg={{ span: "7", offset: "1" }} sm='12' md='7'>
            <div className={styles.paragraphSection}>
              <p className={styles.whiteText}>
                Explore <br></br>
                <span className={`ml-lg-5 ${styles.goldenText}`}>Your</span>
                <br></br>
                <span style={{ marginLeft: "6vw" }}>Dream</span>
                <br></br>
                <span
                  className={`${styles.goldenText}`}
                  style={{ marginLeft: "9vw" }}>
                  Job
                </span>
              </p>
            </div>
          </Col>
          <Col lg='1' sm='12' md='1'>
            <p
              className={`${styles.paragraphSection} ${styles.sectionHeading}`}>
              About
            </p>
          </Col>
        </Row>
        {/* xxxx Section for Desktop End xxxxx  */}
        {/* Section for mobile view start */}
        <Row className={styles.mobileView}>
          <Col sm='12'>
            <p
              className={`${styles.paragraphSection} ${styles.sectionHeading}`}>
              About
            </p>
          </Col>
          <Col sm='12'>
            <div>
              <p className={styles.whiteText}>
                Explore <br></br>
                <span className={`ml-lg-5 ${styles.goldenText}`}>Your</span>
                <br></br>
                <span>Dream</span>
                <br></br>
                <span className={`${styles.goldenText}`}>Job</span>
              </p>
            </div>
          </Col>
          <Col sm='12'>
            <div>
              <p className='normalParagraph widthDesktop mt-2'>
                {" "}
                A job at Hashi Group of Companies is a career made by you, with
                all development opportunities, benefits and a working culture
                that holds multiplicity. So, whether you’re looking for an
                internship, graduate opportunities, or a job opening to progress
                your professional career, at Hashi Group of Companies you can
                shape your own path by working with the brands and people to
                drive our justifiable business growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
