import React from "react";
import logo from "../../../images/corestring.png";
const Wating = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-lg-2 text-center">
          <img className="Navbar-logo" src={logo} alt="" width={100} />
        </div>
        <div className="col-lg-6 text-justify">
          <p className="fs-4  fw-bolder">Let's Make Something Great Together</p>
          <p className="fs-6 fw-bolder">
            Get in touch with us today and let’s start transforming your
            business from the ground up.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <button data-text="Awesome" class="button">
            <span class="actual-text">&nbsp;Contact&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;Contact&nbsp;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wating;
