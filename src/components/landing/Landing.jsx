import React from "react";
import Footer from "../common/Footer";
import Hero from "./Hero";
import Privacy from "./Privacy";
import Tracker from "./Tracker";
import Works from "./Works";

const Landing = () => {
  return (
    <>
      <Hero />
      <Privacy />
      <Tracker />
      <Works />
      <Footer />
    </>
  );
};

export default Landing;
