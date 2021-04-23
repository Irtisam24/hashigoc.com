import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React, { SyntheticEvent } from "react";
import axios from "axios";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBox } from "../../components/errorBox";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import {
  contactUsErrors,
  validateContactUsInputs,
} from "../../functions/functions";

// custom css import
import styles from "./contacts.module.scss";

export interface userInput {
  yourName: string;
  telePhone: number | null;
  yourMessage: string;
}

export default function Contacts() {
  // state for showing form submission
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  // state for storing userinputs
  const [userInputs, setUserInputs] = React.useState<userInput>({
    yourName: "",
    yourMessage: "",
    telePhone: null,
  });

  // store for storing form errors
  const [
    validationErrors,
    setValidationErrors,
  ] = React.useState<contactUsErrors>();

  // handle change on input fields
  const handleOnChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  // handle form submission
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const errors = validateContactUsInputs(userInputs);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("/api/contactUs", {
          yourName: userInputs.yourName,
          telePhone: userInputs.telePhone,
          yourMessage: userInputs.yourMessage,
        });
        if (response.status === 200) {
          setIsSubmitting(false);
          toast.success(response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
        } else {
          setIsSubmitting(false);
          toast.error("Something went wrong please try again later!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsSubmitting(false);
      return;
    }
  };
  return (
    <>
      <Head>
        <title>Hashi Goc | Contact Us</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
      </Head>
      <section>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <NavBar isFixed={false} />
        <div className={`${styles.container}`}>
          <p className={`normalParagraph ${styles.mainHeading}`}>Contact Us</p>

          <Row>
            <Col lg='3' sm='12'>
              <p className={`${styles.formHeading}`}>Let's get</p>
              <form className={`mt-lg-5`}>
                <Row>
                  <Col lg='12' sm='12'>
                    <input
                      placeholder='Name'
                      name='yourName'
                      type='text'
                      onChange={(e) => handleOnChange(e)}
                      className={`${styles.formInput}`}
                    />
                    {validationErrors?.yourName ? (
                      <ErrorBox error={validationErrors?.yourName} />
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col lg='12' sm='12'>
                    <input
                      placeholder='Telephone'
                      name='telePhone'
                      type='number'
                      onChange={(e) => handleOnChange(e)}
                      className={`${styles.formInput}`}
                    />
                    {validationErrors?.telePhone ? (
                      <ErrorBox error={validationErrors?.telePhone} />
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col lg='12' sm='12'>
                    <textarea
                      placeholder='Your Query'
                      name='yourMessage'
                      onChange={(e) => handleOnChange(e)}
                      className={`${styles.formInput}`}
                      rows={4}
                    />
                    {validationErrors?.yourMessage ? (
                      <ErrorBox error={validationErrors?.yourMessage} />
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <button
                  className={`${styles.button}`}
                  onClick={(e) => handleSubmit(e)}>
                  {isSubmitting ? (
                    <Spinner animation='border' variant='secondary' />
                  ) : (
                    "Send"
                  )}
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={`${styles.buttonIcon}`}
                      style={
                        isSubmitting
                          ? { display: "none" }
                          : { display: "initial" }
                      }
                    />{" "}
                  </span>
                </button>
              </form>
            </Col>
            <Col lg='3' sm='12'>
              <p className={`${styles.headings}`}>Head Office</p>
              <div className={`${styles.detailsSection}`}>
                <p className={`${styles.singleDetail}`}>
                  G T Road, Sector A DHA Phase II,
                </p>
                <p className={`${styles.singleDetail}`}>
                  Rawalpindi, Islamabad
                </p>
                <p className={`${styles.singleDetail}`}>Pakistan</p>
                <p className={`${styles.singleDetail}`}>+92 335 5551541</p>
                <p className={`${styles.singleDetail}`}>info@hashigoc.com</p>
              </div>
            </Col>
            <Col lg={{ span: "3", offset: "1" }}>
              <p className={`${styles.headings}`}>Sales Department</p>
              <div className={`${styles.detailsSection}`}>
                <p className={`${styles.singleDetail}`}>+92 335 5551541</p>
                <p className={`${styles.singleDetail}`}>info@hashigoc.com</p>
              </div>
            </Col>
          </Row>
        </div>
        {/* map div */}
        <div className={`${styles.container}`}>
          <p className={`normalParagraph ${styles.mainHeading}`}>Location</p>

          <Row>
            <Col lg='12' sm='12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.898081352398!2d73.13168721520134!3d33.530035380751194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzQ4LjEiTiA3M8KwMDgnMDIuMCJF!5e0!3m2!1sen!2s!4v1615528189440!5m2!1sen!2s'
                width='100%'
                height='500px'
                style={{ border: 0, filter: "invert(90%)" }}
                loading='lazy'></iframe>
            </Col>
          </Row>
        </div>
        <section className={`${styles.footerSection}`}>
          <Footer />
        </section>
      </section>
    </>
  );
}
