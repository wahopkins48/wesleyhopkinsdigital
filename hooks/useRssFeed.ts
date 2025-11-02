
import { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { rssFeedXml } from '../data/rss';

export const useRssFeed = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(rssFeedXml.trim(), 'application/xml');
            
            const errorNode = xmlDoc.querySelector('parsererror');
            if (errorNode) {
                throw new Error('Error parsing XML');
            }

            const items = xmlDoc.querySelectorAll('item');
            const parsedPosts: BlogPost[] = Array.from(items).map((item) => {
                const title = item.querySelector('title')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                const pubDate = item.querySelector('pubDate')?.textContent || '';
                
                const coverImageElement = item.getElementsByTagNameNS('https://hashnode.com/rss', 'coverImage')[0];
                const coverImage = coverImageElement?.textContent || `https://picsum.photos/seed/${title}/800/400`;
                
                const categories = Array.from(item.querySelectorAll('category')).map(cat => cat.textContent || '');

                return {
                    title,
                    link,
                    description,
                    pubDate: new Date(pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }),
                    coverImage,
                    categories,
                };
            });

            setPosts(parsedPosts);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An unknown error occurred while parsing the feed.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return { posts, loading, error };
};
