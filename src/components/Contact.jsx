'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        village: '',
        farmSize: '',
        productInterest: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    village: '',
                    farmSize: '',
                    productInterest: '',
                    message: ''
                });
            }, 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone Number",
            details: ["+91 98765 43210", "+91 87654 32109"],
            link: "tel:+919876543210",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: ["info@kisanrover.com", "support@kisanrover.com"],
            link: "mailto:info@kisanrover.com",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: MapPin,
            title: "Office Location",
            details: ["Kisan Rover Technologies", "Industrial Area, Rajkot, Gujarat - 360002"],
            link: "https://maps.google.com",
            color: "from-red-500 to-red-600"
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
            link: null,
            color: "from-purple-500 to-purple-600"
        }
    ];

    const socialLinks = [
        { icon: Youtube, label: "YouTube", link: "#", color: "hover:text-red-600" },
        { icon: Facebook, label: "Facebook", link: "#", color: "hover:text-blue-600" },
        { icon: Twitter, label: "Twitter", link: "#", color: "hover:text-sky-500" },
        { icon: Instagram, label: "Instagram", link: "#", color: "hover:text-pink-600" },
        { icon: Linkedin, label: "LinkedIn", link: "#", color: "hover:text-blue-700" }
    ];

    const farmSizes = [
        "Less than 1 acre",
        "1-2 acres",
        "2-5 acres",
        "5-10 acres",
        "More than 10 acres"
    ];

    const products = [
        "Weeding Machine",
        "Seeding Machine",
        "Spraying Machine",
        "Multipurpose Machine",
        "Not sure / Need guidance"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Reach out to us through any of these channels. We're always ready to assist you!
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-2">
                                                    {info.title}
                                                </h3>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-sm text-gray-600">
                                                        {info.link && idx === 0 ? (
                                                            <a href={info.link} className="hover:text-orange-600 transition">
                                                                {detail}
                                                            </a>
                                                        ) : (
                                                            detail
                                                        )}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-orange-50 to-emerald-50 rounded-xl p-6 border border-orange-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            aria-label={social.label}
                                            className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                For urgent inquiries or technical support, call our 24/7 helpline
                            </p>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            {isSubmitted ? (
                                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                                        <CheckCircle className="w-12 h-12 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                        Your message has been successfully sent. Our team will contact you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        {/* Village/Location */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Village/Location *
                                            </label>
                                            <input
                                                type="text"
                                                name="village"
                                                value={formData.village}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                                placeholder="Enter your village or city"
                                            />
                                        </div>

                                        {/* Farm Size */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Farm Size *
                                            </label>
                                            <select
                                                name="farmSize"
                                                value={formData.farmSize}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                                            >
                                                <option value="">Select farm size</option>
                                                {farmSizes.map((size, index) => (
                                                    <option key={index} value={size}>{size}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Product Interest */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Product Interest *
                                            </label>
                                            <select
                                                name="productInterest"
                                                value={formData.productInterest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                                            >
                                                <option value="">Select product</option>
                                                {products.map((product, index) => (
                                                    <option key={index} value={product}>{product}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                                            placeholder="Tell us about your requirements, questions, or any specific needs..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-sm text-gray-500 mt-4">
                                        * Required fields. We respect your privacy and will never share your information.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;