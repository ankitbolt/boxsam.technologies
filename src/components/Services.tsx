import React from 'react';
import { motion } from 'framer-motion';
import { Search, MousePointer, Share2, FileText, Mail, Code, BarChart3, Megaphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useAnalytics } from '../hooks/useAnalytics';

const Services = () => {
  const { trackServiceInterest, trackButtonClick } = useAnalytics();

  const services = [
    {
      icon: Search,
      title: "SEO & Local Ranking",
      description: "Boost your organic visibility with comprehensive SEO strategies tailored for Delhi NCR businesses. We optimize for local search and national reach.",
      features: ["Local SEO", "Keyword Research", "Technical SEO", "Google My Business"]
    },
    {
      icon: MousePointer,
      title: "PPC Management",
      description: "Drive immediate traffic and conversions with targeted PPC campaigns designed for maximum ROI and sustainable growth.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage your audience with data-driven social media strategies that convert followers into customers.",
      features: ["Content Strategy", "Community Engagement", "Instagram Marketing", "Social Analytics"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Create compelling content that attracts and retains your target audience while establishing your brand as an industry authority.",
      features: ["Blog Content", "Video Marketing", "Content Strategy", "Brand Storytelling"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and conversions.",
      features: ["Email Automation", "List Management", "Campaign Design", "Performance Analytics"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive, fast-loading websites that convert visitors into customers and represent your brand professionally.",
      features: ["Responsive Design", "E-commerce Solutions", "Mobile Apps", "Database Solutions"]
    },
    {
      icon: BarChart3,
      title: "Lead Generation",
      description: "Generate high-quality leads through strategic digital campaigns designed to attract and convert your ideal customers.",
      features: ["Lead Funnels", "Conversion Optimization", "Database Solutions", "Performance Tracking"]
    },
    {
      icon: Megaphone,
      title: "Digital Strategy Consulting",
      description: "Develop comprehensive digital marketing strategies tailored to Delhi NCR market dynamics and your specific business goals.",
      features: ["Market Analysis", "Competitor Research", "Growth Strategy", "ROI Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO and PPC to social media and web development, we offer a full suite of digital marketing services designed to accelerate your business growth.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="slideUp"
              delay={0.1 * index}
            >
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover-lift h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-purple-600" />
                </div>
              
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
              
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
              
                <div className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              
                <div className="pt-4 border-t border-gray-100">
                  <motion.button 
                    onClick={() => {
                      trackServiceInterest(service.title);
                      trackButtonClick('service_learn_more', { service: service.title });
                    }}
                    className="text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <MousePointer className="w-3 h-3 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scale" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-purple-600 rounded-xl p-8 text-white hover-lift">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
              <p className="text-lg mb-6">
                Let's discuss which services are perfect for your business goals.
              </p>
              <motion.button 
                onClick={() => trackButtonClick('get_custom_strategy')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Strategy
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;