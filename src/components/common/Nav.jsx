import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Question } from "./Icons";

const Nav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div className="my_container mx-auto">
      <nav className=" flex items-center justify-between pt-2 md:py-2.5">
        <Link className="relative z-50" href="/">
          <Logo />
        </Link>
        <ul
          className={`${
            first ? "right-0" : "right-[100%] "
          } flex gap-3.5 md:gap-6 max-[1023px]:w-full h-full fixed  bg-white top-0 items-center justify-center md:h-unset md:static md:bg-transparent md:justify-end flex-col md:flex-row z-40 transition-all ease-linear duration-300 `}
        >
          <li className="flex items-center gap-1.5">
            <span>
              <Question />
            </span>
            <Link
              onClick={setopen}
              className="md:text-white text-dark-blue duration-500 text-base leading-[160%] font-normal"
              href="#home"
            >
              Quick Help
            </Link>
          </li>

          <li>
            <Link
              onClick={setopen}
              className="md:text-white text-dark-blue duration-500 text-base leading-[160%] font-normal"
              href="#services"
            >
              Log in
            </Link>
          </li>
          <li>
            <button className="bg-dark-blue w-full h-full py-4 px-6 rounded text-base font-semibold text-white">
              Create an Account
            </button>
          </li>
        </ul>
        <div className="md:hidden" onClick={setopen}>
          {first ? (
            <div className="flex md:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 opacity-0"></span>
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 bottom-2"></span>
            </div>
          ) : (
            <div className=" flex md:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
