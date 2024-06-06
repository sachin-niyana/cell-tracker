import React from "react";
import Privacy from "./Privacy";
import Tracker from "./Tracker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Works from "./Works";
import Hero from "./Hero";

const Landing = () => {
  return (
    <>
      <Hero />
      <Privacy />
      <Tracker />
      <Works/>
      <Footer/>
    </>
  );
};

export default Landing;
