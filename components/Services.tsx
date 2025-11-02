
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
    <div className={`bg-gray-900/50 border border-gray-800 rounded-xl p-8 shadow-lg hover:border-gray-600 hover:-translate-y-2 transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up fade-in-up-${delay}`}>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 opacity-0 animate-fade-in-up fade-in-up-1">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">How I Can Help</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        From traditional search to the new generative landscape, I provide strategies that deliver visibility and impact.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="SEO Strategy" 
                        description="Comprehensive SEO audits, keyword research, on-page optimization, and technical SEO to build a solid foundation for organic growth." 
                        delay={2}
                    />
                    <ServiceCard 
                        title="GEO Strategy" 
                        description="Optimizing your content for Generative Engine Optimization (GEO) to ensure your brand is visible and accurately represented in AI-powered search results."
                        delay={3}
                    />
                    <ServiceCard 
                        title="Content & Digital Marketing" 
                        description="Crafting compelling content that resonates with your audience and aligns with search intent, backed by a holistic digital marketing approach."
                        delay={4}
                    />
                </div>
            </div>
        </section>
    );
};
