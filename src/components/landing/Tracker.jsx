import React from "react";
import mobiletrack from "../../assets/images/landing/png/iphone-location.png";
import { trackerdata } from "../common/Helper";
import vectorright from "../../assets/images/landing/png/vector-right.png";
import vector from "../../assets/images/landing/png/vector-left.png";

const Tracker = () => {
  return (
    <div id="features" className=" relative">
      <span className=" absolute right-0 lg:bottom-[2%] md:bottom-[-12%] bottom-[2%] hidden md:block">
        <img
          className="md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vectorright}
          alt="vector-left"
        />
      </span>
      <span className=" absolute left-0 bottom-[-9%] md:hidden block">
        <img
          className=" md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vector}
          alt="vector"
        />
      </span>
      <span className=" absolute left-0 top-[-2%] ">
        <img
          className=" md:w-[106px] w-[41px] md:h-[113px] h-[44px]"
          src={vector}
          alt="vector"
        />
      </span>
      <div className="xl:mt-[132px] mt-24">
        <div className=" max-w-[1140px] mx-auto min-[1154px]:px-3 px-5">
          <h2 className="text-2xxl sm:text-4xl lg:text-5xl font-light text-dark-blue leading-[32.8px] sm:leading-10 lg:leading-[48px] text-center">
            Find Anyone Anywhere{" "}
            <span className="font-extrabold block sm:inline">
              {" "}
              for Under $1
            </span>
          </h2>
          <p className="font-normal text-sm sm:text-base text-black opacity-[70%] leading-[21px] sm:leading-6 text-center sm:max-w-[442px] max-w-[279px] mx-auto pt-2">
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
            sit elit rhoncus vestibulum fames libero id.
          </p>
          <div className="flex flex-wrap relative flex-row justify-center items-center mt-[31px] sm:mt-[12] md:mt-14 lg:mt-[78px]">
            <img
              src={mobiletrack}
              alt="mobile-map"
              className="top-[-22px]  lg:absolute w-[213px] h-[319px] lg:w-[256px] lg:h-[386px] translate-x-7"
            />
            {trackerdata.map((obj, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index == 0
                      ? "sm:w-full mt-[47px] lg:mt-0 sm:justify-center max-sm:order-0 lg:justify-start lg:w-1/2 block"
                      : index == 1
                      ? "md:justify-end max-sm:order-1 sm:mt-6 lg:mt-0 mt-[18px]"
                      : index == 2
                      ? "mt-[18px] sm:mt-6 max-sm:order-0 sm:ps-5 lg:ps-0"
                      : index == 3
                      ? "md:justify-end max-sm:order-3 sm:mt-6 mt-[18px]"
                      : index == 4
                      ? "sm:ps-5 lg:justify-center flex order-5 lg:pr-5 mt-[18px] sm:mt-6 lg:mt-[51px]"
                      : ""
                  } max-md:justify-center w-full h-[156px] flex sm:w-1/2 pr-[4px]`}
                >
                  <div className="flex items-center pr-4 gap-[14px] w-full h-[152px] sm:min-h-[156px] max-w-[376px] rounded border border-black border-opacity-10">
                    <div className="sm:min-w-[75px] cursor-pointer sm:h-[70px] min-w-[61px] min-h-[57px] relative min-[1140px]:left-[-.5px] left-[-1px] border-l-[1px] border-l-black border-opacity-10 bg-light-sky flex justify-center items-center">
                      {obj.img}
                    </div>
                    <p className=" !font-normal text-black text-lg leading-[29.92px] lg:text-xl md:leading-[33.24px]  max-w-[269px]">
                      {obj.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
