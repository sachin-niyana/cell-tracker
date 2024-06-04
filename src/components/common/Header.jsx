import React from "react";
import { Flag } from "./Icon";
const Header = () => {
  return (
    <div className="bg-hero-bg bg-cover text-red-500 text-center text-6xl font-bold">
      <div className="flex gap-20 justify-center items-center">
        <div className="flex flex-col">
          <h1 className="max-w-[520px] text-start leading-[100%] text-white text-6xxl font-extrabold">
            Find the location{" "}
            <span className="font-light">of any phone by its number</span>
          </h1>
          <p className="text-white font-normal text-base max-w-[520px] text-start pt-2">
            Add phones to your account & track them when neededAdd phones to
            your account & track them when needed
          </p>
          <div className="bg-white rounded-[4px] py-3 ps-2.5">
            <div className="flex justify-start items-center">
              <Flag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
