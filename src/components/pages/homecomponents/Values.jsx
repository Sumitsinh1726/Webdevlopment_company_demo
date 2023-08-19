import React from "react";
import road from "../../../images/Road.png";
import king from "../../../images/king.png";
import water from "../../../images/water.png";

const Values = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="row g-5">
        <div className="col-lg-4 text-center value-text ">
          <img src={road} alt="" width={50} />
          <p>Our Values</p>
          <p>
            Buzzing with activity, We bring together the power of youth, the
            composure, and the direction of experience with the unflinching
            dedication towards building a difference to every brand we undertake
            to shape.
          </p>
        </div>
        <div className="col-lg-4 text-center value-text">
          <img src={king} alt="" width={50} />

          <p>Our Mission</p>
          <p>
            Our mission is to stretch your hands to enhance the customer reach
            and stand out globally. We wish to celebrate creativity by its ample
            demonstration in the work that we furnish to our clients and help
            them achieve their goal.
          </p>
        </div>
        <div className="col-lg-4 text-center value-text">
          <img src={water} alt="" width={50} />

          <p>Our Approach</p>
          <p>
            We have a clearly established process for putting together a website
            that ensures you get exactly what you want. Love new challenges,
            push ourselves to be resourceful, and value the power of persistence
            and patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
