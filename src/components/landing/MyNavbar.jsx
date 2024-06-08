import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/images/landing/png/phn-logo.png";
import { Logo } from "../common/Icons";

const navLinks = [
  { href: "home", to: "/", label: "Home" },
  { href: "how-it-works", label: "How It Works" },
  { href: "Features", label: "Features" },
];

const MyNavbar = () => {
  const [navBar, setNavBar] = useState(false);

  const showNav = () => {
    setNavBar(!navBar);
  };

  const closeNav = () => {
    setNavBar(false);
  };

  if (navBar) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }

  return (
    <div className="my_container mx-auto bg-transparent">
      <div className="md:pt-7 pt-8 md:pb-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative z-[13]" aria-label="logo">
            {navBar ? (
              <img
                className="md:w-[249px] w-[98px] md:h-[36px] max-h-[13px] mt-3"
                src={logo2}
                alt="logo2"
              />
            ) : (
              <Logo className="w-[98px] h-[13px]" />
            )}
          </Link>
          <ul
            className={`flex items-center gap-5 sm:gap-[35px] duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[10] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
              navBar && "!left-0"
            }`}
          >
            {navLinks.map(({ href, to, label }) => (
              <li key={label}>
                <Link
                  onClick={closeNav}
                  href={href}
                  to={to}
                  className="text-black md:text-white text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
            <button className="md:hidden block mt-12 sm:py-4 py-3.5 px-7 w-full rounded bg-dark-blue font-semibold sm:text-base text-sm leading-[166%] text-white sm:block justify-center mx-auto hover:scale-[1.0] hover:duration-300 hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
              Log in
            </button>
          </ul>
          <button className="md:block hidden bg-white sm:py-4 py-3.5 px-7 rounded text-base font-semibold text-dark-blue hover:scale-[1.0] hover:duration-300 hover:text-white after:-z-20 after:absolute after:h-1 after:w-1 after:bg-dark-blue after:-left-2 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
            Log in
          </button>
          <div className="md:hidden" onClick={showNav}>
            {navBar ? (
              <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                <span className="bg-black w-[15px] h-[1.5px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[9px]"></span>
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
