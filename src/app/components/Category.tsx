import React from "react";
import CategoryCard from "./CategoryCard";  // Ensure the correct path for CategoryCard
import Heading from "./Heading";  // Ensure the correct path for Heading

const Category = () => {
  // Example data for cards
  const cards = [
    { imageSrc: "/images/fon.png", imageAlt: "Category 1", title: "Phones" },
    { imageSrc: "/images/comp.png", imageAlt: "Category 2", title: "Computers" },
    { imageSrc: "/images/watch.png", imageAlt: "Category 3", title: "SmartWatch" },
    { imageSrc: "/images/camra.png", imageAlt: "Category 4", title: "Camera" },
    { imageSrc: "/images/headfon.png", imageAlt: "Category 5", title: "HeadPhones" },
    { imageSrc: "/images/gampad.png", imageAlt: "Category 6", title: "Gaming" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-10 lg:mb-10 border-b-2 border-gray-200 ">
      {/* Heading */}
      <Heading heading="Browse By Category" imageSrc="/images/categry.png" imageAlt="Heading Tag" />

      {/* Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8 opacity-[0.7] ">
        {cards.map((card, index) => (
          <CategoryCard
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;





// // Category.tsx
// import React from "react";
// import CategoryCard from "./CategoryCard";  // Make sure the path is correct
// import Heading from "./Heading";

// const Category = () => {
//   // Example data for cards
//   const cards = [
//     { imageSrc: "/images/fon.png", imageAlt: "Category 1", title: "Phones" },
//     { imageSrc: "/images/comp.png", imageAlt: "Category 2", title: "Computers" },
//     { imageSrc: "/images/watch.png", imageAlt: "Category 3", title: "SmartWatch" },
//     { imageSrc: "/images/camra.png", imageAlt: "Category 4", title: "Camera" },
//     { imageSrc: "/images/headfon.png", imageAlt: "Category 5", title: "HeadPhones" },
//     { imageSrc: "/images/gampad.png", imageAlt: "Category 6", title: "Gaming" },
//   ];

//   return (
//     <div className="max-w-screen-2xl md:px-20 pt-10 pb-32 border-b-2">
//       {/* Heading */}
//       <Heading heading="Browse By Category" imageSrc="/images/categry.png" imageAlt="hedaingtag" />

//       {/* Cards Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  mt-6 opacity-[0.6]">
//         {cards.map((card, index) => (
//           <CategoryCard
//             key={index}
//             imageSrc={card.imageSrc}
//             imageAlt={card.imageAlt}
//             title={card.title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;


