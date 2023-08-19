import React from "react";
import Starterhome from "./homecomponents/Starterhome";
import "./Home.css";
import Logoslider from "./homecomponents/Logoslider";
import Services from "./homecomponents/Services";
import Idea from "./homecomponents/Idea";
import Values from "./homecomponents/Values";
import Work from "./homecomponents/Work";
import Wating from "./homecomponents/Wating";

const Home = () => {
  return (
    <div>
      <div className="container mt-2">
        {/* HomeStarte */}
        <Starterhome />
        <Services />
        <Logoslider />
        <Idea />
        <Values />
        <Work />
        <Wating/>
      </div>
    </div>
  );
};

export default Home;
