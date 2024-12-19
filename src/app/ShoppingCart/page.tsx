import React from "react";
import Navbar2 from "../components/Navbar2";
import Heading from "../components/headingprops";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { PiCheckSquareOffsetBold } from "react-icons/pi";

const ShoppingCart = () => {
  return (
    <div className="w-[1920px] h-[1870px] bg-gray5 relative">
      <Navbar2 />
      <Heading Heading="Shopping Cart" home="Home" pagename="Shopping Cart" />
      <div className="w-[1920px] h-[1462px]   absolute">
        <div className="w-[1320px] h-[770px]  mx-auto mt-[120px]">
          <div className="w-[1225.86px] h-[29.04px]  text-black fond-bold">
            <h1 className="w-[87.86px] h-[29px] text-[18px]  font-bold ">
              Product
              <span className="ml-[360px] w-[58.55px] h-[29px] leading-8 font-bold text-[18px] ">
                Price
              </span>
              <span className="w-[94.5px] h-[29px] ml-[147px] ">Quantity</span>
              <span className="ml-[159px] w-[55px] h-[29px]">Total</span>
              <span className="ml-[140px] w-[121px] h-[29px] ">Remove</span>
            </h1>
            {/* cart-div1 */}
            <div className="w-[1320px] h-[115px] mt-[32px] ">
              <div className="w-[225px] h-[97px] ">
                <div className="w-[93px] h-[97px] ">
                  <Image
                    src={"/cart-images/cartimage1.png"}
                    alt={"cartimage1"}
                    width={93}
                    height={97}
                  ></Image>
                  <h1 className="w-[53px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                    Burger
                  </h1>
                  <div className="flex w-[116px] h-[20px]  -mt-[60px] ml-[100px]">
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]  text-gray3" />
                  </div>
                  <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                    $35.00
                  </p>
                  <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex  ">
                    <p className="flex w-[100px] ml-[4px] h-[32px]  rounded-full mt-[6px] pt-[4px] justify-around">
                      - <span className="">1</span> <span>+</span>
                    </p>
                  </div>
                  <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px]  ">
                    $221.00
                  </p>
                  <RxCross1 className="w-[20px] h-[20px] ml-[1050px] -mt-[22px]" />
                </div>
              </div>
            </div>
            {/* cart-div2 */}
            <div className="w-[1320px] h-[115px]  mt-[32px] ">
              <div className="w-[225px] h-[97px]   ">
                <div className="w-[93px] h-[97px] ">
                  <Image
                    src={"/cart-images/cartimage2.png"}
                    alt={"cartimage2"}
                    width={93}
                    height={97}
                  ></Image>
                  <h1 className="w-[53px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                    Burger
                  </h1>
                  <div className="flex w-[116px] h-[20px]  -mt-[60px] ml-[100px]">
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]  text-gray3" />
                  </div>
                  <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                    $35.00
                  </p>
                  <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex ">
                    <p className="flex w-[100px] ml-[4px] h-[32px]  rounded-full mt-[6px] pt-[4px] justify-around">
                      - <span className="">1</span> <span>+</span>
                    </p>
                  </div>
                  <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px]  ">
                    $221.00
                  </p>
                  <RxCross1 className="w-[20px] h-[20px] ml-[1050px] text-darkyellow -mt-[22px]" />
                </div>
              </div>
            </div>
            {/* cart-div3 */}
            <div className="w-[1320px] h-[115px]  mt-[32px] ">
              <div className="w-[225px] h-[97px] ">
                <div className="w-[93px] h-[97px] ">
                  <Image
                    src={"/cart-images/cartimage3.png"}
                    alt={"cartimage3"}
                    width={93}
                    height={97}
                  ></Image>
                  <h1 className="w-[53px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                    Burger
                  </h1>
                  <div className="flex w-[116px] h-[20px]  -mt-[60px] ml-[100px]">
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]  text-gray3" />
                  </div>
                  <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                    $35.00
                  </p>
                  <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex  ">
                    <p className="flex w-[100px] ml-[4px] h-[32px]  rounded-full mt-[6px] pt-[4px] justify-around">
                      - <span className="">1</span> <span>+</span>
                    </p>
                  </div>
                  <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px]  ">
                    $221.00
                  </p>
                  <RxCross1 className="w-[20px] h-[20px] ml-[1050px] -mt-[22px]" />
                </div>
              </div>
            </div>
            {/* cart-div4 */}
            <div className="w-[1320px] h-[115px]  mt-[32px] ">
              <div className="w-[225px] h-[97px] ">
                <div className="w-[93px] h-[97px] ">
                  <Image
                    src={"/cart-images/cartimage4.png"}
                    alt={"cartimage4"}
                    width={93}
                    height={97}
                  ></Image>
                  <h1 className="w-[53px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                    Burger
                  </h1>
                  <div className="flex w-[116px] h-[20px]  -mt-[60px] ml-[100px]">
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]  text-gray3" />
                  </div>
                  <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                    $35.00
                  </p>
                  <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex  ">
                    <p className="flex w-[100px] ml-[4px] h-[32px]  rounded-full mt-[6px] pt-[4px] justify-around">
                      - <span className="">1</span> <span>+</span>
                    </p>
                  </div>
                  <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px]  ">
                    $221.00
                  </p>
                  <RxCross1 className="w-[20px] h-[20px] ml-[1050px] -mt-[22px]" />
                </div>
              </div>
            </div>
            {/* cart-div5 */}
            <div className="w-[1320px] h-[115px]  mt-[32px] ">
              <div className="w-[225px] h-[97px] ">
                <div className="w-[93px] h-[97px] ">
                  <Image
                    src={"/cart-images/cartimage5.png"}
                    alt={"cartimage5"}
                    width={93}
                    height={97}
                  ></Image>
                  <h1 className="w-[53px] h-[24px] text-black absolute -mt-[93px] ml-[100px] ">
                    Burger
                  </h1>
                  <div className="flex w-[116px] h-[20px]  -mt-[60px] ml-[100px]">
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]  text-darkyellow" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]   text-gray3" />
                    <MdStarRate className="w-[20px] h-[20px]  text-gray3" />
                  </div>
                  <p className="w-[49px] h-[24px] ml-[438px] -mt-[9px] ">
                    $35.00
                  </p>
                  <div className="w-[110px] h-[41px] ml-[610px] -mt-[32px] flex  ">
                    <p className="flex w-[100px] ml-[4px] h-[32px]  rounded-full mt-[6px] pt-[4px] justify-around">
                      - <span className="">1</span> <span>+</span>
                    </p>
                  </div>
                  <p className="w-[65px] h-[24px] ml-[850px] -mt-[34px]  ">
                    $221.00
                  </p>
                  <RxCross1 className="w-[20px] h-[20px] ml-[1050px] -mt-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1320px] h-[338px]  mt-[120px] m-auto">
          <div className="w-[648px]  h-[242px] border-2 border-gray3/10 rounded-md">
            <h1 className="w-[210px] h-[40px] text-cheftextcolor text-[32px] ">
              Coupan Code
            </h1>
            <p className="w-[472px] h-[52px] mt-[48px] text-gray3 tracking-wide ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <input
              type="text"
              placeholder="Enter Here Code"
              className="absolute  border-2 border-gray3/10 bg-transparent rounded-md pl-[8px] text-[16px] w-[598px] h-[62px] mt-[24px] "
            />
            <p className="w-[89px] h-[60px] bg-darkyellow text-white absolute mt-[25px] ml-[508px] text-center pt-[20px] rounded-l-xl">
              Apply
            </p>
          </div>
          <div className="w-[648px] h-[337px] ml-[672px]  absolute">
            <h1 className="w-[133px] h-[40px] text-[32px]  text-cheftextcolor">
              Total Bill
            </h1>
            {/* cartsubtotal */}
            <div className="w-[648px] h-[185px]  mt-[24px] pl-[20px] pr-[21px]">
              <div className="flex justify-between ">
                <h1 className="  w-[126px] h-[28px] text-[20px] tracking-tight ">
                  Cart Subtotal{" "}
                </h1>

                <h2 className="w-[74px] h-[26px] ml-[407px] ">
                  $120.00
                </h2>
              </div>
              <div className="flex justify-between mt-[15px] ">
                <h1 className="  w-[126px] h-[28px] text-[20px] tracking-tight ">
                  Shipping Cart
                </h1>

                <h2 className="w-[61px] h-[26px] ml-[407px] ">
                  $00.00
                </h2>
              </div>
              <hr className="w-[600px] h-[4px] m-auto bg-gray3/10 mt-[24px]" />
              <div className="flex justify-between mt-[15px] ">
                <h1 className="  w-[127px] h-[28px] text-[20px] tracking-tight ">
                  Total Amount{" "}
                </h1>

                <h2 className="w-[77px] h-[26px] ml-[407px] text-black/90 ">
                  $205.00
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="w-[648px] h-[64px] bg-darkyellow mt-[24px]">
              <h1 className="flex w-[180px] h-[26px] mx-auto pt-[20px] text-white tracking-wider">
                Proceed to Checkout
                <span>
                  {" "}
                  <PiCheckSquareOffsetBold className=""/>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
