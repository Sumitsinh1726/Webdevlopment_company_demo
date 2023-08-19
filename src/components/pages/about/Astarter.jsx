import React from "react";
import aboutus from "../../../images/about us.svg";
import about from "../../../images/About-us.svg";
import about_rocket from "../../../images/About-rocket.svg";

const Astarter = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <img className="abt-img" src={aboutus} alt="" />
          </div>
          <div className="col-lg-6 m-auto">
            <p className="fs-2 fw-bolder">About Us</p>
            <p className="fs-5 fw-bolder">
              We are passionate development company who converting your ideas in
              reality.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container py-5 mt-5">
        <div className="row g-5">
          <div className="col-lg-6 m-auto">
            <p className="fs-2 fw-bolder">
              The History Behind Our Successful Story
            </p>
            <p className="fs-5 fw-bolder">
              <span style={{ fontSize: "4vh" }}>W</span>e are a web development
              company who are passionate to transform the ideas into reality by
              having a precision to details workforce and have a forte in
              delivering the projects on time (yes, we always do.) We have a
              team of talented people having technical expertise in web app
              development, e-commerce solution, and also website designing
              solutions for developing dynamic and data-driven websites to suit
              your needs.
            </p>
          </div>
          <div className="col-lg-6">
            <img className="abt-img" src={about} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="container py-5 mt-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <img className="abt-img" src={about_rocket} alt="" />
          </div>
          <div className="col-lg-6 m-auto">
            <p className="fs-2 fw-bolder">Our Mission</p>
            <p className="fs-5 fw-bolder">
              <span style={{ fontSize: "4vh" }}>O</span>ur mission is to
              stretch your hands to enhance the customer reach and stand out in
              the website solutions realm globally. We wish to celebrate
              creativity by its ample demonstration in the work that we furnish
              to our clients and help them achieve their objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astarter;
