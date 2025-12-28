'use client';

import { useState } from 'react';

export default function AboutPage() {
    return (
        <div className="bg-white">
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

// 1. Mission & Vision Section
function MissionVisionSection() {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Purpose</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">Mission</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To empower small farmers with affordable, solar-powered agricultural solutions that reduce labor costs, increase productivity, and promote sustainable farming practices across India.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            A future where every small farmer has access to sustainable, cost-effective farming technology that improves livelihoods and preserves the environment for generations to come.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 2. Team Section
function TeamSection() {
    const team = [
        {
            name: 'Rajesh Kumar',
            role: 'Founder & Chief Engineer',
            bio: 'Mechanical engineer with 10+ years of experience in agricultural equipment design and innovation. Led the development of our core solar integration system.',
            linkedin: 'https://linkedin.com/in/rajeshkumar'
        },
        {
            name: 'Priya Sharma',
            role: 'Head of Operations',
            bio: 'MBA graduate with expertise in supply chain management and rural market expansion. Manages production, farmer outreach, and dealer networks.',
            linkedin: 'https://linkedin.com/in/priyasharma'
        },
        {
            name: 'Amit Patel',
            role: 'Lead Designer & Product Manager',
            bio: 'Industrial designer with 8+ years in agricultural machinery. Holds 2 patents in ergonomic farm equipment and focuses on user-centric design.',
            linkedin: 'https://linkedin.com/in/amitpatel'
        },
        {
            name: 'Sunita Reddy',
            role: 'Marketing & Farmer Engagement Director',
            bio: 'Digital marketing expert focused on rural markets and farmer communities. Drives brand awareness, farmer education, and partnership development.',
            linkedin: 'https://linkedin.com/in/sunitareddy'
        },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-orange-600 font-semibold">{member.role}</p>
                                </div>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700"
                                    title="View LinkedIn Profile"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 3. Founder Story Section
function FounderStorySection() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Founder's Journey</h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        <strong>The Beginning (2019):</strong> It all started when I visited a small village in Maharashtra and witnessed farmers spending hours under the scorching sun, manually weeding their fields. The labor was backbreaking, expensive, and time-consuming. Small farmers couldn't afford mechanized equipment, and diesel-powered machines were both costly and environmentally harmful. Standing there, covered in dust, I realized something had to change. That's when the idea struck: what if we could harness the abundant Indian sunshine to power affordable farming equipment?
                    </p>

                    <p className="text-lg">
                        <strong>Building the Dream (2020):</strong> I quit my job and moved into a small garage with a vision and determination. For months, I researched solar technology, studied agricultural machinery, and sketched countless designs. The first prototype was crude—a solar panel connected to a battery, powering a simple weeding mechanism. But when we tested it in the field with farmers, something magical happened. Their skepticism turned into hope. "This could change everything," one elderly farmer told me, and that moment fueled my determination to never give up.
                    </p>

                    <p className="text-lg">
                        <strong>First Success (2021):</strong> In 2021, we conducted our first major field demonstration in a village near Pune. Twenty farmers showed up—some curious, some doubtful. When they saw our machine efficiently weed a half-acre field in under two hours, powered entirely by the sun, their faces lit up. We received our first five orders that day. More importantly, we realized we weren't just selling a machine; we were offering hope, efficiency, and a sustainable path forward for India's farming communities.
                    </p>

                    <p className="text-lg">
                        <strong>Recognition & Growth (2022–2024):</strong> The success didn't stop. We won the National Innovation Award for Agricultural Technology, were featured in The Hindu, Economic Times, and regional media outlets. Collaborations with IIT Bombay and NABARD helped us refine our products and expand our reach. Today, our solar-powered machines are helping over 500 farmers across 25 villages in multiple states. But this is just the beginning. Our goal is to reach 10,000 farmers in the next three years and make solar-powered farming equipment the standard across India.
                    </p>
                </div>
            </div>
        </section>
    );
}

// 4. Timeline Section
function TimelineSection() {
    const milestones = [
        { year: '2019', milestone: 'The Vision Sparked', description: 'Witnessed farmer struggles; conceived the idea for solar-powered agricultural solutions.' },
        { year: '2020', milestone: 'First Prototype Built', description: 'Developed and tested the first solar weeding machine in a garage garage setup.' },
        { year: '2021', milestone: 'First Major Demo', description: 'Conducted field demonstration to 20 farmers; received first 5 customer orders.' },
        { year: '2022', milestone: 'National Award Won', description: 'Recognized with the National Innovation Award for Agricultural Technology.' },
        { year: '2023', milestone: 'Media Recognition', description: 'Featured in The Hindu, Economic Times, and leading regional publications.' },
        { year: '2024', milestone: 'Major Expansion', description: 'Reached 500+ farmers across 25 villages in 3+ states.' },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Timeline & Milestones</h2>

                <div className="space-y-8">
                    {milestones.map((item, index) => (
                        <div key={index} className="flex gap-6 pb-8 border-l-4 border-orange-400 pl-6">
                            <div className="flex-shrink-0 w-24">
                                <div className="text-3xl font-bold text-orange-600">{item.year}</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.milestone}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. Impact Metrics Section
function ImpactMetricsSection() {
    const metrics = [
        { number: '500+', label: 'Farmers Empowered', description: 'Active users across multiple states' },
        { number: '150+', label: 'Field Demonstrations', description: 'Conducted with rural communities' },
        { number: '25+', label: 'Villages Reached', description: 'Across 3 states in India' },
        { number: '60%', label: 'Average Cost Reduction', description: 'In farming labor expenses' },
        { number: '4+ hrs', label: 'Daily Time Saved', description: 'Per farmer using our machines' },
        { number: '5+', label: 'Awards & Recognition', description: 'From national & state bodies' },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-orange-600 mb-2">{metric.number}</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{metric.label}</h4>
                            <p className="text-gray-600 text-sm">{metric.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 6. Awards & Recognition Section
function AwardsSection() {
    const awards = [
        {
            title: 'National Innovation Award for Agricultural Technology',
            year: '2022',
            issuer: 'Ministry of Agriculture & Farmers Welfare',
            description: 'Recognized for groundbreaking solar-powered farming innovation.'
        },
        {
            title: 'Maharashtra Innovation Award',
            year: '2022',
            issuer: 'Maharashtra Government',
            description: 'Awarded for sustainable agricultural technology development.'
        },
        {
            title: 'Rural Innovation Challenge Winner',
            year: '2023',
            issuer: 'IIT Bombay & NASSCOM',
            description: 'Selected among 500+ startups for rural tech innovation.'
        },
        {
            title: 'Green Tech Startup of the Year',
            year: '2023',
            issuer: 'Cleantech India Forum',
            description: 'Recognized for environmental impact and sustainable solutions.'
        },
        {
            title: 'Featured in The Hindu',
            year: '2024',
            issuer: 'The Hindu (National Newspaper)',
            description: '"Solar Innovation Helps Small Farmers Cut Costs by 60%"'
        },
        {
            title: 'Economic Times Coverage',
            year: '2023',
            issuer: 'Economic Times',
            description: '"Maharashtra Startup Wins National Award for Agri-Tech Innovation"'
        },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Awards & Media Recognition</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-bold text-gray-900 flex-1">{award.title}</h4>
                                <span className="text-orange-600 font-bold ml-4">{award.year}</span>
                            </div>
                            <p className="text-sm font-semibold text-blue-600 mb-2">{award.issuer}</p>
                            <p className="text-gray-600">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 7. Partners & Collaborators Section
function PartnersSection() {
    const partners = [
        { name: 'IIT Bombay', category: 'Technical Partner', role: 'R&D support and product validation' },
        { name: 'NABARD', category: 'Financial Partner', role: 'Farmer funding and loan facilitation' },
        { name: 'Maharashtra Innovation Society', category: 'Incubation Partner', role: 'Business development support' },
        { name: 'Confederation of Indian Industry (CII)', category: 'Industry Partner', role: 'Industry networking and standards' },
        { name: 'Tata Trust', category: 'Funding Partner', role: 'Grant funding for expansion' },
        { name: 'Ministry of New & Renewable Energy (MNRE)', category: 'Government Partner', role: 'Policy support and incentives' },
        { name: 'NASSCOM', category: 'Tech Community Partner', role: 'Innovation challenges and mentorship' },
        { name: 'State Agriculture Department', category: 'Government Partner', role: 'Regulatory support and farmer outreach' },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Partners & Collaborators</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h4>
                            <p className="text-orange-600 font-semibold text-sm mb-2">{partner.category}</p>
                            <p className="text-gray-600 text-sm">{partner.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 8. Call to Action Section
function CTASection() {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Farming?</h2>
                <p className="text-lg text-white/90 mb-10">
                    Join hundreds of farmers who are already saving time, reducing costs, and farming sustainably.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href="tel:+919999999999"
                        className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg inline-block"
                    >
                        📞 Book a Demo
                    </a>
                    <a
                        href="mailto:contact@agritech.com"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
                    >
                        ✉️ Inquire for Dealership
                    </a>
                    <a
                        href="mailto:contact@agritech.com"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
                    >
                        💬 Contact Us
                    </a>
                </div>

                <p className="text-white/80 text-sm mt-8">
                    Have questions? Reach out to us anytime. We're here to help.
                </p>
            </div>
        </section>
    );
}