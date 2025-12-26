'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        image: '/product/P1.jpg',
        title: 'VAMANA',
        subtitle: 'The Ultimate Unmanned Ground Vehicle',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 2,
        image: '/product/P2.jpg',
        title: 'EBARROW',
        subtitle: 'The Electric Wheel Barrow',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 3,
        image: '/product/P3.jpg',
        title: 'GLX E-LOADER',
        subtitle: 'The Electric Skid-Steer Loader',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 4,
        image: '/product/P4.jpg',
        title: 'PRODUCT 4',
        subtitle: 'Advanced Construction Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 5,
        image: '/product/P5.jpg',
        title: 'PRODUCT 5',
        subtitle: 'Heavy Duty Machinery',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 6,
        image: '/product/P6.jpg',
        title: 'PRODUCT 6',
        subtitle: 'Industrial Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 7,
        image: '/product/P7.jpg',
        title: 'PRODUCT 7',
        subtitle: 'Construction Solutions',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 8,
        image: '/product/P8.jpg',
        title: 'PRODUCT 8',
        subtitle: 'Advanced Technology',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
    {
        id: 9,
        image: '/product/P9.jpg',
        title: 'PRODUCT 9',
        subtitle: 'Smart Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
    },
];

export default function ProductSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getPrevIndex = () => (currentIndex - 1 + products.length) % products.length;
    const getNextIndex = () => (currentIndex + 1) % products.length;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevSlide, nextSlide]);

    return (
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative h-[600px] md:h-[700px] flex items-center justify-center gap-8">

                    {/* Left Side Card */}
                    <div className="hidden lg:block w-1/3 h-[400px]">
                        <motion.div
                            key={`prev-${getPrevIndex()}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-full cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={prevSlide}
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform scale-85">
                                <img
                                    src={products[getPrevIndex()].image}
                                    alt={products[getPrevIndex()].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Card */}
                    <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <div className="relative aspect-[12/9] bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={products[currentIndex].image}
                                            alt={products[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-4 text-center">
                                        <h3 className="text-2xl md:text-3xl font-semibold uppercase text-gray-900 mb-1">
                                            {products[currentIndex].title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 mb-3">
                                            {products[currentIndex].subtitle}
                                        </p>

                                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 md:p-5 shadow-xl">
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                                <div className="flex flex-1 items-center justify-around w-full sm:w-auto gap-4">
                                                    <div className="text-center flex-1">
                                                        <div className="text-xs text-gray-400 mb-1">Load Carrier</div>
                                                        <div className="text-yellow-400 font-bold text-sm md:text-base">
                                                            {products[currentIndex].specs.load}
                                                        </div>
                                                    </div>
                                                    <div className="h-8 w-px bg-gray-700 hidden sm:block" />
                                                    <div className="text-center flex-1">
                                                        <div className="text-xs text-gray-400 mb-1">Battery Life</div>
                                                        <div className="text-white font-bold text-sm md:text-base">
                                                            {products[currentIndex].specs.battery}
                                                        </div>
                                                    </div>
                                                    <div className="h-8 w-px bg-gray-700 hidden sm:block" />
                                                    <div className="text-center flex-1">
                                                        <div className="text-xs text-gray-400 mb-1">Runtime</div>
                                                        <div className="text-white font-bold text-sm md:text-base">
                                                            {products[currentIndex].specs.runtime}
                                                        </div>
                                                    </div>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm md:text-base font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"
                                                >
                                                    ORDER NOW
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side Card */}
                    <div className="hidden lg:block w-1/3 h-[400px]">
                        <motion.div
                            key={`next-${getNextIndex()}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-full cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={nextSlide}
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform scale-85">
                                <img
                                    src={products[getNextIndex()].image}
                                    alt={products[getNextIndex()].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
                        aria-label="Previous slide"
                    >
                        <svg
                            className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-orange-600 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
                        aria-label="Next slide"
                    >
                        <svg
                            className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-orange-600 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Dots Indicator */}
                <div className="flex items-center justify-center gap-2">
                    {products.map((_, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`transition-all rounded-full ${idx === currentIndex
                                ? 'w-10 h-2.5 bg-gradient-to-r from-orange-600 to-orange-700'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}