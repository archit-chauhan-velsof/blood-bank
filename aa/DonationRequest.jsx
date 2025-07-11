import React from 'react'
import { Link } from 'react-router-dom'

const DonationRequest = () => {
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
                            <Link to="./donation_request.html" className="active">
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
                        <h1 className="page-title">Donation Request</h1>
                        <div className="action-area"></div>
                    </div>

                    <div className="container px-0">
                        <div className="card">
                            <div className="card-body">
                                <form>


                                    <div className="container form-container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label for="full_name">Full Name</label>
                                                    <input type="text" name="full_name" id="full_name"
                                                        className="form-control" placeholder="Full Name"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="mobile">Mobile Number</label>
                                                    <input type="number" name="mobile" id="mobile" className="form-control"
                                                        placeholder="Mobile Number"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" name="email" id="email" className="form-control"
                                                        placeholder="Email"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="state">State</label>
                                                    <select name="state" id="state" className="form-select">
                                                        <option value="">-- State --</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="city">City</label>
                                                    <select name="city" id="city" className="form-select">
                                                        <option value="">-- City --</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="blood_group">Blood Group</label>
                                                    <select name="blood_group" id="blood_group" className="form-select">
                                                        <option value="1">A+</option>
                                                        <option value="1">A-</option>
                                                        <option value="1">B+</option>
                                                        <option value="1">B-</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label for="medical_condition">Medical Condition Description</label>
                                                    <textarea name="medical_condition" id="medical_condition" rows="3"
                                                        placeholder="Medical Condition Description"
                                                        className="form-control"></textarea>
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

export default DonationRequest