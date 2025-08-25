import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '1000+' },
    { icon: Clock, label: 'Years Experience', value: '7+' },
    { icon: Target, label: 'Success Rate', value: '98%' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About BOXSAM Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2017, BOXSAM Technologies has been at the forefront of digital transformation 
            in Delhi NCR, helping businesses turn clicks into clients through data-driven strategies.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="slideLeft">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 7 years of experience in the digital marketing landscape, BOXSAM Technologies 
                has established itself as a trusted partner for SMEs and growing businesses across Delhi NCR. 
                Our journey began with a simple mission: to help businesses thrive in the digital age.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Led by CEO Shubham Verma and our dedicated team, we've built lasting relationships with 
                clients by delivering measurable results and sustainable growth through innovative digital solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Data-driven approach to digital marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Local expertise in Delhi NCR market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">End-to-end digital solutions</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Shubham Verma</h5>
                    <p className="text-gray-600">Chief Executive Officer & Founder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Ashish Lal</h5>
                    <p className="text-gray-600">Chief Operational Officer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Priya Srivastava</h5>
                    <p className="text-gray-600">Digital Marketing Manager</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Vinayak Shukla</h5>
                    <p className="text-gray-600">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeIn" delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;