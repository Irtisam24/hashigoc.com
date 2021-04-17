import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import useOnScreen from "../customHooks/useOnScreen";
import Image from "next/image";

import styles from "./footer.module.scss";
import Link from "next/link";

interface footerProps {}

export const Footer: React.FC<footerProps> = () => {
  const footerRef = useRef();
  const isVisible = useOnScreen(footerRef);
  return (
    <section
      className={
        isVisible ? `${styles.footer} animated fadeInRight` : `${styles.footer}`
      }
      ref={footerRef}>
      {/* desktop footer */}

      <Row className={`${styles.desktopFooter}`}>
        <Col lg='4'>
          {/* <p className={`${styles.logo} goldenText`}>Hashi</p> */}
          <Image
            src='/assets/images/100x100.png'
            layout='intrinsic'
            width={100}
            height={100}
            className={`${styles.logo}`}
          />
          <p className={`${styles.copyright} normalParagraph`}>
            @HashiGoc 2021
          </p>
        </Col>
        <Col lg='4'>
          <ul className={styles.footerLinksList}>
            <li className={`${styles.singleLink} normalParagraph`}>
              <Link href='/contacts'>
                <a className={`${styles.link}`}> Contact Us</a>
              </Link>
            </li>
            <li className={`${styles.singleLink} normalParagraph`}>
              {" "}
              <Link href='/services'>
                <a className={`${styles.link}`}> Services</a>
              </Link>
            </li>
            <li className={`${styles.singleLink} normalParagraph`}>
              {" "}
              <Link href='/blogs'>
                <a className={`${styles.link}`}> Blogs</a>
              </Link>
            </li>
            <li className={`${styles.singleLink} normalParagraph`}>
              {" "}
              <Link href='/careers'>
                <a className={`${styles.link}`}> Careers</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg='4'>
          <div className={`${styles.iconContainer}`}>
            <Link href='https://www.linkedin.com/in/human-resource-hashi-group-of-companies-74ba521a9/'>
              <FontAwesomeIcon className={`${styles.icon}`} icon={faLinkedin} />
            </Link>
            <Link href='https://www.facebook.com/hashigroupofcompanies'>
              <FontAwesomeIcon className={`${styles.icon}`} icon={faFacebook} />
            </Link>
            <Link href='https://www.youtube.com/channel/UCGPkAsPqNgYzYrq-2aVQi1w'>
              <FontAwesomeIcon className={`${styles.icon}`} icon={faYoutube} />
            </Link>
            <Link href='https://www.instagram.com/hashigoc/'>
              <FontAwesomeIcon
                className={`${styles.icon}`}
                icon={faInstagram}
              />
            </Link>
          </div>
        </Col>
      </Row>

      {/*xxxxxxx END Desktop Footer  xxxxxxxxx*/}

      {/* Mobile Footer */}
      <Row className={`${styles.mobileFooter}`}>
        <Col sm='12'>
          {/* <p className={`${styles.logo} goldenText text-center`}>Hashi</p> */}
          <Image
            src='/assets/images/100x100.png'
            layout='intrinsic'
            width={100}
            height={100}
            className={`${styles.logo}`}
          />
        </Col>

        <Col sm='12'>
          <div className='d-flex justify-content-between mt-3'>
            <ul className={styles.footerLinksList}>
              <li className={`${styles.singleLink} normalParagraph`}>
                <Link href='/contacts'>
                  <a className={`${styles.link}`}> Contact Us</a>
                </Link>
              </li>
              <li className={`${styles.singleLink} normalParagraph`}>
                <Link href='/services'>
                  <a className={`${styles.link}`}> Services</a>
                </Link>
              </li>
              <li className={`${styles.singleLink} normalParagraph`}>
                {" "}
                <Link href='/blogs'>
                  <a className={`${styles.link}`}> Blogs</a>
                </Link>
              </li>
              <li className={`${styles.singleLink} normalParagraph`}>
                <Link href='/careers'>
                  <a className={`${styles.link}`}> Careers</a>
                </Link>
              </li>
            </ul>
            <div className={`${styles.iconContainer}`}>
              <div className={`d-flex`}>
                <Link href='https://www.linkedin.com/in/human-resource-hashi-group-of-companies-74ba521a9/'>
                  <FontAwesomeIcon
                    className={`${styles.icon}`}
                    icon={faLinkedinIn}
                  />
                </Link>
                <Link href='https://www.facebook.com/hashigroupofcompanies'>
                  <FontAwesomeIcon
                    className={`${styles.icon}`}
                    icon={faFacebook}
                  />
                </Link>
              </div>
              <div className={`d-flex mt-3`}>
                <Link href='https://www.youtube.com/channel/UCGPkAsPqNgYzYrq-2aVQi1w'>
                  <FontAwesomeIcon
                    className={`${styles.icon}`}
                    icon={faYoutube}
                  />
                </Link>
                <Link href='https://www.instagram.com/hashigoc/'>
                  <FontAwesomeIcon
                    className={`${styles.icon}`}
                    icon={faInstagram}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col sm='12'>
          <p className={`${styles.copyright} normalParagraph`}>
            @HashiGoc 2021
          </p>
        </Col>
      </Row>
      {/* xxxxxxx END Mobile Footer */}
    </section>
  );
};
