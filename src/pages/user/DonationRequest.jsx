import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { axiosInstance } from "../../config";
import { donationRequest_Schema } from "../../schemas/donation";
// import {
//   bloodGroup_required,
//   email_required,
//   email_valid,
//   fullName_required,
//   medicalCondition_required,
//   mobile_required,
//   mobile_valid,
// } from "../../messages/messages";

// const donationRequest_Schema = Yup.object({
//   full_name: Yup.string().required(fullName_required),
//   mobile: Yup.string()
//     .matches(/^\d{10}$/, mobile_valid)
//     .required(mobile_required),
//   email: Yup.string().email(email_valid).required(email_required),
//   blood_group: Yup.string().required(bloodGroup_required),
//   medical_condition: Yup.string().required(medicalCondition_required),
// });

const DonationRequest = () => {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="heading-area">
          <h1 className="page-title">Donation Request</h1>
          <div className="action-area"></div>
        </div>

        <div className="container px-0">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={{
                  full_name: "",
                  mobile: "",
                  email: "",
                  // state: '',
                  // city: '',
                  blood_group: "",
                  medical_condition: "",
                }}
                validationSchema={donationRequest_Schema}
                onSubmit={(values) => {
                  axiosInstance
                    .post(`donations`, {
                      data: {
                        name: values.full_name,
                        blood_group: values.blood_group,
                        email: values.email,
                        contact_number: values.mobile,
                        medical_condition_description: values.medical_condition,
                      },
                    })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                }}
              >
                <Form>
                  <div className="container form-container">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="full_name">Full Name</label>
                          <Field
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="form-control"
                            placeholder="Full Name"
                          />
                          <ErrorMessage
                            name="full_name"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="mobile">Mobile Number</label>
                          <Field
                            type="number"
                            name="mobile"
                            id="mobile"
                            className="form-control"
                            placeholder="Mobile Number"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="state">State</label>
                          <Field as='select' name="state" id="state" className="form-select">
                            <option value="">-- State --</option>
                          </Field>
                            <ErrorMessage name='state' component='small' className='text-danger'/>
                          
                        </div>
                      </div> */}
                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="city">City</label>
                          <Field as='select' name="city" id="city" className="form-select">
                            <option value="">-- City --</option>
                          </Field>
                            <ErrorMessage name='city' component='small' className='text-danger'/>

                        </div>
                      </div> */}

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="blood_group">Blood Group</label>
                          <Field
                            as="select"
                            name="blood_group"
                            id="blood_group"
                            className="form-select"
                          >
                            <option value="">Select a Blood Group</option>
                            <option value="A+ (A Positive)">A+</option>
                            <option value="A- (A Negative)">A-</option>
                            <option value="B+ (B Positive)">B+</option>
                            <option value="B- (B Negative)">B-</option>
                            <option value="O+ (O Positive)">O+</option>
                            <option value="O- (O Negative)">O-</option>
                            <option value="AB+ (AB Positive)">AB+</option>
                            <option value="AB- (AB Negative)">AB-</option>
                          </Field>
                          <ErrorMessage
                            name="blood_group"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="medical_condition">
                            Medical Condition Description
                          </label>
                          <Field
                            as="textarea"
                            name="medical_condition"
                            id="medical_condition"
                            rows="3"
                            placeholder="Medical Condition Description"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="medical_condition"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-red px-5 my-4" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationRequest;
