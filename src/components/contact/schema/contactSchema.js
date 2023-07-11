import * as Yup from "yup";

const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
export const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name Must be required!"),
  email: Yup.string()
    .email("Invalid Email!")
    .matches(emailRules, { message: " Not valid :{" })
    .required("Email Required !"),
  message: Yup.string().required("Message Must be required !"),
});
