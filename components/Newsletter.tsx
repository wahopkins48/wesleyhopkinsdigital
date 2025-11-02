
import React from 'react';

export const Newsletter: React.FC = () => {
    return (
        <section id="newsletter" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16 border border-gray-800">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Stay Ahead of the Curve
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Join my newsletter for exclusive insights on SEO, GEO, and the future of search. It's the best $1 you'll spend all month.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a 
                            href="#" 
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105"
                        >
                            Subscribe for $1/month
                        </a>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#7775D6" />
                                <stop offset="1" stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};
