import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useAnalytics } from '../hooks/useAnalytics';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const Hero = () => {
  const { trackButtonClick, trackFormSubmission } = useAnalytics();
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const scrollToContact = () => {
    trackButtonClick('hero_start_now');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Subscribe to newsletter
      const { error: newsletterError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      // Create lead
      const { error: leadError } = await supabase
        .from('leads')
        .insert([{
          name: 'Hero Form Lead',
          email,
          source: 'hero_email_form',
          score: 40
        }]);

      if (newsletterError && newsletterError.code !== '23505') {
        throw newsletterError;
      }

      trackFormSubmission('hero_email_form', { email });
      toast.success('Thanks! We\'ll send you valuable insights and get in touch soon.');
      setEmail('');
    } catch (error) {
      console.error('Hero form error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 pt-32 pb-20 text-white overflow-hidden">
      {/* Simple background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-blue-400 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dream Create Inspire
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text"> with BOXSAM Technologies</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.4}>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turning clicks into clients with data-driven digital marketing strategies and comprehensive technology solutions.
            </p>
          </AnimatedSection>
          
          {/* Email Input */}
          <AnimatedSection animation="scale" delay={0.6}>
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleEmailSubmit} className="flex bg-white rounded-lg p-2 hover-lift">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter business email or URL"
                  className="flex-1 px-4 py-3 text-gray-900 bg-transparent focus:outline-none focus-visible disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-label="Enter your business email or website URL"
                />
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors btn-animate disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Submit email for consultation"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button 
                onClick={scrollToContact}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center btn-animate hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Now
              </motion.button>
              <motion.button 
                onClick={() => trackButtonClick('hero_learn_more')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center btn-animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fadeIn" delay={1.0}>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-2">7+</div>
                <div className="text-purple-200 text-sm">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-2">Delhi NCR</div>
                <div className="text-purple-200 text-sm">Market Focus</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-2">SMEs</div>
                <div className="text-purple-200 text-sm">Target Market</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;