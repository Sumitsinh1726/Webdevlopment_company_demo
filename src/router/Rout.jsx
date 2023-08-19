import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Technology from "../components/pages/Technology";
// import Portfolio from "../components/pages/Portfolio";
import About from "../components/pages/About";
import Product from "../components/pages/Product";

const Rout = () => {
  return (
    <div>
      <BrowserRouter>
        <Topnav />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Services Route */}
          <Route path="/service" element={<Services />} />

          {/* Technology Route */}
          {/* <Route path="/technology" element={<Technology />} /> */}

          {/* Portfolio Route */}
          <Route path="/product" element={<Product />} />

          {/* About Route */}
          <Route path="/about" element={<About />} />

          {/* Portfolio Route */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Rout;
