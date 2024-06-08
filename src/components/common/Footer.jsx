import React from "react";
import vector from "../../assets/images/landing/png/vector-left.png";
import vectorright from "../../assets/images/landing/png/vector-right.png";
import footerlogo from "../../assets/images/landing/png/footer-logo.png";
import { Link, useLocation } from "react-router-dom";
import { links, socialLinks } from "./Helper";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();
  const currentYear = getCurrentYear();
  const location = useLocation();
  const isLandingPath = location.pathname === "/landing";

  return (
    <div className="relative">
      <span className="absolute left-0 top-[-120%] hidden md:block">
        <img
          className="md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vector}
          alt="vector"
        />
      </span>
      <span className="absolute right-0 top-[-5%] md:hidden block">
        <img
          className="md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vectorright}
          alt="vector"
        />
      </span>
      <div className="my_container mx-auto overflow-x">
        <div className="flex flex-wrap flex-row items-center pb-14 lg:pb-12">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <span>
              <img
                className="sm:w-[259px] w-[211px] sm:h-[36px] h-[29px] cursor-pointer"
                src={footerlogo}
                alt="footer-logo"
              />
            </span>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:mt-0 mt-9">
            <ul className="flex sm:gap-6 gap-2.5 items-center justify-center">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="font-normal sm:text-base text-sm text-black opacity-[70%] relative z-[1] after:w-0 after:bg-black after:opacity-[70%] after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                  >
                    {isLandingPath ? link.landingText : link.otherText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex lg:justify-end justify-center mt-8 lg:mt-0">
            <div className="flex gap-4">
              {socialLinks.map((socialLink, index) => (
                <Link
                  key={index}
                  to={socialLink.href}
                  target="_blank"
                  className="hover:-translate-y-2 hover:duration-300 duration-300"
                >
                  {socialLink.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="max-w-[1188px] bg-dark-blue h-[1px] mx-auto" />
        <p className="font-normal text-sm text-black opacity-[70%] text-center py-4">
          © {currentYear} Cell Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
