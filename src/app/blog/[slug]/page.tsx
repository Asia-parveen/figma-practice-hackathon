"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Header from "../../../app/components/Header";

interface Blog {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  content: string;
}

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const res = await fetch(`/api/blog?slug=${slug}`);
      const data = await res.json();
      if (res.ok) {
        setBlog(data || null);
      } else {
        setBlog(null);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return notFound(); // Return 404 if no blog found

  return (
    <>
    <Header/>
    <div className="max-w-screen-lg mx-auto p-6 lg:py-[40px]">
      {/* Blog Title and Category */}
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-700 mb-6">{blog.category}</p>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 flex flex-col gap-4 lg:pt-0">
          <p className="text-xl font-semibold">{blog.description}</p>
          <div className="text-lg text-gray-600 leading-relaxed">{blog.content}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetailPage;





