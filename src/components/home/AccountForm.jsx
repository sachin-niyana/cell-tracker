import React from "react";
import { Calender, Home, Lock, Mail, ValidCard } from "../common/Icons";

const AccountForm = () => {
  return (
    <>
      <form>
        <p className="text-dark-blue sm:text-base text-sm font-normal sm:pt-2 pt-1.5">
          Your Address
        </p>
        <div className="flex sm:mt-2 mt-1.5 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
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
        <p className="sm:text-base text-sm font-normal text-gray pt-1 sm:pb-5 pb-[18px]">
          Our enter address manually
        </p>
        <label
          htmlFor="email"
          className="text-dark-blue sm:text-base text-sm font-normal"
        >
          Email Address
        </label>
        <div className="flex sm:mt-2 mt-1.5 items-center border sm:mb-5 mb-[18px] border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
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
          className="text-dark-blue sm:text-base text-sm font-normal"
        >
          Card Number (Visa or Mastercard)
        </label>
        <div className="flex sm:mt-2 mt-1.5 sm:mb-5 mb-[18px] items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
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
              className="text-dark-blue sm:text-base text-sm font-normal"
            >
              Expiry Date
            </label>
            <div className="flex sm:mt-2 mt-1.5 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
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
              className="text-dark-blue sm:text-base text-sm font-normal"
            >
              Card Security Code
            </label>
            <div className="flex sm:mt-2 mt-1.5 items-center border border-dark-blue border-opacity-[0.06] border-solid rounded-[4px] relative">
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
        <button className=" py-4 w-full rounded bg-dark-blue font-semibold sm:text-base text-sm leading-[26.59px] text-white sm:mt-[46px] mt-[38px]">
          Buy Now (50C)
        </button>
      </form>
    </>
  );
};

export default AccountForm;
