import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Question } from "../common/Icons";
import logo2 from "../../assets/images/landing/png/phnlogo.png";

const Nav = () => {
  const [navBar, setnavBar] = useState(false);
  function showNav() {
    setnavBar(!navBar);
  }
  const closeNav = () => {
    setnavBar(false);
  };
  if (navBar) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <div className="my_container mx-auto">
      <nav className=" flex items-center justify-between sm:pt-2 pt-8 ">
        <Link className="relative z-50" href="/">
          {navBar ? (
            <img
              className=" sm:w-[249px] w-[98px] sm:h-[36px] h-[13px]"
              src={logo2}
              alt="logo2"
            />
          ) : (
            <Logo />
          )}
        </Link>
        <ul
          className={`${
            navBar ? "right-0" : "right-[100%] "
          } flex gap-3.5 md:gap-6 max-[1023px]:w-full h-full fixed  bg-white top-0 items-center pt-[120px] md:pt-0 md:h-unset md:static md:bg-transparent md:justify-end flex-col md:flex-row z-40 transition-all ease-linear duration-300 `}
        >
          <li className="flex items-center gap-1.5">
            <span>
              <Question />
            </span>
            <Link
              onClick={closeNav}
              className="md:text-white text-black duration-500 text-base leading-[160%] font-normal"
              href="#home"
            >
              Quick Help
            </Link>
          </li>

          <li>
            <button className=" mt-[32px] md:hidden max-w-[315px] bg-dark-blue text-sm leading-[23px] bg-darkBlue font-semibold text-white py-[14px] px-7 rounded-[4px] hover:text-dark-blue hover:bg-darkBlue duration-300  border-transparent border-2 w-full hover:border-darkBlue ">
              Log In
            </button>
          </li>
          <li className=" pt-[115px] md:pt-0 max-w-[314px] md:max-w-[182px] md:w-auto w-full ">
            <button className="bg-dark-blue w-full  py-4 px-6 rounded text-base leading-[166%] font-semibold text-white">
              Create an Account
            </button>
          </li>
        </ul>
        <div className="md:hidden" onClick={showNav}>
          {navBar ? (
            <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
              <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
              <span className="bg-black w-[15px] h-[1.5px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
            </div>
          ) : (
            <div className="flex md:hidden flex-col z-50 justify-between w-[24px] h-[24px] cursor-pointer relative">
              <span className="bg-white rounded-md !w-1/2 h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-white rounded-md !w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-white rounded-md !w-1/2 h-[3px] ms-auto relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
