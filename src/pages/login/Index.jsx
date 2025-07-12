import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    user_id : Yup.string().required('User ID is required.'),
    password : Yup.string().required('Password is required.').min(5,'Password should be atleast of 5 characters.')
})

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
                
                <Formik
                initialValues={{user_id:'',password:''}}
                validationSchema={loginSchema}
                onSubmit={(values)=>{
                    console.log('form submitted',values);
                    // API Logic
                }}
                >
                {({handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <div className="auth-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="user_id">User ID</label>
                                    <Field type="text" name="user_id" id="user_id" className="form-control" placeholder="User ID"/>
                                    <ErrorMessage name='user_id' component='div' className='text-danger'/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" id="password" className="form-control" placeholder="Password"/>
                                    <ErrorMessage name='password' component='div' className='text-danger'/>
                                </div>
                            </div>
                        </div>
                        <div className="form-action-area">
                            <button type="submit" className="btn btn-red btn-fluid">Login</button>
                        </div>
                    </div>
                </form>
                )}
                </Formik>

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