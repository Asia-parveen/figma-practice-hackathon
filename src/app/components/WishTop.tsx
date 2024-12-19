import React from "react";
import WishTopCard from "./WishTopCard";
import Link from "next/link";

const WishTop = () => {
  const products = [
    {
      imageSrc: "/images/pinkshrt.png",
      title: "The north coat",
      price: "$960",
    },
    {
      imageSrc: "/images/bag.png",
      title: "Gucci duffle bag",
      price: "$370",
    },
    {
      imageSrc: "/images/cpu.png",
      title: "RGB liquid CPU Cooler",
      price: "$370",
    },
    {
      imageSrc: "/images/table.png",
      title: "Small BookShelf",
      price: "$375",
    },
  ];

  return (
    <>
      <div className="flex justify-between max-w-screen-2xl lg:px-24 md:mb-0 md:pb-0 lg:mt-[50px]">
        <p className="text-[20px]">Wishlist (4)</p>
        <button className="border lg:px-6 lg:py-2 hover:bg-[#DB4444] hover:text-white"><Link href="/products">Move All To Bag</Link></button>
      </div>

      {/* Products Grid */}
      <div className="pt-[25px] max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-[10px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <WishTopCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishTop;




// import React from 'react';
// // import Heading from './Heading';
// import WishTopCard from './WishTopCard';

// const WishTop = () => {
//   const products = [
//     {
//       imageSrc: "/images/pinkshrt.png",
//       title: "The north coat",
//       price: "$960",
     
//     },
//     {
//       imageSrc: "/images/bag.png",
//       title: "Gucci duffle bag",
//       price: "$370",
     
//     },
//     {
//       imageSrc: "/images/cpu.png",
//       title: "RGB liquid CPU Cooler",
//       price: "$370",
      
//     },
//     {
//       imageSrc: "/images/table.png",
//       title: "Small BookSelf",
//       price: "$375",
    
//     },
//   ];

//   return (
//     <>
//     <div className='flex justify-between max-w-screen-2xl lg:px-24 md:mb-0 md:pb-0 lg:mt-[50px] '>
//         <p className='text-[20px] '>Wishlist (4)</p>
//         <button className='border lg:px-6 lg:py-2'>Move All To Bag</button>
//     </div>

//       {/* Products grid */}
//       <div className="pt-[25px] max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-[10px]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
           
//           {products.map((product, index) => (
//             <WishTopCard key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default WishTop;
