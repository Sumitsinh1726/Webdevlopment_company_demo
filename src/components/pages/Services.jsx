import React from "react";
import Starter from "./services/Starter";
import "./Service.css";
import Tecservice from "./services/Tecservice";
const Services = () => {
  return (
    <div>
      <div>
        <div className="container mt-5">
          <Starter />
          <Tecservice />
        </div>
      </div>
    </div>
  );
};

export default Services;
