import {
  addressLine_required,
  bloodBankName_required,
  bloodBankType_required,
  bloodGroup_required,
  city_required,
  district_required,
  email_required,
  email_valid,
  license_reqired,
  mobile_required,
  mobile_valid,
  state_required,
} from "../messages/messages";
import * as Yup from "yup";



export const addBloodBank_Schema = Yup.object({
  blood_bank_name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  email: Yup.string().email(email_valid).required(email_required),
  address_line: Yup.string().required(addressLine_required),
  state: Yup.string().required(state_required),
  district: Yup.string().required(district_required),
  city: Yup.string().required(city_required),
  blood_bank_type: Yup.string().required(bloodBankType_required),
  license: Yup.string().required(license_reqired),
  blood_group: Yup.string().required(bloodGroup_required),
});

export const editBloodBank_Schema = Yup.object({
  blood_bank_name: Yup.string().required(bloodBankName_required),
  mobile: Yup.string()
    .matches(/^\d{10}$/, mobile_valid)
    .required(mobile_required),
  email: Yup.string().email(email_valid).required(email_required),
  address_line: Yup.string().required(addressLine_required),
  blood_bank_type: Yup.string().required(bloodBankType_required),
});