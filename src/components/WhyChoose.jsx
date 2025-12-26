import React from 'react';
import { DollarSign, Settings, Zap, Globe } from 'lucide-react';

const features = [
    {
        icon: DollarSign,
        title: 'LOWEST OPERATIONAL COST',
        description: 'Electric Tractors save up to 80% on diesel expenses',
    },
    {
        icon: Settings,
        title: 'NEXT-GEN TECHNOLOGY',
        description: 'Autonomous and drive-by-wire system smart, data driven and connected',
    },
    {
        icon: Zap,
        title: 'AUTOMATION',
        description: 'Automating repetitive skilled tasks to enhance productivity',
    },
    {
        icon: Globe,
        title: 'SAVE ENVIRONMENT',
        description: 'Reduces upto 10 tons of CO2 annually per machine',
    },
];

export default function WhyChoose() {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-9">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        WHY CHOOSE KISAN ROVER
                    </h2>
                    <p className="text-orange-600 text-sm md:text-base">
                        Designed in Bharath, Made for the World
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <feature.icon className="w-10 h-10 text-orange-700" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}