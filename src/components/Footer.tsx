import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto container-padding py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 sm:mb-6 font-display text-white">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail size={18} className="text-teal flex-shrink-0" />
                <span className="text-base sm:text-lg font-body text-gray-200">lab@uh.edu</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Phone size={18} className="text-teal flex-shrink-0" />
                <span className="text-base sm:text-lg font-body text-gray-200">(713) 743-4000</span>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin size={18} className="text-teal flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg font-body text-gray-200">4800 Calhoun Rd, Houston, TX 77004</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 sm:mb-6 font-display text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/research" className="text-gray-300 hover:text-teal transition-colors text-base sm:text-lg font-body">Research Areas</a></li>
              <li><a href="/publications" className="text-gray-300 hover:text-teal transition-colors text-base sm:text-lg font-body">Publications</a></li>
              <li><a href="/people" className="text-gray-300 hover:text-teal transition-colors text-base sm:text-lg font-body">Faculty</a></li>
              <li><a href="/join-us" className="text-gray-300 hover:text-teal transition-colors text-base sm:text-lg font-body">Opportunities</a></li>
            </ul>
          </div>

          {/* University Information */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 sm:mb-6 font-display text-white">University of Houston</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg font-body leading-relaxed">
              A leading research university dedicated to advancing knowledge and innovation.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-blue to-teal rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-base">UH</span>
              </div>
              <span className="text-sm sm:text-base text-gray-300 font-body">Tier One Research University</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base font-body">&copy; 2025 University of Houston Research Laboratory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;