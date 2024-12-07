import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Music = () => {
  return (
    <div>
      <div className="bg-black flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-center sm:text-left m-[30px] px-[40px] py-[50px] lg:w-full relative">
        {/* Left side content (iPhone info) */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] lg:ml-[60px] flex flex-col items-center sm:items-center lg:items-start justify-start mb-[30px] lg:mb-0">
          <p className='text-[#00FF66] font-semibold text-[16px]'>Categories</p>
          <h1 className="text-white text-[32px] sm:text-[36px] lg:text-[48px] font-semibold mb-4">
            Enhance Your<br /> Music Experience
          </h1>
          <div className="text-white text-[14px] sm:text-[16px] lg:text-[18px]">
            <Image src="/images/circle.png" alt="" width={320} height={62} />
            {/* <button className='md:w-[75px] md:h-[24px] bg-[#00FF66] px-[20px] py-[8px]'>Buy Now</button> */}
          </div>
          <button className='px-[40px] py-[11px] sm:py-[13px] bg-[#00FF66] sm: mt-[20px] md:mt-[20px]  text-white lg:mt-[30px]'>
            Buy Now!
          </button>
        </div>

        {/* Right side image */}
        <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[50%] mt-6 lg:mt-0">
          <Image src="/images/music.png" alt="apple" width={350} height={350} className="mx-auto lg:mx-0" />
        </div>

        {/* Dot Image Positioned at Bottom Center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
          <Image src="/images/dots.png" alt="dots" width={70} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Music;



// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Music = () => {
//   return (
//     <div>
//          <div className="bg-black flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left m-[30px] px-[40px] py-[50px] lg:w-full mt-0 ">
//     {/* Left side content (iPhone info) */}
//     <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] lg:ml-[60px] flex flex-col items-center lg:items-start justify-start mb-[30px] lg:mb-0">
//     <p className='text-[#00FF66] font-semibold text-[16px]'>Categories</p>
//       <h1 className="text-white text-[32px] sm:text-[36px] lg:text-[48px] font-semibold mb-4">
//       Enhance Your<br></br> Music Experience
//       </h1>
//       <div className="text-white text-[14px] sm:text-[16px] lg:text-[18px]">
//         <Image src="/images/circle.png" alt="" width={320} height={62} />
//         {/* <button className='md:w-[75px] md:h-[24px] bg-[#00FF66] px-[20px] py-[8px]'>Buy Now</button> */}
//       </div>
//       <button className='lg:px-[40px] lg:py-[11px] bg-[#00FF66] md:mt-[20px] rounded-md text-white lg;'>Buy Now!</button> 
//     </div>

//     {/* Right side image */}
//     <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[50%] mt-6 lg:mt-0">
//       <Image src="/images/music.png" alt="apple" width={350} height={350} className="mx-auto lg:mx-0" />
//     </div>

//     {/* Dot Image Positioned at Bottom Center */}
//     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
//       <Image src="/images/dots.png" alt="dots" width={70} height={10} />
//     </div>
//   </div>
      
//     </div>
//   )
// }

// export default Music;
