'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            category: "Product & Features",
            faqs: [
                {
                    question: "What makes Kisan Rover machines different from traditional farming equipment?",
                    answer: "Kisan Rover machines are solar-powered, multipurpose equipment designed specifically for small and marginal farmers. They combine weeding, seeding, and spraying functions in one machine, run on free solar energy with battery backup, and save up to 80% on operational costs compared to diesel-powered alternatives."
                },
                {
                    question: "Can the machine work on cloudy days or during the monsoon season?",
                    answer: "Yes! Our machines come with high-capacity battery backup that stores solar energy. Even on cloudy days or during monsoons, the battery ensures uninterrupted operation for 4-6 hours of continuous work. The solar panels continue to charge whenever sunlight is available."
                },
                {
                    question: "What crops and farm sizes are suitable for Kisan Rover machines?",
                    answer: "Our machines are ideal for small to medium farms (1-10 acres) and work excellently with row crops like cotton, soybean, groundnut, vegetables, wheat, and pulses. The adjustable working width (30-45 cm) makes them suitable for various crop spacing requirements."
                },
                {
                    question: "How long do the machines last and what is the warranty period?",
                    answer: "Kisan Rover machines are built with high-quality components for durability. The average lifespan is 10-12 years with proper maintenance. We provide a 2-year comprehensive warranty covering manufacturing defects, and extended warranty options are available."
                }
            ]
        },
        {
            category: "Purchase & Pricing",
            faqs: [
                {
                    question: "What is the price range of Kisan Rover machines?",
                    answer: "Our machines range from ₹45,000 to ₹1,25,000 depending on the model and features. We offer flexible payment options including easy EMI plans, and many farmers are eligible for government subsidies of 40-50% under various agricultural schemes."
                },
                {
                    question: "Are there any government subsidies or financial assistance available?",
                    answer: "Yes! Most states offer subsidies ranging from 40-50% under schemes like Sub-Mission on Agricultural Mechanization (SMAM), Rashtriya Krishi Vikas Yojana (RKVY), and state-specific programs. We assist farmers with complete documentation and subsidy application processes."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major payment methods including UPI, bank transfer, credit/debit cards, and cash. EMI options are available through leading banks and NBFCs with flexible tenure from 6 to 24 months at attractive interest rates."
                },
                {
                    question: "How long does delivery take after placing an order?",
                    answer: "Standard delivery takes 7-15 days depending on your location. For remote areas, it may take up to 20 days. Express delivery options are available for urgent requirements. We provide free installation and training with every purchase."
                }
            ]
        },
        {
            category: "Operation & Maintenance",
            faqs: [
                {
                    question: "Is it difficult to operate? Do I need special training?",
                    answer: "Not at all! Kisan Rover machines are designed for ease of use. Our technicians provide hands-on training at your farm for 2-3 hours, covering all operations and basic maintenance. Simple controls and clear instructions make it suitable for all age groups."
                },
                {
                    question: "What kind of maintenance is required?",
                    answer: "Minimal maintenance is needed - just basic cleaning after use, checking battery water levels monthly, and annual servicing. We provide a detailed maintenance guide, and our service team is available for support. Spare parts are readily available at affordable prices."
                },
                {
                    question: "How much time does the machine save compared to manual labor?",
                    answer: "A Kisan Rover machine can complete work that would take 8-10 laborers an entire day in just 2-3 hours. This saves approximately 4-6 hours daily during peak farming seasons and reduces dependency on manual labor availability."
                },
                {
                    question: "What should I do if the machine needs repair?",
                    answer: "Contact our 24/7 helpline or your nearest dealer. We have a network of 150+ service centers across India. For minor issues, our team provides phone/video guidance. Major repairs are handled within 48-72 hours with genuine spare parts and warranty coverage."
                }
            ]
        },
        {
            category: "Technical Specifications",
            faqs: [
                {
                    question: "What are the power specifications of the solar panels?",
                    answer: "Our machines use 100W to 300W high-efficiency monocrystalline solar panels (depending on the model) with 20% efficiency. The system includes a 12V/24V battery (50-100Ah capacity) and an MPPT charge controller for optimal power management."
                },
                {
                    question: "Can I add more attachments or upgrade the machine later?",
                    answer: "Yes! Kisan Rover machines are modular and expandable. You can add various attachments like different spray nozzles, seeding units, or weeding blades. Upgrade kits are available to enhance functionality as your farming needs evolve."
                },
                {
                    question: "What is the working speed and coverage area per day?",
                    answer: "The machine operates at 2-4 km/hour speed and can cover 1-1.5 acres per hour depending on the operation (weeding/seeding/spraying). In an 8-hour day, you can cover 8-12 acres, significantly improving farm productivity."
                }
            ]
        }
    ];

    const toggleFAQ = (categoryIndex, faqIndex) => {
        const index = `${categoryIndex}-${faqIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <HelpCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-green-600">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about Kisan Rover solar farming machines
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8 md:space-y-12">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                            {/* Category Title */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    {category.category}
                                </h3>
                            </div>

                            {/* FAQ Items */}
                            <div className="space-y-3">
                                {category.faqs.map((faq, faqIndex) => {
                                    const index = `${categoryIndex}-${faqIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div
                                            key={faqIndex}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                                        >
                                            {/* Question */}
                                            <button
                                                onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                                                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-base md:text-lg font-semibold text-gray-900 flex-1">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            {/* Answer */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                                                    }`}
                                            >
                                                <div className="px-6 pb-5 pt-2">
                                                    <div className="h-px bg-gradient-to-r from-green-200 via-green-100 to-transparent mb-4"></div>
                                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-green-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        Our team is here to help you make the right choice for your farm. Reach out to us anytime!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-50 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call: +91 98765 43210</span>
                        </a>
                        <a
                            href="mailto:info@kisanrover.com"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-green-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <span>Visit Contact Page</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;