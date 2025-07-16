import * as Yup from "yup";

import {
  bloodGroup_required,
  email_required,
  email_valid,
  fullName_required,
  medicalCondition_required,
  mobile_required,
  mobile_valid,
} from "../messages/messages";

export const donationRequest_Schema = Yup.object({
  full_name: Yup.string().required(fullName_required),
  mobile: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  email: Yup.string().email(email_valid).required(email_required),
  blood_group: Yup.string().required(bloodGroup_required),
  medical_condition: Yup.string().required(medicalCondition_required),
});