import React from "react";
import { ShakeHand, Smile, WorldIcon } from "./Icon";

function NaturalSkin() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="w-full md:w-[850px] px-4 md:px-0 flex flex-col justify-center items-center text-center text-4xl font-[500] leading-[40px] tracking-[-2.2%] font-Melodrama mt-14">
        Our natural skincare products are crafted with cutting-edge green
        science and innovative ingredients to provide the ultimate luxury
        skincare experience{" "}
      </h1>
      <div className="w-full md:w-1/2 gap-8 justify-center items-center flex-wrap md:flex-nowrap flex  mt-8 ">
        <span className="flex items-center justify-center gap-3">
          <WorldIcon />
          <p className="text-base font-Poppins">Long-lasting and sustainable</p>
        </span>
        <span className="flex items-center justify-center gap-3">
          <ShakeHand />
          <p className="text-base font-Poppins">
            lovingly crafted for all bodies
          </p>
        </span>
        <span className="flex items-center justify-center gap-3">
          <Smile />
          <p className="text-base font-Poppins">Unbeatably comfortable body </p>
        </span>
      </div>
    </div>
  );
}

export default NaturalSkin;
