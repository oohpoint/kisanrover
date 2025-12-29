"use client";
import React, { useState } from "react";
import { ShoppingCart, Truck, Shield, Headphones, Check, ArrowRight, Star } from "lucide-react";

const products = [
    {
        id: 1,
        image: '/product/P1.jpg',
        title: 'Agricultural Robotic Bull',
        subtitle: '6-in-1 multifunctional electric robot',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹80,000',
        badge: 'BESTSELLER',
        color: 'from-orange-500 to-red-500',
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        image: '/product/P2.jpg',
        title: 'Multifunctional Rover',
        subtitle: 'Affordable compact farm machine',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹50,000',
        badge: 'NEW',
        color: 'from-green-500 to-emerald-500',
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        image: '/product/P3.jpg',
        title: 'Agriculture Tiller',
        subtitle: 'Soil preparation & weeding',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹40,000',
        badge: 'POPULAR',
        color: 'from-blue-500 to-indigo-500',
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        image: '/product/P4.jpg',
        title: 'Agriculture Sprayer',
        subtitle: 'Low-cost effective crop sprayer',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹10,000',
        color: 'from-purple-500 to-pink-500',
        rating: 4.6,
        reviews: 203
    },
];

export default function ProductPage() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'BESTSELLER':
                return 'bg-gradient-to-r from-orange-600 to-red-600';
            case 'NEW':
                return 'bg-gradient-to-r from-green-600 to-emerald-600';
            case 'POPULAR':
                return 'bg-gradient-to-r from-blue-600 to-indigo-600';
            default:
                return 'bg-gradient-to-r from-gray-600 to-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Filter Section */}
            <section className="py-4 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-2">
                            {['all', 'bestsellers', 'new', 'popular'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-orange-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                                onMouseEnter={() => setHoveredId(product.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Animated Border */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                                <div className="absolute inset-[3px] bg-white rounded-3xl z-10"></div>

                                <div className="relative z-20">
                                    {/* Product Image */}
                                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Badge */}
                                        {product.badge && (
                                            <div className="absolute top-4 right-4 z-30">
                                                <span className={`${getBadgeColor(product.badge)} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                                                    {product.badge}
                                                </span>
                                            </div>
                                        )}

                                        {/* Quick View on Hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                Quick View
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-6">
                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                            {product.subtitle}
                                        </p>

                                        {/* Specifications */}
                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center justify-between p-2.5 bg-gradient-to-r from-orange-50 to-transparent rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                                        <span className="text-sm">⚡</span>
                                                    </div>
                                                    <span className="text-xs text-gray-600">Load Capacity</span>
                                                </div>
                                                <span className="font-semibold text-gray-900 text-sm">{product.specs.load}</span>
                                            </div>

                                            <div className="flex items-center justify-between p-2.5 bg-gradient-to-r from-green-50 to-transparent rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                                        <span className="text-sm">🔋</span>
                                                    </div>
                                                    <span className="text-xs text-gray-600">Battery Life</span>
                                                </div>
                                                <span className="font-semibold text-gray-900 text-sm">{product.specs.battery}</span>
                                            </div>

                                            <div className="flex items-center justify-between p-2.5 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <span className="text-sm">⏱️</span>
                                                    </div>
                                                    <span className="text-xs text-gray-600">Runtime</span>
                                                </div>
                                                <span className="font-semibold text-gray-900 text-sm">{product.specs.runtime}</span>
                                            </div>
                                        </div>

                                        {/* Price & CTA */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                                                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                                        {product.price}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-green-600 font-medium">In Stock</p>
                                                    <p className="text-xs text-gray-500">Ships in 2-3 days</p>
                                                </div>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                                                <ShoppingCart className="w-4 h-4" />
                                                Add to Cart
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-orange-600">500+</div>
                            <div className="text-sm text-gray-600">Happy Farmers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-green-600">98%</div>
                            <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">24/7</div>
                            <div className="text-sm text-gray-600">Customer Support</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-purple-600">7 Years</div>
                            <div className="text-sm text-gray-600">Warranty</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Farm?
                    </h2>
                    <p className="text-orange-50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of satisfied farmers who have revolutionized their agricultural operations with our innovative equipment
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                            Schedule a Demo
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}