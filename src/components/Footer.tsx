import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-uh-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact (PI) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-4 text-uh-gray-100">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-uh-red flex-shrink-0" />
                <a href="mailto:jluan@uh.edu" className="hover:underline">jluan@uh.edu</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-uh-red flex-shrink-0" />
                <span>713-743-1822</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-uh-red flex-shrink-0 mt-1" />
                <span>
                Room 534A <br />
                SR2 (Science & Research Building) <br />
                23455 Cullen Blvd, Houston, TX 77004<br className="hidden sm:block" />

                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-uh-gray-100">
              <li><a href="/research" className="hover:text-uh-red transition-colors">Research</a></li>
              <li><a href="/publications" className="hover:text-uh-red transition-colors">Publications</a></li>
              <li><a href="/people" className="hover:text-uh-red transition-colors">People</a></li>
              <li><a href="/join-us" className="hover:text-uh-red transition-colors">Join Us</a></li>
              <li><a href="/contact-us" className="hover:text-uh-red transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Department / Mailing */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 sm:mb-6">Mechanical & Aerospace Engineering</h3>
            <div className="flex items-center gap-3 text-uh-gray-100">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-uh-red grid place-items-center">
                {/* Replace with official UH SVG if available */}
                <span className="text-white font-extrabold">UH</span>
              </div>
              <div>
                <span className="block text-sm">Department Phone: 713-743-4500</span>
                <span className="block text-xs opacity-80">Cullen College of Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-uh-gray-100/80">
          <p className="text-sm">
            © {new Date().getFullYear()} Jingyi Luan — University of Houston. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
