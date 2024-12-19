"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";

interface Blog {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (blogs.length === 0) return <div>No blogs found</div>;

  return (
    <>
    <Header/>
    <div className="max-w-screen-xl mx-auto p-6 lg:py-[50px]">

      <h1 className="text-4xl font-bold mb-6 lg:mb-[30px] text-center">Explore Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${blog.slug}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-2">{blog.category}</p>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;





