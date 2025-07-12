import React from 'react';
import { ExternalLink, Github, Calendar, Users, Award, DollarSign } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: 'AI-Powered Medical Imaging Platform',
      description: 'A comprehensive platform that uses machine learning to enhance medical imaging diagnostics, featuring real-time analysis and automated reporting capabilities.',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      team: ['Dr. Sarah Chen', 'Dr. Jennifer Wu', 'Alex Johnson'],
      funding: '$1.2M',
      duration: '2023-2026',
      sponsor: 'NIH',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React'],
      github: 'https://github.com/lab/medical-imaging-ai',
      demo: 'https://demo.medical-imaging-ai.com',
    },
    {
      title: 'Smart Nanomaterial Drug Delivery System',
      description: 'Revolutionary drug delivery system using intelligent nanomaterials that respond to specific biological conditions for targeted therapy.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      team: ['Dr. Michael Rodriguez', 'Maria Garcia', 'David Kim'],
      funding: '$850K',
      duration: '2024-2027',
      sponsor: 'NSF',
      technologies: ['Polymer Chemistry', 'Nanotechnology', 'Bioanalysis'],
      github: 'https://github.com/lab/smart-nanomaterials',
      demo: null,
    },
    {
      title: 'Real-time Biomedical Signal Processing',
      description: 'Advanced signal processing system for real-time analysis of biomedical signals with cloud-based monitoring and alert systems.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      team: ['Dr. Jennifer Wu', 'Emma Thompson', 'Alex Johnson'],
      funding: '$600K',
      duration: '2022-2024',
      sponsor: 'DOE',
      technologies: ['MATLAB', 'C++', 'AWS', 'Docker'],
      github: 'https://github.com/lab/biomedical-signals',
      demo: 'https://demo.biomedical-signals.com',
    },
  ];

  const collaborativeProjects = [
    {
      title: 'Multi-institutional Cancer Research Initiative',
      partners: ['MD Anderson', 'Mayo Clinic', 'Stanford University'],
      description: 'Collaborative research on novel cancer detection methods using advanced imaging techniques.',
      role: 'Lead Technical Partner',
      funding: '$2.5M',
      duration: '2023-2028',
    },
    {
      title: 'International Nanomedicine Consortium',
      partners: ['ETH Zurich', 'University of Tokyo', 'Cambridge University'],
      description: 'Global collaboration on nanomedicine applications and safety protocols.',
      role: 'Research Partner',
      funding: '$1.8M',
      duration: '2024-2029',
    },
    {
      title: 'Industry-Academic Partnership on Smart Healthcare',
      partners: ['Google Health', 'Microsoft Research', 'IBM Watson'],
      description: 'Developing AI-powered healthcare solutions for clinical applications.',
      role: 'Academic Lead',
      funding: '$3.2M',
      duration: '2023-2027',
    },
  ];

  const openSourceProjects = [
    {
      title: 'BioSignal Toolkit',
      description: 'Open-source Python library for biomedical signal processing and analysis.',
      stars: 1248,
      forks: 324,
      contributors: 18,
      language: 'Python',
      license: 'MIT',
      github: 'https://github.com/lab/biosignal-toolkit',
    },
    {
      title: 'Medical Image Segmentation',
      description: 'Deep learning models for automated medical image segmentation.',
      stars: 892,
      forks: 156,
      contributors: 12,
      language: 'Python',
      license: 'Apache 2.0',
      github: 'https://github.com/lab/medical-segmentation',
    },
    {
      title: 'NanoMaterial Database',
      description: 'Comprehensive database of nanomaterial properties and applications.',
      stars: 567,
      forks: 89,
      contributors: 8,
      language: 'JavaScript',
      license: 'MIT',
      github: 'https://github.com/lab/nanomaterial-db',
    },
  ];

  const awards = [
    {
      title: 'Best Innovation Award',
      project: 'AI-Powered Medical Imaging Platform',
      organization: 'IEEE Engineering in Medicine & Biology Society',
      year: '2024',
      amount: '$10,000',
    },
    {
      title: 'Outstanding Research Impact',
      project: 'Smart Nanomaterial Drug Delivery System',
      organization: 'National Science Foundation',
      year: '2024',
      amount: '$15,000',
    },
    {
      title: 'Technology Transfer Excellence',
      project: 'Real-time Biomedical Signal Processing',
      organization: 'University of Houston',
      year: '2023',
      amount: '$5,000',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Innovative research projects transforming healthcare through technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge research initiatives driving scientific advancement
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign size={16} className="mr-2 text-red-600" />
                        Funding: {project.funding}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={16} className="mr-2 text-red-600" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users size={16} className="mr-2 text-red-600" />
                        Team: {project.team.length} members
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award size={16} className="mr-2 text-red-600" />
                        Sponsor: {project.sponsor}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-red-600 hover:text-red-700"
                      >
                        <Github size={16} className="mr-1" />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-red-600 hover:text-red-700"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:order-first">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaborative Projects</h2>
            <p className="text-xl text-gray-600">
              Strategic partnerships driving global research initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {collaborativeProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Partners:</h4>
                    <ul className="text-sm text-gray-600">
                      {project.partners.map((partner, idx) => (
                        <li key={idx}>• {partner}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Role: {project.role}</span>
                    <span>Funding: {project.funding}</span>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Duration: {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Source Projects</h2>
            <p className="text-xl text-gray-600">
              Contributing to the global scientific community through open research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openSourceProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.stars}</div>
                    <div className="text-sm text-gray-500">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.forks}</div>
                    <div className="text-sm text-gray-500">Forks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.contributors}</div>
                    <div className="text-sm text-gray-500">Contributors</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {project.language}
                  </span>
                  <span className="text-sm text-gray-600">{project.license}</span>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  <Github size={16} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Awards</h2>
            <p className="text-xl text-gray-600">
              Recognition for outstanding research contributions and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-red-600 mb-4">
                  <Award size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.project}</p>
                <p className="text-sm text-gray-500 mb-2">{award.organization}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{award.year}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {award.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;