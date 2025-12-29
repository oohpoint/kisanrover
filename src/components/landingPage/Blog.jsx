"use client";
import React from "react";

const blogs = [
    {
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=60",
        category: "Farming Tips",
        date: "Dec 15, 2024",
        title: "5 Essential Tips for Maximizing Tractor Efficiency",
        excerpt: "Learn how to optimize your tractor's performance and reduce fuel consumption.",
        author: "Rajesh Kumar",
        authorImage: "https://img.freepik.com/free-photo/portrait-smiling-indian-person-posing-front-camera_482257-122324.jpg",
        readTime: "5 min"
    },
    {
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=60",
        category: "Technology",
        date: "Dec 12, 2024",
        title: "Smart Farming: The Future of Agriculture",
        excerpt: "Discover how modern technology is revolutionizing traditional farming practices.",
        author: "Priya Sharma",
        authorImage: "https://img.freepik.com/free-photo/female-model-photo-session-casting_114579-13335.jpg",
        readTime: "7 min"
    },
    {
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=60",
        category: "Maintenance",
        date: "Dec 10, 2024",
        title: "Seasonal Maintenance Guide for Your Tractor",
        excerpt: "Keep your tractor in top condition year-round with this comprehensive guide.",
        author: "Vikram Singh",
        authorImage: "https://img.freepik.com/premium-photo/confident-rich-eastern-indian-businessman-standing-modern-big-city_116547-72532.jpg",
        readTime: "6 min"
    },
];

export default function BlogSection() {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Blogs
                        </span>
                    </h1>
                    <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                        Expert advice, tips, and stories from the farming community
                    </p>
                </div>

                {/* Blog Horizontal Scroll */}
                <div className="relative">
                    <div className="overflow-hidden ">
                        <div className="animate-scroll flex gap-6">
                            {[...blogs, ...blogs].map((blog, index) => (
                                <div
                                    className="bg-white rounded-2xl shadow-lg border border-orange-100 shrink-0 w-[330px] sm:w-[383px] overflow-hidden"
                                    key={index}
                                >
                                    {/* Image */}
                                    <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                            <span>{blog.date}</span>
                                            <span>•</span>
                                            <span>{blog.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                                            {blog.excerpt}
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                            <img
                                                src={blog.authorImage}
                                                alt={blog.author}
                                                className="h-10 w-10 rounded-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="flex flex-col">
                                                <div className="font-medium text-gray-900 text-sm">
                                                    {blog.author}
                                                </div>
                                                <div className="text-orange-600 text-xs font-medium">
                                                    Read Article →
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-shadow">
                        View All Articles
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                    will-change: transform;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}