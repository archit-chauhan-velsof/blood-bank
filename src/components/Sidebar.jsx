import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="middle-section">
                <nav className="sidenav">
                    <ul>
                        <li>
                            <NavLink to="bloodbanks">
                                <div className="icon-area">
                                    <i className="bi bi-shield-fill-plus"></i>
                                </div>
                                <p>Blood Banks - U</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="searchdonors">
                                <div className="icon-area">
                                    <i className="bi bi-search"></i>
                                </div>
                                <p>Search Donors - U</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="donationrequest"  >
                                <div className="icon-area">
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <p>Donation Request - U</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="donorsbankuser"  >
                                <div className="icon-area">
                                    <i class="bi bi-people-fill"></i>
                                </div>
                                <p>Donors - B</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="donationrequestsbankuser"  >
                                <div className="icon-area">
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <p>Donation Request - B</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="bloodinventorybankuser"  >
                                <div className="icon-area">
                                    <i class="bi bi-archive-fill"></i>
                                </div>
                                <p>Blood Inventory - B</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="bloodbanksadmin"  >
                                <div className="icon-area">
                                    <i className="bi bi-shield-fill-plus"></i>
                                </div>
                                <p>Blood Banks - A</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="donorsadmin"  >
                                <div className="icon-area">
                                    <i class="bi bi-people-fill"></i>
                                </div>
                                <p>Donors - A</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="donationrequestadmin"  >
                                <div className="icon-area">
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <p>Donation Requests - A</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bottom-section">
                <NavLink to="registerasdonor" className="btn btn-red">Register as Donor</NavLink>
                <NavLink to="./index.html" className="btn btn-outline-red">Log out</NavLink>
            </div>
        </>
    )
}

export default Sidebar