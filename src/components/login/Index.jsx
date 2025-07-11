import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/auth.css'
const Login = () => {
  return (
    <div className='auth-body'>
        <div className="auth-wrapper">
        <div className="card auth-card">
            <div className="card-body">
                <div className="auth-header">
                    <h2 className="card-title">Login</h2>
                    <p>Please enter your details to log into your account</p>
                </div>

                <form action="./blood_banks.html">
                    <div className="auth-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="user_id">User ID</label>
                                    <input type="text" name="user_id" id="user_id" className="form-control" placeholder="User ID"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-action-area">
                            <button type="submit" className="btn btn-red btn-fluid">Login</button>
                        </div>
                    </div>
                </form>

                <div className="auth-bottom-area">
                    <p>Don't have an account? <Link to="./signup.html" className="btn btn-link">Sign up</Link></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login