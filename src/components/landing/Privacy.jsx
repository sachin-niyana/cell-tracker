import React from "react";
import { items } from "../common/Helper";

const Privacy = () => {
  return (
    <>
      <div className="container max-w-[1140px]  max-xl:px-6 mx-auto">
        <h2 className="text-2xxl md:text-4xl lg:text-5xl font-light text-dark-blue leading-[32.8px] sm:leading-10 lg:leading-[48px] text-center">
          Universal <span className="font-extrabold">Privacy</span>
        </h2>
        <p className="font-normal text-sm sm:text-base text-black opacity-[70%] leading-[21px] sm:leading-6 text-center max-w-[442px] mx-auto pt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:pt-12 sm:pt-10 pt-[34px] lg:pt-[56px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-span-1 flex items-center justify-center"
            >
              <div className="hover:bg-bluegradient max-sm:max-w-[430px] bg-black pb-3 bg-opacity-10 group xl:w-[267px] max-h-[187px] h-full sm:min-h-[261px] rounded">
                <div className=" max-sm:max-w-[430px] xl:max-w-[267px] group-hover:border-tranparent relative min-h-[187px] sm:min-h-[261px] h-full rounded  duration-300 border group goup3  border-black border-opacity-[10%] before:rounded before:absolute before:w-full before:h-full before:bg-white before:duration-300 before:top-0 hover:before:bg-transparent">
                  <div className="sm:w-[75px] sm:h-[70px] cursor-pointer w-[61px] h-[57px] relative z-[4] min-[1140px]:left-[-.5px] left-[-1px] border-l-[1px] border-l-black border-opacity-10 group-hover:bg-white bg-light-sky flex justify-center items-center mt-6 sm:mt-7">
                    {item.img}
                  </div>
                  <div className="sm:p-[14px_14px_12px_12px] p-[10px_12px_22px_12px] relative">
                    <p className="font-normal text-xl leading-6 sm:leading-[28.8px] sm:text-2xl text-black group duration-300 group-hover:text-white">
                      {item.title}
                    </p>
                    <p className="font-normal text-sm leading-[21px] sm:leading-6 sm:text-base group duration-300 group-hover:text-white text-black opacity-[70%]">
                      {item.description}
                    </p>
                  </div>
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
