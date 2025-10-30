import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import nanosensor from '../images/Research_compressed.png'

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <rect width='100%' height='100%' fill='#F3F4F6'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9CA3AF' font-family='Arial' font-size='20'>
        Image unavailable
      </text>
    </svg>`
  );

const Research: React.FC = () => {
  const pillars = [
    {
      title: 'Non-invasive neurological biomarkers',
      description:
        'Identification of novel, non-invasive biomarkers for neurological disorders harnessing advanced nanomaterial platforms.',
      image:
        'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'In situ nano-sensor for disease monitoring',
      description:
        'Capturing dynamic profiles of macromolecular biomarkers to enhance fundamental understanding of diseases and inform early diagnosis through proactive monitoring.',
      image:nanosensor,
    },
    {
      title: 'Multiplexed single-molecule detection',
      description:
        'Innovation of affordable, multiplexed single-molecule detection technologies for precision medicine.',
      image:
        'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
  ];
  

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Research</h1>
          <p className="mt-3 text-white/90 max-w-3xl mx-auto">
            Materials-enabled biosensing at the intersection of engineering and medicine.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-uh-black">Research Pillars</h2>
            <p className="mt-3 text-uh-gray-700 max-w-3xl mx-auto">
              We design materials-enabled biosensing platforms to push the limits of sensitivity,
              specificity, and accessibility in molecular diagnostics.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK;
                  }}
                />
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-semibold text-uh-black">{p.title}</h3>
                  <p className="mt-3 text-uh-gray-700 text-sm sm:text-base leading-relaxed">
                    {p.description}
                  </p>
                  <Link
                    to="/contact-us"
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
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Interested in collaborating?</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            We welcome partnerships across academia, hospitals, and industry to translate
            materials-driven biosensing into real-world impact.
          </p>
          <Link
            to="/contact-us"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-uh-red font-semibold px-6 py-3 shadow-md hover:shadow-lg transition"
          >
            Contact us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Research;
