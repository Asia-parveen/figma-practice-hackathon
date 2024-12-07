import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
<div className="h-[40px] bg-black flex items-center justify-center text-white relative">
    <p className="text-center text-[10px] sm:text-[12px] md:text-sm lg:text-base font-light">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <span className="font-bold">  Shop Now</span>
    </p>
    <div className="absolute right-2 sm:right-4 flex items-center space-x-2 top-1/2 transform -translate-y-1/2 lg:mr-[100px]">
        <p className="text-[10px] sm:text-sm">English</p>
        <Image 
            src="/images/Vector (1).png" 
            alt="arrow" 
            width={13} 
            height={13} 
            className="text-center"
        />
    </div>
</div>





      {/* <div className="h-[40px] bg-black">
        <div className="flex text-white items-center">
          <p className="px-[20rem] text-center pt-[6px] font-[8px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow
          </p>
          <p className="px-2">English</p>
          <Image
            src="/images/Vector (1).png"
            alt="errow"
            width={13}
            height={13}
            className="text-center"
          />
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
