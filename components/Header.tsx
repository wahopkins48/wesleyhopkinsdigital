
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
        {children}
    </a>
);

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white text-xl font-bold tracking-wider">
                            WESLEY HOPKINS
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => 
                             <a key={link.href} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
