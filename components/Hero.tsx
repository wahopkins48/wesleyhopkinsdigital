import React from 'react';
import { profileImage } from '../assets/images';

export const Hero: React.FC = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
             <div className="absolute inset-0 bg-black">
                {/* Image background */}
                <div 
                    className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
                    style={{ 
                        backgroundImage: `url(${profileImage})`,
                        backgroundPosition: '80% 30%', // Positioned to the right and vertically centered on the face
                        maskImage: 'radial-gradient(ellipse 50% 70% at 80% 40%, black 10%, transparent 70%)'
                    }}
                ></div>
            </div>
            <div className="relative text-center z-10 max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 opacity-0 animate-fade-in-up fade-in-up-1">
                    Digital Visibility Architect.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-up fade-in-up-2">
                    I'm Wesley Hopkins, an SEO & GEO strategist and the founder of Crawled. I help brands navigate the evolving landscape of digital search, blending creative writing with data-driven strategy to create content that machines understand and humans love.
                </p>
                <div className="mt-8 flex justify-center space-x-4 opacity-0 animate-fade-in-up fade-in-up-3">
                    <a
                        href="#contact"
                        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </section>
    );
};