import React from "react";
import headerelips from "../../assets/images/background/png/bottom-elips.png";
import mobilelips from "../../assets/images/background/png/mobile-bottom-elips.png";
import iphone from "../../assets/images/landing/webp/header-iphone.webp";
import {
  BottomArrow,
  Flag,
  Found,
  LeftVector,
  TopRightArrow,
} from "../common/Icons";
import MyNavbar from "./MyNavbar";
const Hero = () => {
  return (
    <div id="home" className="bg-tracking pb-16 w-full object-cover bg-center bg-cover relative">
      <MyNavbar />
      <img
        className="absolute sm:block hidden bottom-[-1px] max-h-[600px] w-full"
        src={headerelips}
        alt="herobottom"
      />
      <img
        className="absolute sm:hidden block bottom-[-1px]"
        src={mobilelips}
        alt="mobilelips"
      />
      <div className="my_container mx-auto relative pb-5">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-16 justify-center items-center pt-8 sm:pt-0">
          <div className="flex flex-col">
            <h1 className="max-w-[520px] sm:text-start text-center leading-[100%] text-white xl:text-6xxl lg:text-5xl sm:text-4xl text-3xxl font-extrabold">
              Locate any phone,{" "}
              <span className="font-light">anywhere, anytime</span>
            </h1>
            <p className="text-white font-normal sm:text-base text-sm max-w-[550px] sm:text-start text-center sm:pt-2 pt-3">
              Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat
              nunc cursus. Lacus ornare aliquet condimentum elementum elementum
              nisl nibh sed. Egestas aliquam id quam nunc.
            </p>
            <div className="bg-white sm:mx-0 mx-auto rounded ps-2.5 max-w-[448px] sm:h-[55px] h-[51px] sm:mt-4 mt-8">
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
                  <button className="bg-dark-blue  max-w-[107px] sm:h-[55px] h-[51px] py-4 px-6 rounded sm:text-base text-sm hover:scale-[1.1] hover:duration-300 duration-300 font-semibold text-white flex items-center gap-1 ">
                    <span>
                      <TopRightArrow />
                    </span>
                    Locate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative sm:pt-[10%] pt-0">
            <div className="absolute -bottom-3 xl:bottom-8 right-0 xl:-right-4 md:w-[247px] shadow-[0px_9px_13.9px_0px_#E7E7E7] w-[205px] md:p-[16px] sm:p-3 p-2 rounded-xl bg-[#F2F6FB] shadow-darkShadow overflow-hidden max-h-[189px]">
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
              <div className="absolute sm:bottom-[2%] bottom-[6%] left-0">
                <LeftVector className="w-[23px] h-[21px] " />
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
