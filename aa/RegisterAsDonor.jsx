import React from 'react'
import { Link } from 'react-router-dom'

const RegisterAsDonor = () => {
    return (
        <div className="page-wrapper" data-page-header>
            <div className="sidebar">
                <div className="upper-section">
                    <h2 className="logo">LOGO</h2>
                    <button className="btn collapse-menu" type="button" data-collapse-menu>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="middle-section">
                    <nav className="sidenav">
                        <ul>
                            <li>
                                <Link to="./blood_banks.html">
                                    <div className="icon-area">
                                        <i className="bi bi-shield-fill-plus"></i>
                                    </div>
                                    <p>Blood Banks</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="./search.html">
                                    <div className="icon-area">
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <p>Search Donors</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="./donation_request.html">
                                    <div className="icon-area">
                                        <i className="bi bi-chat-left-dots-fill"></i>
                                    </div>
                                    <p>Donation Request</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="bottom-section">
                    <Link to="./register_donor.html" className="btn btn-red">Register as Donor</Link>
                    <Link to="./index.html" className="btn btn-outline-red">Log out</Link>
                </div>
            </div>
            <div className="sidebar-backdrop"></div>

            <main className="main-wrapper">

                <header className="header">
                    <div className="header-wrapper">
                        <div className="left-area">
                            <button className="btn" type="button" data-open-sidebar>
                                <i className="bi bi-list"></i>
                            </button>
                        </div>
                        <div className="right-area">
                            <div className="profile-card">
                                <div className="img-area">
                                    <img src="assets/images/user.svg" alt="User"/>
                                </div>
                                <div className="user-details-area">
                                    <p className="username">Chris Parker</p>
                                    <p className="user-id">ID-987654321</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content-wrapper">

                    <div className="container-fluid">

                        <div className="heading-area">
                            <h1 className="page-title">Register as a Donor</h1>
                            <div className="action-area"></div>
                        </div>

                        <div className="container px-0">
                            <div className="card">
                                <div className="card-body">
                                    <form>


                                        <div className="container form-container">
                                            <div className="row">
                                                <h6 className="my-3 w-100">Personal Details</h6>

                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                        <label htmlFor="full_name">Full Name</label>
                                                        <input type="text" name="full_name" id="full_name"
                                                            className="form-control" placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="gender">Gender</label>
                                                        <select name="gender" id="gender" className="form-select">
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="dob">Date of Birth</label>
                                                        <input type="date" name="dob" id="dob" className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="blood_group">Blood Group</label>
                                                        <select name="blood_group" id="blood_group" className="form-select">
                                                            <option value="1">A+</option>
                                                            <option value="1">A-</option>
                                                            <option value="1">B+</option>
                                                            <option value="1">B-</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <h6 className="my-3 w-100">Contact Details</h6>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="mobile">Mobile Number</label>
                                                        <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Mobile Number"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"/>
                                                    </div>
                                                </div>

                                                <h6 className="my-3 w-100">Location Details</h6>

                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">State</label>
                                                        <select name="state" id="state" className="form-select">
                                                            <option value="">-- State --</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="district">District</label>
                                                        <select name="district" id="district" className="form-select">
                                                            <option value="">-- District --</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">City</label>
                                                        <select name="city" id="city" className="form-select">
                                                            <option value="">-- City --</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <h6 className="w-100 my-3">Donor Specific Information</h6>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="donation_date">Late Date of Donation</label>
                                                        <input type="date" name="donation_date" id="donation_date"
                                                            className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="preference">Late Date of Donation</label>
                                                        <select name="preference" id="preference" className="form-control">
                                                            <option value="">Select Donation preference</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Have you donated previously</label>
                                                        <div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                    name="donated_previously" id="donated_previously_1"
                                                                    value="1"/>
                                                                    <label className="form-check-label"
                                                                        htmlFor="donated_previously_1">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                    name="donated_previously" id="donated_previously_2"
                                                                    value="2"/>
                                                                    <label className="form-check-label"
                                                                        htmlFor="donated_previously_2">No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>In the last six months have you had any of the
                                                            following?</label>
                                                        <div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                    name="following" id="following_1" value="1"/>
                                                                    <label className="form-check-label"
                                                                        htmlFor="following_1">Tattooing</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                    name="following" id="following_2" value="2"/>
                                                                    <label className="form-check-label"
                                                                        htmlFor="following_2">Piercing</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                    name="following" id="following_3" value="3"/>
                                                                    <label className="form-check-label" htmlFor="following_3">Dental
                                                                        extraction</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="agree"/>
                                                            <label className="form-check-label" htmlFor="agree">
                                                                I agree to be contacted by blood banks, SBTCs and NBTC
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-red px-5 my-4">Submit</button>
                                                </div>

                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <footer className="footer">
                    <div className="footer-wrapper">
                        <div className="left-area">
                            <p>2023 Developed and Maintained by Velocity.</p>
                        </div>
                        <div className="right-area">
                            <p>Technical Support by Velocity.</p>
                        </div>
                    </div>
                </footer>

            </main>
        </div>

    )
}

export default RegisterAsDonor