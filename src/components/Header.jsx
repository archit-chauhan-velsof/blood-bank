import React from "react";

const Header = () => {
  return (
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
              <img src="assets/images/user.svg" alt="User" />
            </div>
            <div className="user-details-area">
              <p className="username">Chris Parker</p>
              <p className="user-id">ID-987654321</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
