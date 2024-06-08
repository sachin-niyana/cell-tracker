import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Question } from "../common/Icons";
import logo2 from "../../assets/images/landing/png/phn-logo.png";

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
      <nav className=" flex items-center justify-between md:pt-2 pt-8 ">
        <Link className="relative z-50" href="/">
          {navBar ? (
            <img
              className=" md:w-[249px] w-[98px] md:h-[36px] max-h-[13px] mt-3"
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
          } flex gap-5 md:gap-3.5 max-[1023px]:w-full h-full fixed bg-white top-0 items-center pt-[120px] md:pt-0 md:h-unset md:static md:bg-transparent md:justify-end flex-col md:flex-row z-40 transition-all ease-linear duration-300 `}
        >
          <li className="flex items-center gap-1.5">
            <span>
              <Question />
            </span>
            <Link
              onClick={closeNav}
              className="md:text-white text-black duration-500 text-base leading-[160%] relative font-normal after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
              to="/landing"
            >
              Quick Help
            </Link>
          </li>

          <li>
            <Link
              onClick={closeNav}
              className="md:text-white md:ms-2.5 text-black duration-500 text-base leading-[160%] font-normal relative after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
              href="#home"
            >
              Log In
            </Link>
          </li>
          <li className=" pt-24 md:pt-0 max-w-[314px] md:max-w-[182px] md:w-auto w-full ">
            <button className="md:block hidden bg-white w-full sm:py-4 py-3.5 px-7 rounded text-base font-semibold text-dark-blue hover:scale-[1.0] hover:duration-300   hover:text-white after:-z-20 after:absolute after:h-1 after:w-1 after:bg-dark-blue after:-left-2 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
              Create an Account
            </button>
            <button className="md:hidden block sm:py-4 py-3.5 px-7 w-full rounded bg-dark-blue font-semibold sm:text-base text-sm leading-[166%] text-white sm:block justify-center sm:max-w-[197px]  mx-auto hover:scale-[1.0] hover:duration-300 hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
              Create your Account
            </button>
          </li>
        </ul>
        <div className="md:hidden" onClick={showNav}>
          {navBar ? (
            <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
              <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
              <span className="bg-black w-[15px] h-[1.5px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[9px]"></span>
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
