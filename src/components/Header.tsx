import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useAnalytics } from '../hooks/useAnalytics';
import AuthModal from './Auth/AuthModal';

const Header = () => {
  const { user, signOut } = useAuth();
  const { trackButtonClick } = useAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackButtonClick('nav_link', { section: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    trackButtonClick(`auth_${mode}_click`);
  };

  const handleSignOut = async () => {
    await signOut();
    trackButtonClick('sign_out');
  };

  return (
    <>
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-9616683869</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@boxsam.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Business Hours: Mon-Fri 9AM-6PM IST</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-purple-600 text-white p-3 rounded-lg">
              <span className="font-bold text-2xl">B</span>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">BOXSAM</h1>
              <p className="text-sm text-purple-600 font-medium">Technologies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{user.email}</span>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleAuthClick('login')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Testimonials</button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Blog</button>
              
              {user ? (
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">Signed in as: {user.email}</div>
                  <button 
                    onClick={handleSignOut}
                    className="text-red-600 hover:text-red-700 transition-colors text-left flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => handleAuthClick('login')}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => handleAuthClick('signup')}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    Sign Up
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="bg-purple-600 text-white px-6 py-3 rounded-lg w-fit hover:bg-purple-700 transition-colors">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
    
    <AuthModal 
      isOpen={isAuthModalOpen}
      onClose={() => setIsAuthModalOpen(false)}
      initialMode={authMode}
    />
    </>
  );
};

export default Header;