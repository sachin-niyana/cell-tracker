import React from "react";
import { worksData } from "../common/Helper";
import { Dotedline } from "../common/Icons";

const Works = () => {
  return (
    <>
      <div className=" my-container mx-auto sm:pt-[98px] pt-24">
        <h2 className="text-2xxl md:text-4xl lg:text-5xl font-light text-dark-blue leading-[32.8px] sm:leading-10 lg:leading-[48px] text-center">
          How it <span className="font-extrabold">works</span>
        </h2>
        <p className="font-normal text-sm sm:text-base leading-[21px] sm:leading-6 text-black opacity-[70%] text-center max-w-[442px] mx-auto pt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.{" "}
        </p>
        <div className=" flex flex-wrap flex-row justify-center relative pt-[56px]">
          <span className=" absolute lg:-translate-x-[229px] translate-x-[1px] sm:translate-y-[55px] translate-y-[278px]  max-sm:rotate-90">
            <Dotedline />
          </span>
          <span className=" absolute lg:translate-x-[229px] translate-x-[0px] lg:translate-y-[55px] sm:translate-y-[343px] translate-y-[666px] max-lg:rotate-90">
            <Dotedline />
          </span>
          {worksData.map((item, index) => (
            <div
              key={index}
              className={` ${
                index == 0
                  ? "lg:items-start items-center"
                  : index == 1
                  ? "items-center pt-[151px] sm:pt-0"
                  : index == 2
                  ? "lg:items-end items-center pt-[151px] lg:pt-0"
                  : ""
              } flex flex-col lg:w-1/3 sm:w-1/2 w-full`}
            >
              <div className="">
                <div className="w-[75px] h-[70px] group-hover:bg-white duration-300 bg-[#E5F8FB] flex justify-center items-center mt-7 mx-auto">
                  {item.icon}
                </div>
                <p className="font-normal text-xl sm:text-2xl sm:max-w-[241px] max-w-[248px] text-center sm:mt-4 mt-6">
                  {item.title}
                </p>
                <p className="font-normal sm:text-base text-sm max-w-[241px] text-center text-black opacity-[70%] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
