import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/auth.css'

const Register = () => {
    return (
        <div className='auth-body'>
            <div className="auth-wrapper">
                <div className="card auth-card">
                    <div className="card-body">
                        <div className="auth-header">
                            <h2 className="card-title">Sign up</h2>
                        </div>

                        <form action="./blood_banks.html">
                            <div className="auth-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <div className="">

                                            </div>
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="phone">Contact Number</label>
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="city">City</label>
                                            <input type="text" name="city" id="city" className="form-control" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="address">Address</label>
                                            <input type="text" name="address" id="address" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-action-area">
                                    <button type="submit" className="btn btn-red btn-fluid">Sign up</button>
                                </div>
                            </div>
                        </form>

                        <div className="auth-bottom-area">
                            <p>Already have an account? <a href="./index.html" className="btn btn-link">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register