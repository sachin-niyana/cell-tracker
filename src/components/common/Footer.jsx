import React from "react";
import { Facebook, Insta, Linkedin, Logo, Twiter } from "../common/Icons";
import vector from "../../assets/images/landing/png/vector2.png";
import vector1 from "../../assets/images/landing/png/vector1.png";
import footerlogo from "../../assets/images/landing/png/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
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
          src={vector1}
          alt="vector"
        />
      </span>
      <div className="my_container mx-auto overflow-hidden">
        <div className="flex flex-wrap flex-row items-center pb-14 md:pb-12">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <span>
              <img
                className=" sm:w-[249] w-[211px] sm:h-[30px] h-[29px]"
                src={footerlogo}
                alt="footerlogo"
              />
            </span>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:mt-4 mt-9 lg:mt-0 ">
            <ul className="flex gap-6 items-center">
              <li>
                <a
                  href="/home"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%]"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="font-normal sm:text-base text-sm text-black opacity-[70%]"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:mt-4 mt-8 lg:mt-0 ">
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
          © 2024 Cell Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
