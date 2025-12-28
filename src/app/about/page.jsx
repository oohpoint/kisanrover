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
            <TimelineSection />
            <ImpactMetricsSection />
            <AwardsSection />
            <PartnersSection />
            <CTASection />
        </div>
    );
}

function MissionVisionSection() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Our Purpose
                </h2>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Mission */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="text-orange-600" size={32} />
                            <h3 className="text-2xl font-bold text-orange-600">Mission</h3>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            To empower small farmers with affordable, solar-powered agricultural solutions that reduce labor costs, increase productivity, and promote sustainable farming practices across India.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="text-blue-600" size={32} />
                            <h3 className="text-2xl font-bold text-blue-600">Vision</h3>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            A future where every small farmer has access to sustainable, cost-effective farming technology that improves livelihoods and preserves the environment for generations to come.
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
            name: 'Rajesh Kumar',
            role: 'Founder & Chief Engineer',
            bio: 'Mechanical engineer with 10+ years of experience in agricultural equipment design.',
            linkedin: 'https://linkedin.com/in/rajeshkumar'
        },
        {
            name: 'Priya Sharma',
            role: 'Head of Operations',
            bio: 'MBA graduate with expertise in supply chain management and rural market expansion.',
            linkedin: 'https://linkedin.com/in/priyasharma'
        },
        {
            name: 'Amit Patel',
            role: 'Lead Designer & Product Manager',
            bio: 'Industrial designer with 8+ years in agricultural machinery and 2 patents.',
            linkedin: 'https://linkedin.com/in/amitpatel'
        },
        {
            name: 'Sunita Reddy',
            role: 'Marketing & Farmer Engagement Director',
            bio: 'Digital marketing expert focused on rural markets and farmer communities.',
            linkedin: 'https://linkedin.com/in/sunitareddy'
        },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-600 text-lg">Dedicated experts driving agricultural innovation</p>
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Founder's Journey
                </h2>

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

function TimelineSection() {
    const milestones = [
        { year: '2019', title: 'The Vision Sparked', desc: 'Witnessed farmer struggles; conceived the idea for solar-powered agricultural solutions.' },
        { year: '2020', title: 'First Prototype Built', desc: 'Developed and tested the first solar weeding machine in a garage setup.' },
        { year: '2021', title: 'First Major Demo', desc: 'Conducted field demonstration to 20 farmers; received first 5 customer orders.' },
        { year: '2022', title: 'National Award Won', desc: 'Recognized with the National Innovation Award for Agricultural Technology.' },
        { year: '2023', title: 'Media Recognition', desc: 'Featured in The Hindu, Economic Times, and leading regional publications.' },
        { year: '2024', title: 'Major Expansion', desc: 'Reached 500+ farmers across 25 villages in 3+ states.' },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Timeline & Milestones
                </h2>

                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden sm:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-200"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className="relative flex gap-4 sm:gap-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-600 text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 pt-2 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h4>
                                        <span className="text-orange-600 font-bold text-sm">{item.year}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Our Impact
                </h2>

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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Awards & Recognition
                </h2>

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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Our Partners
                </h2>

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

function CTASection() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Ready to Transform Your Farming?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-10">
                    Join hundreds of farmers already saving time, reducing costs, and farming sustainably.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                    <a
                        href="tel:+919999999999"
                        className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                        📞 Book a Demo
                    </a>
                    <a
                        href="mailto:contact@agritech.com"
                        className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-sm sm:text-base"
                    >
                        ✉️ Dealership
                    </a>
                    <a
                        href="mailto:contact@agritech.com"
                        className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-sm sm:text-base"
                    >
                        💬 Contact
                    </a>
                </div>

                <p className="text-white/80 text-xs sm:text-sm mt-8">
                    Have questions? Reach out anytime. We're here to help.
                </p>
            </div>
        </section>
    );
}