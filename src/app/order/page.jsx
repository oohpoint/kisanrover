'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, Phone, Mail, Truck, AlertCircle, Check, ArrowLeft, Package, CreditCard, Shield, Star, Zap, Leaf, Sun } from 'lucide-react';

export default function OrderPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        farmSize: '',
    });
    const [cart, setCart] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const products = [
        {
            id: 1,
            name: 'VAMANA',
            price: 1849900,
            image: '/product/P1.jpg',
            description: 'The Ultimate Unmanned Ground Vehicle',
            features: ['Autonomous', '500 Kg Load', '8-10 Hrs Runtime'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.9,
            availability: true,
            badge: 'BESTSELLER'
        },
        {
            id: 2,
            name: 'EBARROW',
            price: 962400,
            image: '/product/P2.jpg',
            description: 'The Electric Wheel Barrow',
            features: ['Electric Powered', 'Heavy Duty', 'Long Battery Life'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.8,
            availability: true,
            badge: 'NEW'
        },
        {
            id: 3,
            name: 'GLX E-LOADER',
            price: 2589900,
            image: '/product/P3.jpg',
            description: 'The Electric Skid-Steer Loader',
            features: ['High Performance', 'Eco-Friendly', 'Durable Build'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.9,
            availability: true,
            badge: 'POPULAR'
        },
        {
            id: 4,
            name: 'TITAN PRO',
            price: 2219900,
            image: '/product/P4.jpg',
            description: 'Advanced Construction Equipment',
            features: ['Heavy Duty', 'All-Terrain', 'Smart Control'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.7,
            availability: true
        },
        {
            id: 5,
            name: 'MEGA HAULER',
            price: 2959900,
            image: '/product/P5.jpg',
            description: 'Heavy Duty Machinery',
            features: ['Maximum Power', 'Rugged Design', 'Long Range'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.8,
            availability: true
        },
        {
            id: 6,
            name: 'COMPACT MASTER',
            price: 1999900,
            image: '/product/P6.jpg',
            description: 'Industrial Equipment',
            features: ['Compact Size', 'High Efficiency', 'Easy Operation'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.6,
            availability: true
        },
        {
            id: 7,
            name: 'BUILD FORCE',
            price: 2369900,
            image: '/product/P7.jpg',
            description: 'Construction Solutions',
            features: ['Versatile', 'Powerful Motor', 'Weather Resistant'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.7,
            availability: true
        },
        {
            id: 8,
            name: 'TECH LOADER',
            price: 2739900,
            image: '/product/P8.jpg',
            description: 'Advanced Technology',
            features: ['Smart Features', 'GPS Enabled', 'Auto-Pilot'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.8,
            availability: true
        },
        {
            id: 9,
            name: 'SMART MOVER',
            price: 2514900,
            image: '/product/P9.jpg',
            description: 'Smart Equipment',
            features: ['AI Powered', 'Remote Control', 'Energy Efficient'],
            specs: '500 Kg Load • 7 Years Battery',
            rating: 4.7,
            availability: true
        },
    ];

    const handleBack = () => {
        window.history.back();
    };

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        // Success feedback
        const button = event.target.closest('button');
        if (button) {
            button.classList.add('scale-95');
            setTimeout(() => button.classList.remove('scale-95'), 200);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity <= 99) {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharge = cart.length > 0 ? 1500 : 0;
    const gstAmount = totalPrice * 0.18;
    const finalTotal = totalPrice + deliveryCharge + gstAmount;

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!formData.pincode.trim()) {
            errors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            errors.pincode = 'Please enter a valid 6-digit pincode';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmitOrder = () => {
        if (!validateForm()) {
            // Scroll to first error
            const firstError = Object.keys(formErrors)[0];
            const element = document.getElementsByName(firstError)[0];
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus();
            }
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setCurrentStep(3);
            setShowSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    const getInputClassName = (fieldName) => {
        const baseClass = "w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1";
        const errorClass = formErrors[fieldName] ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400";
        return `${baseClass} ${errorClass}`;
    };

    return (
        <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-5 py-2.5 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 border border-gray-200"
                aria-label="Go back"
            >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline font-medium">Back</span>
            </button>

            {/* Progress Indicator */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-center gap-4 sm:gap-8">
                        {[
                            { num: 1, label: 'Products', icon: Package },
                            { num: 2, label: 'Delivery', icon: Truck },
                            { num: 3, label: 'Confirmation', icon: Check }
                        ].map((step, idx) => (
                            <div key={step.num} className="flex items-center gap-2 sm:gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${step.num < currentStep
                                                ? 'bg-green-500 text-white scale-100'
                                                : step.num === currentStep
                                                    ? 'bg-orange-600 text-white scale-110 ring-4 ring-orange-200'
                                                    : 'bg-gray-200 text-gray-500'
                                            }`}
                                    >
                                        {step.num < currentStep ? <Check size={24} /> : <step.icon size={20} />}
                                    </div>
                                    <span className={`hidden sm:block text-xs font-semibold transition-colors ${step.num <= currentStep ? 'text-gray-900' : 'text-gray-500'
                                        }`}>
                                        {step.label}
                                    </span>
                                </div>
                                {idx < 2 && (
                                    <div className={`hidden lg:block w-16 xl:w-24 h-1 rounded transition-colors ${step.num < currentStep ? 'bg-green-500' : 'bg-gray-200'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {currentStep === 1 && (
                    <div>
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <Truck size={16} />
                                Electric Construction Equipment
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                                Premium Electric Tractors & Loaders
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Powerful electric machinery for modern construction and farming needs
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Products Grid */}
                            <div className="lg:col-span-2">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {products.map(product => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                                        >
                                            {/* Product Image */}
                                            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden h-64">
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 group-hover:scale-110 transition-transform duration-500"></div>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f97316" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="white"%3E🚜%3C/text%3E%3C/svg%3E';
                                                    }}
                                                />
                                                {product.badge && (
                                                    <div className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ${product.badge === 'BESTSELLER' ? 'bg-orange-600' :
                                                            product.badge === 'NEW' ? 'bg-green-600' :
                                                                product.badge === 'POPULAR' ? 'bg-blue-600' : 'bg-purple-600'
                                                        }`}>
                                                        {product.badge}
                                                    </div>
                                                )}
                                                {product.availability && (
                                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                        In Stock
                                                    </div>
                                                )}
                                            </div>

                                            {/* Product Details */}
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg ml-2">
                                                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                                        <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                                    <Zap size={14} className="text-orange-500" />
                                                    {product.specs}
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-5">
                                                    {product.features.map((feature, idx) => (
                                                        <span key={idx} className="text-xs bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full font-medium border border-orange-200">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                                    <div>
                                                        <p className="text-gray-500 text-xs font-medium mb-1">Price</p>
                                                        <p className="text-2xl font-bold text-orange-600">₹{product.price.toLocaleString()}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => addToCart(product)}
                                                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                                                        aria-label={`Add ${product.name} to cart`}
                                                    >
                                                        <ShoppingCart size={18} />
                                                        <span className="hidden sm:inline">Add</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Shield, text: '7 Year Warranty' },
                                        { icon: Truck, text: 'Free Delivery' },
                                        { icon: Zap, text: 'Electric Power' }
                                    ].map((badge, idx) => (
                                        <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                                            <badge.icon className="mx-auto mb-2 text-orange-600" size={24} />
                                            <p className="text-xs font-semibold text-gray-700">{badge.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32 border border-gray-200">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <ShoppingCart className="text-orange-600" size={24} />
                                        Your Cart
                                        {cart.length > 0 && (
                                            <span className="ml-auto bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                                {cart.length}
                                            </span>
                                        )}
                                    </h2>

                                    {cart.length === 0 ? (
                                        <div className="text-center py-12">
                                            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                                <ShoppingCart size={32} className="text-gray-400" />
                                            </div>
                                            <p className="text-gray-500 font-medium">Your cart is empty</p>
                                            <p className="text-gray-400 text-sm mt-2">Add products to get started</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                                {cart.map(item => (
                                                    <div key={item.id} className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-4 rounded-xl border border-gray-200 transition-all hover:shadow-md">
                                                        <div className="flex justify-between items-start mb-3">
                                                            <div className="flex-1">
                                                                <p className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</p>
                                                                <p className="text-sm text-orange-600 font-bold mt-1">₹{item.price.toLocaleString()}</p>
                                                            </div>
                                                            <button
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="text-red-500 hover:text-red-700 text-sm font-bold hover:bg-red-50 rounded-lg px-2 py-1 transition-all"
                                                                aria-label={`Remove ${item.name}`}
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="bg-white border-2 border-gray-300 hover:border-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-all font-bold text-gray-700"
                                                                aria-label="Decrease quantity"
                                                            >
                                                                −
                                                            </button>
                                                            <input
                                                                type="number"
                                                                value={item.quantity}
                                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                                                className="w-16 text-center border-2 border-gray-300 rounded-lg py-1.5 font-semibold focus:outline-none focus:border-orange-500"
                                                                min="1"
                                                                max="99"
                                                                aria-label="Quantity"
                                                            />
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="bg-white border-2 border-gray-300 hover:border-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-all font-bold text-gray-700"
                                                                aria-label="Increase quantity"
                                                            >
                                                                +
                                                            </button>
                                                            <span className="ml-auto text-sm font-bold text-gray-900">
                                                                ₹{(item.price * item.quantity).toLocaleString()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="border-t-2 border-gray-200 pt-4 space-y-3 mb-6">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-medium">Subtotal</span>
                                                    <span className="font-bold text-gray-900">₹{totalPrice.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-medium">Delivery Charge</span>
                                                    <span className="font-bold text-gray-900">₹{deliveryCharge.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-medium">GST (18%)</span>
                                                    <span className="font-bold text-gray-900">₹{Math.round(gstAmount).toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between text-lg font-bold border-t-2 border-gray-200 pt-3">
                                                    <span className="text-gray-900">Total</span>
                                                    <span className="text-orange-600 text-2xl">₹{Math.round(finalTotal).toLocaleString()}</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setCurrentStep(2)}
                                                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                                            >
                                                Proceed to Checkout
                                                <ArrowLeft className="rotate-180" size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Delivery Information</h1>
                            <p className="text-lg text-gray-600">Complete your order details</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
                                    {/* Personal Information */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="bg-orange-100 p-2 rounded-lg">
                                                <Phone size={20} className="text-orange-600" />
                                            </div>
                                            Personal Information
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name *"
                                                    value={formData.firstName}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('firstName')}
                                                    aria-required="true"
                                                />
                                                {formErrors.firstName && (
                                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle size={12} />
                                                        {formErrors.firstName}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('lastName')}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address *"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('email')}
                                                    aria-required="true"
                                                />
                                                {formErrors.email && (
                                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle size={12} />
                                                        {formErrors.email}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number *"
                                                    value={formData.phone}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('phone')}
                                                    aria-required="true"
                                                />
                                                {formErrors.phone && (
                                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle size={12} />
                                                        {formErrors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address Information */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="bg-orange-100 p-2 rounded-lg">
                                                <MapPin size={20} className="text-orange-600" />
                                            </div>
                                            Delivery Address
                                        </h3>
                                        <div>
                                            <textarea
                                                name="address"
                                                placeholder="Street Address, Locality *"
                                                value={formData.address}
                                                onChange={handleFormChange}
                                                rows="3"
                                                className={`${getInputClassName('address')} mb-4 resize-none`}
                                                aria-required="true"
                                            />
                                            {formErrors.address && (
                                                <p className="text-red-600 text-xs -mt-2 mb-4 flex items-center gap-1">
                                                    <AlertCircle size={12} />
                                                    {formErrors.address}
                                                </p>
                                            )}
                                        </div>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    value={formData.city}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('city')}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    placeholder="State"
                                                    value={formData.state}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('state')}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    placeholder="Pincode *"
                                                    value={formData.pincode}
                                                    onChange={handleFormChange}
                                                    className={getInputClassName('pincode')}
                                                    maxLength="6"
                                                    aria-required="true"
                                                />
                                                {formErrors.pincode && (
                                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle size={12} />
                                                        {formErrors.pincode}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Farm Information */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="bg-orange-100 p-2 rounded-lg">
                                                <Leaf size={20} className="text-orange-600" />
                                            </div>
                                            Farm Details
                                        </h3>
                                        <select
                                            name="farmSize"
                                            value={formData.farmSize}
                                            onChange={handleFormChange}
                                            className={getInputClassName('farmSize')}
                                        >
                                            <option value="">Select Farm Size (Optional)</option>
                                            <option value="small">Small (Less than 1 acre)</option>
                                            <option value="medium">Medium (1-5 acres)</option>
                                            <option value="large">Large (5-10 acres)</option>
                                            <option value="xlarge">Extra Large (More than 10 acres)</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => setCurrentStep(1)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-4 rounded-xl font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <ArrowLeft size={20} />
                                            Back to Products
                                        </button>
                                        <button
                                            onClick={handleSubmitOrder}
                                            disabled={isSubmitting}
                                            className={`flex-1 py-4 rounded-xl font-bold transition-all hover:shadow-xl flex items-center justify-center gap-2 ${isSubmitting
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white hover:scale-105'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Continue to Payment
                                                    <CreditCard size={20} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Package size={24} className="text-orange-600" />
                                        Order Summary
                                    </h3>

                                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-2">
                                        {cart.map(item => (
                                            <div key={item.id} className="flex justify-between text-sm py-2 border-b border-gray-100">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-900">{item.name}</p>
                                                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                </div>
                                                <span className="font-bold text-gray-900 ml-2">₹{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t-2 border-gray-200 pt-4 space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 font-medium">Subtotal</span>
                                            <span className="font-bold">₹{totalPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 font-medium">Delivery</span>
                                            <span className="font-bold">₹{deliveryCharge.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 font-medium">GST (18%)</span>
                                            <span className="font-bold">₹{Math.round(gstAmount).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold border-t-2 border-gray-200 pt-3">
                                            <span className="text-gray-900">Total</span>
                                            <span className="text-orange-600 text-2xl">₹{Math.round(finalTotal).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-4 rounded-xl flex gap-3">
                                        <Truck className="text-blue-600 flex-shrink-0" size={24} />
                                        <div className="text-sm">
                                            <p className="font-bold text-blue-900 mb-1">Free Installation Support</p>
                                            <p className="text-xs text-blue-800">Expert team will assist with complete setup at your farm</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-4 rounded-xl flex gap-3">
                                        <Shield className="text-green-600 flex-shrink-0" size={24} />
                                        <div className="text-sm">
                                            <p className="font-bold text-green-900 mb-1">Secure Transaction</p>
                                            <p className="text-xs text-green-800">Your payment information is encrypted and secure</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="flex items-center justify-center py-8 sm:py-16">
                        <div className={`bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center max-w-lg border border-gray-200 transition-all duration-500 ${showSuccess ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                            }`}>
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-full shadow-lg animate-bounce">
                                    <Check size={56} className="text-white" strokeWidth={3} />
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Order Confirmed!</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Thank you, <span className="font-bold text-orange-600">{formData.firstName || 'valued customer'}</span>!
                                Your order has been successfully placed.
                            </p>

                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl mb-8 border-2 border-orange-200">
                                <p className="text-sm text-gray-600 mb-2 font-medium">Order Amount</p>
                                <p className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">₹{Math.round(finalTotal).toLocaleString()}</p>
                                <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mt-4">
                                    <span className="bg-white px-3 py-1 rounded-full font-semibold">{cart.length} Item(s)</span>
                                    <span className="bg-white px-3 py-1 rounded-full font-semibold">Order #{Math.floor(Math.random() * 100000)}</span>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left space-y-3">
                                <div className="flex items-start gap-3">
                                    <Mail className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-0.5">Email</p>
                                        <p className="text-sm font-semibold text-gray-900">{formData.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-0.5">Phone</p>
                                        <p className="text-sm font-semibold text-gray-900">{formData.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium mb-0.5">Delivery Address</p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {formData.address}
                                            {formData.city && `, ${formData.city}`}
                                            {formData.state && `, ${formData.state}`}
                                            {formData.pincode && ` - ${formData.pincode}`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-5 rounded-xl mb-8 text-sm">
                                <p className="font-bold text-gray-900 mb-3 text-base">What's Next?</p>
                                <ul className="text-left space-y-2.5 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Confirmation email sent to your inbox</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Our team will contact you within 24 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Free installation support at your doorstep</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Delivery in 5-7 business days</span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={handleBack}
                                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <ArrowLeft size={20} />
                                Back to Home
                            </button>

                            <p className="mt-6 text-xs text-gray-500">
                                Need help? Contact us at <a href="mailto:support@electricequipment.com" className="text-orange-600 font-semibold hover:underline">support@electricequipment.com</a>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-6">
                        <div>
                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                <Truck className="text-orange-500" />
                                Electric Equipment Co.
                            </h4>
                            <p className="text-gray-400 text-sm">Leading provider of electric construction and farming equipment</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">Contact</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p className="flex items-center gap-2"><Phone size={14} /> +91 1800-XXX-XXXX</p>
                                <p className="flex items-center gap-2"><Mail size={14} /> support@electricequipment.com</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">Support</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>24/7 Customer Support</p>
                                <p>Free Installation & Training</p>
                                <p>7 Year Warranty Coverage</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
                        <p>© 2024 Electric Equipment Co. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}