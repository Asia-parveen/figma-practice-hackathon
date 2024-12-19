import Link from "next/link";
import Header from "../components/Header";
import ProductHeading from "../components/ProductHeading";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Breed Dry Dog Food",
      price: "$100 (35)",
      image: "/images/Cart (6).png",
    },
    {
      id: 2,
      title: "CANON EOS DSLR Camera",
      price: "$200",
      image: "/images/Cart (5).png",
    },
    {
      id: 3,
      title: "ASUS FHD Gaming Laptop",
      price: "$700 (325)",
      image: "/images/Cart (4).png",
    },
    {
      id: 4,
      title: "Curology Product Set",
      price: "$300",
      image: "/images/Cart (1).png",
    },
    {
      id: 5,
      title: "Kids Electric Car",
      price: "$120",
      image: "/images/Cart (3).png",
    },
    {
      id: 6,
      title: "Jr. Zoom Soccer Cleats",
      price: "$250",
      image: "/images/Cart (2).png",
    },
    {
      id: 7,
      title: "GP11 Shooter USB Gamepad",
      price: "$180",
      image: "/images/Cart (1).png",
    },
    {
      id: 8,
      title: "Quilted Satin Jacket",
      price: "$320",
      image: "/images/Cart.png",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 lg:pt-[30px] flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
        <ProductHeading
          heading="Best Selling Products"
          imageSrc="/images/redimg.png"
          imageAlt="Heading Tag"
        />
        <button className="border-none bg-[#DB4444] text-white text-[14px] md:text-[14px] px-[24px] py-[12px] sm:px-[32px] sm:py-[16px]">
          View All Products
        </button>
      </div>

      <div className="max-w-screen-2xl lg:mx-[40px] min-h-screen lg:pb-[5rem] lg:pt-[80px] sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 lg:my-[20px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-full h-[350px] bg-white overflow-hidden"
            >
              {/* Product Image */}
              <Link href={`/products/${product.id}`}>
                <div className="w-full h-[250px] flex justify-center items-center">
                  <Image 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-md"
                  />
                </div>
              </Link>

              {/* Product Info (Title and Price at the bottom) */}
              <div className="flex flex-col justify-between h-[100px] px-4 py-4">
                <h2 className="font-semibold text-lg text-center">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-center">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

