import React, { useState } from "react";
import { Group, SearchIcon } from "./Icon";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Navebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center py-4">
      {/* Logo */}
      <div>
        <p className="text-[#251D18] text-3xl font-[500] font-Inter">Naturla</p>
        <p className="text-[7px] p-0 -my-[6px] font-[500]">SKIN SCIENCE</p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-4 text-lg text-[#000000E5]">
          <li className="cursor-pointer font-Poppins font-[400]">Home</li>
          <li className="cursor-pointer font-Poppins font-[400]">Shop</li>
          <li className="cursor-pointer font-Poppins font-[400]">Our Story</li>
          {/* <li className="cursor-pointer font-Poppins font-[400] ">
            Pages
          </li>
          <IoIosArrowDown /> */}
          <div className="flex items-center cursor-pointer font-Poppins font-[400] gap-2">
            <li className="list-none">Pages</li>
            <IoIosArrowDown className="text-sm " />
          </div>
        </ul>
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-4 cursor-pointer">
        <SearchIcon className="" />
        <Group className="" />
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden cursor-pointer font-Poppins font-[400]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          // Close Icon
          <IoClose className="text-red-600 text-2xl" />
        ) : (
          // Hamburger Icon
          <GiHamburgerMenu className="text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full md:px-12 px-6 bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-4 text-base text-[#000000E5]">
            <li className="cursor-pointer font-Poppins">Home</li>
            <li className="cursor-pointer font-Poppins">Shop</li>
            <li className="cursor-pointer font-Poppins">Our Story</li>
            <li className="cursor-pointer font-Poppins">Pages</li>

            <div className="flex gap-4 mt-4">
              <SearchIcon className="cursor-pointer font-Poppins font-[400]" />
              <Group />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navebar;
