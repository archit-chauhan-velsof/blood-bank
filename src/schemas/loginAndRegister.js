
import * as Yup from "yup";

// import {
//   password_minLength,
//   password_required,
//   userId_required,
// } from "../messages/messages";

import {
  userId_required,
  addressLine_required,
  city_required,
  email_required,
  email_valid,
  fullName_required,
  gender_required,
  mobile_required,
  mobile_valid,
  password_minLength,
  password_required,
  role_required,
} from "../messages/messages";

export const loginSchema = Yup.object().shape({
  user_id: Yup.string().required(userId_required),
  password: Yup.string().required(password_required).min(5, password_minLength),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(fullName_required),
  gender: Yup.string().required(gender_required),
  email: Yup.string().email(email_valid).required(email_required),
  phone: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  city: Yup.string().required(city_required),
  address: Yup.string().required(addressLine_required),
  password: Yup.string().min(5, password_minLength).required(password_required),
  role: Yup.string().required(role_required),
});