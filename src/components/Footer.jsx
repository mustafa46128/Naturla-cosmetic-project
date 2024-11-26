import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto  mt-10 bg-[#251D18] px-4 md:px-14 md:py-6 py-8 ">
      <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-3xl font-Melodrama font-medium text-white m-0 p-0">
            Naturla
          </h2>
          <p className="text-white font-Inter font-[500] text-[7px] m-0 p-0">
            SKIN SCIENCE
          </p>
          <p className="w-[250px] font-Poppins text-sm font-[400] text-white mt-3">
            We are passionate about empowering you to embrace your natural
            beauty and achieve a glowing, healthy complexion.
          </p>
        </div>
        <div>
          <ul className="text-white">
            <li className="font-Melodrama font-semibold">Pages</li>
            <li className="mt-3 font-Poppins">Home</li>
            <li className="font-Poppins">Shop</li>
            <li className="font-Poppins">Our Story</li>
            <li className="font-Poppins">Blog</li>
            <li className="font-Poppins">FAQS</li>
            <li className="font-Poppins">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="font-Melodrama font-semibold">Legal</li>
            <li className="mt-3 font-Poppins">Privacy Policy</li>
            <li className="font-Poppins">Instructions</li>
            <li className="font-Poppins">License</li>
            <li className="font-Poppins">Terms & Condition</li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <li className="font-Melodrama font-semibold">Contact us</li>
            <li className="mt-3 font-Poppins">
              Have questions & suggestions? Need assistance?
            </li>
            <li className="font-Poppins">Give us a call +2 457 8784 1545</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 md:mt-0 mt-6">
        <FaFacebook className="text-white text-2xl" />
        <FaTwitter className="text-white text-2xl" />
        <FaPinterest className="text-white text-2xl" />
        <FaInstagram className="text-white text-2xl" />
      </div>
      <p className="text-white mt-3 font-Poppins font-medium text-sm ">
        2023 Naturla, Inc.
      </p>
    </div>
  );
}

export default Footer;
