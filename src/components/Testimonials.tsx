import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Boxsam Technologies completely transformed our digital presence. Within 6 months, we saw a 285% increase in organic traffic and our lead generation improved by 340%. Their team's expertise and dedication are unmatched.",
      results: "285% Traffic Increase"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GreenEarth Retail",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "The ROI from our partnership with Boxsam has been incredible. Their email marketing campaigns and social media strategies helped us increase conversions by 180% and overall sales by 165%. Highly recommended!",
      results: "180% Conversion Boost"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Practice Owner",
      company: "HealthFirst Clinic",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "As a healthcare provider, online reputation is crucial. Boxsam's local SEO and reputation management services helped us increase patient appointments by 250% and improve our online reviews by 400%.",
      results: "250% More Appointments"
    },
    {
      name: "David Thompson",
      position: "Owner",
      company: "BuildRight Construction",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Our outdated website was holding us back. Boxsam redesigned our entire digital strategy, resulting in 380% more website traffic and 290% more project inquiries. They're true partners in our growth.",
      results: "380% Website Growth"
    },
    {
      name: "Lisa Park",
      position: "Marketing Manager",
      company: "FitLife Wellness",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Working with Boxsam has been a game-changer for our wellness center. Their comprehensive approach to digital marketing helped us reach more clients and build a strong online community. Exceptional service!",
      results: "300% Lead Generation"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners and marketing professionals say about their experience working with Boxsam Technologies.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
              "Boxsam Technologies didn't just improve our digital marketing – they revolutionized our entire business approach. The results speak for themselves: 340% ROI increase and the best year in our company's history."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Sarah Johnson" 
                className="w-16 h-16 rounded-full mr-4 border-4 border-white/20"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">Sarah Johnson</div>
                <div className="opacity-80">Marketing Director, TechStart Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                <div className="text-sm font-semibold text-green-700">Key Result:</div>
                <div className="text-green-600 font-bold">{testimonial.results}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Join the growing list of successful businesses</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">7+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;