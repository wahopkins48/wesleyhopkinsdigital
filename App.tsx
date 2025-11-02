
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-black text-gray-300 font-sans leading-relaxed">
            <Header />
            <main className="overflow-x-hidden">
                <Hero />
                <Services />
                <Blog />
                <Newsletter />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
