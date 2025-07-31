import React from 'react';
import { FileText } from 'lucide-react';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'Deep Learning for Cancer Detection in Histopathology Images',
      authors: 'Jane Doe, John Smith, Alice Johnson',
      journal: 'Nature Biomedical Engineering',
      year: '2024',
      abstract: 'This paper explores a novel deep learning approach for detecting cancerous tissues in high-resolution histopathology images.',
      link: 'https://example.com/publication1',
    },
    {
      title: 'Smart Drug Delivery Using Nanomaterials',
      authors: 'Michael Lee, Sophia Chen',
      journal: 'Advanced Drug Delivery Reviews',
      year: '2023',
      abstract: 'We present a smart nanomaterial-based system for responsive drug release in targeted therapy.',
      link: 'https://example.com/publication2',
    },
    {
      title: 'Real-time Signal Processing in Wearable Health Monitors',
      authors: 'Emily Davis, Mark Thompson, Alex Rivera',
      journal: 'IEEE Transactions on Biomedical Circuits and Systems',
      year: '2022',
      abstract: 'A real-time biomedical signal processing framework enabling continuous health monitoring in wearable devices.',
      link: 'https://example.com/publication3',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Peer-reviewed publications advancing biomedical research
            </p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600">
              Explore our latest contributions to science and technology
            </p>
          </div>

          <div className="space-y-12">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <FileText size={28} className="text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{pub.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{pub.authors}</p>
                    <p className="text-sm text-gray-500 italic mb-2">{pub.journal}, {pub.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{pub.abstract}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-red-600 hover:text-red-800 font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
