import React from "react";
import headerelips from "../../assets/images/background/png/bottom-elips.png";
import mobilelips from "../../assets/images/background/png/mobile-bottom-elips.png";
import iphone from "../../assets/images/landing/webp/header-iphone.webp";
import { Flag, Found, LeftVector, TopRightArrow } from "../common/Icons";
import MyNavbar from "./MyNavbar";
import { Link } from "react-router-dom";
import { countryCodes } from "../common/Helper";
const Hero = () => {
  return (
    <div
      id="home"
      className="bg-header pb-16 w-full object-cover bg-center bg-cover relative"
    >
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
        <div className="flex md:flex-row flex-col sm:gap-0 gap-16 justify-center items-center pt-14 sm:pt-0">
          <div className="flex flex-col">
            <h1 className="max-w-[520px] sm:text-start text-center lg:leading-[64px] md:leading-[41px] leading-[37px] text-white xl:text-6xxl lg:text-5xl sm:text-4xl text-3xxl font-extrabold">
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
                  <select
                    className="outline-none text-sm leading-[23px] md:leading-[26px] md:text-base text-black font-normal cursor-pointer"
                    name="number"
                    id="number"
                  >
                    {countryCodes.map((code) => (
                      <option
                        key={code.value}
                        value={code.value}
                        className="flex items-center gap-2"
                      >
                        {code.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex gap-2">
                  <input
                    required
                    className="w-full sm:my-3.5 my-[11px] h-7 outline-none leading-[166%] text-black text-base font-normal"
                    type="number"
                  />
                  <div className="group">
                    <div className="sm:py-3.5 py-3 px-[22px] w-full cursor-pointer rounded bg-dark-blue text-white sm:block justify-center sm:max-w-[112px] max-w-[107px] mx-auto hover:scale-[1.0] hover:duration-300 border-2 border-solid border-dark-blue hover:text-dark-blue after:-z-20 after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                      <div className="flex items-center gap-1">
                        <TopRightArrow />
                        <p className="font-semibold sm:text-base text-sm leading-[166%]">
                          Locate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative sm:pt-[10%] pt-0">
            <div className="absolute -bottom-3 xl:bottom-8 right-0 xl:-right-4 sm:w-[247px] shadow-header w-[205px] sm:p-[16px] p-2 rounded-xl bg-[#F2F6FB] shadow-darkShadow overflow-hidden max-h-[189px]">
              <div className="flex gap-1.5 md:gap-3 items-center xl:h-[33px] pb-1.5">
                <Found />
                <p className="font-normal text-lg md:text-xl text-primary">
                  Geolocation found!
                </p>
              </div>
              <Link
                path="tel:+44 633 427 390"
                className="font-semibold text-xl md:text-2xl !leading-[160%] text-primary  "
              >
                +44 633 427 390
              </Link>
              <p className="font-normal md:text-base text-sm text-black !leading-[150%] sm:pb-3.5 pb-3 pt-1.5">
                3 Succession Walk, Fish Island, London E3 2RX, United Kingdom
              </p>
              <div className="absolute sm:bottom-[2%] bottom-[6%] left-0 pointer-events-none">
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
