import React from "react";
import Image from "next/image";

interface SectionWithHeadingProps {
  heading: string;
  imageSrc: string;
  imageAlt: string;
}

const Heading: React.FC<SectionWithHeadingProps> = ({
  heading,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="flex flex-col items-center md:items-start py-6 justify-start md: ">
      <div className="flex items-center space-x-6 md:items-start">
        {/* Image block with fixed width/height */}
        <Image src={imageSrc} alt={imageAlt} width={70} height={30} />
      </div>

      {/* Heading block under the image */}
      <h1 className="mt-4 text-[24px] sm:text-[36px] font-semibold text-center md:text-left">
        {heading}
      </h1>
    </section>
  );
};

export default Heading;


