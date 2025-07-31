import React from 'react';
import { ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'Biomedical Imaging',
      description: 'Advanced imaging techniques for medical diagnosis and treatment monitoring.',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      projects: 3,
      funding: '$1.2M',
      publications: 25,
    },
    {
      title: 'Signal Processing',
      description: 'Cutting-edge algorithms for biomedical signal analysis and interpretation.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      projects: 2,
      funding: '$800K',
      publications: 18,
    },
    {
      title: 'Machine Learning',
      description: 'AI-powered solutions for healthcare and biomedical applications.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      projects: 4,
      funding: '$1.5M',
      publications: 32,
    },
    {
      title: 'Nanomaterials',
      description: 'Novel materials for biomedical and energy applications.',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      projects: 2,
      funding: '$900K',
      publications: 15,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Pioneering discoveries at the intersection of technology and medicine
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600">
              Exploring diverse fields to advance scientific knowledge and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{area.projects}</div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{area.funding}</div>
                      <div className="text-sm text-gray-500">Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{area.publications}</div>
                      <div className="text-sm text-gray-500">Publications</div>
                    </div>
                  </div>
                  
                  <button className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 text-red-100">
            Let's discuss how we can work together to advance scientific knowledge.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Research;
