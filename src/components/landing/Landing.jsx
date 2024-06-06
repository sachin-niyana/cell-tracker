import React from "react";
import Privacy from "./Privacy";
import Tracker from "./Tracker";
import Works  from "./Works";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
    <Navbar/>
      <Privacy />
      <Tracker />
      <Works/>
      <Footer/>
    </>
  );
};

export default Landing;
