"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Battery, Clock, Weight, Zap, Award } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
    {
        id: 1,
        image: '/product/P1.jpg',
        title: 'Agricultural Robotic Bull',
        subtitle: '6-in-1 multifunctional electric robot',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹80,000',
        badge: 'BESTSELLER'
    },
    {
        id: 2,
        image: '/product/P2.jpg',
        title: 'Multifunctional Rover',
        subtitle: 'Affordable compact farm machine',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹50,000',
        badge: 'NEW'
    },
    {
        id: 3,
        image: '/product/P3.jpg',
        title: 'Agriculture Tiller',
        subtitle: 'Soil preparation & weeding',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹40,000',
        badge: 'POPULAR'
    },
    {
        id: 4,
        image: '/product/P4.jpg',
        title: 'Agriculture Sprayer',
        subtitle: 'Low-cost effective crop sprayer',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '₹10,000',
    },
];

const getBadgeConfig = (badge) => {
    switch (badge) {
        case 'BESTSELLER':
            return {
                gradient: 'bg-gradient-to-r from-amber-500 to-orange-600',
                icon: Award,
                glow: 'shadow-amber-500/40'
            };
        case 'NEW':
            return {
                gradient: 'bg-gradient-to-r from-emerald-500 to-teal-600',
                icon: Zap,
                glow: 'shadow-emerald-500/50'
            };
        case 'POPULAR':
            return {
                gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
                icon: Award,
                glow: 'shadow-blue-500/50'
            };
        default:
            return {
                gradient: 'bg-gray-600',
                icon: Award,
                glow: 'shadow-gray-500/50'
            };
    }
};

function ProductSlider() {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Products
                    </span>
                </h1>
                <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                    Discover innovative agricultural solutions designed for modern farming excellence
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-3 md:px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {products.map((product, index) => {
                            const badgeConfig = product.badge ? getBadgeConfig(product.badge) : null;
                            const BadgeIcon = badgeConfig?.icon;

                            return (
                                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 mb-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, type: "spring" }}
                                        whileHover={{ y: -12 }}
                                        className="h-full"
                                    >
                                        <div className="bg-white rounded-md shadow-xl overflow-hidden group relative border border-gray-100 h-full transition-all duration-500 hover:shadow-orange-200/50 hover:border-orange-200">
                                            {product.badge && (
                                                <motion.div
                                                    initial={{ x: -100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                                                    className={`absolute top-5 left-0 ${badgeConfig.gradient} ${badgeConfig.glow} text-white text-xs font-bold px-5 py-2 rounded-r-full z-10 shadow-xl flex items-center gap-1.5`}
                                                >
                                                    {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
                                                    {product.badge}
                                                </motion.div>
                                            )}

                                            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-72">
                                                <motion.div
                                                    className="absolute inset-0"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Floating Action Button on Hover */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileHover={{ opacity: 1, y: 0 }}
                                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                >
                                                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-transform flex items-center gap-2">
                                                        <span>Quick View</span>
                                                        <motion.span
                                                            animate={{ x: [0, 4, 0] }}
                                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                                        >
                                                            →
                                                        </motion.span>
                                                    </button>
                                                </motion.div>
                                            </div>

                                            <div className="p-7">
                                                <div className="mb-4">
                                                    <h3 className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors leading-tight">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-snug">{product.subtitle}</p>
                                                </div>

                                                <div className="grid grid-cols-3 gap-3 mb-6">
                                                    <motion.div
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="bg-gradient-to-br from-orange-50 to-red-50 rounded-md p-3 text-center border border-orange-100 hover:border-orange-300 transition-all cursor-pointer"
                                                    >
                                                        <Weight className="w-5 h-5 text-orange-600 mx-auto mb-1.5" />
                                                        <p className="text-xs text-gray-600 font-medium mb-0.5">Load</p>
                                                        <p className="text-sm font-bold text-gray-900">{product.specs.load}</p>
                                                    </motion.div>
                                                    <motion.div
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-md p-3 text-center border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                                                    >
                                                        <Battery className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                                                        <p className="text-xs text-gray-600 font-medium mb-0.5">Battery</p>
                                                        <p className="text-sm font-bold text-gray-900">{product.specs.battery}</p>
                                                    </motion.div>
                                                    <motion.div
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-md p-3 text-center border border-amber-100 hover:border-amber-300 transition-all cursor-pointer"
                                                    >
                                                        <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
                                                        <p className="text-xs text-gray-600 font-medium mb-0.5">Runtime</p>
                                                        <p className="text-sm font-bold text-gray-900">{product.specs.runtime}</p>
                                                    </motion.div>
                                                </div>

                                                <div className="flex items-center justify-between pt-5 border-t-2 border-gray-100">
                                                    <div>
                                                        <p className="text-xs text-gray-500 font-medium mb-1">Starting from</p>
                                                        <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                                            {product.price}
                                                        </p>
                                                    </div>
                                                    <motion.button
                                                        whileHover={{ scale: 1.08 }}
                                                        whileTap={{ scale: 0.92 }}
                                                        className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-md shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all group/btn overflow-hidden"
                                                    >
                                                        <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                                        <span className="relative flex items-center gap-2 font-semibold">
                                                            <ShoppingCart className="w-6 h-6" />
                                                            <span className="hidden sm:inline">Add</span>
                                                        </span>
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-14 w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white shadow-xl transition-all hover:scale-110" />
                    <CarouselNext className="hidden md:flex -right-14 w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white shadow-xl transition-all hover:scale-110" />
                </Carousel>
            </div>
        </div>
    );
}

export default ProductSlider;