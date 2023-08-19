import React from "react";
import reactservice from "../../../images/reactservice.svg";
import angularservice from "../../../images/angularservice.jpg";
import wordpressservice from "../../../images/wordpressservice.svg";
import phpservice from "../../../images/phpservice.jpg";
import uiuxservice from "../../../images/uiux.svg";
import webapp from "../../../images/webapp.svg";

const Tecservice = () => {
  return (
    <div>
      <div className="container">
        <div className="py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <img className="tecservice" src={reactservice} alt="" />
            </div>
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">React Development</p>
              <p className="fs-5 ">
                "Team of React development powers dynamic and engaging websites
                by utilizing reusable components and efficient JavaScript
                libraries for seamless user experiences."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <div className="row g-5">
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">Angular Development</p>
              <p className="fs-5 ">
                "Angular development empowers websites with robust frameworks
                and powerful tools, enabling seamless user experiences through
                reusable components and efficient JavaScript libraries."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
            <div className="col-lg-6">
              <img className="tecservice" src={angularservice} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <img className="tecservice" src={wordpressservice} alt="" />
            </div>
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">WordPress Development</p>
              <p className="fs-5 ">
                "WordPress utilizes a simple architecture which allows us to use
                multiple features, templates, and customization."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5 d-none">
          <div className="row g-5">
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">PHP Development</p>
              <p className="fs-5 ">
                "PHP development unleashes the power of server-side scripting,
                enabling dynamic websites with robust functionality, seamless
                database integration, and efficient code execution."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
            <div className="col-lg-6">
              <img className="tecservice" src={phpservice} alt="" />
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="row g-5">
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">UI / UX Development</p>
              <p className="fs-5 ">
                " We use power of design and technology to deliver visually
                impressive and best-in-class products and services. Beyond
                websites and modules, we make interactive environments and
                deliver innovative user experiences."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
            <div className="col-lg-6">
              <img className="tecservice" src={uiuxservice} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <img className="tecservice" src={webapp} alt="" />
            </div>
            <div className="col-lg-6 tectext">
              <p className="fs-2 fw-bold">Mobile & Web Application</p>
              <p className="fs-5 ">
                "PWA gives a website the look and feel of a traditional
                smartphone app when accessing it on a mobile web browser."
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecservice;
