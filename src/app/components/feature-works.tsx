import React from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const FeatureWork = () => {
  return (
    <div
      className={` ${heebo.className} flex m-auto w-[1440px] bg-mywhite mt-[79px] `}
    >
      <div className="ml-[237px] mr-[284px] w-[919px] h-[934.2px] bg-mywhite flex">
        <div className="w-[256px] h-[934.2pxpx]">
          <h1 className="w-[152px]  h-[32px] text-[22px] font-medium leading-8 bg-mywhite ">
            Featured works
          </h1>
          <div className="bg-mywhite">
            {" "}
            <Image
              src="/Images/Rectangle1.png"
              alt="Rectangle1"
              width={246}
              height={180}
              className="mt-[36px] w-[246px] h-[180px]"
            ></Image>
            <Image
              src="/Images/Rectangle2.png"
              alt="Rectangle1"
              width={246}
              height={180}
              className="mt-[96px] w-[246px] h-[180px]"
            ></Image>
            <Image
              src="/Images/Rectangle3.png"
              alt="Rectangle1"
              width={246}
              height={180}
              className="mt-[96px] w-[246px] h-[180px]"
            ></Image>
          </div>
        </div>

        <div className="w-[663.46px] h-[934.3px]  ml-[9.54px] ">
          <div
            className="h-[272.1px] 
          pt-[44px] ml-[20px] "
          >
            <h1 className="w-[304px] h-[44px]  text-myblack mt-[21px] font-bold text-[30px] leading-tight">
              Designing Dashboards
            </h1>
            <div className="flex w-[60%] h-[44px]">
              <p className=" w-[68px] h-[24] text-white text-center rounded-full bg-darkpink font-bold text-[18px] mt-[11px]">
                2020
              </p>
              <p className="font-normal text-[20px] leading-7 text-center text-myblack opacity-62% w-[97px] mt-[10px] h-[29px] ml-[23px] ">
                Dashboard
              </p>
            </div>
            <div className="w-[622px] h-[170px]  ">
              <p className="w-[622px] h-[170px] leading-6 mt-[18px]  text-[18px] text-myblack  font-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div
            className="h-[272.1px] 
          pt-[44px] ml-[20px] "
          >
            <h1 className="w-[304px] h-[44px]  text-myblack mt-[21px] font-bold text-[30px] leading-tight">
              Designing Dashboards
            </h1>
            <div className="flex w-[60%] h-[44px]">
              <p className=" w-[68px] h-[24] text-white text-center rounded-full bg-darkpink font-bold text-[18px] mt-[11px]">
                2020
              </p>
              <p className="font-normal text-[20px] leading-7 text-center text-myblack opacity-62% w-[97px] mt-[10px] h-[29px] ml-[23px] ">
                Dashboard
              </p>
            </div>
            <div className="w-[622px] h-[170px]  ">
              <p className="w-[622px] h-[170px] leading-6 mt-[18px]  text-[18px] text-myblack  font-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div
            className="h-[272.1px] 
          pt-[44px] ml-[20px] "
          >
            <h1 className="w-[304px] h-[44px]  text-myblack mt-[21px] font-bold text-[30px] leading-tight">
              Designing Dashboards
            </h1>
            <div className="flex w-[60%] h-[44px]">
              <p className=" w-[68px] h-[24] text-white text-center rounded-full bg-darkpink font-bold text-[18px] mt-[11px]">
                2020
              </p>
              <p className="font-normal text-[20px] leading-7 text-center text-myblack opacity-62% w-[97px] mt-[10px] h-[29px] ml-[23px] ">
                Dashboard
              </p>
            </div>
            <div className="w-[622px] h-[170px]  ">
              <p className="w-[622px] h-[170px] leading-6 mt-[18px]  text-[18px] text-myblack  font-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
             

             

          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureWork;
