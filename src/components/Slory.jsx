import Image from "next/image";
import React from "react";

function Slory() {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto bg-[#251D18] relative  flex-col md:flex-row mt-10 px-4 md:px-14 overflow-hidden">
      <div className="w-full py-10 gap-y-5 flex-col md:flex-row flex justify-between items-center bg-transparent">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl  font-Melodrama font-[500] text-white ">
            Our Story
          </h1>
          <p className="text-base font-Poppins font-[400] w-full md:w-[450px] text-white">
            {`"But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself.`}
          </p>
          <p className="font-Inter font-semibold text-white mt-4 border-b border-white cursor-pointer ">
            Read More
          </p>
        </div>
        <div>
          <Image
            src="/slory.png"
            alt=""
            width={10}
            height={10}
            unoptimized
            className="w-[400px] h-[250px]"
          />
        </div>
        <Image
          src="/vitaminbgr.png"
          width={300}
          height={300}
          className="absolute hidden md:block right-1 bottom-4"
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
    </div>
  );
}

export default Slory;
