import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { axiosInstanceWithoutToken } from "../../services/axiosInstance";
import { SIGNUP_URL } from "../../routes/url_constant";
import { loginSchema } from "../../schemas/loginAndRegister";
import useToken from "../../custom-hooks/useToken";

const Login = ({ setToken }) => {
  const [loading,setLoading] = useState(false);
  const handleLogin = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("identifier", values.user_id);
    formData.append("password", values.password);
    axiosInstanceWithoutToken
      .post(`auth/local`, formData)
      .then((res) => {
        console.log(res.data);
        setToken(res.data.jwt);
        // Navigate('/bloodbanksadmin');
      })
      .catch((err) => console.log(err)).finally(()=>setLoading(false));
  };
  const Navigate = useNavigate();
  return (
    <div className="auth-body">
      <div className="auth-wrapper">
        <div className="card auth-card">
          <div className="card-body">
            <div className="auth-header">
              <h2 className="card-title">Login</h2>
              <p>Please enter your details to log into your account</p>
            </div>

            <Formik
              initialValues={{ user_id: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="auth-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="user_id">User ID</label>
                          <Field
                            type="text"
                            name="user_id"
                            id="user_id"
                            className="form-control"
                            placeholder="User ID"
                          />
                          <ErrorMessage
                            name="user_id"
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
                        {loading ? `Logging in ...` : 'Log in'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <div className="auth-bottom-area">
              <p>
                Don't have an account?{" "}
                <Link to={SIGNUP_URL} className="btn btn-link">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
