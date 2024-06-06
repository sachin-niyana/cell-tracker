import React from "react";
import { Calender, Home, Lock, Mail, ValidCard } from "../common/Icons";

const AccountForm = () => {
  return (
    <>
      <form>
        <p className="text-dark-blue text-base font-normal sm:pt-2 pt-1.5">
          Your Address
        </p>
        <div className="flex mt-2 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
          <div className="bg-dark-gray sm:px-3 px-3.5 sm:py-3.5 py-3 max-w-[48px] sm:max-w-full">
            <span className="max-w-[20px] sm:max-w-[24px] w-full">
              <Home />
            </span>
          </div>
          <input
            className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
            placeholder="Address Line 1"
          />
        </div>
        <p className="text-base font-normal text-gray pt-1 pb-5">
          Our enter address manually
        </p>
        <label htmlFor="email" className="text-dark-blue text-base font-normal">
          Email Address
        </label>
        <div className="flex mt-2 items-center border mb-5 border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
          <div className="bg-dark-gray sm:px-3 px-3.5 sm:py-3.5 py-3 max-w-[48px] sm:max-w-full">
            <span className="max-w-[20px] sm:max-w-[24px] w-full">
              <Mail />
            </span>
          </div>
          <input
            id="email"
            className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
            placeholder="Email Address"
          />
        </div>
        <label
          htmlFor="number"
          className="text-dark-blue text-base font-normal"
        >
          Card Number (Visa or Mastercard)
        </label>
        <div className="flex mt-2 mb-5 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
          <div className="bg-dark-gray sm:px-3 px-3.5 sm:py-3.5 py-3 max-w-[48px] sm:max-w-full">
            <span className="max-w-[20px] sm:max-w-[24px] w-full">
              <ValidCard />
            </span>
          </div>
          <input
            id="number"
            className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
            placeholder="Valid Card Number"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex-col flex w-full">
            <label
              htmlFor="date"
              className="text-dark-blue text-base font-normal"
            >
              Expiry Date
            </label>
            <div className="flex mt-2 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
              <div className="bg-dark-gray sm:px-3 px-3.5 sm:py-3.5 py-3 max-w-[48px] sm:max-w-full">
                <span className="max-w-[20px] sm:max-w-[24px] w-full">
                  <Calender />
                </span>
              </div>
              <input
                id="date"
                className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="code"
              className="text-dark-blue text-base font-normal"
            >
              Card Security Code
            </label>
            <div className="flex mt-2 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
              <div className="bg-dark-gray sm:px-3 px-3.5 sm:py-3.5 py-3 max-w-[48px] sm:max-w-full">
                <span className="max-w-[20px] sm:max-w-[24px] w-full">
                  <Lock />
                </span>
              </div>
              <input
                id="code"
                className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
                placeholder="E.x @ 0123"
              />
            </div>
          </div>
        </div>
        <button className=" py-[16px] w-full rounded hover:scale-[1.0] hover:duration-300 bg-dark-blue font-semibold outline outline-transperant text-base leading-[26.59px] text-white  mt-[46px] after:-z-20 after:absolute hover:text-dark-blue after:h-1 after:w-1 after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
          Buy Now (50C)
        </button>
      </form>
    </>
  );
};

export default AccountForm;
