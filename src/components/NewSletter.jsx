import Image from "next/image";
import React from "react";

function NewSletter() {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className=" grid grid-cols-1 md:py-0 gap-y-5 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/sletter.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-36"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/sletter1.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-36"
          />
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/sletter2.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-36"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/sletter3.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-36"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="w-full md:w-[550px] text-center font-Melodrama font-[500] tracking-[-2.2%] text-[35px]">
          Join Our Radiant Newsletter and Get Exclusive Offers
        </h1>
        <div className="relative w-full md:w-[45%]  mt-8">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full border border-gray-400 rounded-full pl-4 pr-[90px] py-2 text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white text-sm font-Poppins font-medium rounded-full px-5 py-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSletter;
