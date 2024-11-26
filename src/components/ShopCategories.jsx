import Image from "next/image";
import React from "react";

function ShopCategories() {
  return (
    <div className="w-11/12 md:w-4/5  mx-auto px-0 lg:px-16 mt-10">
      <div className="flex  items-center justify-between">
        <h1 className="text-xl md:text-[30px] font-Melodrama font-medium tracking-[-2.2%]">
          Shop by Categories
        </h1>
        <p className="font-Poppins font-semibold">See All</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 object-cover mt-6">
        <div>
          <div className="flex relative md:w-[210px] w-full h-[281px] flex-col items-center">
            <Image
              src="/shopcategories.png"
              alt="Serum"
              fill
              unoptimized
              className="absolute"
            />
          </div>
          <p className="text-base mt-3 font-Poppins text-center font-semibold">
            FACE WASH{" "}
          </p>
        </div>
        <div>
          <div className="flex relative md:w-[210px] w-full h-[281px] flex-col items-center">
            <Image
              src="/shopcategories.png"
              alt="Serum"
              fill
              unoptimized
              className="absolute"
            />
          </div>
          <p className="text-base mt-3 font-Poppins text-center font-semibold">
            FACE WASH{" "}
          </p>
        </div>
        <div>
          <div className="flex relative md:w-[210px] w-full h-[281px] flex-col items-center">
            <Image
              src="/shopcategories.png"
              alt="Serum"
              fill
              unoptimized
              className="absolute"
            />
          </div>
          <p className="text-base mt-3 font-Poppins text-center font-semibold">
            FACE WASH{" "}
          </p>
        </div>
        <div>
          <div className="flex relative md:w-[210px] w-full h-[281px] flex-col items-center">
            <Image
              src="/shopcategories.png"
              alt="Serum"
              fill
              unoptimized
              className="absolute"
            />
          </div>
          <p className="text-base mt-3 font-Poppins text-center font-semibold">
            FACE WASH{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShopCategories;
