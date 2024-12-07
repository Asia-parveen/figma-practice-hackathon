import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
<div className="h-auto flex flex-col lg:flex-row mx-auto">
  {/* Left Sidebar */}
  <div className="lg:w-[250px] ml-[8%] border-r-[1px]">
    <ul className="mt-[30px] text-center lg:text-left"> {/* Center list items on small screens */}
      <li className="pb-[16px]">Woman’s Fashion</li>
      <li className="pb-[16px]">Men’s Fashion</li>
      <li className="pb-[16px]">Electronics</li>
      <li className="pb-[16px]">Home & Lifestyle</li>
      <li className="pb-[16px]">Medicine</li>
      <li className="pb-[16px]">Sports & Outdoor</li>
      <li className="pb-[16px]">Baby’s & Toys</li>
      <li className="pb-[16px]">Health & Beauty</li>
      <li className="pb-[16px]">Groceries & Pets</li>
    </ul>
  </div>

  {/* Right Section */}
  <div className="bg-black flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left m-[30px] px-[40px] py-[50px] lg:w-full relative">
    {/* Left side content (iPhone info) */}
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] lg:ml-[60px] flex flex-col items-center lg:items-start justify-start mb-[30px] lg:mb-0">
      <div className="flex items-center justify-center lg:justify-start mb-[20px]">
        <Image src="/images/apple.png" alt="apple" width={50} height={50} className="mr-2" />
        <p className="text-white">iPhone 14 Series</p>
      </div>
      <h1 className="text-white text-[32px] sm:text-[36px] lg:text-[48px] font-semibold mb-4">
        Up to 10% <br /> off Voucher
      </h1>
      <p className="text-white text-[14px] sm:text-[16px] lg:text-[18px]">
        <Link href="#" className="flex items-center justify-center lg:justify-start">
          Shop Now <FaArrowRight className="text-white ml-3 mt-2" />
        </Link>
      </p>
    </div>

    {/* Right side image */}
    <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[50%] mt-6 lg:mt-0">
      <Image src="/images/heromobile.png" alt="apple" width={350} height={350} className="mx-auto lg:mx-0" />
    </div>

    {/* Dot Image Positioned at Bottom Center */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
      <Image src="/images/dots.png" alt="dots" width={70} height={10} />
    </div>
  </div>
</div>


    
    {/* <div className='h-auto flex'>
        <div className='lg:w-[250px] ml-[8%] border-r-[1px] '>
            <ul className='mt-[30px] text-justify'>
                <li className='pb-[13px]'>Woman’s Fashion</li>
                <li  className='pb-[13px]  '>Men’s Fashion</li>
                <li  className='pb-[13px] '>Electronics</li>
                <li  className='pb-[13px]'>Home & Lifestyle</li>
                <li  className='pb-[13px]'>Medicine</li>
                <li  className='pb-[13px]'>Sports & Outdoor</li>
                <li  className='pb-[13px]'>Baby’s & Toys</li>
                <li  className='pb-[13px]'>Groceries & Pets</li>
                <li  className='pb-[13px]'>Health & Beauty</li>
                
            </ul>
        </div>
        <div className='bg-black flex items-center justify-between text-center lg:w-full m-[30px] px-[40px] py-[50px]'>
            <div className='w-[40%] ml-[60px] justify-start'>
                <div className='flex '>
                    <Image src="/images/apple.png" alt="apple" width={50}height={50} className='justify-center'  />
                    <p className='text-white'>iPhone 14 Series</p>
                </div>
                <h1 className='text-white text-[48px] font-semibold justify-start'>Up to 10% <br></br>off Voucher</h1>
              <p className='text-white'> <Link href="#" >Shop Now</Link> </p>
            </div>

            <div className='w-50%'>
            <Image src="/images/heromobile.png" alt="apple" width={350}height={350}/>
            </div>
               
                

        </div>

    </div> */}
    </>
  )
}

export default HeroSection