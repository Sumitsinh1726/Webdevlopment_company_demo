import React from "react";
import reactlogo from "../../../images/react.png";
import angular from '../../../images/angular.png'
import wordpress from '../../../images/wordpress.png'
import php from '../../../images/php.png'
import mysql from '../../../images/mysql.png'


const Logoslider = () => {
  return (
    <div className="container d-flex justify-content-center pb-5">
      <div className="row">
        <div className="col-lg-12 pt-5">
          <h2 className="fw-bolde">
            World-class agile product teams to scale your businesss
          </h2>
        </div>
        <div className="col-lg-12  mt-5">
          <div className="row cards g-4">
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={reactlogo} alt="" width={100} />
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={angular} alt="" width={100} />
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={wordpress} alt="" width={100} />
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={php} alt="" width={100} />
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={mysql} alt="" width={100} />
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="card blue">
                <img src={reactlogo} alt="" width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logoslider;
