import Image from "next/image";
import React from "react";

function FabVitamin() {
  return (
    <div className="w-11/12 md:w-4/5  mx-auto mt-14 bg-[#251D18]  md:px-14 relative overflow-hidden">
      <div className="w-full py-10 gap-y-5 flex-col md:flex-row flex justify-between items-center bg-transparent">
        <div className=" flex flex-col items-center justify-center text-center">
          <p className="w-full md:w-[400px] text-base  md:text-2xl font-Melodrama uppercase md:leading-[30px]  tracking-[-2.2%] font-[500] text-white">
            Fab Vitamin C Body Cream For Skin Whitening
          </p>
          <p className="w-full md:w-[380px] text-base leading-[20px] font-Poppins mt-4 text-white">
            The point of using Lorem Ipsum is that it has a more- or-less normal
            distributin of letters
          </p>
          <button className="text-sm text-white bg-[#51994B] font-Poppins font-[400] px-6 py-1 mt-4 Poppins">
            Shop Now
          </button>
        </div>
        <div className="">
          <Image
            src="/fabvitamin.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-[400px] h-[250px]"
          />
        </div>
      </div>
      <Image
        src="/vitaminbgr.png"
        width={400}
        height={400}
        className="absolute hidden md:block -right-10 -bottom-10"
        alt=""
      />
      <Image
        src="/vitamin-bg.png"
        width={200}
        height={200}
        className="absolute -left-2 -rotate-[105] -bottom-2"
        alt=""
      />
    </div>
  );
}

export default FabVitamin;
