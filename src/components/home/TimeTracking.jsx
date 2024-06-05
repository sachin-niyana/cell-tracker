import React from "react";
import bottom from "../../assets/images/background/png/hero-bottom-img.png";
import { Checked } from "../common/Icon";
const TimeTracking = () => {
  return (
    <div className="bg-tracking bg-cover bg-no-repeat bg-center pt-[126px] pb-[120px] sm:py-[180px] lg:py-[222px] relative">
      <img
        className="absolute top-[-1px] left-0 rotate-180 w-full"
        src={bottom}
        alt="wave"
      />
      <img
        className="absolute bottom-[-1px] left-0 w-full"
        src={bottom}
        alt="wave"
      />
      <div className="container max-w-[1188px] px-6 mx-auto">
        <h2
          data-aos="fade-up"
          className="text-white font-light text-[28px] max-w-[295px] sm:text-3xl lg:text-4xl xl:text-5xl mb-[65px] leading-[116%] md:leading-none md:mb-[70px] lg:mb-[80px] xl:mb-[109px] text-center sm:max-w-[664px] mx-auto"
        >
          Join <span className="font-bold">70,000+ companies</span> doing time
          tracking the easy way
        </h2>
        <div className="flex items-center md:items-end justify-center flex-col-reverse md:flex-row gap-[42px] md:gap-0">
          <div
            data-aos="fade-right"
            className="bg-white border-dark-blue border-opacity-20 shadow-lightShadow w-full max-w-[467px] py-[75px] px-6 md:p-[34px] rounded-tl-xl rounded-br-xl md:rounded-xl"
          >
            <h3 className="text-primary font-normal text-2xl md:text-[32px] leading-[120%] mb-[18px]">
              Cell Tracker
            </h3>
            <p className="text-sm sm:text-base font-normal leading-[150%] mb-3">
              Ideal for freelancers and solopreneurs
            </p>
            <div className="flex items-center gap-[6px]">
              <Checked />
              <p className="font-normal text-sm sm:text-base leading-[150%]">
                1 seat
              </p>
            </div>
            <div className="flex items-center gap-[6px] pt-[6px]">
              <Checked />
              <p className="font-normal text-sm sm:text-base leading-[150%]">
                2 projects
              </p>
            </div>
            <div className="mt-[44px]">
              <p className="font-normal text-sm sm:text-base leading-[150%]">
                <span className="text-primary text-[36px] md:text-[40px]">
                  $0
                </span>{" "}
                free forever
              </p>
            </div>
            <div className="mt-[27px] md:max-w-[192px] w-full">
              <button
                type="submit"
                className="bg-dark-blue w-full h-full py-4 px-6 rounded text-base font-semibold text-white"
              >
                Start your free trial
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-white border-[#03045E33] shadow-lightShadow w-full max-w-[467px] px-6 pt-[60px] pb-[30px] md:p-[34px] md:pt-[63px] rounded-tl-xl rounded-br-xl md:rounded-r-xl md:rounded-t-xl relative md:ml-[-10px]"
          >
            <label className="absolute top-[-8%] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[-7%] xl:right-[-9%] max-w-[157px] sm:max-w-[182px] md:max-w-[204px] w-full bg-dark-blue sm:py-3.5 py-3 sm:px-[35px] ps-6 pe-5 rounded text-xl md:text-2xl text-white font-normal leading-[160%]">
              Most Popular
            </label>
            <h3 className="text-primary font-normal text-2xl md:text-[32px] leading-[120%] mb-[18px]">
              Cell Tracker{" "}
              <span className="text-secondary font-extrabold">Pro</span>
            </h3>
            <p className="text-sm sm:text-base font-normal leading-[150%] mb-3">
              Perfect for teams, startups, and growing businesses.
            </p>
            <div className="flex items-center gap-[6px]">
              <Checked />
              <p className="font-normal text-sm sm:text-base leading-[150%]">
                Unlimited seats
              </p>
            </div>
            <div className="flex items-center gap-[6px] pt-[6px]">
              <Checked />
              <p className="font-normal text-sm sm:text-base leading-[150%]">
                Unlimited projects
              </p>
            </div>
            <div className="mt-[44px]">
              <p className="font-normal text-sm sm:text-base leading-[150%] max-w-[204px] sm:max-w-full">
                <span className="text-primary text-[36px] md:text-[40px]">
                  $10.80
                </span>{" "}
                per seat/month (billed annually)
              </p>
            </div>
            <div className="flex xl:items-center mt-[27px] gap-[9px] sm:gap-4 flex-col xl:flex-row">
              <div className="md:max-w-[192px] w-full">
                <button
                  type="submit"
                  className="bg-dark-blue w-full h-full py-4 px-6 rounded text-base font-semibold text-white"
                >
                  30-Day Free Trial
                </button>
              </div>
              <p className="text-base font-normal text-center md:text-start">
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
