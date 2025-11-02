
import React from 'react';
import { useRssFeed } from '../hooks/useRssFeed';
import { BlogPost as BlogPostType } from '../types';

const BlogPostCard: React.FC<{ post: BlogPostType }> = ({ post }) => (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-gray-600 hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <div className="aspect-w-16 aspect-h-9">
            <img className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" src={post.coverImage} alt={post.title} />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{post.pubDate}</p>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.description}</p>
            <div className="flex flex-wrap gap-2">
                {post.categories.slice(0, 3).map(category => (
                    <span key={category} className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full">{category}</span>
                ))}
            </div>
        </div>
    </a>
);

export const Blog: React.FC = () => {
    const { posts, loading, error } = useRssFeed();

    return (
        <section id="blog" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">From the Blog: Crawled</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Exploring the intersection of search, AI, and digital strategy.
                    </p>
                </div>
                {loading && <p className="text-center text-gray-400">Loading feed...</p>}
                {error && <p className="text-center text-red-500">Could not load feed: {error}</p>}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                           <div key={post.link} className={`opacity-0 animate-fade-in-up fade-in-up-${index + 1}`}>
                             <BlogPostCard post={post} />
                           </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
