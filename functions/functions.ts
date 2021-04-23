import { userInput } from "../pages/contact-us";
import { formInputs } from "../components/postings";

export interface formErrors {
  fullName?: string | null | undefined;
  email?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  subject?: string | null | undefined;
  jobType?: string | null | undefined;
  yourMessage?: string | null | undefined;
  cv?: string | null | undefined;
}

// interface for contact us form type
export interface contactUsErrors {
  yourName?: string;
  telePhone?: string;
  yourMessage?: string;
}
// function for email validation
function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// function for validation phone Number
function validatePhoneNumber(number: number) {
  const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regEx.test(String(number));
}

// function for getting file extension
const getFileExtension = (fname: string): string => {
  return fname.slice((Math.max(0, fname.lastIndexOf(".")) || Infinity) + 1);
};
// function for validation
export default function validateInputs(inputs: formInputs, fileName: string) {
  const errors: formErrors = {};
  const allowedExtensions = ["docx", "doc", "pdf"];
  if (!fileName) {
    errors.cv = "This field is required";
  } else if (!allowedExtensions.includes(getFileExtension(fileName))) {
    errors.cv = "Only word and pdf files are allowed!";
  }

  if (!inputs.fullName) {
    errors.fullName = "This field is required.";
  }
  if (!inputs.email) {
    errors.email = "This field is required.";
  } else if (!validateEmail(inputs.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!inputs.phoneNumber) {
    errors.phoneNumber = "This field is required.";
  } else if (!validatePhoneNumber(inputs?.phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number.";
  }
  if (!inputs.subject) {
    errors.subject = "This field is required.";
  }

  if (!inputs.yourMessage) {
    errors.yourMessage = "This field is required.";
  }

  if (!inputs.jobType) {
    errors.jobType = "This field is required.";
  }
  return errors;
}

// function for validation of contact us form

export const validateContactUsInputs = (inputs: userInput): contactUsErrors => {
  const errors: contactUsErrors = {};

  if (!inputs.yourName) {
    errors.yourName = "This field is required.";
  } else if (inputs.yourName.length < 4) {
    errors.yourName = "Please enter a valid name.";
  }

  if (!inputs.telePhone) {
    errors.telePhone = "This field is required.";
  } else if (!validatePhoneNumber(inputs.telePhone)) {
    errors.telePhone = "Please enter a valid phone number.";
  }

  if (!inputs.yourMessage) {
    errors.yourMessage = "This field is required.";
  }

  return errors;
};
