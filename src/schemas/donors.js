import * as Yup from "yup";

import {
  bloodGroup_required,
  city_required,
  district_required,
  dob_required,
  donatedPreviously_required,
  donationDate_required,
  email_required,
  email_valid,
  fullName_required,
  gender_required,
  mobile_required,
  mobile_valid,
  preference_required,
  state_required,
} from "../messages/messages";

export const editDonors_Schema = Yup.object({
  full_name: Yup.string().required(fullName_required),
  gender: Yup.string().required(gender_required),
  blood_group: Yup.string().required(bloodGroup_required),
  mobile: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  email: Yup.string().email(email_valid).required(email_required),
});

export const registerDonor_Schema = Yup.object({
  full_name: Yup.string().required(fullName_required),
  gender: Yup.string().required(gender_required),
  dob: Yup.date().required(dob_required),
  blood_group: Yup.string().required(bloodGroup_required),
  mobile: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  email: Yup.string().email(email_valid).required(email_required),
  state: Yup.string().required(state_required),
  district: Yup.string().required(district_required),
  city: Yup.string().required(city_required),
  donation_date: Yup.date().required(donationDate_required),
  preference: Yup.string().required(preference_required),
  donated_previously: Yup.string().required(donatedPreviously_required),
  agree: Yup.string(),
});

 export const searchDonors_Schema = Yup.object({
    state: Yup.string().required(state_required),
    district: Yup.string().required(district_required),
    city: Yup.string().required(city_required),
    blood_group: Yup.string().required(bloodGroup_required),
  });