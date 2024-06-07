import React from "react";
import { BottomArrow, Flag, Headphone, TopRightArrow } from "../common/Icons";
import iphone from "../../assets/images/home/webp/iphone.webp";
import herobottom from "../../assets/images/background/webp/hero-bottom-img.webp";
import Nav from "./Nav";
const Header = () => {
  return (
    <div className="bg-hero sm:pb-20 pb-10 w-full object-cover bg-center bg-cover relative">
      <Nav />
      <img
        className="absolute bottom-[-1px]"
        src={herobottom}
        alt="herobottom"
      />
      <div className="my_container mx-auto sm:pt-[63px] pt-[56px]">
        <div className="flex sm:flex-row flex-col sm:gap-12 gap-8 justify-center items-center">
          <div className="flex flex-col">
            <h1 className="max-w-[520px] sm:text-start text-center leading-[100%] text-white xl:text-6xxl lg:text-5xl sm:text-4xl text-3xxl font-extrabold">
              Find the location{" "}
              <span className="font-light">of any phone by its number</span>
            </h1>
            <p className="text-white font-normal sm:text-base text-sm max-w-[520px] sm:text-start text-center sm:pt-2 pt-3">
              Add phones to your account & track them when neededAdd phones to
              your account & track them when needed
            </p>
            <div className="bg-white sm:mx-0 mx-auto rounded ps-2.5 max-w-[448px] sm:mt-4 mt-8">
              <div className="flex justify-start items-center gap-2">
                <Flag />
                <div className="flex justify-start items-center gap-1">
                  <p className="text-black text-base font-normal" value="in">
                    +91
                  </p>
                  <BottomArrow />
                </div>
                <div className="w-full flex gap-2">
                  <input
                    required
                    className="w-full my-3.5 h-7 outline-none leading-[166%] text-black text-base font-normal"
                    type="number"
                  />
                  <button className="bg-dark-blue h-full py-4 px-6 rounded text-base font-semibold hover:scale-[1.1] hover:duration-300 duration-300 text-white flex items-center gap-1 ">
                    <span>
                      <TopRightArrow />
                    </span>
                    Locate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute xl:top-[41%] top-[45%] xl:right-[-15px] sm:right-0 sm:left-auto left-[50%] lg:max-w-[280px] sm:max-w-[200px] max-w-[164px] md:p-[18px] sm:p-3 p-2 rounded-tl-xl rounded-br-xl w-full bg-white shadow-helpCard">
              <div className="flex justify-between items-center">
                <p className="font-bold lg:text-2xl text-xl text-sky ">
                  Need help?
                </p>
                <Headphone />
              </div>
              <p className="font-normal lg:text-base text-sm text-dark-blue max-w-[198px] leading-normal sm:pb-3.5 pb-3">
                Get help with technical, account and billing enquiries.
              </p>
              <button className="py-3.5 rounded bg-dark-blue text-white font-semibold lg:text-base text-sm w-full hover:scale-[1.0] hover:duration-300 h-[59px]  hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">
                Customer Support
              </button>
            </div>
            <img
              src={iphone}
              className="max-w-[521px] w-full max-h-[606px]"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
