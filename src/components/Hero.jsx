"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const images = [
    "/product/P1.jpg",
    "/product/P2.jpg",
    "/product/P3.jpg",
    "/product/P4.jpg",
    "/product/P5.jpg",
    "/product/P6.jpg",
    "/product/P7.jpg",
    "/product/P8.jpg",
    "/product/P9.jpg",

];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // change every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <Header />
            <div className="relative min-h-screen w-full overflow-hidden">

                {/* Background Images Layer */}
                <div className="absolute inset-0">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`
                            absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
                            ${currentIndex === index ? "opacity-100" : "opacity-0"}
                            hero-zoom
                        `}
                            style={{ backgroundImage: `url(${src})` }}
                        ></div>
                    ))}
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center mt-32 px-4">
                    <h1 className="text-5xl  md:text-6xl font-bold text-white drop-shadow-lg">
                        Welcome to <span className="text-orange-400">Kisan Rover</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl">
                        Next-gen agricultural technology for modern farmers.
                    </p>

                    <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-semibold transition">
                        Explore Products
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
