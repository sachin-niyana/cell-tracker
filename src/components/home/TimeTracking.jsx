import React from "react";
import bottom from "../../assets/images/background/webp/hero-bottom-img.webp";
import { Checked } from "../common/Icons";
const TimeTracking = () => {
  return (
    <div className="bg-tracking bg-cover bg-no-repeat bg-center pt-[126px] pb-[111px] sm:py-[180px] lg:py-[222px] relative">
      <img
        className="absolute top-[-1px] left-0 rotate-180 w-full"
        src={bottom}
        alt="wave"
      />
      <img
        className="absolute xl:h-[161px] bottom-[-1px] left-0 w-full"
        src={bottom}
        alt="wave"
      />
      <div className="container max-w-[1188px] px-6 mx-auto">
        <h2 className="text-white font-light text-[28px] max-w-[295px] sm:text-3xl lg:text-4xl xl:text-5xl mb-[65px] leading-[116%] md:leading-none md:mb-[70px] lg:mb-[80px] xl:mb-[109px] text-center lg:max-w-[664px] sm:max-w-[500px] mx-auto">
          Join <span className="font-bold">70,000+ companies</span> doing time
          tracking the easy way
        </h2>
        <div className="flex items-center md:items-end justify-center flex-col-reverse md:flex-row gap-[42px] md:gap-0">
          <div className="bg-white border-solid border border-black border-opacity-[0.08] shadow-light w-full md:max-w-[467px] max-w-[527px] py-[75px] px-6 md:p-[34px] rounded-tl-xl rounded-br-xl md:rounded-xl">
            <h3 className="text-dark-blue font-normal text-2xl md:text-3xxl leading-[120%] mb-[18px]">
              Cell Tracker
            </h3>
            <p className="text-black text-opacity-70 text-sm sm:text-base font-normal leading-[150%] mb-3">
              Ideal for freelancers and solopreneurs
            </p>
            <div className="flex items-center gap-1.5">
              <Checked />
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%]">
                1 seat
              </p>
            </div>
            <div className="flex items-center gap-1.5 pt-1.5">
              <Checked />
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%]">
                2 projects
              </p>
            </div>
            <div className="md:mt-11 mt-16">
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%]">
                <span className="text-dark-blue text-4xl md:text-4xxl">$0</span>{" "}
                free forever
              </p>
            </div>
            <div className="mt-[27px] md:max-w-[189px] w-full">
              <button className="bg-dark-blue w-full py-4 px-6 rounded sm:text-base text-sm font-semibold text-white hover:scale-[1.0] hover:duration-300   hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                Start your free trial
              </button>
            </div>
          </div>
          <div className="bg-white border-solid border border-black border-opacity-[0.08] shadow-light w-full max-w-[527px] px-6 pt-[60px] pb-[30px] md:p-[34px] md:pt-[63px] rounded-tl-xl rounded-br-xl md:rounded-r-xl md:rounded-t-xl relative md:ml-[-10px]">
            <div className="absolute top-[-8%] right-1/2 translate-x-1/2 md:translate-x-0 lg:right-[-7%] md:right-[-5%] xl:right-[-9%] max-w-[157px] sm:max-w-[182px] md:max-w-[204px] w-full bg-dark-blue sm:py-4 py-3 sm:px-[35px] ps-6 pe-5 rounded text-xl md:text-2xl text-white font-normal leading-[166%]">
              Most Popular
            </div>
            <h3 className="text-dark-blue font-normal text-2xl md:text-3xxl leading-[120%] mb-[18px]">
              Cell Tracker <span className="text-sky font-extrabold">Pro</span>
            </h3>
            <p className="text-black text-opacity-70 text-sm sm:text-base font-normal leading-[150%] mb-3">
              Perfect for teams, startups, and growing businesses.
            </p>
            <div className="flex items-center gap-1.5">
              <Checked />
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%]">
                Unlimited seats
              </p>
            </div>
            <div className="flex items-center gap-1.5 pt-1.5">
              <Checked />
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%]">
                Unlimited projects
              </p>
            </div>
            <div className="mt-[44px]">
              <p className="text-black text-opacity-70 font-normal text-sm sm:text-base leading-[150%] max-w-[204px] sm:max-w-full">
                <span className="text-dark-blue text-4xl md:text-4xxl">
                  $10.80
                </span>{" "}
                per seat/month (billed annually)
              </p>
            </div>
            <div className="flex lg:items-center mt-7 gap-2 sm:gap-4 flex-col lg:flex-row">
              <div className="md:max-w-[168px] w-full">
                <button className="bg-dark-blue w-full py-4 px-6 rounded sm:text-base text-sm font-semibold text-white hover:scale-[1.0] hover:duration-300   hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                  30-Day Free Trial
                </button>
              </div>
              <p className="text-black text-opacity-70 text-base font-normal text-center md:text-start">
                No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;
