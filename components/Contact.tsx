
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            // Reset form after a few seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Let's Build Something Together</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to talk about the future of search? Drop me a line.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    {status === 'success' ? (
                        <div className="text-center bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg" role="alert">
                            <strong className="font-bold">Message Sent! </strong>
                            <span className="block sm:inline">Thanks for reaching out. I'll get back to you soon.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    placeholder="Your Name" 
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-shadow" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    placeholder="Your Email" 
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-shadow" 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows={5} 
                                    required 
                                    placeholder="Your Message" 
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-shadow"
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="w-full bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
