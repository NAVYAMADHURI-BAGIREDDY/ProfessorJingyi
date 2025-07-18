import React from 'react';
import { ArrowRight, Award, Users, BookOpen, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { icon: <Users size={24} className="sm:w-8 sm:h-8" />, value: '25+', label: 'Researchers' },
    { icon: <BookOpen size={24} className="sm:w-8 sm:h-8" />, value: '150+', label: 'Publications' },
    { icon: <Award size={24} className="sm:w-8 sm:h-8" />, value: '$5M+', label: 'Research Funding' },
    { icon: <Microscope size={24} className="sm:w-8 sm:h-8" />, value: '8', label: 'Research Areas' },
  ];

  const highlights = [
    {
      title: 'Breakthrough Research',
      description: 'Leading innovations in biomedical engineering and advanced materials science.',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'World-Class Faculty',
      description: 'Renowned experts driving cutting-edge research and mentoring the next generation.',
      image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Advanced laboratories equipped with the latest technology and instrumentation.',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-blue to-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto container-padding section-padding">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-display font-bold mb-6 sm:mb-8 text-white leading-tight">
              Advancing Science Through Innovation
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-blue-100 font-body leading-relaxed max-w-4xl mx-auto">
              Pioneering research in biomedical engineering, materials science, and advanced technologies
              at the University of Houston
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/research"
                className="bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center font-body text-base shadow-elegant hover:shadow-elegant-lg hover:-translate-y-0.5"
              >
                Explore Our Research
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/join-us"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all duration-300 inline-flex items-center justify-center font-body text-base hover:-translate-y-0.5"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Highlights Section */}
      <section className="section-padding bg-soft-blue">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-navy mb-4 sm:mb-6">Research Excellence</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-gray max-w-4xl mx-auto font-body leading-relaxed">
              Discover how our laboratory is pushing the boundaries of scientific knowledge
              and making a meaningful impact on society.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-elegant overflow-hidden card-hover">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4 font-display">
                    {highlight.title}
                  </h3>
                  <p className="text-base sm:text-lg text-warm-gray mb-4 sm:mb-6 font-body leading-relaxed">
                    {highlight.description}
                  </p>
                  <Link
                    to="/research"
                    className="text-primary-blue font-semibold hover:text-teal inline-flex items-center font-body text-base group"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green to-teal text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="font-display font-bold mb-4 sm:mb-6 text-white">Ready to Make a Difference?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-green-100 font-body leading-relaxed max-w-3xl mx-auto">
            Join our team of researchers and contribute to groundbreaking discoveries.
          </p>
          <Link
            to="/join-us"
            className="bg-white text-green px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center font-body text-base shadow-elegant hover:shadow-elegant-lg hover:-translate-y-0.5"
          >
            View Opportunities
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;