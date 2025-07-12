import React from 'react';
import { ArrowRight, FileText, ExternalLink, Users, Calendar } from 'lucide-react';

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

  const recentPublications = [
    {
      title: 'Advanced Deep Learning Techniques for Medical Image Analysis',
      authors: 'Chen, S., Rodriguez, M., Wu, J.',
      journal: 'Nature Biomedical Engineering',
      year: '2024',
      citations: 45,
      doi: '10.1038/s41551-024-01234-5',
    },
    {
      title: 'Nanomaterial-Based Biosensors for Early Disease Detection',
      authors: 'Rodriguez, M., Thompson, E., Chen, S.',
      journal: 'Science Advances',
      year: '2024',
      citations: 32,
      doi: '10.1126/sciadv.abcd1234',
    },
    {
      title: 'Machine Learning Approaches to Biomedical Signal Processing',
      authors: 'Wu, J., Johnson, A., Chen, S.',
      journal: 'IEEE Transactions on Biomedical Engineering',
      year: '2023',
      citations: 78,
      doi: '10.1109/TBME.2023.1234567',
    },
  ];

  const ongoingProjects = [
    {
      title: 'AI-Powered Ultrasound Imaging',
      pi: 'Dr. Sarah Chen',
      funding: '$500K',
      duration: '2023-2026',
      sponsor: 'NIH',
      description: 'Developing machine learning algorithms to enhance ultrasound image quality and diagnostic accuracy.',
    },
    {
      title: 'Smart Nanomaterials for Drug Delivery',
      pi: 'Dr. Michael Rodriguez',
      funding: '$400K',
      duration: '2024-2027',
      sponsor: 'NSF',
      description: 'Creating responsive nanomaterials for targeted drug delivery systems.',
    },
    {
      title: 'Biomedical Signal Analysis Platform',
      pi: 'Dr. Jennifer Wu',
      funding: '$350K',
      duration: '2023-2025',
      sponsor: 'DOE',
      description: 'Building a comprehensive platform for real-time biomedical signal processing.',
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

      {/* Recent Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600">
              Latest research findings and scientific contributions
            </p>
          </div>

          <div className="space-y-6">
            {recentPublications.map((pub, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h3>
                <p className="text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <FileText size={16} className="mr-1" />
                    {pub.journal}
                  </span>
                  <span>{pub.year}</span>
                  <span>{pub.citations} citations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">DOI: {pub.doi}</span>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Paper
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              View All Publications
            </button>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Projects</h2>
            <p className="text-xl text-gray-600">
              Current research initiatives driving scientific advancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-red-600" />
                    PI: {project.pi}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    Duration: {project.duration}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Funding: {project.funding}</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      {project.sponsor}
                    </span>
                  </div>
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