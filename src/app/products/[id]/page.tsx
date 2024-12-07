import { notFound } from 'next/navigation';

// Define an interface for Product data structure
interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

// Mock Product Data (For demonstration purposes)
const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: "$100",
    description: "Description of Product 1",
    image: "/images/Cart (6).png",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$200",
    description: "Description of Product 2",
    image: "/images/Cart (5).png",
  },
  {
    id: 3,
    title: "Product 3",
    price: "$150",
    description: "Description of Product 3",
    image: "/images/Cart (4).png",
  },
  {
    id: 4,
    title: "Product 4",
    price: "$300",
    description: "Description of Product 4",
    image: "/images/Cart (1).png",
  },
  {
    id: 5,
    title: "Product 5",
    price: "$120",
    description: "Description of Product 5",
    image: "/images/Cart (3).png",
  },
  {
    id: 6,
    title: "Product 6",
    price: "$250",
    description: "Description of Product 6",
    image: "/images/Cart (2).png",
  },
  {
    id: 7,
    title: "Product 7",
    price: "$180",
    description: "Description of Product 7",
    image: "/images/Cart (1).png",
  },
  {
    id: 8,
    title: "Product 8",
    price: "$320",
    description: "Description of Product 8",
    image: "/images/Cart.png",
  },
];

// Fetch product by ID
const fetchProductById = (id: number) => {
  return products.find((product) => product.id === id);
};

// ProductDetails Component (Server Component)
const ProductDetails = ({ params }: { params: { id: string } }) => {
  // Fetch product using the product ID from params
  const product = fetchProductById(parseInt(params.id, 10));

  if (!product) {
    notFound(); // Renders a 404 page if the product is not found
  }

  return (
    <div className="min-h-screen py-10 px-6 lg:w-full">
      <div className="max-w-screen-lg mx-auto p-6">
        {/* Product Image */}
        <div className="w-full max-w-[500px] h-[400px] mx-auto mb-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
















// Make sure this name matches the component name



