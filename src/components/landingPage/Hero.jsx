import React from 'react';
import { Search, ArrowRight, Tractor, Cpu } from 'lucide-react';

const FarmHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-teal-50 via-white to-orange-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/30 sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tight text-teal-800">
          Farm<span className="text-orange-600">Easy</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
          <a href="#" className="hover:text-teal-600 transition-colors">Home</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Tractors</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Services</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Sell</a>
          <a href="#" className="hover:text-teal-600 transition-colors">New Arrivals</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="About Us..." 
              className="pl-4 pr-10 py-2 rounded-full border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all w-48"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-orange-200 transition-all flex items-center gap-2">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-12 md:pt-24 pb-12 flex flex-col lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 z-10 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-slate-900">
              Future of Farming <br />
              <span className="text-teal-600">Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Precision machinery for modern agriculture, designed to boost your yield and operational efficiency through autonomous technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl">
              <Tractor className="h-5 w-5" />
              Explore Tractors
            </button>
            <button className="flex items-center justify-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-800 px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1">
              <Cpu className="h-5 w-5" />
              Discover Rovers
            </button>
          </div>

          {/* Trust Badge / Stats */}
          <div className="pt-8 flex items-center gap-6 border-t border-slate-200">
            <div>
              <p className="text-2xl font-bold text-slate-800">15k+</p>
              <p className="text-sm text-slate-500">Farmers Served</p>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">98%</p>
              <p className="text-sm text-slate-500">Efficiency Rate</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
            {/* In a real app, replace this img src with your local path 
               or a high-quality cutout of the machinery.
            */}
            <img 
              src="/api/placeholder/800/600" 
              alt="Advanced Kisan Rover Machinery" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Wave Background Detail (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 opacity-40">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 fill-teal-100">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default FarmHero;