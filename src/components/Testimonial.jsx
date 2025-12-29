"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonials = [
    {
        text: "This tractor has completely transformed my farming operations. The fuel efficiency is outstanding and it handles my 15-acre farm with ease.",
        imageSrc: "https://img.freepik.com/free-photo/portrait-smiling-indian-person-posing-front-camera_482257-122324.jpg",
        name: "Rajesh Kumar",
        username: "@rajeshfarmer",
    },
    {
        text: "Best investment I've made for my farm. The power and reliability of this tractor have increased my productivity significantly.",
        imageSrc: "https://img.freepik.com/free-photo/smiley-man-posing-medium-shot_23-2149915893.jpg",
        name: "Amit Patel",
        username: "@amitpatel_agri",
    },
    {
        text: "As a modern farmer, I needed equipment I could rely on. This tractor's advanced features and durability exceeded all my expectations.",
        imageSrc: "https://img.freepik.com/premium-photo/confident-rich-eastern-indian-businessman-standing-modern-big-city_116547-72532.jpg",
        name: "Vikram Singh",
        username: "@vikramsingh_farms",
    },
    {
        text: "The ease of operation and low maintenance costs make this tractor perfect for small to medium-sized farms like mine.",
        imageSrc: "https://img.freepik.com/free-photo/female-model-photo-session-casting_114579-13335.jpg",
        name: "Priya Sharma",
        username: "@priyasharma_agro",
    },
    {
        text: "Managing my sugarcane fields has never been easier. This tractor handles heavy loads effortlessly and the after-sales service is exceptional.",
        imageSrc: "https://img.freepik.com/free-photo/close-up-excited-person-portrait_23-2151186643.jpg",
        name: "Suresh Reddy",
        username: "@sureshreddy_farmer",
    },
    {
        text: "The technology integration and comfort features make long working hours much more manageable. Highly recommend for progressive farmers.",
        imageSrc: "https://img.freepik.com/free-photo/front-view-smiley-man-with-headphones_23-2149915902.jpg",
        name: "Arjun Mehta",
        username: "@arjunmehta_agri",
    },
    {
        text: "Switching to this tractor improved my farm's efficiency by 40%. The versatility with different attachments is a game-changer.",
        imageSrc: "https://img.freepik.com/premium-photo/thinking-lawyer-woman-with-smile-confidence-pride-career-ambition-success-person-outdoor-attorney-with-happiness-legal-aid-female-empowerment-with-court-law-firm_590464-533406.jpg",
        name: "Kavita Desai",
        username: "@kavita_modernfarms",
    },
    {
        text: "Perfect for cotton farming. The precision and power delivery help me complete tasks faster while consuming less fuel than my old tractor.",
        imageSrc: "https://img.freepik.com/free-photo/portrait-confident-brunette-woman-looking-happy-self-assured-cross-arms-chest-smile-front-standing-against-white-wall_176420-43772.jpg",
        name: "Deepak Yadav",
        username: "@deepak_cottonfarms",
    },
    {
        text: "As a young farmer taking over our family farm, this modern tractor with smart features has helped me bring efficiency to traditional farming.",
        imageSrc: "https://img.freepik.com/free-photo/young-beautiful-woman-casual-clothes-happy-excited-smiling-broadly-standing-white-wall_141793-128733.jpg",
        name: "Neha Joshi",
        username: "@neha_smartfarming",
    },
];

const TestimonialsColumn = ({ className = "", testimonials, duration = 10 }) => {
    return (
        <div className={className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6"
            >
                {[...new Array(2)].fill(0).map((_, arrayIndex) => (
                    <React.Fragment key={arrayIndex}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                className="bg-white rounded-xl  shadow-lg p-6 sm:p-8 border border-orange-100 hover:shadow-xl transition-shadow duration-300"
                                key={`${arrayIndex}-${index}`}
                            >
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-3 mt-5">
                                    <Image
                                        src={testimonial.imageSrc}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-medium text-gray-900 tracking-tight leading-5 text-sm sm:text-base">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-500 leading-5 tracking-tight text-xs sm:text-sm">
                                            {testimonial.username}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export const Testimonials = () => {
    const firstCol = testimonials.slice(0, 3);
    const secondCol = testimonials.slice(3, 6);
    const thirdCol = testimonials.slice(6, 9);

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Testimonials
                        </span>
                    </h1>
                    <p className="text-gray-800 text-md md:text-lg max-w-2xl mx-auto leading-tight">
                        What Our Clients Say About Us
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="flex justify-center gap-4 sm:gap-6 max-h-[400px] sm:max-h-[600px] lg:max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
                    <TestimonialsColumn
                        testimonials={firstCol}
                        duration={15}
                        className="w-full sm:w-1/2 lg:w-1/3"
                    />
                    <TestimonialsColumn
                        testimonials={secondCol}
                        duration={19}
                        className="hidden sm:block w-1/2 lg:w-1/3"
                    />
                    <TestimonialsColumn
                        testimonials={thirdCol}
                        duration={17}
                        className="hidden lg:block w-1/3"
                    />
                </div>
            </div>

        </section>
    );
};