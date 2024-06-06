import React from "react";
import mastercircle from "../../assets/images/home/png/master-circle.png";
import { trialList } from "../common/Helper";
import { Visa } from "../common/Icons";
import AccountForm from "./AccountForm";
const Account = () => {
  return (
    <div className="relative my-container mx-auto" id="log-in">
      <div className="container max-w-[1188px] px-6 mx-auto pb-[124px] md:pb-[30px] lg:pb-[124px] pt-[54px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[98px] relative z-20">
        <h2
          data-aos="fade-up"
          className="text-center text-dark-blue font-light text-[28px] md:text-3xl lg:text-4xl xl:text-5xl mb-[6px] sm:mb-2"
        >
          Create your <span className="font-extrabold">Account</span>
        </h2>
        <p
          data-aos="fade-up"
          className="text-center font-normal text-black text-opacity-70 text-sm sm:text-base leading-[150%] pb-[34px] sm:pb-10 md:pb-12 lg:pb-14 xl:pb-[72px]"
        >
          Join now and protect your family's phones
        </p>
        <div className="flex items-center gap-[42px] md:gap-6 xl:gap-[37px] flex-col md:flex-row">
          <div
            data-aos="fade-right"
            className="w-full md:max-w-[350px] lg:max-w-[424px]  flex flex-col items-start max-w-[424px] mx-auto"
          >
            <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-light text-dark-blue leading-[120%] pb-[6px] sm:pb-[15px]">
              Get a <span className="font-extrabold">24 hour</span> trial!
            </h3>
            {trialList.map((obj, index) => (
              <div
                className="flex items-center gap-3 md:gap-2 mt-[18px] sm:mt-[11px] w-full"
                key={index}
              >
                <div className="sm:max-w-[48px] max-w-[38px] sm:max-h-[54px] max-h-[30px] bg-sky bg-opacity-20 w-full p-2 sm:p-3 h-full bg_works_ellipse flex items-center justify-center mb-1">
                  <span className="max-w-[18px] sm:max-w-6 w-full">
                    {obj.icon}
                  </span>
                </div>
                <p className="font-normal text-sm sm:text-base leading-[150%]">
                  {obj.title}
                </p>
              </div>
            ))}
            <div className="rounded-xl p-6 sm:p-[18px]  mt-[27px] md:mt-8 xl:mt-10 shadow-accountCard ">
              <p className="font-normal text-sm sm:text-base leading-[150%] text-center">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.{" "}
                <span className="text-sky">View full terms.</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="shadow-accountForm rounded-xl bg-white w-full max-w-[550px] lg:max-w-[679px] overflow-hidden"
          >
            <div className="bg-dark-blue py-6 sm:py-3.5 px-2 sm:px-4 lg:px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] md:gap-3">
                  <div className="size-5 lg:size-[30px] bg-secondary rounded-full flex items-center justify-center">
                    <span className="size-3.5 lg:size-[22px] bg-white rounded-full border-sky border-solid border-4"></span>
                  </div>
                  <p className="text-2xl md:text-xl lg:text-3xl font-normal text-white">
                    Debit/Credit Card
                  </p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-3 xl:gap-[34px]">
                  <Visa />
                  <img
                    className="max-w-6 md:max-w-[54px]"
                    src={mastercircle}
                    alt="mastercircle"
                  />
                </div>
              </div>
            </div>
            <div className="pb-[42px] sm:pb-9 px-2 sm:px-3 lg:px-6 sm:pt-[30px] pt-[42px] border-t-0 rounded-b-xl border-dark-blue border-opacity-10 border-solid border">
              <AccountForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
