import React from 'react';
import { FileText } from 'lucide-react';

type Pub = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  note?: string;
  link?: string;
  pdf?: string;
  thumbnail?: string;
};

const scholar = (q: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(q)}`;

const Publications: React.FC = () => {
  // ---------- SECTION 1: Publications at UH ----------
  const publicationsAtUH: Pub[] = [
    {
      title:
        'Toward Real-Time Monitoring of Macromolecular Biomarkers: A Materials Roadmap for Continuous Biosensing',
      authors: 'Jada R, Luan J.',
      journal: 'ACS Applied Materials & Interfaces',
      year: 2025,
      note: 'Under Review',
      link: scholar(
        'Toward Real-Time Monitoring of Macromolecular Biomarkers: A Materials Roadmap for Continuous Biosensing ACS Applied Materials & Interfaces Jada Luan'
      ),
    },
    {
      title:
        'Room-Temperature-Fabricated Large-Area Catalysts for Ampere-Scale Seawater Oxidation.',
      authors:
        'Yu, Luo, Linyuan Chi, Yu Wang, Minghui Ning, Edmond Nasr, Shaowei Song, Jingyi Luan, Shuo Chen, and Zhifeng Ren.',
      journal: 'ACS Energy Letters 10 (2025): 5664–5673.',
      year: 2025,
      link: scholar(
        'Room-Temperature-Fabricated Large-Area Catalysts for Ampere-Scale Seawater Oxidation ACS Energy Letters 2025'
      ),
    },
    {
      title:
        'Rapid urinary lipoarabinomannan test with laboratory-level sensitivity for tuberculosis detection: a performance evaluation',
      authors: 'Qisheng Jiang, Harisha Manoharappa, et al.',
      journal: 'Microbiology Spectrum',
      year: 2025,
      link: 'https://doi.org/10.1128/spectrum.03042-25',
    },
  ];

  // ---------- SECTION 2: Selected Publications Before UH ----------
  const publicationsBeforeUH: Pub[] = [
    {
      title:
        'Signal amplification by cyclic extension enables high-sensitivity single-cell mass cytometry',
      authors:
        'Lun X.K., Sheng K., Yu X., Lam C.Y., Gowri G., Serrata M., Zhai Y., Su H., Luan J., Kim Y., Ingber D.E.',
      journal: 'Nature Biotechnology',
      year: 2024,
      link: scholar(
        'Signal amplification by cyclic extension enables high-sensitivity single-cell mass cytometry Nature Biotechnology'
      ),
    },
    {
      title:
        'Gold Nanorod Size-Dependent Fluorescence Enhancement for Ultrasensitive Fluoroimmunoassays',
      authors:
        'Liang C*, Luan J*, Wang Z, Jiang Q, Gupta R, Cao S, Liu K.K., Morrissey J.J., Kharasch E.D., Naik R.R., Singamaneni S.',
      journal: 'ACS Applied Materials & Interfaces',
      year: 2021,
      link: scholar(
        'Gold Nanorod Size-Dependent Fluorescence Enhancement for Ultrasensitive Fluoroimmunoassays ACS Applied Materials & Interfaces 2021'
      ),
    },
    {
      title:
        'Microneedle patch for the ultrasensitive quantification of protein biomarkers in interstitial fluid',
      authors:
        'Wang Z*, Luan J*, Seth A, Liu L, You M, Gupta P, Rathi P, Wang Y, Cao S, Jiang Q, Zhang X, Gupta R, Zhou Q, Morrissey J.J., Scheller E.L., Rudra J.S., Singamaneni S.',
      journal: 'Nature Biomedical Engineering',
      year: 2021,
      link: scholar(
        'Microneedle patch for the ultrasensitive quantification of protein biomarkers in interstitial fluid Nature Biomedical Engineering 2021'
      ),
    },
    {
      title:
        'Ultrabright fluorescent nanoscale labels for the femtomolar detection of analytes with standard bioassays',
      authors:
        'Luan J, Seth A, Gupta R, Wang Z, Rathi P, Cao S, Gholami Derami H, Tang R, Xu B, Achilefu S, Morrissey J.J., Singamaneni S.',
      journal: 'Nature Biomedical Engineering',
      year: 2020,
      link: scholar(
        'Ultrabright fluorescent nanoscale labels femtomolar detection standard bioassays Nature Biomedical Engineering 2020'
      ),
    },
    {
      title:
        'Add-on plasmonic patch as a universal fluorescence enhancer',
      authors:
        'Luan J, Morrissey J.J., Wang Z, Derami H.G., Liu K.K., Cao S, Jiang Q, Wang C, Kharasch E.D., Naik R.R., Singamaneni S.',
      journal: 'Light: Science & Applications',
      year: 2018,
      link: scholar(
        'Add-on plasmonic patch universal fluorescence enhancer Light: Science & Applications 2018'
      ),
    },
    {
      title:
        'High-resolution imaging of protein secretion at the single-cell level using plasmon-enhanced FluoroDOT assay.',
      authors:
        'Seth, Anushree, Ekansh Mittal, Jingyi Luan, Samhitha Kolla, Monty B. Mazer, Hemant Joshi, Rohit Gupta, et al.',
      journal: 'Cell Reports Methods 2, no. 8 (2022).',
      year: 2022,
      link: scholar(
        'High-resolution imaging of protein secretion at the single-cell level using plasmon-enhanced FluoroDOT assay Cell Reports Methods 2022'
      ),
    },
    {
      title:
        'Plasmonic fluor-enhanced antigen arrays for high-throughput, serological studies of SARS-CoV-2.',
      authors:
        'Qavi, Abraham J., Chao Wu, Matthew Lloyd, Mohammad Mahabub-Uz Zaman, Jingyi Luan, Claire Ballman, Daisy W. Leung, Scott L. Crick, Christopher W. Farnsworth, and Gaya K. Amarasinghe.',
      journal: 'ACS Infectious Diseases 8, no. 8 (2022): 1468–1479.',
      year: 2022,
      link: scholar(
        'Plasmonic fluor-enhanced antigen arrays for high-throughput, serological studies of SARS-CoV-2 ACS Infectious Diseases 2022'
      ),
    },
    {
      title:
        'Plasmonically-enhanced competitive assay for ultrasensitive and multiplexed detection of small molecules.',
      authors:
        'Wang, Zheyu, Qingjun Zhou, Anushree Seth, Samhitha Kolla, Jingyi Luan, Qisheng Jiang, Priya Rathi, et al.',
      journal: 'Biosensors and Bioelectronics 200 (2022): 113918.',
      year: 2022,
      link: scholar(
        'Plasmonically-enhanced competitive assay for ultrasensitive and multiplexed detection of small molecules Biosensors and Bioelectronics 2022'
      ),
    },
    {
      title:
        'Refreshable nanobiosensor based on organosilica encapsulation of biorecognition elements.',
      authors:
        'Gupta, Rohit, Jingyi Luan, Shantanu Chakrabartty, Erica L. Scheller, Jeremiah Morrissey, and Srikanth Singamaneni.',
      journal:
        'ACS Applied Materials & Interfaces 12, no. 5 (2020): 5420–5428.',
      year: 2020,
      link: scholar(
        'Refreshable nanobiosensor based on organosilica encapsulation of biorecognition elements ACS Applied Materials & Interfaces 2020'
      ),
    },
  ];

  const JournalThumb: React.FC<{ name: string }> = ({ name }) => {
    const initials = name
      .split(/\s|:|&/g)
      .filter(Boolean)
      .slice(0, 3)
      .map((w) => w[0]?.toUpperCase())
      .join('');
    return (
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
        <span className="text-red-700 font-bold text-xl">{initials}</span>
      </div>
    );
  };

  const renderSection = (title: string, pubs: Pub[]) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-8">
        {pubs.map((pub, idx) => (
          <a
            key={idx}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              {pub.thumbnail ? (
                <img
                  src={pub.thumbnail}
                  alt={`${pub.journal} thumbnail`}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border"
                  loading="lazy"
                />
              ) : (
                <JournalThumb name={pub.journal} />
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{pub.authors}</p>

                <div className="flex flex-wrap items-center gap-2 text-sm mt-2">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-gray-800">
                    {pub.journal}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-red-700">
                    {pub.year}
                  </span>
                  {pub.note && (
                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-yellow-700">
                      {pub.note}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex gap-4 text-sm">
                  <span className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
                    <FileText size={16} className="mr-1" />
                    View article / search
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Peer-reviewed work in materials, biosensing, and biomedical
            engineering
          </p>
        </div>
      </section>

      {/* Publications Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSection('Publications at UH', publicationsAtUH)}
          {renderSection('Selected Publications Before UH', publicationsBeforeUH)}
        </div>
      </section>
    </div>
  );
};

export default Publications;
