import React from "react";
import ideasvg from '../../../images/Idea.svg'
const Idea = () => {
  return (
    <div className="container pt-4 pb-5">
      <div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fs-3">Convert your ideas into Reality.</h1>
            <p className="pt-2">
              Working with Akshar Group has always bear excellent results.
              Having a well-versed creative team helps us to shape your ideas
              into reality to provide you with positive outcomes.
            </p>
            {/* <button className="our-service pt-2">OUR SERVICES</button> */}
            <button class="cta">
            <span class="hover-underline-animation">Our Service</span>
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
          <div className="col-lg-6">
            <img src={ideasvg} alt="" className="idea-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
