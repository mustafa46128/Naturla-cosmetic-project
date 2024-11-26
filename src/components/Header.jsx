import React from "react";
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <div className="bg-[#251D18] flex  ">
      <Marquee gradient={false}>
        <div className="flex gap-4">
          <p className="text-sm font-Poppins text-white py-2">
            Core collection available now I get free shipping on orders over
            $200
          </p>
          <p className="text-sm font-Poppins text-white py-2">
            Core collection available now I get free shipping on orders over
            $200
          </p>
          <p className="text-sm font-Poppins text-white py-2">
            Core collection available now I get free shipping on orders over
            $200
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default Header;
