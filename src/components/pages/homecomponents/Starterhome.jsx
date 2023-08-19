import React from "react";
// import start from "../../../images/starte.jpg";
// import start2 from "../../../images/start2.png";
import undrow from '../../../images/undraw.svg'
const Starterhome = () => {
  return (
    <div className="container d-flex justify-content-center py-2">
      <div className="row align-items-center">
        <div className="col-lg-6 mt-1">
          <h1 className="fw-bolder">
            Engineering the next best thing for the digital world
          </h1>
          <p className="fs-5 pt-1">Agile in mind, spirit, and speed.</p>
          <button class="cta">
            <span class="hover-underline-animation">Say Hello </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </div>
        <div className="col-lg-6 mt-5">
          <img
            className="Undrow"
            src={undrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Starterhome;
