
import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { GlobeIcon } from './icons/GlobeIcon';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Wesley Hopkins. All rights reserved.</p>
                        <p className="text-xs text-gray-500 mt-1">Built with React & Tailwind CSS</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <span className="sr-only">Twitter</span>
                            <TwitterIcon className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInIcon className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <span className="sr-only">Crawled Blog</span>
                            <GlobeIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
