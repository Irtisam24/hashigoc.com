import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import styles from "./singleService.module.scss";

interface singleServiceProps {
  mainImage: string;
  logoImage: string;
  title: string;
  details: string;
}

export const SingleService: React.FC<singleServiceProps> = ({
  mainImage,
  logoImage,
  title,
  details,
}) => {
  return (
    <section className={`${styles.singleService}`}>
      <div className={`d-flex justify-content-center`}>
        {" "}
        <Image
          src={`/assets/images/${mainImage}`}
          className={`${styles.mainImage}`}
        />
      </div>
      <div className='container my-5'>
        <Row>
          <Col lg='4' sm='12' md='12'>
            <Image
              src={`/assets/images/${logoImage}`}
              className={`${styles.logoImage}`}
            />
          </Col>
          <Col lg={{ span: "7", offset: "1" }} md='12' sm='12'>
            <h3 className={`${styles.title}`}>{title}</h3>
            <p className={`${styles.details}`}>{details}</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};
