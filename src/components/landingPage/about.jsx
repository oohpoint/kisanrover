import Link from 'next/link';
import React from 'react'

const about = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">ABOUT OUR STORY</h2>
                    <p className="text-orange-600 text-sm md:text-base">Transforming Indian agriculture through innovation and dedication</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Left - Story Preview */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">From Vision to Reality</h3>
                        <p className="text-gray-600 leading-relaxed">
                            In 2019, I witnessed farmers struggling with manual labor under the scorching sun. This sparked an idea: what if we could harness solar energy to power affordable agricultural equipment? After months of research and prototyping, our first solar-powered weeding machine was born.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we've empowered over 500 farmers across 25 villages, won national awards, and been featured in leading publications. But this is just the beginning of our mission to make sustainable farming accessible to every small farmer in India.
                        </p>
                    </div>

                    {/* Right - Quick Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                            <p className="text-gray-600 font-semibold">Farmers Empowered</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                            <p className="text-gray-600 font-semibold">Villages Reached</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-3xl font-bold text-orange-600 mb-2">2019</div>
                            <p className="text-gray-600 font-semibold">Started Our Journey</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                            <p className="text-gray-600 font-semibold">Awards Won</p>
                        </div>
                    </div>
                </div>


                {/* Awards Preview */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recognition & Awards</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                            <h4 className="font-bold text-gray-900 mb-2">National Innovation Award</h4>
                            <p className="text-sm text-orange-600 font-semibold mb-2">2022 - Ministry of Agriculture</p>
                            <p className="text-sm text-gray-600">Recognized for groundbreaking solar-powered farming innovation</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                            <h4 className="font-bold text-gray-900 mb-2">Featured in The Hindu</h4>
                            <p className="text-sm text-orange-600 font-semibold mb-2">2024 - National Newspaper</p>
                            <p className="text-sm text-gray-600">"Solar Innovation Helps Small Farmers Cut Costs by 60%"</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                            <h4 className="font-bold text-gray-900 mb-2">Green Tech Startup of Year</h4>
                            <p className="text-sm text-orange-600 font-semibold mb-2">2023 - Cleantech India Forum</p>
                            <p className="text-sm text-gray-600">Recognized for environmental impact and sustainable solutions</p>
                        </div>
                    </div>
                </div>

                {/* CTA - See More Button */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-colors inline-block text-lg"
                    >
                        See Our Full Story →
                    </Link>
                    <p className="text-gray-600 mt-4">Explore our complete journey, team details, partnerships, and impact metrics</p>
                </div>
            </div>
        </section>
    );
}

export default about