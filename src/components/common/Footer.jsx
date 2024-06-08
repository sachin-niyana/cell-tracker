import React from "react";
import { Facebook, Insta, Linkedin, Twiter } from "../common/Icons";
import vector from "../../assets/images/landing/png/vector-left.png";
import vectorright from "../../assets/images/landing/png/vector-right.png";
import footerlogo from "../../assets/images/landing/png/footer-logo.png";
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
  const currentYear = getCurrentYear();
  const location = useLocation();
  const isLandingPath = location.pathname === "/landing";

  return (
    <div className=" relative">
      <span className=" absolute left-0 top-[-120%] hidden md:block">
        <img
          className=" md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vector}
          alt="vector"
        />
      </span>
      <span className=" absolute right-0 top-[-5%] md:hidden block">
        <img
          className=" md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vectorright}
          alt="vector"
        />
      </span>
      <div className="my_container mx-auto overflow-x">
        <div className="flex flex-wrap flex-row items-center pb-14 lg:pb-12">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <span>
              <img
                className=" sm:w-[259px] w-[211px] sm:h-[36px] h-[29px] cursor-pointer"
                src={footerlogo}
                alt="footer-logo"
              />
            </span>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:mt-0 mt-9 ">
            <ul className="flex sm:gap-6 gap-2.5 items-center justify-center">
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  to="home"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%] relative z-[1] after:w-0 after:bg-black after:opacity-[70%] after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  {isLandingPath ? "Home" : "Help"}
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  to="how-it-works"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%] relative z-[1] after:w-0 after:bg-black after:opacity-[70%] after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  {isLandingPath ? "How It Works" : "Contact us"}
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  to="features"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%] relative z-[1] after:w-0 after:bg-black after:opacity-[70%] after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  {isLandingPath ? "Features" : "Found Phone"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex lg:justify-end justify-center mt-8 lg:mt-0 ">
            <div className="flex gap-4">
              <Link
                to="https://in.linkedin.com/"
                target="_blank"
                className=" hover:-translate-y-2 hover:duration-300 duration-300"
              >
                <Linkedin />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target=" _blank"
                className=" hover:-translate-y-2 hover:duration-300 duration-300"
              >
                <Insta />
              </Link>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className=" hover:-translate-y-2 hover:duration-300 duration-300"
              >
                <Facebook />
              </Link>
              <Link
                to="https://x.com/?lang=en"
                target=" _blank"
                className=" hover:-translate-y-2 hover:duration-300 duration-300"
              >
                <Twiter />
              </Link>
            </div>
          </div>
        </div>
        <hr className="max-w-[1188px] bg-dark-blue h-[1px] mx-auto " />
        <p className="font-normal text-sm text-black opacity-[70%] text-center py-4">
          © {currentYear} Cell Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
