import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useRef } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";

import styles from "./ourProjects.module.scss";

interface housingOptionsProps {}

export const OurProjects: React.FC<housingOptionsProps> = () => {
  const [activeSection, setActiveSection] = React.useState<number>(1);

  const housingRef = useRef();
  const isVisible = useOnScreen(housingRef);

  const renderSection = () => {
    if (activeSection === 1) {
      /* first section */
      return (
        <div
          className={`d-flex flex-column ${styles.firstSection} animated fadeInRight`}>
          <p className={`mt-3 mb-5 ${styles.mainHeading}`}>Iconic</p>
          <div className={styles.normalParagraph}>
            <p className='normalParagraph mt-5'>
              A 14 Floor mixed-use development masterpiece that addresses the
              “live-work-play” lifestyle. Made with efficient designs, luxurious
              amenities and hosting local & international brands that sets it
              apart from the rest. Located in the heart of Bahria town where a
              vibrant community thrives, The Hash Mall design is inspired by
              nature, history, and art.
            </p>
            <div className='d-flex justify-content-between'>
              <p className={`normalParagraph ${styles.number}`}>
                200 <small>ft</small>
              </p>
              <p className={`normalParagraph  ${styles.height}`}>360+</p>
              <p className={`normalParagraph  ${styles.area}`}>
                33600{" "}
                <small>
                  ft<sup>2</sup>
                </small>
              </p>
            </div>
          </div>
          <Link href='https://thehashmall.com/'>
            <button className={styles.button}>
              View Characteristics{" "}
              <span className={styles.buttonIcon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </Link>
        </div>
      );
    } else {
      /* second Section */
      return (
        <div
          className={`d-flex flex-column ${styles.firstSection} animated fadeInLeft`}>
          <p className={`mt-3 mb-5 ${styles.mainHeadingSecond}`}>Luxury</p>
          <div className={styles.normalParagraph}>
            <p className='normalParagraph mt-5'>
              A milestone in the community when it comes to luxury living,
              enlisting finely constructed and furnished Hotel Suites &
              Apartments packed with amenities hosting finest brands in the twin
              cities. Most of the units have been sold out, and development is
              already on fast track with the concrete bed completed..
            </p>
            <div className='d-flex justify-content-between'>
              <p className={`normalParagraph ${styles.number}`}>
                110 <small>ft</small>
              </p>
              <p className={`normalParagraph  ${styles.height}`}>90+</p>
              <p className={`normalParagraph  ${styles.area}`}>
                6900{" "}
                <small>
                  ft<sup>2</sup>
                </small>
              </p>
            </div>
          </div>
          <Link href='https://hashresidency.com/'>
            <button className={styles.button}>
              View Characteristics{" "}
              <span className={styles.buttonIcon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </Link>
        </div>
      );
    }
  };

  return (
    <section
      className={
        isVisible
          ? `${styles.housingOptionsSection} animated fadeInLeft`
          : `${styles.housingOptionsSection}`
      }
      ref={housingRef}>
      {/* text section */}
      <Row>
        <Col lg='4'>
          <div className={`d-flex flex-column marginRight w-100 widthDesktop`}>
            <h6 className={styles.headingHousing}>Our Projects</h6>
            <div
              className={`d-flex ml-3 mt-5  justify-content-around ${styles.sectionIndicatorActive}`}>
              <p
                className={
                  activeSection === 1
                    ? `${styles.activeSection}`
                    : `${styles.inActiveSection}`
                }
                onClick={() => setActiveSection(1)}>
                The Hash Mall
              </p>
              <p
                className={
                  activeSection === 2
                    ? `${styles.activeSection}`
                    : `${styles.inActiveSection}`
                }
                onClick={() => setActiveSection(2)}>
                Hash Residency
              </p>
            </div>
            {renderSection()}
          </div>
        </Col>

        {/* slider section */}
        <Col lg='8'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className={`${styles.sliderImage}`}
                src='/assets/images/theHashMall.jpg'
                alt='The Hash Mall First Slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`${styles.sliderImage}`}
                src='/assets/images/theHash Malla.jpg'
                alt='The Hash Mall Second Slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`${styles.sliderImage}`}
                src='/assets/images/hash Residency.jpg'
                alt='Hash Residency First Slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`${styles.sliderImage}`}
                src='/assets/images/hashResidency a.jpg'
                alt='Hash Residency Second Slide'
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};
