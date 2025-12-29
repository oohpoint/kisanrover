import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const about = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            About Our Story
                        </span>
                    </h1>
                    <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                        Transforming Indian agriculture through innovation and dedication
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Left - Story Preview */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-900">From Vision to Reality</h3>
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


                {/* CTA - See More Button */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition-colors inline-block text-lg"
                    >
                        See Our Full Story
                        <ArrowRight className="inline-block ml-2" />
                    </Link>
                    <p className="text-gray-800 mt-3 text-md">Explore our complete journey, team details, partnerships, and impact metrics</p>
                </div>
            </div>
        </section>
    );
}

export default about