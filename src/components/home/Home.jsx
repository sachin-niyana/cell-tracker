import React from "react";
import Header from "./Header";
import Advantage from "./Advantage";
import HowWorks from "./HowWorks";
import TimeTracking from "./TimeTracking";
import FindPhone from "./FindPhone";
import Account from "./Account";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Advantage />
      <HowWorks />
      <TimeTracking />
      <Account />
      <FindPhone />
      <Footer />
    </>
  );
};

export default Home;
