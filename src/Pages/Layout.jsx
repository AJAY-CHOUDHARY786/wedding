import { Outlet, Link } from "react-router-dom";
import "../Style/Header.css";
import React, { useState } from "react";
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="head">
        <div className="containere">
          <nav className="navbar">
            <div className="right">
              <Link className="link" to="/Home">
                Home
              </Link>

              <Link className="link" to="/Ourwork">
                {" "}
                Ourwork
              </Link>

              <Link className="link" to="/Services">
                {" "}
                Service
              </Link>
            </div>

            <Link className="logo" to="/">
              <img
                src="https://image1.jdomni.in/storeLogo/24062021/02/36/3E/03E515B753E7AD405316CABEE4_1624521005211.png?output-format=webp"
                alt=""
                style={{ height: "100px" }}
              />
            </Link>

            <div className="left">
              <Link className="link" to="/About">
                {" "}
                About Us
              </Link>
              <Link className="link" to="/Testimoniol">
                {" "}
                Testimoniols{" "}
              </Link>
              <Link className="link" to="/Contact">
                {" "}
                Contact
              </Link>
            </div>
          </nav>
          <div className="ham-icon">
            
            <div className="navbar">
              <button className="toggle-button" onClick={toggleMenu}>
                {isOpen ? (
                  <div className="cross-icon">&#10005;</div>
                ) : (
                  <div className="hamburger-icon">&#9776;</div>
                )}
              </button>

              {isOpen && (
                <div className="nav-menu">
                  {/* Your navigation menu items go here */}
                  <Link className="link" to="/Home">
                Home
              </Link>

              <Link className="link" to="/Ourwork">
                {" "}
                Ourwork
              </Link>

              <Link className="link" to="/Services">
                {" "}
                Service
              </Link>
                  <Link className="link" to="/About">
                    {" "}
                    About Us
                  </Link>
                  <Link className="link" to="/Testimoniol">
                    {" "}
                    Testimoniols{" "}
                  </Link>
                  <Link className="link" to="/Contact">
                    {" "}
                    Contact
                  </Link>
                
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
