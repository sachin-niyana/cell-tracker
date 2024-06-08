import React from "react";
import {  RightVector, Vector } from "../common/Icons";
import findPhone from "../../assets/images/home/png/find-phone.png";

const FindPhone = () => {
  return (
    <div className="relative max-w-[2000px] mx-auto">
       <span className=" absolute left-0 top-[27%]">
        <Vector/>
      </span>
       <span className=" absolute right-0 bottom-[-57%]">
      <RightVector/>
      </span>
      <div className="my_container mx-auto mt-[124px] mb-[58px] sm:mb-16 lg:mb-[102px] relative">
        <span className="absolute w-full top-[-135px] left-[50%] -translate-x-1/2 md:translate-x-0 md:top-auto md:bottom-[-80px] lg:bottom-[-130px] md:left-10 max-w-[375px] lg:max-w-[500px] xl:max-w-[606.73px]">
          <img
            className="w-full min-h-[414px] md:min-h-[419px] lg:min-h-[552px] xl:min-h-[670px]"
            src={findPhone}
            alt="findphone"
          />
        </span>
        <div className="bg-find pt-[264px] pb-[46px] md:py-11 xl:py-[98px] bg-no-repeat bg-start bg-cover rounded-[12px] px-[30px] md:pl-0 md:pr-10 lg:pr-[104px] flex justify-center md:justify-end">
          <div className="max-w-[402px] ml-0 flex flex-col items-center justify-center">
            <h2 className="font-light text-[28px] sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-3 sm:mb-2">
              Find your <span className="font-extrabold">phone</span>
            </h2>
            <p className="font-normal text-white text-sm sm:text-base mb-7 leading-[150%] text-center sm:max-w-[350px] lg:max-w-full max-w-[254px]">
              Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
              sit elit rhoncus vestibulum fames libero id.
            </p>
            <div className="md:max-w-[127px] w-full">
              <button className="bg-white w-full h-[59px] py-4 px-7 rounded text-base font-semibold text-dark-blue hover:scale-[1.0] hover:duration-300   hover:text-white after:-z-20 after:absolute after:h-1 after:w-1 after:bg-dark-blue after:-left-2 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPhone;
