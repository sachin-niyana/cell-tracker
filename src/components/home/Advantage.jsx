import React from "react";
import { advantages } from "../common/Helper";
import { RightVector, Vector } from "../common/Icons";

const Advantage = () => {
  return (
    <div className=" relative ">
      <span className=" absolute left-0 top-[2%]">
        <Vector />
      </span>
      <span className=" absolute right-0 sm:bottom-[-10%] bottom-[-4%]">
        <RightVector />
      </span>
      <div className="my_container mx-auto sm:pt-[18px] pt-16">
        <h2 className="font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[32.48px] sm:leading-[38px] md:leading-[42px] lg:leading-[48px] text-dark-blue text-center">
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h2>
        <p className="max-w-[472px] mx-auto text-center text-sm sm:text-base font-normal leading-[21px] sm:leading-6 text-black opacity-70 mt-3 sm:mt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row flex-wrap sm:-mx-3 mt-6 lg:mt-[26px] justify-center">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-3  mt-[18px] sm:mt-6"
            >
              <div
                className={`lg:max-w-[271px] mx-auto md:mx-0 h-full min-h-[184px] border sm:min-h-[253px] hover:border border-solid hover:border-transparent duration-300 border-dark-blue border-opacity-10 hover:shadow-none shadow-cellTrackerCard rounded-xl ${
                  index % 2 != 0 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="lg:max-w-[271px] mx-auto md:mx-0 h-full min-h-[184px] sm:min-h-[253px] p-5 border hover:border border-solid hover:border-dark-blue duration-300 border-dark-blue border-opacity-10  rounded-[11px]">
                  <span>{advantage.icon}</span>
                  <p className="font-normal text-[24px] leading-[28.8px] text-dark-blue mt-1">
                    {advantage.title}
                  </p>
                  <p className="text-base leading-6 font-normal text-black opacity-70 mt-[6px]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="py-4 px-7 w-full rounded bg-dark-blue font-semibold text-base leading-[26.59px] text-white flex sm:block justify-center sm:max-w-[197px] mt-[42px] lg:mt-[73px] mx-auto hover:scale-[1.0] hover:duration-300   hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default Advantage;
