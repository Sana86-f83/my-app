import React from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const FeatureWork = () => {
  return (
    <div
      className={`${heebo.className} flex flex-col md:w-[1440px] w-full  m-auto py-8 md:py-12`}
    >
      <div className="w-full md:w-[919px] md:[934.2px] flex flex-col md:flex-row px-4 md:px-12 m-auto ">
        {/* Sidebar Section */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-[256px]">
          <h1 className="text-[18px] md:text-[22px] font-medium leading-8 text-center md:text-left">
            Featured Works
          </h1>
          <div className="mt-8 flex flex-col gap-8">
            <Image
              src="/Images/Rectangle30.png"
              alt="Rectangle1"
              width={246}
              height={180}
              className="w-[246px] h-[180px]"
            />
            <Image
              src="/Images/Rectangle32.png"
              alt="Rectangle2"
              width={246}
              height={180}
              className="w-[246px] h-[180px]"
            />
            <Image
              src="/Images/Rectangle34.png"
              alt="Rectangle3"
              width={246}
              height={180}
              className="w-[246px] h-[180px]"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow mt-12 md:mt-0 md:ml-8">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div key={index} className="mb-12">
                <h1 className="text-[24px] md:text-[30px] font-bold text-myblack leading-tight">
                  Designing Dashboards
                </h1>
                <div className="flex items-center gap-4 mt-4">
                  <p className="bg-darkpink text-white rounded-full px-4 py-1 text-[16px] md:text-[18px] font-bold">
                    2020
                  </p>
                  <p className="text-myblack opacity-70 text-[16px] md:text-[20px]">
                    Dashboard
                  </p>
                </div>
                <p className="text-[16px] md:text-[18px] text-myblack font-light mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureWork;
