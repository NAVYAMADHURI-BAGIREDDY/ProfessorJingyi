// Research.tsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import noninvasive from '../images/Left.png';
import nanosensor from '../images/Middle.png';
import single from '../images/Right.png';

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

type Pillar = {
  title: string;
  description: string;
  image: string | { src: string; srcSet?: string; alt?: string };
};

const defaultPillars: Pillar[] = [
  {
    title: 'Non-invasive neurological biomarkers',
    description:
      'Identification of novel, non-invasive biomarkers for neurological disorders harnessing advanced nanomaterial platforms.',
    image: noninvasive,
  },
  {
    title: 'In situ nano-sensor for disease monitoring',
    description:
      'Capturing dynamic profiles of macromolecular biomarkers to enhance fundamental understanding of diseases and inform early diagnosis through proactive monitoring.',
    image: nanosensor,
  },
  {
    title: 'Multiplexed single-molecule detection',
    description:
      'Innovation of affordable, multiplexed single-molecule detection technologies for precision medicine.',
    image: single,
  },
];

export const PillarCard: React.FC<Pillar & { layout?: 'grid' | 'stack' }> = ({
  title,
  description,
  image,
  layout = 'grid',
}) => {
  const imgObj =
    typeof image === 'string' ? { src: image, alt: title } : image;

  const [src, setSrc] = useState(imgObj.src || FALLBACK);

  const aspect = layout === 'stack' ? '16/9' : '4/3';

  return (
    <article className="bg-white rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant overflow-hidden flex flex-col">
      <div
        className="bg-gray-100 flex items-center justify-center w-full"
        style={{ aspectRatio: aspect }}
        role="img"
        aria-label={title}
      >
        <img
          src={src}
          srcSet={imgObj.srcSet}
          alt={imgObj.alt || title}
          loading="lazy"
          className="max-w-full max-h-full object-contain"
          onError={() => setSrc(FALLBACK)}
        />
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold text-uh-black">{title}</h3>

        <p className="mt-3 text-uh-gray-700 text-sm sm:text-base leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-5">
          <Link
            to="/contact-us"
            className="inline-flex items-center font-semibold text-uh-red hover:text-uh-red-dark transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export const Research: React.FC<{
  pillars?: Pillar[];
  layout?: 'grid' | 'stack';
  className?: string;
}> = ({ pillars = defaultPillars, layout = 'grid', className = '' }) => {
  return (
    <main className={`bg-white ${className}`}>
      {/* HERO */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Research</h1>
          <p className="mt-3 text-white/90 max-w-3xl mx-auto">
            Materials-enabled biosensing at the intersection of engineering and medicine.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-uh-black">Research Pillars</h2>
            <p className="mt-3 text-uh-gray-700 mx-auto max-w-3xl">
              We design materials-enabled biosensing platforms to push the limits of sensitivity,
              specificity, and accessibility in molecular diagnostics  innovating nanomaterials and
              biotechnologies for biomarker discovery, single-molecule detection, and continuous
              macromolecular monitoring.
            </p>
          </header>

          {layout === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <PillarCard key={i} {...p} layout="grid" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {pillars.map((p, i) => (
                <PillarCard key={i} {...p} layout="stack" />
              ))}
            </div>
          )}
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
