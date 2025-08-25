import React from 'react';
import { Trophy, Users, Zap, Shield, Target, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Over 7 years of delivering exceptional results with a 98% client satisfaction rate and 500+ successful projects completed.",
      stats: "98% Success Rate"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals stay ahead of industry trends and bring specialized expertise in every aspect of digital marketing.",
      stats: "50+ Specialists"
    },
    {
      icon: Zap,
      title: "Data-Driven Approach",
      description: "Every strategy is backed by comprehensive analytics and market research to ensure maximum ROI and measurable results.",
      stats: "340% Avg ROI Increase"
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description: "Real-time dashboards and detailed monthly reports keep you informed about campaign performance and business impact.",
      stats: "100% Transparency"
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "No cookie-cutter approaches. Every strategy is tailored to your unique business goals, industry, and target audience.",
      stats: "Fully Customized"
    },
    {
      icon: Clock,
      title: "Dedicated Support",
      description: "24/7 customer support and dedicated account managers ensure you always have the help you need when you need it.",
      stats: "24/7 Support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Why Choose Boxsam Technologies
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Smart Choice for Digital Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you partner with us, you're not just hiring a service provider – you're gaining a strategic ally committed to your long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="absolute top-4 right-4 text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {reason.stats}
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Success by the Numbers</h3>
            <p className="text-xl opacity-90">Real results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-80">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;