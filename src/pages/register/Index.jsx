import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import {axiosInstanceWithoutToken } from "../../services/axiosInstance";
import { LOGIN_URL } from "../../routes/url_constant";
import { registerSchema } from "../../schemas/loginAndRegister";

const Register = () => {
  const Navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  const handleRegister = (values) => {
    // API Logic
    setLoading(true);
    let formData = new FormData();
    formData.append("email", values.email);
    formData.append("username", values.name);
    formData.append("password", values.password);
    formData.append("name", values.name);
    formData.append("gender", values.gender);
    formData.append("contact_number", values.phone);
    formData.append("city", values.city);
    formData.append("address", values.address);
    formData.append("role", values.role);
    axiosInstanceWithoutToken
      .post("register", formData)
      .then((res) => {
        console.log(res.data);
        Navigate("/");
      })
      .catch((err) => console.log(err)).finally(()=>setLoading(false));
  };

  return (
    <div className="auth-body">
      <div className="auth-wrapper">
        <div className="card auth-card">
          <div className="card-body">
            <div className="auth-header">
              <h2 className="card-title">Sign up</h2>
            </div>

            <Formik
              initialValues={{
                name: "",
                gender: "",
                email: "",
                phone: "",
                city: "",
                address: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="auth-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Gender</label>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="Male"
                              className="form-check-input"
                              id="gender-male"
                            />
                            <label
                              htmlFor="gender-male"
                              className="form-check-label"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="Female"
                              className="form-check-input"
                              id="gender-female"
                            />
                            <label
                              htmlFor="gender-female"
                              className="form-check-label"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="Others"
                              className="form-check-input"
                              id="gender-other"
                            />
                            <label
                              htmlFor="gender-other"
                              className="form-check-label"
                            >
                              Other
                            </label>
                          </div>
                          <ErrorMessage
                            name="gender"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-12">
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
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Contact Number</label>
                          <Field
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Phone"
                          />
                          <ErrorMessage
                            name="phone"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="city">City</label>
                          {/* {cities?.map((e) => (
                                                        <option value={e.attributes.code} key={e.id}>
                                                            {e.attributes.name}
                                                        </option>
                                                    ))} */}
                          <Field
                            as="select"
                            name="city"
                            id="city"
                            className="form-select"
                          >
                            <option value="">--city--</option>
                            <option value="1">Hauz Khas</option>
                            <option value="2">Noida Sector 63</option>
                          </Field>
                          <ErrorMessage
                            name="city"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="role">Users Role</label>
                          <Field
                            as="select"
                            name="role"
                            id="role"
                            className="form-select"
                          >
                            <option value="">Select Role</option>
                            <option value="6">Admin</option>
                            <option value="7">Blood Bank User</option>
                            <option value="8">User</option>
                          </Field>
                          <ErrorMessage
                            name="role"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <Field
                            type="text"
                            name="address"
                            id="address"
                            className="form-control"
                            placeholder="Address"
                          />
                          <ErrorMessage
                            name="address"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="small"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-action-area">
                      <button type="submit" className="btn btn-red btn-fluid">
                        {loading ? 'Signing up...':'Sign up'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <div className="auth-bottom-area">
              <p>
                Already have an account?{" "}
                <Link to={LOGIN_URL} className="btn btn-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
