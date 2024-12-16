import Image from "next/image";
import React from "react";

const Clients1 = () => {
  return (
    <div className=" w-[1920px] h-[469px] mt-[120px] bg-black ">
      <Image
        src={"/image4-client1/background_image.png"}
        alt="background_image"
        width={1920}
        height={469}
        className="opacity-20 "
      ></Image>
      <div className="   -mt-[370px] w-[1319px] h-[247px] flex justify-between ml-[300px] text-white ">
        <div className="h-[247px] w-[218px] absolute   ">
          <div className="h-[120px] w-[120px]  ml-[48px]">
            <Image
              src={"/image4-client1/Professional Chefs.png"}
              alt="Professional Chefs Image"
              width={120}
              height={120}
              className=""
            ></Image>
          </div>
          <p className="h-[32px] w-[218px] text-[24px] font-bold flex justify-center mt-[24px]">
            Professional Chefs
          </p>
          <p className="h-[48px] w-[67px] text-[40px] font-bold mt-[23px] ml-[70px]">
            420
          </p>
        </div>
        <div className="h-[247px] w-[162px] ml-[378px] absolute ">
          <div className="h-[120px] w-[120px]  ml-[21px]">
            <Image
              src={"/image4-client1/Items Of Food.png"}
              alt="Items Of Food Image"
              width={120}
              height={120}
              className=""
            ></Image>
          </div>
          <p className="h-[32px] w-[218px] text-[24px] font-bold flex justify-center -ml-[28px] mt-[24px]">
            Items Of Food
          </p>
          <p className="h-[48px] w-[67px] text-[40px] font-bold mt-[23px] ml-[45px]">
            320
          </p>
        </div>
        <div className="h-[247px] w-[248px] ml-[702px] absolute  ">
          <div className="h-[120px] w-[120px]  ml-[64px]">
            <Image
              src={"/image4-client1/Years Of Experienced.png"}
              alt="Years Of Experienced Image"
              width={120}
              height={120}
              className=""
            ></Image>
          </div>
          <p className="h-[32px] w-[248px] text-[24px] font-bold flex justify-center mt-[24px]">
            Years Of Experienced
          </p>
          <p className="h-[48px] w-[67px] text-[40px] font-bold mt-[23px] ml-[92px]">
            30+
          </p>
        </div>
        <div className="h-[247px] w-[206px] ml-[1113px] absolute ">
          <div className="h-[120px] w-[120px]  ml-[43px]">
            <Image
              src={"/image4-client1/Happy Customers.png"}
              alt="Happy Customers Image"
              width={120}
              height={120}
              className=""
            ></Image>
          </div>
          <p className="h-[32px] w-[206px] text-[24px] font-bold flex justify-center mt-[24px]">
            Happy Customers
          </p>
          <p className="h-[48px] w-[67px] text-[40px] font-bold mt-[23px] ml-[70px]">
            220
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Clients1;
