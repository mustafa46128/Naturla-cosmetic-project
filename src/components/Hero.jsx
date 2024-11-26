import React from "react";

function Hero() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "500px",
          width: "100%",
        }}
        className="aspect-[1440/701] relative overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center pt-4 md:pt-32 md:px-0 px-4">
          <p className="text-xl text-center md:text-2xl lg:text-4xl font-medium w-full  md:w-80 tracking-[-2.2%] leading-[44px] text-white font-Melodrama">
            Look within yourself and discover
          </p>
          <p className=" text-sm md:text-base font-Poppins font-[400] text-white w-full md:w-[420px] md:mt-6 mt-3 text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when.
          </p>
          <button className="text-sm text-white bg-[#51994B] px-4 py-1 mt-2 md:mt-10 font-Poppins font-[400]">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
