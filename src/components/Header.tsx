import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const nav = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Research', path: '/research' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'Publications', path: '/publications' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];
  const active = (p: string) => pathname === p;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-uh-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* UH mark + name */}
          <Link to="/" className="flex items-center gap-4 min-w-0">
            {/* Preferred: official UH SVG at /assets/uh-mark.svg */}
            <img
              src="/assets/uh-mark.svg"
              alt="University of Houston"
              className="hidden sm:block h-10 w-auto"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            />
            {/* Fallback tile on very small screens or if SVG missing */}
            <div className="sm:hidden flex h-10 w-10 items-center justify-center rounded-md bg-uh-red shadow-md">
              <span className="text-white font-extrabold text-base">UH</span>
            </div>

            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-uh-black truncate">
                Jingyi Luan
              </span>
              <span className="hidden md:block text-sm md:text-base lg:text-lg text-uh-red">
                Mechanical & Aerospace Engineering
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={active(item.path) ? 'page' : undefined}
                className={`relative px-1.5 py-2 text-base xl:text-lg font-medium transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-uh-red/40 rounded
                  ${active(item.path) ? 'text-uh-red' : 'text-uh-black hover:text-uh-red'}`}
              >
                {item.name}
                <span
                  className={`pointer-events-none absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-uh-red transition-transform ${
                    active(item.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-uh-black hover:text-uh-red hover:bg-uh-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-uh-red/40"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-uh-gray-100 py-1">
            <nav className="flex flex-col py-1" role="navigation" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  aria-current={active(item.path) ? 'page' : undefined}
                  className={`px-2 py-3 rounded-md text-lg transition
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-uh-red/40
                    ${active(item.path)
                      ? 'text-uh-red bg-uh-gray-50'
                      : 'text-uh-black hover:text-uh-red hover:bg-uh-gray-50'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
