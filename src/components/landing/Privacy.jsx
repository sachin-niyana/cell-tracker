import React from "react";
import { items } from "../common/Helper";

const Privacy = () => {
  return (
    <>
      <div className="container max-w-[1140px] px-3 mx-auto">
        <h2 className="text-5xl font-light text-dark-blue leading-[48px] text-center">
          Universal <span className="font-extrabold">Privacy</span>
        </h2>
        <p className="font-normal text-base text-black opacity-[70%] text-center max-w-[442px] mx-auto pt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-[56px]">
          {items.map((item, index) => (
            <div key={index} className="col-span-1">
              <div className="xl:max-w-[267px] min-h-[261px] rounded  duration-300 border group hover:bg-bluegradient border-black border-opacity-[10%]">
                <div className="w-[75px] h-[70px]  group-hover:bg-white duration-300 bg-[#E5F8FB] flex justify-center items-center mt-7">
                  {item.img}
                </div>
                <div className="p-[12px_14px_14px_13px]">
                  <p className="font-normal text-2xl group duration-300 group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="font-normal text-base group duration-300 group-hover:text-white text-black opacity-[70%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Privacy;
