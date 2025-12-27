'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products', hasDropdown: true },
    { name: 'TECHNOLOGY', href: '/technology' },
    { name: 'ABOUT US', href: '/about' },
];

const products = [
    {
        id: 1,
        name: 'Steel Pipes',
        image: '/product/P1.jpg',
        href: '/products/steel-pipes',
    },
    {
        id: 2,
        name: 'Metal Sheets',
        image: '/product/P2.jpg',
        href: '/products/metal-sheets',
    },
    {
        id: 3,
        name: 'Construction Tools',
        image: '/product/P3.jpg',
        href: '/products/tools',
    },
    {
        id: 4,
        name: 'Safety Equipment',
        image: '/product/P4.jpg',
        href: '/products/safety',
    },
    {
        id: 5,
        name: 'Safety Equipment',
        image: '/product/P6.jpg',
        href: '/products/safety',
    },
];

export default function Header() {
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-3 sm:px-3 lg:px-4">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="ml-3 text-xl font-semibold tracking-wider">
                            KISAN ROVER
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative">
                                {item.hasDropdown ? (
                                    <div
                                        onMouseEnter={() => setIsProductsOpen(true)}
                                        onMouseLeave={() => setIsProductsOpen(false)}
                                    >
                                        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center">
                                            {item.name}
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {/* Products Dropdown */}
                                        {isProductsOpen && (
                                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl z-50">
                                                <div className="bg-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 p-6">
                                                    <div className="grid grid-cols-5 gap-6">
                                                        {products.map((product) => (
                                                            <Link
                                                                key={product.id}
                                                                href={product.href}
                                                                className="group"
                                                            >
                                                                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                                                    <Image
                                                                        src={product.image}
                                                                        alt={product.name}
                                                                        fill
                                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                                                    {product.name}
                                                                </h3>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                                        <Link
                                                            href="/products"
                                                            className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center"
                                                        >
                                                            View all products
                                                            <svg
                                                                className="ml-2 h-4 w-4"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* CTA Buttons */}
                        <Link
                            href="/order"
                            className="px-4 py-1 text-sm font-medium text-white bg-orange-600 rounded hover:bg-orange-700 transition-colors"
                        >
                            ORDER
                        </Link>
                        <Link
                            href="/enquiry"
                            className="px-4 py-1 text-sm font-medium text-white bg-orange-600 rounded hover:bg-orange-700 transition-colors"
                        >
                            ENQUIRY
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}