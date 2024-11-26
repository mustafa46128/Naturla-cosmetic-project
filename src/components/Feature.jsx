import Image from "next/image";
import React from "react";
import { HeartIcon } from "./Icon";

const products = [
  {
    id: 1,
    image: "/feature1.png",
    discount: "35%",
    title: "Alpha Arbutin & Vitamin C",
    price: "$135.00 USD",
    originalPrice: "$209.00 USD",
  },
  {
    id: 2,
    image: "/feature1.png",
    discount: "40%",
    title: "Niacinamide Serum",
    price: "$120.00 USD",
    originalPrice: "$200.00 USD",
  },
  {
    id: 3,
    image: "/feature1.png",
    discount: "40%",
    title: "Niacinamide Serum",
    price: "$120.00 USD",
    originalPrice: "$200.00 USD",
  },
  {
    id: 4,
    image: "/feature2.png",
    discount: "40%",
    title: "Niacinamide Serum",
    price: "$120.00 USD",
    originalPrice: "$200.00 USD",
  },
];
function Feature() {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-14 ">
      <h1 className="text-[30px] font-Melodrama font-[500] tracking-[-2.2%] leading-[40px] text-center">
        Our Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-14 px-0">
        {products.map((product, index) => (
          <div className="w-full " key={index}>
            <div className=" relative bg-[#E9E3DD] mt-8">
              <div className="flex items-center justify-center pt-10 pb-3">
                <Image
                  src={product.image}
                  alt=""
                  width={10}
                  height={10}
                  unoptimized
                  className="w-[70px] h-[70pxs] "
                />
              </div>
              <div className="absolute w-[41px] h-[25px] top-0  bg-[#EFBD06] ]  rounded-br-md ">
                <p className="font-semibold text-sm font-[Poppins text-center mt-1">
                  {product.discount}
                </p>
              </div>
              <div className="absolute top-0 right-2 mt-2 ">
                <HeartIcon className="" />
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center mt-3 ">
              <h1 className="text-base font-Poppins font-semibold tracking-[-1.9%]">
                {product.title}
              </h1>

              <p className="font-Poppins text-[23px] tracking-[-1.9px]">
                {product.price}
              </p>
              <p className="text-sm font-Poppins line-through">
                {product.originalPrice}
              </p>
            </div>

            <div className="flex justify-center items-center mt-3 ">
              <button className="bg-[#51994B] font-Poppins px-8 py-1 text-white">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
