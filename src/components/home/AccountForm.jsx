import React, { useState, useEffect } from "react";
import { Calender, Home, Lock, Mail, ValidCard } from "../common/Icons";

const AccountForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      formErrors.email = "Invalid email format";
    if (!formData.cardNumber) formErrors.cardNumber = "Card number is required";
    if (!/^\d{10}$/.test(formData.cardNumber))
      formErrors.cardNumber = "Card number must be 10 digits";
    if (!formData.expiryDate) formErrors.expiryDate = "Expiry date is required";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate))
      formErrors.expiryDate = "Expiry date must be MM/YY format";
    if (!formData.securityCode)
      formErrors.securityCode = "Security code is required";
    if (!/^\d{3,4}$/.test(formData.securityCode))
      formErrors.securityCode = "Security code must be 3 or 4 digits";

    setErrors(formErrors);
    setIsFormValid(Object.keys(formErrors).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Form is valid, submit the form or perform the desired action
      console.log("Form data:", formData);
      setFormData({
        address: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        securityCode: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            id="address"
            className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
            placeholder="Address Line 1"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
        <p className="sm:text-base text-sm font-normal text-gray pt-1 sm:pb-5 pb-[18px]">
          Or enter address manually
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
            type="number"
            id="cardNumber"
            className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
            placeholder="Valid Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}
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
                type="number"
                id="expiryDate"
                className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-light-gray px-[14px] remove_input_number_arrow"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">{errors.expiryDate}</p>
            )}
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
                type="number"
                id="securityCode"
                className="py-[12px] sm:py-[14px] text-primary text-sm sm:text-base placeholder:text-dark-blue outline-none w-full bg-[#FAFAFA] px-[14px] remove_input_number_arrow"
                placeholder="E.x @ 0123"
                value={formData.securityCode}
                onChange={handleChange}
              />
            </div>
            {errors.securityCode && (
              <p className="text-red-500 text-sm">{errors.securityCode}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`py-[16px] overflow-hidden w-full bg-dark-blue text-white rounded  hover:duration-300 font-semibold text-base leading-[26.59px] mt-[46px] after:-z-20 after:absolute after:h-1 after:w-1 after:left-5 after:bottom-0 after:translate-y-full after:rounded-md after:transition-all after:duration-700 transition-all duration-700 ${
            isFormValid
              ? "hover:scale-[1] after:bg-white outline outline-transparent hover:outline-dark-blue hover:text-dark-blue after:hover:scale-[320] after:hover:transition-all after:hover:duration-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Buy Now (50C)
        </button>
      </form>
    </>
  );
};

export default AccountForm;
