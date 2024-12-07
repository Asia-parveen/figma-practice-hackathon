import React from "react";
import Image from "next/image";
import WishBotCard from "./WishBotCard";

const WishBot = () => {
  const products = [
    {
      imageSrc: "/images/cmra.png",
      discount: "20% OFF",
      title: "HAVIT HV-G92 Gamepad",
      price: "$960",
      stars: 5,
    },
    {
      imageSrc: "/images/keybord.png",
      discount: "30% OFF",
      title: "AK-900 Wired Keyboard",
      price: "$370",
      stars: 4,
    },
    {
      imageSrc: "/images/itm.png",
      discount: "15% OFF",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      stars: 5,
    },
    {
      imageSrc: "/images/chair.png",
      discount: "25% OFF",
      title: "S-Series Comfort Chair",
      price: "$375",
      stars: 4.5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 mt-0 lg:mb-0 lg:pt-[20px]">
      {/* Main Container */}
      <div className="lg:max-w-screen-2xl w-full lg:px-[40px]">
        {/* Header Section */}
        <section className="flex flex-col sm:flex-row justify-between items-center py-6 md:text-center lg:ml-[30px]">
          <div className="flex items-center justify-center sm:justify-start space-x-6">
            <Image src="/images/Frame 625.png" alt="tag" width={100} height={50} />
          </div>
        </section>

        {/* Cards Section */}
        <div className="py-6 lg:ml-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <WishBotCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishBot;






// import React from "react";
// import Image from "next/image";
// import WishBotCard from "./WishBotCard";

// const WishBot = () => {
//   const products = [
//     {
//       imageSrc: "/images/cmra.png",
//       discount: "20% OFF",
//       title: "HAVIT HV-G92 Gamepad",
//       price: "$960",
//       stars: 5,
//     },
//     {
//       imageSrc: "/images/keybord.png",
//       discount: "30% OFF",
//       title: "AK-900 Wired Keyboard",
//       price: "$370",
//       stars: 4,
//     },
//     {
//       imageSrc: "/images/itm.png",
//       discount: "15% OFF",
//       title: "IPS LCD Gaming Monitor",
//       price: "$370",
//       stars: 5,
//     },
//     {
//       imageSrc: "/images/chair.png",
//       discount: "25% OFF",
//       title: "S-Series Comfort Chair",
//       price: "$375",
//       stars: 4.5,
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center px-4 mt-0 lg:mb-0 lg:pt-[20px]">
//       {/* Main Container */}
//       <div className="lg:max-w-screen-2xl lg:px-[40px]w-full">
//         {/* Header Section */}
//         <section className="flex lg: justify-start items-start py-6">
//           <div className="flex items-center space-x-6">
//             <Image src="/images/Frame 625.png" alt="tag" width={100} height={50} />
//           </div>
//         </section>

//         {/* Cards Section */}
//         <div className="py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
//             {products.map((product, index) => (
//               <WishBotCard key={index} {...product} />
//             ))}
//           </div>
//         </div>

//         {/* View All Products Button */}
//         {/* <div className="text-center mt-8">
//           <button className="border-none bg-[#DB4444] text-white text-[14px] md:text-[16px] md:px-[50px] md:py-[16px] px-8 py-4">
//             View All Products
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default WishBot;



// import React from "react";
// // import Timer from "./Timer";
// import Image from "next/image";
// import WishBotCard from "./WishBotCard";

// const WishBot = () => {
// //   const targetDate = "2024-12-31T23:59:59";

//   const products = [
//     {
//       imageSrc: "/images/cmra.png",
//       discount: "20% OFF",
//       title: "HAVIT HV-G92 Gamepad",
//       price: "$960",
//       stars: 5,
//     },
//     {
//       imageSrc: "/images/keybord.png",
//       discount: "30% OFF",
//       title: "AK-900 Wired Keyboard",
//       price: "$370",
//       stars: 4,
//     },
//     {
//       imageSrc: "/images/itm.png",
//       discount: "15% OFF",
//       title: "IPS LCD Gaming Monitor",
//       price: "$370",
//       stars: 5,
//     },
//     {
//       imageSrc: "/images/chair.png",
//       discount: "25% OFF",
//       title: "S-Series Comfort Chair",
//       price: "$375",
//       stars: 4.5,
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center px-4 mt-0">
//       {/* Main Container */}
//       <div className="lg: max-w-screen-2xl ">
//         {/* Header Section */}
//         <section className="flex items-center py-6">
//           <div className="flex items-center space-x-6">
//             <Image src="/images/Frame 625.png" alt="tag" width={100} height={50} />
//           </div>
//         </section>

//         {/* Flash Sales Heading */}
//         {/* <div className="flex flex-col sm:flex-row sm:gap-20 sm:items-center w-full">
//           <h1 className="mt-6 text-[24px] sm:text-[36px] font-semibold text-left">
//             Flash Sales
//           </h1>
//           <Timer targetDate={targetDate} />
//         </div> */}

//         {/* Cards Section */}
//         <div className="py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product, index) => (
//               <WishBotCard key={index} {...product} />
//             ))}
//           </div>
        
//         </div>
//         {/* <div className="text-center">
//   <button className="border-none bg-[#DB4444] text-white text-[14px] md:text-[16px] md:px-[50px] md:py-[16px] px-8 py-4">
//     View All Products
//   </button>
// </div> */}
//         {/* <div className="text-center lg: ml-30% ">
//         <button className="text-center lg: ml-30% border-none bg-[#DB4444] text-white md:text-[16px] md:px-[50px] md:py-[16px]">View All Products</button>
//         </div> */}
       
//       </div>
     
//     </div>
//   )
// };

// export default WishBot;
