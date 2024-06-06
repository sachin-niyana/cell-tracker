import mobileimg from "../../assets/images/home/png/locatepeople.png";
import { locatedata } from "../common/Helper";
import { RightVector, Vector } from "../common/Icons";

const HowWorks = () => {
  return (
    <div className=" relative">
      <span className=" absolute left-0 top-[10%]">
        <Vector/>
      </span>
      <span className=" absolute right-0 sm:bottom-[-8%] bottom-[-5%] z-10">
        <RightVector/>
      </span>
      <div className="xl:mt-[104px] lg:mt-[90px] md:mt-20 mt-[74px] mb-[72px] px-6">
        <div className=" mx-auto max-w-[1240px] px-3">
          <h2 className="font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[32.48px] sm:leading-[38px] md:leading-[42px] lg:leading-[48px] text-dark-blue text-center">
            How it <span className="font-extrabold">works</span>
          </h2>
          <p className="max-w-[472px] mx-auto text-center text-sm sm:text-base font-normal leading-[21px] sm:leading-6 text-black opacity-70 mt-3 sm:mt-2">
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
            elit rhoncus vestibulum fames libero id.
          </p>
          <div className=" flex flex-wrap flex-row -mx-3 pt-[60px] lg:pt-[90px] xl:pt-[88px] items-center justify-center">
            <div className=" lg:w-6/12 md:w-10/12 w-full px-3 relative">
              <div className=" items-center flex flex-col justify-center min-[1328px]:-translate-x-[70px] min-[1328px]:w-[680px]">
                <div className=" bg-skygradient bg_works_ellipse max-lg:w-full w-[302px] min-h-[334px] h-full lg:w-[450px] xl:w-[577.99px] xl:h-[577.95px] absolute"></div>
                <div className=" bg-skygradient bg_works_ellipse2 max-lg:w-full w-[284px] min-h-[295px] h-full lg:w-[400px] xl:w-[569px] xl:h-[490px] absolute"></div>
                <img src={mobileimg} alt="img" className="!w-[680px] relative" />
              </div>
            </div>
            <div className="lg:w-6/12 w-full flex flex-col justify-center items-center pt-20 sm:pt-14 lg:pt-0">
              {locatedata.map((obj, index) => {
                return (
                  <div
                    className={`${
                      index == 1 ? "mt-[18px]" : ""
                    } flex w-full max-w-[536px] shadow-workCard flex-col items-start border border-black border-opacity-[8%] rounded-xl  px-5 pb-[13px] pt-5 min-h-[273px]`}
                  >
                    <a href="/" className=" max-sm:max-w-[38px] max-sm:h-[33px]">
                      {obj.img}
                    </a>
                    <p
                      className={`${
                        index == 1 ? "mt-2" : ""
                      } text-xl sm:text-2xl text-dark-blue mt-[15px] pb-[6px] font-normal leading-normal`}
                    >
                      {obj.title}
                    </p>
                    <p className="text-sm font-normal text-black opacity-70 leading-6 sm:text-base">
                      {obj.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[14px] justify-center">
            <button className="  p-[16px_28px] rounded bg-dark-blue font-semibold text-base leading-[26.59px] text-white flex sm:block justify-center sm:max-w-[197px] mt-[42px] hover:scale-[1.0] hover:duration-300   hover:text-dark-blue after:-z-20 outline after:absolute after:h-1 after:w-1 hover:bg-white after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[320]  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
              Create your Account
            </button>
            <button className="  p-[16px_28px] rounded bg-white text-nowrap border border-dark-blue font-semibold text-base leading-[26.59px] text-dark-blue flex sm:block hover:scale-[1.1] hover:duration-300 duration-300 justify-center sm:max-w-[197px] mt-[42px]">
              Create your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
