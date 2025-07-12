import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must have exactly 10 digits').required('Contact Number is required'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required')
})

const Register = () => {
    return (
        <div className='auth-body'>
            <div className="auth-wrapper">
                <div className="card auth-card">
                    <div className="card-body">
                        <div className="auth-header">
                            <h2 className="card-title">Sign up</h2>
                        </div>

                        <Formik
                            initialValues={{
                                name: '',
                                gender: '',
                                email: '',
                                phone: '',
                                city: '',
                                address: '',
                                password: ''
                            }}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                console.log('Registered:', values);
                                // API Logic
                            }}
                        >
                            {({handleSubmit})=>(
                            <form onSubmit={handleSubmit}>
                                <div className="auth-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <Field type="text" name="name" id="name" className="form-control" placeholder="Name" />
                                                <ErrorMessage name="name" component="div" className="text-danger" />

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <div className="form-check form-check-inline">
                                                    <Field
                                                        type="radio"
                                                        name="gender"
                                                        value="male"
                                                        className="form-check-input"
                                                        id="gender-male"
                                                    />
                                                    <label htmlFor="gender-male" className="form-check-label">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <Field
                                                        type="radio"
                                                        name="gender"
                                                        value="female"
                                                        className="form-check-input"
                                                        id="gender-female"
                                                    />
                                                    <label htmlFor="gender-female" className="form-check-label">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <Field
                                                        type="radio"
                                                        name="gender"
                                                        value="other"
                                                        className="form-check-input"
                                                        id="gender-other"
                                                    />
                                                    <label htmlFor="gender-other" className="form-check-label">Other</label>
                                                </div>
                                                <ErrorMessage name="gender" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Contact Number</label>
                                                <Field type="text" name="phone" id="phone" className="form-control" placeholder="Phone" />
                                                <ErrorMessage name="phone" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <Field type="text" name="city" id="city" className="form-control" placeholder="City" />
                                                <ErrorMessage name="city" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <Field type="text" name="address" id="address" className="form-control" placeholder="Address" />
                                                <ErrorMessage name="address" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Field type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-action-area">
                                        <button type="submit" className="btn btn-red btn-fluid">Sign up</button>
                                    </div>
                                </div>
                            </form>
                            )}
                        </Formik>

                        <div className="auth-bottom-area">
                            <p>Already have an account? <a href="./index.html" className="btn btn-link">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register