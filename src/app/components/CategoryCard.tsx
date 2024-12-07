// CategoryCard.tsx
import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="w-[170px] h-[145px] flex flex-col items-center justify-center border-[1px] rounded-lg shadow-md p-2 hover:bg-[#DB4444]">
      {/* Image */}
      <div className="w-[56px] h-[56px] mb-2 ">
        <Image src={imageSrc} alt={imageAlt} width={56} height={56} />
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
