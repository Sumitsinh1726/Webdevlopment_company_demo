import React from "react";
import website from "../../../images/Ararat.jpg";
// import website2 from "../../../images/images (1).jpeg";
// import website3 from "../../../images/images.jpeg"



const Work = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="d-flex flex-column align-items-center">
        <div className="text-center">
          <p className="fs-2 fw-bolder">Our Work</p>
          <p>
            We work to help businesses develop the perfect website for
            sustainable business success.
          </p>
        </div>
        <div>
          <div className="row m-5 g-3">
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
          </div>
          <div className="row m-5 g-3">
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
            <div className="col-lg-4">
              <img className="website" src={website} alt=""  />
            </div>
          </div>
        </div>
        <button class="cta">
          <span class="hover-underline-animation">View our work</span>
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
    </div>
  );
};

export default Work;
