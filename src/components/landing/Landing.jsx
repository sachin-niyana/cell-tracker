import React from "react";
import Hero from "./Hero";
import Privacy from "./Privacy";
import Tracker from "./Tracker";
import Works from "./Works";
import Footer from "../common/Footer";

const Landing = () => {
  return (
    <>
      <Hero />
      <Privacy />
      <Tracker />
      <Works />
      <Footer/>
  </>
  );
};

export default Landing;
