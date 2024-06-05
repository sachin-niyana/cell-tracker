import React from "react";
import iphone from "../../assets/images/home/webp/iphone.webp";
import herobottom from "../../assets/images/background/png/hero-bottom-img.png";
import Nav from "../common/Nav";
import {
  BottomArrow,
  Flag,
  Found,
  Headphone,
  LeftVector,
  TopRightArrow,
} from "../common/Icons";
const Hero = () => {
  return (
    <div className="bg-hero pb-16 w-full object-cover bg-center bg-cover relative">
      <Nav />
      <img
        className="absolute bottom-[-1px]"
        src={herobottom}
        alt="herobottom"
      />
      <div className="my-container mx-auto">
        <div className="flex sm:flex-row flex-col sm:gap-12 gap-8 justify-center items-center">
          <div className="flex flex-col">
            <h1 className="max-w-[520px] sm:text-start text-center leading-[100%] text-white xl:text-6xxl lg:text-5xl sm:text-4xl text-3xxl font-extrabold">
              Find the location{" "}
              <span className="font-light">of any phone by its number</span>
            </h1>
            <p className="text-white font-normal text-base max-w-[520px] sm:text-start text-center sm:pt-2 pt-3">
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
                <form className="w-full flex gap-2">
                  <input
                    required
                    className="w-full my-3.5 h-7 outline-none leading-[166%] text-black text-base font-normal"
                    type="number"
                  />
                  <button className="bg-dark-blue h-full py-4 px-6 rounded text-base font-semibold text-white flex items-center gap-1">
                    <span>
                      <TopRightArrow />
                    </span>
                    Locate
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 xl:bottom-8 right-0 xl:-right-4 md:w-[247px] w-[205px] md:p-[16px] sm:p-3 p-2 rounded-xl bg-[#F2F6FB] shadow-darkShadow overflow-hidden max-h-[189px]">
              <div className="flex gap-1.5 md:gap-3 items-center xl:h-[33px] pb-1.5">
                <Found />
                <p className="font-normal text-lg md:text-xl text-primary">
                  Geolocation found!
                </p>
              </div>
              <a
                href="tel:+44 633 427 390"
                className="font-semibold text-xl md:text-2xl !leading-[160%] text-primary  "
              >
                +44 633 427 390
              </a>
              <p className="font-normal md:text-base text-sm text-black !leading-[150%] sm:pb-3.5 pb-3 pt-1.5">
                3 Succession Walk, Fish Island, London E3 2RX, United Kingdom
              </p>
              <div className="relative">
                <LeftVector className="w-[23px] h-[21px] absolute -left-2.5 md:w-[38px] md:h-10 top-[-2px] md:-left-[17px]" />
              </div>
              <p className="font-normal text-xs md:text-sm text-black !leading-normal text-end">
                June 02,2024 17:34
              </p>
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

export default Hero;
