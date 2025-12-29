'use client';

import { useState } from 'react';
import { ChevronRight, Award, Users, Target, TrendingUp, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-white">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back</span>
            </button>

            <MissionVisionSection />
            <TeamSection />
            <FounderStorySection />
            <ImpactMetricsSection />
            <AwardsSection />
            <PartnersSection />
        </div>
    );
}

function MissionVisionSection() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Purpose
                    </span>
                </h1>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Mission */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="text-orange-600" size={32} />
                            <h3 className="text-2xl font-bold text-orange-600">Mission</h3>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            To make farming easier, less expensive, and more rewarding for small-scale farmers using affordable robotic solutions.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="text-blue-600" size={32} />
                            <h3 className="text-2xl font-bold text-blue-600">Vision</h3>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Empowering 500 million small farmers globally with sustainable farm automation solutions by 2040.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamSection() {
    const team = [
        {
            name: 'Ramdhan Lodha',
            role: 'Founder & CEO',
            bio: 'PENDING.',
            linkedin: 'https://linkedin.com/in/rajeshkumar'
        },
        {
            name: 'Ratan Kumar',
            role: 'Co-Founder & CTO',
            bio: 'Agricultural Engineer with 7+ years of experience.',
            linkedin: 'https://linkedin.com/in/priyasharma'
        },
        {
            name: 'Lalit Kumar',
            role: 'Lead Designer & Product Manager',
            bio: 'Mechanical Engineer',
            linkedin: 'https://linkedin.com/in/amitpatel'
        },
        {
            name: 'Jigesh Patel',
            role: 'R & D Head(Design Engineer)',
            bio: 'PENDING.',
            linkedin: 'https://linkedin.com/in/sunitareddy'
        },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Meet Our Team
                        </span>
                    </h1>
                    <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                        Dedicated experts driving agricultural innovation
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-orange-600 font-semibold text-sm mt-1">{member.role}</p>
                                </div>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 text-blue-600 hover:text-blue-700 transition-colors"
                                    title="LinkedIn Profile"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FounderStorySection() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const stories = [
        {
            title: 'The Beginning (2019)',
            content: 'I visited a small village in Maharashtra and witnessed farmers spending hours under the scorching sun, manually weeding their fields. The labor was backbreaking and expensive. That\'s when the idea struck: harness Indian sunshine to power affordable farming equipment.'
        },
        {
            title: 'Building the Dream (2020)',
            content: 'I quit my job and moved into a small garage with a vision. After months of research, our first prototype was crude but effective. When farmers saw it work, their skepticism turned into hope.'
        },
        {
            title: 'First Success (2021)',
            content: 'In 2021, we conducted our first major field demonstration near Pune. When farmers saw our machine efficiently weed a half-acre field in under two hours using solar power, their faces lit up. We received our first five orders that day.'
        },
        {
            title: 'Recognition & Growth (2022–2024)',
            content: 'We won the National Innovation Award, were featured in The Hindu and Economic Times. Today, our solar-powered machines help 500+ farmers across 25 villages. Our goal is to reach 10,000 farmers in the next three years.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Founder's Journey
                    </span>
                </h1>

                <div className="space-y-4">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-gray-900 text-left">{story.title}</h3>
                                <ChevronRight
                                    size={24}
                                    className={`text-orange-600 transition-transform flex-shrink-0 ${expandedIndex === index ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>
                            {expandedIndex === index && (
                                <div className="px-6 py-4 bg-orange-50 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">{story.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


function ImpactMetricsSection() {
    const metrics = [
        { number: '500+', label: 'Farmers Empowered', desc: 'Active users across states', icon: Users },
        { number: '25+', label: 'Villages Reached', desc: 'Across 3 states in India', icon: Target },
        { number: '60%', label: 'Cost Reduction', desc: 'In farming labor expenses', icon: TrendingUp },
        { number: '4+ hrs', label: 'Daily Time Saved', desc: 'Per farmer using machines', icon: Award },
        { number: '150+', label: 'Demonstrations', desc: 'Conducted with communities', icon: Users },
        { number: '5+', label: 'Awards Won', desc: 'From national bodies', icon: Award },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Impact
                    </span>
                </h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className="text-orange-600 group-hover:scale-110 transition-transform" size={40} />
                                </div>
                                <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">{metric.number}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{metric.label}</h4>
                                <p className="text-gray-600 text-sm">{metric.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AwardsSection() {
    const awards = [
        {
            title: 'National Innovation Award',
            year: '2022',
            issuer: 'Ministry of Agriculture & Farmers Welfare',
            desc: 'Solar-powered farming innovation.',
        },
        {
            title: 'Maharashtra Innovation Award',
            year: '2022',
            issuer: 'Maharashtra Government',
            desc: 'Sustainable agricultural technology.',
        },
        {
            title: 'Rural Innovation Challenge Winner',
            year: '2023',
            issuer: 'IIT Bombay & NASSCOM',
            desc: 'Selected among 500+ startups.',
        },
        {
            title: 'Green Tech Startup of the Year',
            year: '2023',
            issuer: 'Cleantech India Forum',
            desc: 'Environmental impact recognition.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Awards & Recognition
                    </span>
                </h1>

                <div className="grid sm:grid-cols-2 gap-6">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-orange-500 hover:border-orange-600"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h4 className="text-lg font-bold text-gray-900">{award.title}</h4>
                                <span className="text-orange-600 font-bold whitespace-nowrap text-sm">{award.year}</span>
                            </div>
                            <p className="text-sm font-semibold text-blue-600 mb-2">{award.issuer}</p>
                            <p className="text-gray-600 text-sm">{award.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PartnersSection() {
    const partners = [
        { name: 'IIT Bombay', category: 'Technical', role: 'R&D support' },
        { name: 'NABARD', category: 'Financial', role: 'Farmer funding' },
        { name: 'Maharashtra Innovation Society', category: 'Incubation', role: 'Business support' },
        { name: 'CII', category: 'Industry', role: 'Networking' },
        { name: 'Tata Trust', category: 'Funding', role: 'Grant funding' },
        { name: 'MNRE', category: 'Government', role: 'Policy support' },
        { name: 'NASSCOM', category: 'Tech Community', role: 'Mentorship' },
        { name: 'State Agriculture Dept', category: 'Government', role: 'Farmer outreach' },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Partners
                    </span>
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 group hover:border-orange-300"
                        >
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{partner.name}</h4>
                            <p className="text-orange-600 font-semibold text-xs mb-2">{partner.category}</p>
                            <p className="text-gray-600 text-sm">{partner.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}