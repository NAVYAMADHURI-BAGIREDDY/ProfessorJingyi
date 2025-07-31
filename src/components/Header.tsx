import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Research', path: '/research' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'Publications', path: '/projects' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* University of Houston Banner */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-navy font-bold text-xs sm:text-sm font-body">UH</span>
                </div>
                <span className="text-xs sm:text-sm font-medium font-body">University of Houston</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laboratory Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Laboratory Logo and Name */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-blue to-teal rounded-xl flex items-center justify-center shadow-elegant group-hover:shadow-elegant-lg transition-all duration-300">
                <span className="text-white font-bold text-lg sm:text-xl font-display">Lab</span>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy font-display">Research Laboratory</h1>
                <p className="text-xs sm:text-sm text-teal font-medium font-body">Advancing Science Through Innovation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 xl:px-5 py-2.5 rounded-lg text-sm xl:text-base font-medium font-body transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-blue text-white shadow-elegant'
                      : 'text-charcoal hover:text-primary-blue hover:bg-soft-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-charcoal hover:text-primary-blue hover:bg-soft-blue transition-all duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium font-body transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-primary-blue text-white shadow-elegant'
                        : 'text-charcoal hover:text-primary-blue hover:bg-soft-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;