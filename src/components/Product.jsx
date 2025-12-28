'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        image: '/product/P1.jpg',
        title: 'VAMANA',
        subtitle: 'The Ultimate Unmanned Ground Vehicle',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$24,999',
        badge: 'BESTSELLER'
    },
    {
        id: 2,
        image: '/product/P2.jpg',
        title: 'EBARROW',
        subtitle: 'The Electric Wheel Barrow',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$12,999',
        badge: 'NEW'
    },
    {
        id: 3,
        image: '/product/P3.jpg',
        title: 'GLX E-LOADER',
        subtitle: 'The Electric Skid-Steer Loader',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$34,999',
        badge: 'POPULAR'
    },
    {
        id: 4,
        image: '/product/P4.jpg',
        title: 'PRODUCT 4',
        subtitle: 'Advanced Construction Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$29,999',
    },
    {
        id: 5,
        image: '/product/P5.jpg',
        title: 'PRODUCT 5',
        subtitle: 'Heavy Duty Machinery',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$39,999',
    },
    {
        id: 6,
        image: '/product/P6.jpg',
        title: 'PRODUCT 6',
        subtitle: 'Industrial Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$27,999',
    },
    {
        id: 7,
        image: '/product/P7.jpg',
        title: 'PRODUCT 7',
        subtitle: 'Construction Solutions',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$31,999',
    },
    {
        id: 8,
        image: '/product/P8.jpg',
        title: 'PRODUCT 8',
        subtitle: 'Advanced Technology',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$36,999',
    },
    {
        id: 9,
        image: '/product/P9.jpg',
        title: 'PRODUCT 9',
        subtitle: 'Smart Equipment',
        specs: { load: '500 Kg', battery: '7 Years', runtime: '8-10 Hrs' },
        price: '$33,999',
    },
];

export default function ProductSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const autoPlayRef = useRef(null);

    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Auto-play
    useEffect(() => {
        if (!isHovered) {
            autoPlayRef.current = setInterval(nextSlide, 4000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isHovered, nextSlide]);

    // Keyboard navigation
    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevSlide, nextSlide]);

    // Touch handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextSlide();
        if (distance < -minSwipeDistance) prevSlide();
    };

    return (
        <section
            className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase">
                        Featured Products
                    </h2>
                    <p className="text-orange-600 text-sm md:text-base">
                        Premium industrial equipment designed for excellence
                    </p>
                </div>

                <div
                    className="relative"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Main Card */}
                    <div className="max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                            >
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative aspect-square md:aspect-auto bg-gray-100 group overflow-hidden">
                                        <img
                                            src={products[currentIndex].image}
                                            alt={products[currentIndex].title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Badge */}
                                        {products[currentIndex].badge && (
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                                    {products[currentIndex].badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                                        {/* Product Info */}
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                                                {products[currentIndex].title}
                                            </h3>
                                            <p className="text-base md:text-lg text-gray-600 mb-8">
                                                {products[currentIndex].subtitle}
                                            </p>

                                            {/* Specifications */}
                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Load Capacity</span>
                                                    <span className="text-lg font-bold text-gray-900">{products[currentIndex].specs.load}</span>
                                                </div>
                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Battery Life</span>
                                                    <span className="text-lg font-bold text-gray-900">{products[currentIndex].specs.battery}</span>
                                                </div>
                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Runtime</span>
                                                    <span className="text-lg font-bold text-gray-900">{products[currentIndex].specs.runtime}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price and CTA */}
                                        <div>
                                            <div className="mb-6">
                                                <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                                <p className="text-4xl md:text-5xl font-bold text-gray-900">
                                                    {products[currentIndex].price}
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button className="flex-1 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                                                    Order Now
                                                </button>
                                                <button className="flex-1 px-8 py-4 bg-white border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 font-semibold rounded-xl transition-colors duration-200">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 group"
                        aria-label="Previous product"
                    >
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 group"
                        aria-label="Next product"
                    >
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    {products.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                ? 'w-10 h-2.5 bg-orange-500'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to product ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}