import {
  faArrowRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorBox } from "./errorBox";
import validateInputs, { formErrors } from "../functions/functions";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// custom styles
import styles from "./postings.module.scss";

export interface formInputs {
  fullName: string;
  email: string;
  phoneNumber: number | null;
  subject: string;
  jobType: string;
  yourMessage: string;
}

interface careersPostingsProps {}

export const Postings: React.FC<careersPostingsProps> = () => {
  const [
    teleSalesOfficerActive,
    setTeleSalesOfficerActive,
  ] = React.useState<boolean>(false);

  const [draftMan, setDraftMan] = React.useState<boolean>(false);
  const [interiorDesigner, setInteriorDesigner] = React.useState<boolean>(
    false
  );

  const [animator, setAnimator] = React.useState<boolean>(false);
  // for front desk officer
  const [fdo, setFdo] = React.useState<boolean>(false);
  const [seoExpert, setSeoExpert] = React.useState<boolean>(false);
  const [appDeveloper, setAppDeveloper] = React.useState<boolean>(false);

  // state for button change on submit
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  // captcha Ref
  const recaptchaRef = useRef();
  // state for storing form inputs
  const [userInputs, setUserInputs] = React.useState<formInputs>({
    fullName: "",
    email: "",
    phoneNumber: null,
    jobType: "Tele Sales Officer",
    subject: "",
    yourMessage: "",
  });
  const [file, setFile] = React.useState<any>();
  // state for validation errors
  const [validationErrors, setValidationErrors] = React.useState<formErrors>();
  // function for handling form inputs

  const handleInput = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  // handle file
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  // function for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (recaptchaRef?.current !== null && recaptchaRef?.current !== undefined) {
      // @ts-expect-error
      const token = await recaptchaRef.current.executeAsync();

      if (token) {
        const errors: formErrors = validateInputs(userInputs, file?.name);
        setValidationErrors(errors);
        if (Object.keys(errors).length === 0) {
          const formdata = new FormData();
          formdata.append("token", token);
          formdata.append("fullName", userInputs.fullName);
          formdata.append("email", userInputs.email);
          formdata.append("phoneNumber", userInputs.phoneNumber as any);
          formdata.append("subject", userInputs.subject);
          formdata.append("yourMessage", userInputs.yourMessage);
          formdata.append("jobType", userInputs.jobType);
          formdata.append("cv", file);

          try {
            const response = await axios({
              method: "POST",
              url: "/api/sendCv",
              data: formdata,
              headers: {
                "Content-Type": `multipart/form-data`,
              },
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
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          setIsSubmitting(false);
        }
      } else {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={`${styles.mainContainer}`}>
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
      <Row>
        <Col lg='4' sm='12'>
          <div className='d-flex flex-column marginRight widthDesktop'>
            <h6 className={styles.headingArc}>Postings</h6>
            <div className={`${styles.jobPostsContainer}`}>
              <div className='d-flex flex-column'>
                {/* first job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>Tele sales officer</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        teleSalesOfficerActive
                          ? { display: "block" }
                          : { display: "none" }
                      }>
                      We have very good job opportunities for well-spoken
                      Telesales Representative. He/She must have excellent
                      communication skills as well as sales ability.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() =>
                      setTeleSalesOfficerActive(!teleSalesOfficerActive)
                    }>
                    <FontAwesomeIcon
                      icon={teleSalesOfficerActive ? faMinus : faPlus}
                    />
                  </div>
                </div>
                {/* second job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>Draft Man</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        draftMan ? { display: "block" } : { display: "none" }
                      }>
                      Hashi GOC offers opportunities for a self-motivated
                      Draftsman who can work alongside a number of specialists
                      at our company. He/She must be experienced in the relevant
                      field should stay up-to-date with new drafting software
                      and advancements.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setDraftMan(!draftMan)}>
                    <FontAwesomeIcon icon={draftMan ? faMinus : faPlus} />
                  </div>
                </div>
                {/* third job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>Interior Designer</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        interiorDesigner
                          ? { display: "block" }
                          : { display: "none" }
                      }>
                      We offer career opportunities to detail-oriented
                      candidates with good interpersonal skills for the position
                      of Interior Designer. The applicant must be able to think
                      creatively about the use of space, color and movement and
                      will draw on other artistic mediums for creative
                      inspiration as per the client’s requirements.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setInteriorDesigner(!interiorDesigner)}>
                    <FontAwesomeIcon
                      icon={interiorDesigner ? faMinus : faPlus}
                    />
                  </div>
                </div>
                {/* fourth job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>3D Animator</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        animator ? { display: "block" } : { display: "none" }
                      }>
                      We have enormous job vacancies for 3D animators who have
                      creativity, the best computer programming skills, patience
                      to work through long hours of code and be a team player.
                      Moreover, He/She must be experienced in working with a
                      number of applications including but not limited to Maya,
                      Adobe Flash, Adobe Creative Suite, Cinema 4D, and other
                      applications used in graphic designing and animation.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setAnimator(!animator)}>
                    <FontAwesomeIcon icon={animator ? faMinus : faPlus} />
                  </div>
                </div>
                {/* fifth job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>Front Desk Officer</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={fdo ? { display: "block" } : { display: "none" }}>
                      We are also offering vacancies to professional Front Desk
                      Clerks. Must be experienced in answering phone calls,
                      managing the switchboard, and maintaining the office
                      budget. You should have a talent for multi-tasking, with
                      excellent communication and organizational skills as well.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setFdo(!fdo)}>
                    <FontAwesomeIcon icon={fdo ? faMinus : faPlus} />
                  </div>
                </div>
                {/* sixth job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>SEO Expert </p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        seoExpert ? { display: "block" } : { display: "none" }
                      }>
                      We have attractive job resignations for SEO/SEM expert to
                      manage all search engine optimization and marketing
                      activities. He/She will be responsible for managing all
                      SEO activities such as content strategy, link building and
                      keyword strategy to increase rankings on all major search
                      networks.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setSeoExpert(!seoExpert)}>
                    <FontAwesomeIcon icon={seoExpert ? faMinus : faPlus} />
                  </div>
                </div>
                {/* seventh job */}
                <div
                  className={`d-flex justify-space-between w-100 ${styles.singleJob}`}>
                  <div>
                    <p className={`${styles.jobTitle}`}>App Developer</p>
                    <p
                      className={`mt-2 ${styles.jobDescription} animated bounceInDown`}
                      style={
                        appDeveloper
                          ? { display: "block" }
                          : { display: "none" }
                      }>
                      Hashi Group of companies brought opportunities for
                      qualified Application Developers to design and code
                      functional programs and applications. The candidate must
                      have excellent knowledge of at least one programming
                      language & must be familiar with a variety of operating
                      systems and platforms.
                    </p>
                  </div>
                  <div
                    className={`${styles.iconContainer}`}
                    onClick={() => setAppDeveloper(!appDeveloper)}>
                    <FontAwesomeIcon icon={appDeveloper ? faMinus : faPlus} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: "7", offset: "1" }} md='12' sm='12'>
          <form>
            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey='6Lfo238aAAAAAH3WdNUfQ1I4ic7D48dKyadWxLXf'
            />
            <div className='form-group'>
              <input
                placeholder='Your Name'
                type='text'
                name='fullName'
                onChange={(e) => handleInput(e)}
                className={`${styles.formInput}`}
              />
              {validationErrors?.fullName ? (
                <ErrorBox error={validationErrors.fullName} />
              ) : (
                ""
              )}

              <input
                placeholder='Mobile Number'
                type='number'
                name='phoneNumber'
                onChange={(e) => handleInput(e)}
                className={`${styles.formInput}`}
              />
              {validationErrors?.phoneNumber ? (
                <ErrorBox error={validationErrors.phoneNumber} />
              ) : (
                ""
              )}

              <input
                placeholder='Your Email'
                type='email'
                name='email'
                onChange={(e) => handleInput(e)}
                className={`${styles.formInput}`}
              />
              {validationErrors?.email ? (
                <ErrorBox error={validationErrors.email} />
              ) : (
                ""
              )}
              <input
                placeholder='Subject'
                type='text'
                name='subject'
                onChange={(e) => handleInput(e)}
                className={`${styles.formInput}`}
              />
              {validationErrors?.subject ? (
                <ErrorBox error={validationErrors.subject} />
              ) : (
                ""
              )}
              <Row>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='Tele Sales Officer'
                    name='jobType'
                    defaultChecked
                    onChange={(e) => handleInput(e)}
                  />
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='tele sales officer'>
                    Tele Sales Officer
                  </label>
                </Col>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='Draft Man'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label className={`${styles.formLabel}`} htmlFor='draft man'>
                    Draft Man
                  </label>
                </Col>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='Interior Designer'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='Interior Designer'>
                    Interior Designer
                  </label>
                </Col>
              </Row>
              {/* xxxx END FIRST ROW xxxxxxxxxxxxx */}
              <Row>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='3D Animator'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='3D Animator'>
                    3D animator
                  </label>
                </Col>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='Front Desk Officer'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='Front Desk Officer'>
                    Front desk officer
                  </label>
                </Col>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='SEO Expert'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label className={`${styles.formLabel}`} htmlFor='SEO Expert'>
                    SEO Expert
                  </label>
                </Col>
              </Row>
              {/* xxxxx END SECOND ROW xxxxxx */}
              <Row>
                <Col xl='4' lg='12' md='12' sm='12'>
                  <input
                    type='radio'
                    value='App Developer'
                    name='jobType'
                    onChange={(e) => handleInput(e)}
                  />
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='App Developer'>
                    App developer
                  </label>
                </Col>
              </Row>
              {/* xxxx END THIRD ROW  xxxxxxxxxxxx */}
              <textarea
                name='yourMessage'
                placeholder='Your Message'
                className={`${styles.formInput}`}
                rows={5}
                onChange={(e) => handleInput(e)}
                style={{ color: "white" }}
              />
              {validationErrors?.yourMessage ? (
                <ErrorBox error={validationErrors.yourMessage} />
              ) : (
                ""
              )}
              <input
                type='file'
                className={`${styles.formInput}`}
                name='cv'
                onChange={(e) => handleFile(e)}
                style={{ color: "white" }}
              />
              {validationErrors?.cv ? (
                <ErrorBox error={validationErrors.cv} />
              ) : (
                ""
              )}
            </div>
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
                    isSubmitting ? { display: "none" } : { display: "initial" }
                  }
                />{" "}
              </span>
            </button>
          </form>
        </Col>
      </Row>
    </section>
  );
};
