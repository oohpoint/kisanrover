'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Youtube, Facebook, Twitter, Instagram, Linkedin, ArrowLeft, AlertCircle, X } from 'lucide-react';
import Link from 'next/link';

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
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, type: '', message: '' });
    const [touched, setTouched] = useState({});

    // Form validation
    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    error = 'Name is required';
                } else if (value.trim().length < 3) {
                    error = 'Name must be at least 3 characters';
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'Name should contain only letters';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'phone':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!/^[6-9]\d{9}$/.test(value.replace(/[\s+-]/g, ''))) {
                    error = 'Please enter a valid 10-digit mobile number';
                }
                break;
            case 'village':
                if (!value.trim()) {
                    error = 'Village/Location is required';
                } else if (value.trim().length < 2) {
                    error = 'Please enter a valid location';
                }
                break;
            case 'farmSize':
                if (!value) {
                    error = 'Please select your farm size';
                }
                break;
            case 'productInterest':
                if (!value) {
                    error = 'Please select a product';
                }
                break;
            case 'message':
                if (!value.trim()) {
                    error = 'Message is required';
                } else if (value.trim().length < 10) {
                    error = 'Message must be at least 10 characters';
                }
                break;
            default:
                break;
        }

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
        setTimeout(() => {
            setNotification({ show: false, type: '', message: '' });
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const allTouched = {};
        Object.keys(formData).forEach(key => {
            allTouched[key] = true;
        });
        setTouched(allTouched);

        if (!validateForm()) {
            showNotification('error', 'Please fix all errors before submitting');
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            // API call would go here
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            setIsSubmitting(false);
            setIsSubmitted(true);
            showNotification('success', 'Message sent successfully! We will contact you soon.');

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
                setTouched({});
                setErrors({});
            }, 5000);
        } catch (error) {
            setIsSubmitting(false);
            showNotification('error', 'Failed to send message. Please try again.');
        }
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
            link: "https://maps.google.com/?q=Rajkot+Gujarat+360002",
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
        { icon: Youtube, label: "YouTube", link: "https://youtube.com", color: "hover:text-red-600" },
        { icon: Facebook, label: "Facebook", link: "https://facebook.com", color: "hover:text-blue-600" },
        { icon: Twitter, label: "Twitter", link: "https://twitter.com", color: "hover:text-sky-500" },
        { icon: Instagram, label: "Instagram", link: "https://instagram.com", color: "hover:text-pink-600" },
        { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "hover:text-blue-700" }
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
            {notification.show && (
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 fade-in duration-300">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${notification.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                        }`}>
                        {notification.type === 'success' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                        )}
                        <p className="font-medium">{notification.message}</p>
                        <button
                            onClick={() => setNotification({ show: false, type: '', message: '' })}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <Link
                    href="/"
                    className="inline-flex items-center space-x-2 mb-6 md:mb-8 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 mb-6 md:mb-8">
                                Reach out to us through any of these channels. We're always ready to assist you!
                            </p>
                        </div>

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
                                                            <a
                                                                href={info.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:text-orange-600 transition"
                                                            >
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

                        <div className="bg-gradient-to-br from-orange-50 to-emerald-50 rounded-xl p-6 border border-orange-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842223654!2d70.78068!3d22.3038945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad7b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                For urgent inquiries or technical support, call our 24/7 helpline
                            </p>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition text-sm transform hover:scale-105"
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-6 md:mb-8">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            {isSubmitted ? (
                                <div className="text-center py-12">
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
                                        className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition transform hover:scale-105"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.name && touched.name
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your full name"
                                            />
                                            {errors.name && touched.name && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.phone && touched.phone
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                                placeholder="98765 43210"
                                            />
                                            {errors.phone && touched.phone && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.email && touched.email
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                                placeholder="your@email.com"
                                            />
                                            {errors.email && touched.email && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Village/Location *
                                            </label>
                                            <input
                                                type="text"
                                                name="village"
                                                value={formData.village}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.village && touched.village
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your village or city"
                                            />
                                            {errors.village && touched.village && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.village}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Farm Size *
                                            </label>
                                            <select
                                                name="farmSize"
                                                value={formData.farmSize}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white ${errors.farmSize && touched.farmSize
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select farm size</option>
                                                {farmSizes.map((size, index) => (
                                                    <option key={index} value={size}>{size}</option>
                                                ))}
                                            </select>
                                            {errors.farmSize && touched.farmSize && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.farmSize}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Product Interest *
                                            </label>
                                            <select
                                                name="productInterest"
                                                value={formData.productInterest}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white ${errors.productInterest && touched.productInterest
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select product</option>
                                                {products.map((product, index) => (
                                                    <option key={index} value={product}>{product}</option>
                                                ))}
                                            </select>
                                            {errors.productInterest && touched.productInterest && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.productInterest}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            rows={5}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none ${errors.message && touched.message
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300'
                                                }`}
                                            placeholder="Tell us about your requirements, questions, or any specific needs..."
                                        />
                                        {errors.message && touched.message && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-orange-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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