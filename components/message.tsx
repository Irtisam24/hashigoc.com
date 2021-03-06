import React, { useRef } from "react";
import { Col, Image, Row } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";

import styles from "./message.module.scss";

interface messageProps {}

export const Message: React.FC<messageProps> = () => {
  const messageRef = useRef();
  const isVisible = useOnScreen(messageRef);
  return (
    <section
      className={
        isVisible
          ? `${styles.archSection} animated fadeInLeft`
          : `${styles.archSection}`
      }
      ref={messageRef}>
      <div className={`d-flex justify-content-center mb-lg-3 `}>
        <p className={`${styles.whiteText}`}>
          Chairman's <span className={`${styles.goldenText}`}>Message</span>
        </p>
      </div>
      <Row>
        <Col lg='6' sm='12'>
          <div className='d-flex flex-column marginRight mt-lg-5'>
            <div className={styles.normalParagraph}>
              <p
                className={` ${styles.whiteSmallTextFirstPart} normalParagraph`}>
                The business world is continuously evolving and with that comes
                convenience as well as difficulties for progress. We as Hashi
                Group of Companies are on a path that leaves behind a legacy
                with which it will be associated for years. I am glad to be an
                integral piece of an incredible group that has put in its heart
                & soul and dedicated towards achievement. We are a one-of-a-kind
                group that caters to future residents, shop-owners,
                entrepreneurs as well as the investors; building a relationship
                with them and furnishing them with the best Return on
                Investments in the Market. Keeping our pace up with the
                industry, we have the ambition, skillset and desire to be
                excellent in providing our services to the end consumers. Armed
                with a Full Scale Real estate and Building Company, a Digital
                Marketing Agency and an Architecture firm, we are ready to
                evolve and deliver in future and withstand any challenge.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={{ span: "6" }}>
          <Image src='/assets/images/Chairman.jpg' className={styles.image} 
          alt='Syed Hashim Raza'/>
        </Col>
      </Row>
    </section>
  );
};
