import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <div className="page-wrapper" data-page-header>
      <div className="sidebar">
        <div className="upper-section">
          <h2 className="logo">LOGO</h2>
          <button
            className="btn collapse-menu"
            type="button"
            data-collapse-menu
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <Sidebar />
      </div>
      <div className="sidebar-backdrop"></div>

      <main className="main-wrapper">
        <Header />

        <Outlet />

        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
