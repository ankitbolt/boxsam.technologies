import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Eye, Clock } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Solutions",
      industry: "SaaS Technology",
      challenge: "Low organic visibility and poor lead generation",
      solution: "Comprehensive SEO strategy and PPC campaign optimization",
      results: {
        traffic: "+285%",
        leads: "+340%",
        revenue: "+450%",
        timeframe: "6 months"
      },
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SEO", "PPC", "Content Marketing"]
    },
    {
      title: "GreenEarth Retail",
      industry: "E-commerce",
      challenge: "High cart abandonment and low social media engagement",
      solution: "Email marketing automation and social media strategy overhaul",
      results: {
        conversion: "+180%",
        engagement: "+220%",
        sales: "+165%",
        timeframe: "4 months"
      },
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Email Marketing", "Social Media", "E-commerce"]
    },
    {
      title: "HealthFirst Clinic",
      industry: "Healthcare",
      challenge: "Limited online presence and patient acquisition",
      solution: "Local SEO optimization and reputation management",
      results: {
        visibility: "+320%",
        appointments: "+250%",
        reviews: "+400%",
        timeframe: "5 months"
      },
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Local SEO", "Reputation Management", "Healthcare Marketing"]
    },
    {
      title: "BuildRight Construction",
      industry: "Construction",
      challenge: "Outdated website and minimal digital presence",
      solution: "Complete website redesign and digital marketing strategy",
      results: {
        website: "+380%",
        inquiries: "+290%",
        projects: "+145%",
        timeframe: "8 months"
      },
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Web Development", "Digital Strategy", "Lead Generation"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth through strategic digital marketing campaigns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.industry}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Challenge: </span>
                      <span className="text-gray-600">{project.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Solution: </span>
                      <span className="text-gray-600">{project.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.results).slice(0, -1).map(([key, value], resultIndex) => (
                    <div key={resultIndex} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Achieved in {project.results.timeframe}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses that have transformed their digital presence with our proven strategies.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;