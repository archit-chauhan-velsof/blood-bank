import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { axiosInstance } from "../../services/axiosInstance";

import { donationRequest_Schema } from "../../schemas/donation";

const DonationRequest = () => {
  const handleSubmit = (values) => {
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
  };
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
                  blood_group: "",
                  medical_condition: "",
                }}
                validationSchema={donationRequest_Schema}
                onSubmit={handleSubmit}
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
