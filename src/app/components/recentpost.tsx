import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });

const Recentpost = () => {
  return (
    <div
      className={` ${heebo.className} m-auto w-full md:w-[1440px] md:h-[502px] bg-recentbg relative`}
    >
      {/* Header Section */}
      <div className="w-full md:w-[1030px] p-4 md:p-6 mx-auto flex justify-between items-center">
        <h2 className="text-[18px] md:text-[22px] font-medium text-myblack">
          Recent Post
        </h2>
        <Link
          href="/"
          className="text-[18px] md:text-[22px] font-medium text-darkpink"
        >
          View all
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:w-[1030px] mx-auto justify-around mt-4 md:mt-0">
        {/* Left Section */}
        <div className="flex flex-col bg-white w-full md:w-[483px] h-auto md:h-[356px] mb-6 md:mb-[69px] p-4 md:p-0">
          <div className="bg-slate-100 w-full md:w-[391px] h-auto md:h-[286px] mx-auto md:ml-[35px] md:mr-[57px] mb-[32px] mt-4 md:mt-[38px]">
            <h1 className="font-bold text-[20px] md:text-[26px] leading-snug tracking-tight">
              Making a design system from scratch
            </h1>
            <div className="flex w-full mt-2 justify-between md:w-[301.28px] md:h-[42.12] md:text-center">
              <p className="md:mt-[10px]  md:leading-9 md:w-[109.44px] md:h-[42.12] font-normal text-[18px]  text-myblack opacity-70">
                12 Feb 2020
              </p>
              <span className="m-auto md:h-[17.5px] w-[0px] text-xl   font-medium text-myblack opacity-70 md:mt-[12px]">
                |
              </span>
              <p className="md:w-[140.25px] md:mt-[8px]  md:leading-9  md:h-[42.12] font-normal text-[18px]  text-myblack opacity-70">
                Design , Pattern
              </p>
            </div>
            <p className="text-[14px] md:text-[16px] text-firstHeading mt-4 leading-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col bg-mywhite w-full md:w-[483px] h-auto md:h-[356px] mb-6 md:mb-[69px] p-4 md:p-0">
          <div className="bg-slate-100 w-full md:w-[391px] h-auto md:h-[286px] mx-auto md:ml-[35px] md:mr-[57px] mb-[32px] mt-4 md:mt-[38px]">
            <h1 className="font-bold text-[20px] md:text-[26px] leading-snug tracking-tight">
              Making a design system from scratch
            </h1>
            <div className="flex w-full mt-2 justify-between md:w-[301.28px] md:h-[42.12] text-center">
              <p className="md:mt-[10px]  md:leading-9 md:w-[109.44px] md:h-[42.12] font-normal text-[18px]  text-myblack opacity-70">
                12 Feb 2020
              </p>
              <span className="m-auto md:h-[17.5px] w-[0px] text-xl   font-medium text-myblack opacity-70 md:mt-[12px]">
                |
              </span>
              <p className="md:w-[140.25px] md:mt-[8px]  md:leading-9  md:h-[42.12] font-normal text-[18px]  text-myblack opacity-70">
                Design , Pattern
              </p>
            </div>
            <p className="text-[14px] md:text-[16px] text-firstHeading mt-4 leading-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentpost;
