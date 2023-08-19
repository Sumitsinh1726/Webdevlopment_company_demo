import React from "react";
import serstarter from '../../../images/Serstarter.svg'
const Starter = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <img className="ServiceStarter" src={serstarter} alt=""  />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
            <p className="fs-4 fw-bolder">What We Do</p>
            <p className="fs-5 fw-bolder">We Convert your ideas into reality</p>
          </div>
        </div>
      </div>
      <hr />
      {/* <hr className="border border-5 border-dark" /> */}
    </div>
  );
};

export default Starter;
