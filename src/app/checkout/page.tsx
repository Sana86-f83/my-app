import React from "react";
import Heading from "../components/headingprops";
import { FaAngleDown } from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const CheckOut = () => {
  return (
    <div className="w-[1920px] h-[1407px] bg-white">
      <Heading Heading="CheckOut Page" home="Home" pagename="checkout" />
      {/* Left-Div */}
      <div className="w-[1320px] h-[723px] relative m-auto mt-[120px] ">
        <div className="w-[872px] h-[723px] absolute ">
          <h1 className="w-[171px] h-[28px] font-bold text-[20px] text-cheftextcolor">
            Shipping Address
          </h1>
          {/* Form */}
          {/* input-firstname */}
          <div className="absolute">
            <div className=" w-[424px] h-[88px]  mt-[24px]">
              <label className="text-[20px] text-coloricon">First name</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            {/* input-email-address */}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">
                Email address
              </label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            {/* input-Company*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">Company</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>
            {/* input-City*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">City</label>
              <br />
              <div className="">
                <input
                  type="text"
                  placeholder="Choose City"
                  className="pl-[4px] text-[18px] mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
                />
                <FaAngleDown className="-mt-[42px] ml-[380px] text-[24px] text-coloricon/50" />
              </div>
            </div>
            {/* input-Address*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">Address 1</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>
            {/* Billing Address */}
            <h1 className="w-[147px] h-[28px] text-black text-[20px] font-bold mt-[32px] tracking-tight">
              Billing Address
            </h1>
            <div className="flex">
              <input className="w-[20px]" type="checkbox" />
              <h4 className="text-[16px] mt-[4px] ml-[10px]">
                Same as shipping address
              </h4>
            </div>
            <div className="w-[424px] h-[56px] mt-[24px] flex justify-center items-center border-2 border-gray-300 ">
              <MdKeyboardArrowLeft className="text-[30px] mt-[5px]" />
              <p className="text-[16px] font-normal ml-[5px] mt-[8px]">
                <Link href={"/ShoppingCart"}>Back to cart </Link>
              </p>
            </div>
          </div>

          <div className="ml-[448px] absolute">
            {/* input-lastname */}
            <div className=" w-[424px] h-[88px]  mt-[24px]">
              <label className="text-[20px] text-coloricon">Last name</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            {/* input-phone number */}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">phone number</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            {/* input-Country*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">Country</label>
              <br />
              <div className="">
                <input
                  type="text"
                  placeholder="Choose country"
                  className="pl-[4px] text-[18px] mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
                />
                <FaAngleDown className="-mt-[42px] ml-[380px] text-[24px] text-coloricon/50" />
              </div>
            </div>
            {/* input-Zip Code*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">Zip Code</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            {/* input-Address2*/}
            <div className=" w-[424px] h-[88px]  mt-[16px]">
              <label className="text-[20px] text-coloricon">Address 2</label>
              <br />
              <input
                type="text"
                className="mt-[8px] w-[424px] h-[56px] outline outline-1 outline-gray3"
              />
            </div>

            <div className="w-[424px] h-[56px] mt-[110px] flex justify-center items-center bg-darkyellow text-white ">
              <p className="text-[16px] font-normal ml-[5px] mt-[8px] tracking-wider leading-6">
                Proceed to shipping
              </p>
              <MdOutlineKeyboardArrowRight className="text-[30px] mt-[5px] " />
            </div>
          </div>
          {/*right-sidebar */}

          <div className="absolute ml-[896px]  w-[424px] h-[700px] border-2 border-gray3/50">
            <div className="flex w-[376px] h-[104px]  ml-[24px]  mt-[24px]">
              <div className="w-[83px] h-[88px]">
                <Image
                  src={"/checkout/sidebar-image1.png"}
                  alt={"sidebar-image2"}
                  width={83}
                  height={88}
                ></Image>
              </div>
              <div className="flex  ml-[15px] w-[163px] h-[67px] ">
                <h1 className="flex w-[161px] h-[24px] text-[16px] text-coloricon font-bold">
                  Chicken Tikka Kabab{" "}
                </h1>
                <h1 className=" absolute w-[80px]  tracking-tight h-[22px] mt-[31px]">
                  150 gm net
                </h1>
                <h1 className="flex w-[24px] h-[22px] text-[16px] mt-[58px]  absolute text-coloricon  ">
                  50${" "}
                </h1>
              </div>
            </div>
            <hr className="mt-[2px] h-[4px] w-[379px] m-auto text-black/80" />
            <div className="flex w-[376px] h-[104px]  ml-[24px]  mt-[24px]">
              <div className="w-[83px] h-[88px]">
                <Image
                  src={"/checkout/sidebar-image1.png"}
                  alt={"sidebar-image2"}
                  width={83}
                  height={88}
                ></Image>
              </div>
              <div className="flex  ml-[15px] w-[163px] h-[67px] ">
                <h1 className="flex w-[161px] h-[24px] text-[16px] text-coloricon font-bold">
                  Chicken Tikka Kabab{" "}
                </h1>
                <h1 className=" absolute w-[80px]  tracking-tight h-[22px] mt-[31px]">
                  150 gm net
                </h1>
                <h1 className="flex w-[24px] h-[22px] text-[16px] mt-[58px]  absolute text-coloricon  ">
                  50${" "}
                </h1>
              </div>
            </div>
            <hr className="mt-[2px] h-[4px] w-[379px] m-auto text-black/80" />
            <div className="flex w-[376px] h-[104px]  ml-[24px]  mt-[24px]">
              <div className="w-[83px] h-[88px]">
                <Image
                  src={"/checkout/sidebar-image1.png"}
                  alt={"sidebar-image2"}
                  width={83}
                  height={88}
                ></Image>
              </div>
              <div className="flex  ml-[15px] w-[163px] h-[67px] ">
                <h1 className="flex w-[161px] h-[24px] text-[16px] text-coloricon font-bold">
                  Chicken Tikka Kabab{" "}
                </h1>
                <h1 className=" absolute w-[80px]  tracking-tight h-[22px] mt-[31px]">
                  150 gm net
                </h1>
                <h1 className="flex w-[24px] h-[22px] text-[16px] mt-[58px]  absolute text-coloricon  ">
                  50${" "}
                </h1>
              </div>
            </div>
            <hr className="mt-[2px] h-[4px] w-[379px] m-auto text-black/80" />
            {/* subtotal */}
            <div className="w-[376px] h-[202] ml-[24px]  mt-[24px]">
              <div className=" flex justify-between w-[376px] h-[24px] text-cheftextcolor">
                <h1 className="w-[65px] h-[24px] text-[16px]  ">Sub-total</h1>
                <p className="w-[36px] h-[24px] ">130$</p>
              </div>
              <div className=" flex justify-between mt-[16px] w-[376px] h-[24px] text-cheftextcolor">
                <h1 className="w-[65px] h-[24px] text-[16px]  ">Shipping</h1>
                <p className="w-[36px] h-[24px] ">Free</p>
              </div>
              <div className=" flex justify-between mt-[16px] w-[376px] h-[24px] text-cheftextcolor">
                <h1 className="w-[65px] h-[24px] text-[16px]  ">Discount</h1>
                <p className="w-[36px] h-[24px] ">25%</p>
              </div>
              <div className=" flex  mt-[16px] w-[376px] h-[24px] text-cheftextcolor">
                <h1 className="w-[25px] h-[24px] text-[16px]  ">Tax</h1>
                <p className="w-[36px] ml-[302px] h-[24px] ">54.76$</p>
              </div>
              <hr className="mt-[5px] h-[4px] w-[376px]  m-auto text-black/80" />
              <div className=" flex  mt-[16px] w-[376px] h-[24px] text-cheftextcolor">
                <h1 className="w-[39px] h-[24px] text-[18px]">Total</h1>
                <p className="w-[36px] ml-[278px] h-[24px] text-black ">
                  432.65$
                </p>
              </div>
              <div className="w-[376px] h-[58px]  rounded-xl mt-[16px] flex justify-center items-center bg-darkyellow text-white ">
                <p className="text-[16px] font-normal ml-[5px] mt-[8px]">
                  Place an order
                </p>
                <GoArrowRight className="text-[30px] mt-[5px] ml-[10px] tracking-wider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
