import React from 'react';
import Heading from './Heading';
import SellingCard from './SellingCard';
import Link from 'next/link';

const Selling = () => {
  const products = [
    {
      // discount:"677",
      imageSrc: "/images/pinkshrt.png",
      title: "The north coat",
      price: "$960",
      stars: 5,
    },
    {
      // discount:"677",
      imageSrc: "/images/bag.png",
      title: "Gucci duffle bag",
      price: "$370",
      stars: 4,
    },
    {
      // discount:"677",
      imageSrc: "/images/cpu.png",
      title: "RGB liquid CPU Cooler",
      price: "$370",
      stars: 5,
    },
    {
      // discount:"677",
      imageSrc: "/images/table.png",
      title: "Small BookSelf",
      price: "$375",
      stars: 4.5,
    },
  ];

  return (
    <>
      {/* Header section */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 lg:pt-[30px] flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
        <Heading
          heading="Best Selling Products"
          imageSrc="/images/redimg.png"
          imageAlt="Heading Tag"
        />
        <button className="border-none bg-[#DB4444] text-white text-[14px] md:text-[14px] px-[24px] py-[12px] sm:px-[32px] sm:py-[16px]">
         <Link href="blog">View All Products</Link>
        </button>
      </div>

      {/* Products grid */}
      <div className="pt-[25px] max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 lg:pb-[5rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product, index) => (
            <SellingCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Selling;



