import React from "react";
import { advantages } from "../common/Helper";

const Advantage = () => {
  return (
    <div className="my-container mx-auto pt-[18px]">
      <h2 className="font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[32.48px] sm:leading-[38px] md:leading-[42px] lg:leading-[48px] text-dark-blue text-center">
        Advantages of <span className="font-extrabold">Celltracker</span>
      </h2>
      <p className="max-w-[472px] mx-auto text-center text-sm sm:text-base font-normal leading-[21px] sm:leading-6 text-black opacity-70 mt-3 sm:mt-2">
        Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
        elit rhoncus vestibulum fames libero id.
      </p>
      <div className="flex flex-row flex-wrap sm:-mx-3 mt-6 lg:mt-[50px] justify-center">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-3  mt-[18px] sm:mt-6"
          >
            <div
              className={`lg:max-w-[271px] mx-auto md:mx-0 h-full min-h-[184px] sm:min-h-[253px] hover:border border-solid hover:border-transparent duration-300 border-dark-blue border-opacity-10 hover:shadow-none shadow-cellTrackerCard rounded-xl ${
                index % 2 != 0 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="lg:max-w-[271px] mx-auto md:mx-0 h-full min-h-[184px] sm:min-h-[253px] p-5 border-[2px] hover:border border-solid hover:border-dark-blue duration-300 border-dark-blue border-opacity-10  rounded-xl">
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
      <button className="  p-[16px_28px] rounded bg-dark-blue font-semibold text-base leading-[26.59px] text-white flex sm:block justify-center sm:max-w-[197px] mt-[42px] lg:mt-[73px] mx-auto">
        Create your Account
      </button>
    </div>
  );
};

export default Advantage;
