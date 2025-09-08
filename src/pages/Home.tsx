import React from 'react';
import { ArrowRight, Award, Users, BookOpen, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { icon: <Users size={22} className="sm:w-7 sm:h-7" />, value: '6+', label: 'Team Members' },
    { icon: <BookOpen size={22} className="sm:w-7 sm:h-7" />, value: '25+', label: 'Papers & Preprints' },
    { icon: <Award size={22} className="sm:w-7 sm:h-7" />, value: '3', label: 'Research Pillars' },
    { icon: <Microscope size={22} className="sm:w-7 sm:h-7" />, value: '1', label: 'Open Postdoc' },
  ];

  const highlights = [
    {
      title: 'Non-invasive neurological biomarkers',
      description:
        'Identification of biomarkers using advanced nano/biomaterial detection platforms (plasmonic & fluorescence amplification, micro/nano-fabrication).',
      image:
        'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      to: '/research',
    },
    {
      title: 'Wearable & implantable biosensors',
      description:
        'Skin-interfaced and implantable devices for continuous health monitoring (microneedles, flexible electronics, biocompatible interfaces).',
      image:
        'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800',
      to: '/research',
    },
    {
      title: 'Multiplexed single-molecule detection',
      description:
        'Affordable, ultra-sensitive assays to democratize precision medicine with multiplexed readouts and point-of-care formats.',
      image:
        'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      to: '/research',
    },
  ];

  return (
    <main className="bg-uh-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-uh-red to-uh-red-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h1 className="font-display font-extrabold tracking-tight leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Advancing next-generation molecular diagnostics
          </h1>
          <p className="mt-5 text-uh-gray-100/90 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
            Pioneering research in biomedical engineering, materials science, and advanced biotechnologies at the University of Houston.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/research"
              className="bg-white text-uh-red font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center"
            >
              Explore our research
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/people"
              className="border-2 border-white text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              Meet the team
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-4 py-5 text-left"
                aria-label={`${s.value} ${s.label}`}
              >
                <div className="flex items-center gap-3 text-white/90">
                  {s.icon}
                  <span className="text-2xl sm:text-3xl font-bold">{s.value}</span>
                </div>
                <p className="mt-1 text-white/80 text-sm sm:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-uh-black">
              Research Pillars
            </h2>
            <p className="mt-3 text-base sm:text-lg text-uh-gray-700 max-w-3xl mx-auto">
              We design materials-enabled biosensing platforms to push the limits of sensitivity, specificity, and accessibility in molecular diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h, idx) => (
              <article key={idx} className="bg-white rounded-2xl shadow-elegant overflow-hidden ring-1 ring-uh-gray-200">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-semibold text-uh-black font-display">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-uh-gray-700 text-sm sm:text-base leading-relaxed">
                    {h.description}
                  </p>
                  <Link
                    to={h.to}
                    className="mt-5 inline-flex items-center font-semibold text-uh-red hover:text-uh-red-dark transition-colors"
                  >
                    Learn more
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-uh-red to-uh-red-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Ready to make a difference?
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            We’re hiring a Postdoctoral Researcher. Join us at the intersection of materials science, bioengineering, and diagnostics.
          </p>
          <div className="mt-8">
            <Link
              to="/join-us"
              className="bg-white text-uh-red font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center"
            >
              View opportunities
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
