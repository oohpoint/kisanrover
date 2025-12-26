'use client';

import { Phone, Mail, MapPin, Youtube, Facebook, Twitter, Instagram, Linkedin, Send, ArrowUp, Award, Shield, Truck, Headphones } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' }
    ];

    const products = [
        { label: 'Weeding Machines', href: '/products/weeding' },
        { label: 'Seeding Machines', href: '/products/seeding' },
        { label: 'Spraying Machines', href: '/products/spraying' },
        { label: 'Multipurpose Machines', href: '/products/multipurpose' },
        { label: 'Product Categories', href: '/products' }
    ];

    const resources = [
        { label: 'Awards & Recognition', href: '/awards' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Demo Request', href: '/demo' },
        { label: 'Dealership Inquiry', href: '/dealership' },
        { label: 'Customer Support', href: '/support' }
    ];

    const socialLinks = [
        { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:bg-red-600' },
        { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
        { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
        { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
        { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' }
    ];

    const trustBadges = [
        { icon: Award, text: 'Award Winning' },
        { icon: Shield, text: '2 Year Warranty' },
        { icon: Truck, text: 'Free Delivery' },
        { icon: Headphones, text: '24/7 Support' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 relative">
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full shadow-lg hover:from-orange-700 hover:to-orange-800 transition flex items-center justify-center group"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Trust Badges Bar */}
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {trustBadges.map((badge, index) => {
                            const IconComponent = badge.icon;
                            return (
                                <div key={index} className="flex items-center gap-3 justify-center">
                                    <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200">{badge.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Company Info - Spans 2 columns on large screens */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">KR</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">Kisan Rover</span>
                                <span className="text-xs text-orange-400">Solar Farming Solutions</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering small and marginal farmers with innovative solar-powered agricultural machines. Designed in Bharat, Made for the World.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition group">
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+91 98765 43210</span>
                            </a>
                            <a href="mailto:info@kisanrover.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition group">
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">info@kisanrover.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">Industrial Area, Rajkot, Gujarat - 360002, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
                            <div className="flex gap-2">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition transform hover:-translate-y-0.5`}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-400 transition text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Our Products</h3>
                        <ul className="space-y-2.5">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <a
                                        href={product.href}
                                        className="text-gray-400 hover:text-orange-400 transition text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {product.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2.5 mb-6">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <a
                                        href={resource.href}
                                        className="text-gray-400 hover:text-orange-400 transition text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {resource.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter */}
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                            <h4 className="text-white font-semibold text-sm mb-2">Newsletter</h4>
                            <p className="text-xs text-gray-400 mb-3">Get farming tips & updates</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                                />
                                <button className="px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition flex items-center justify-center">
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {new Date().getFullYear()} Kisan Rover Technologies. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition">
                                Privacy Policy
                            </a>
                            <a href="/terms-conditions" className="text-gray-400 hover:text-orange-400 transition">
                                Terms & Conditions
                            </a>
                            <a href="/refund-policy" className="text-gray-400 hover:text-orange-400 transition">
                                Refund Policy
                            </a>
                            <a href="/shipping-policy" className="text-gray-400 hover:text-orange-400 transition">
                                Shipping Policy
                            </a>
                        </div>
                    </div>

                    {/* Made in India Badge */}
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500">
                            Proudly <span className="text-orange-400 font-semibold">Made in India</span> 🇮🇳 | Designed in Bharat, Made for the World
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;