import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag, Eye, ArrowRight, Search, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAnalytics } from '../hooks/useAnalytics';
import AnimatedSection from './AnimatedSection';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  author_id: string;
  published: boolean;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

const Blog = () => {
  const { trackButtonClick } = useAnalytics();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="loading-skeleton h-8 w-64 mx-auto mb-4 rounded"></div>
            <div className="loading-skeleton h-4 w-96 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                <div className="loading-skeleton h-48 w-full mb-4 rounded"></div>
                <div className="loading-skeleton h-6 w-3/4 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 w-full mb-4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Latest Insights
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Digital Marketing Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, strategies, and insights in digital marketing and technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="bg-white rounded-lg p-6 shadow-md mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">All Categories</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No blog posts found.</div>
            <p className="text-gray-400">Check back soon for valuable insights and industry updates!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimatedSection 
                key={post.id}
                animation="slideUp"
                delay={0.1 * index}
              >
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover-lift">
                  {post.featured_image && (
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span 
                          key={tag}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.published_at || post.created_at)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => trackButtonClick('blog_read_more', { post_title: post.title })}
                      className="flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <AnimatedSection animation="scale" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white hover-lift">
              <h3 className="text-2xl font-bold mb-4">Want to Share Your Expertise?</h3>
              <p className="text-lg mb-6">
                Join our community of digital marketing experts and share your insights.
              </p>
              <button 
                onClick={() => trackButtonClick('blog_contribute')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-animate"
              >
                Contribute to Our Blog
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;