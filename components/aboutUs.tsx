import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "./aboutUs.module.scss";

interface aboutUsProps {}

export const AboutUs: React.FC<aboutUsProps> = () => {
  return (
    <section className={`${styles.aboutUs}`}>
      <div>
        <div
          className={`d-flex justify-content-center mt-lg-3 ${styles.desktopView}`}>
          <p className={`${styles.whiteText}`}>About Us</p>
        </div>
        {/* section for desktop */}
        <Row className={styles.desktopView}>
          <Col lg='5' sm='12' md='6'>
            <div className={styles.paragraphSection}>
              <p className='normalParagraph '>
                {" "}
                Hashi Group of Companies is a real estate conglomerate
                establishing mega projects in the prominent cities of Pakistan.
                Not only it upgrades the lifestyle of their customers but also
                creates opportunities for investors who are looking for safe,
                secure & profitable investments. Hashi GoC every brand is built
                to serve the public in multiple ways. The companies include SHR
                Marketing 360 offering all kinds of Marketing Solutions and
                Content Productions, Hash Real Estate & Builders is a one stop
                shop for property sale/purchase & advisory services, & AASANI-
                an ecosystem that provides all the maintenance services at your
                doorstep.
              </p>
              <p className='normalParagraph '>
                {" "}
                The Group portfolio extends to architectural services, real
                estate and construction services, app development and digital
                marketing.
              </p>
            </div>
          </Col>
          <Col lg={{ span: "6", offset: "1" }} sm='12' md='7'>
            <div className={styles.paragraphSection}>
              <p className={styles.whiteText}>
                The <br></br>
                <span className={`ml-lg-5 ${styles.goldenText}`}>
                  Game-Changer
                </span>
                <br></br>
                <span style={{ marginLeft: "12vw" }}>for</span>
                <br></br>
                <span
                  className={`${styles.goldenText}`}
                  style={{ marginLeft: "14vw" }}>
                  Life Aesthetics
                </span>
              </p>
            </div>
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
                The <br></br>
                <span className={` ${styles.goldenText}`}>Game-Changer</span>
                <br></br>
                <span>for</span>
                <br></br>
                <span className={`${styles.goldenText}`}>Life Aesthetics</span>
              </p>
            </div>
          </Col>
          <Col sm='12'>
            <div>
              <p className='normalParagraph widthDesktop'>
                {" "}
                Hashi Group of Companies is a real estate conglomerate
                establishing mega projects in the prominent cities of Pakistan.
                Not only it upgrades the lifestyle of their customers but also
                creates opportunities for investors who are looking for safe,
                secure & profitable investments. Hashi GoC every brand is built
                to serve the public in multiple ways. The companies include SHR
                Marketing 360 offering all kinds of Marketing Solutions and
                Content Productions, Hash Real Estate & Builders is a one stop
                shop for property sale/purchase & advisory services, & AASANI-
                an ecosystem that provides all the maintenance services at your
                doorstep.
              </p>
              <p className='normalParagraph widthDesktop'>
                {" "}
                The Group portfolio extends to architectural services, real
                estate and construction services, app development and digital
                marketing.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
