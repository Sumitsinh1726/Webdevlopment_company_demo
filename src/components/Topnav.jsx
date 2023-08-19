import React from "react";
import corestring from "../images/corestring.png";
import { NavLink } from "react-router-dom";


const Topnav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        // style={{ fontSize: "16px", height: "56px" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex" href="">
            <img src={corestring} alt="" width={40} className="Navbar-logo" />
            <section className="m-auto px-2">Corestring</section>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav  nav-underline">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link" href="#">
                  Services
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/technology" className="nav-link" href="#">
                  technology
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" href="#">
                  Product 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <button type="button" className="btn btn-light">
                Contact
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topnav;
