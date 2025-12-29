'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Award, ContactRound, House, PhoneCall, ShoppingCart, Tractor } from 'lucide-react';

export default function MobileBottomBar() {
    const pathname = usePathname();
    const navigation = [
        {
            name: 'Home',
            href: '/',
            icon: <House />
        },
        {
            name: 'Products',
            href: '/products',
            hasDropdown: true,
            icon: <Tractor />
        },
        {
            name: 'Order',
            href: '/order',
            icon: <ShoppingCart />
        },
        {
            name: 'About',
            href: '/about',
            icon: <Award />
        },
        {
            name: 'Contact',
            href: '/enquiry',
            icon: <PhoneCall />
        },
    ];

    const products = [
        { name: 'Steel Pipes', href: '/products/steel-pipes' },
        { name: 'Metal Sheets', href: '/products/metal-sheets' },
        { name: 'Construction Tools', href: '/products/tools' },
        { name: 'Safety Equipment', href: '/products/safety' },
    ];

    return (
        <>
            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
                <div className="grid grid-cols-5 h-16">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${isActive ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                                    }`}
                            >
                                {item.icon}
                                <span className="text-xs font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden behind the bottom bar */}
            <div className="h-16 md:hidden"></div>
        </>
    );
}