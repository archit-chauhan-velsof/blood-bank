import React from 'react'
import { Link } from 'react-router-dom'

const BloodBanks = () => {
  return (
    <>
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
                            <Link to="./blood_banks.html" className="active">
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
                        <h1 className="page-title">Blood Banks</h1>
                        <div className="action-area">
                            <div className="item">
                                <label htmlFor="state">State</label>
                                <select name="state" id="state" className="form-select form-select-sm">
                                    <option value="">None Selected</option>
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="city">City</label>
                                <select name="city" id="city" className="form-select form-select-sm">
                                    <option value="">None Selected</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Blood Bank</td>
                                    <td>Contact Number</td>
                                    <td>City</td>
                                    <td>State</td>
                                    <td>Address</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AIIMS</td>
                                    <td>9876543210</td>
                                    <td>City 1</td>
                                    <td>New Delhi</td>
                                    <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                                    <td>
                                        <Link to="#" className="img-icon">
                                            <img src="assets/images/question-icon.svg" alt="User"/>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav aria-label="Page navigation" className="pagination-nav">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>
                            <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

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
    </>
  )
}

export default BloodBanks