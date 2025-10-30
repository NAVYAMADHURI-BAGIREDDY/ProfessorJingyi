import React from 'react';
import { ArrowRight, Users, BookOpen, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { icon: <Users size={22} className="sm:w-7 sm:h-7 text-uh-red" />, value: '5+', label: 'Team Members' },
    { icon: <BookOpen size={22} className="sm:w-7 sm:h-7 text-uh-red" />, value: '25+', label: 'Papers' },
    { icon: <Microscope size={22} className="sm:w-7 sm:h-7 text-uh-red" />, value: '1', label: 'Open Postdoc or PhD' },
  ];

  return (
    <main className="bg-[#fafafa] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 sm:py-32 text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1581091870622-3fdc7d8b1a3c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display font-extrabold tracking-tight leading-tight text-3xl sm:text-5xl lg:text-5xl text-uh-black">
            Welcome to the BioNano Lab at the University of Houston
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-uh-gray-700 max-w-4xl mx-auto leading-relaxed">
            We design and develop innovative nanomaterials and biotechnologies for biomarker discovery,
            detection, and continuous health monitoring.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/research"
              className="bg-uh-red text-white font-semibold px-7 py-4 rounded-xl shadow-md hover:bg-uh-red-dark transition-all inline-flex items-center justify-center"
            >
              Explore our research
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/people"
              className="border-2 border-uh-red text-uh-red font-semibold px-7 py-4 rounded-xl hover:bg-uh-red/10 transition-all inline-flex items-center justify-center"
            >
              Meet the team
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white shadow-md border border-gray-200 px-6 py-6 text-center hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center">
                  {s.icon}
                  <span className="mt-2 text-3xl font-bold text-uh-black">{s.value}</span>
                  <p className="mt-1 text-base text-uh-gray-700">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-uh-red text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Ready to make a difference?
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            We’re hiring a Postdoctoral or PhD Researcher. Join us at the intersection of materials science,
            bioengineering, and diagnostics.
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

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-uh-gray-500 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} BioNano Lab — University of Houston. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Home;
