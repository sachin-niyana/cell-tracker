import React, { useState } from "react";
import { Logo, Mobilelogo } from "../common/Icons";
import logo2 from "../../assets/images/landing/png/phnlogo.png";

const MyNavbar = () => {
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
    <div className="my_container mx-auto bg-transparent">
      <div className=" md:pt-7 pt-8 md:pb-5 ">
        <div className="flex justify-between items-center">
          <a href="/" className="relative z-[13]" aria-label="logo">
            {navBar ? (
              <img className=" w-[102px] h-[17px]" src={logo2} alt="logo2" />
            ) : (
              <Logo className="w-[98px] h-[13px]" />
            )}
          </a>
          <ul
            className={`flex items-center gap-[35px] duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[10] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
              navBar && "!left-0"
            }`}
          >
            <li>
              <a
                onClick={closeNav}
                href="#"
                className="text-black md:text-white  text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                href="#"
                className="text-black md:text-white  text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
              >
                {" "}
                How It Works{" "}
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                href="#"
                className="text-black md:text-white  text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
              >
                {" "}
                Features{" "}
              </a>
            </li>
            <button className=" mt-[32px] md:hidden max-w-[315px] bg-dark-blue text-sm leading-[23px] bg-dark-blue font-semibold text-white py-[14px] px-7 rounded-[4px] hover:text-dark-blue hover:bg-dark-blue duration-300  border-transparent border-2 w-full hover:border-dark-blue ">
              Log In
            </button>
          </ul>
          <button className=" text-dark-blue max-md:hidden text-base leading-7 font-semibold bg-white py-[14px] md:py-4 px-7 rounded-[4px] hover:bg-dark-blue hover:text-white duration-300">
            Log In
          </button>
          <div className="md:hidden" onClick={showNav}>
            {navBar ? (
              <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-[3.1px] bottom-[8px]"></span>
              </div>
            ) : (
              <div className="flex md:hidden flex-col z-50 justify-between w-[24px] h-[24px] cursor-pointer relative">
                <span className="bg-white rounded-md !w-1/2 h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-white rounded-md !w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-white rounded-md !w-1/2 h-[3px] ms-auto relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
