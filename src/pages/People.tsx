import React from 'react';
import { Mail, ExternalLink, GraduationCap, Award } from 'lucide-react';

const People: React.FC = () => {
  const faculty = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Principal Investigator & Professor',
      department: 'Biomedical Engineering',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 's.chen@uh.edu',
      bio: 'Dr. Chen leads groundbreaking research in biomedical imaging and signal processing. Her work has been published in over 80 peer-reviewed journals.',
      specialties: ['Biomedical Imaging', 'Signal Processing', 'Machine Learning'],
    },
    {
      name: 'Dr. Michael Rodriguez',
      title: 'Associate Professor',
      department: 'Materials Science',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'm.rodriguez@uh.edu',
      bio: 'Expert in advanced materials and nanotechnology with a focus on sustainable energy applications.',
      specialties: ['Nanotechnology', 'Energy Materials', 'Sustainable Technology'],
    },
    {
      name: 'Dr. Jennifer Wu',
      title: 'Assistant Professor',
      department: 'Electrical Engineering',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'j.wu@uh.edu',
      bio: 'Specializes in AI and machine learning applications in biomedical systems.',
      specialties: ['Artificial Intelligence', 'Machine Learning', 'Biomedical Systems'],
    },
  ];

  const students = [
    {
      name: 'Alex Johnson',
      level: 'PhD Student',
      year: '4th Year',
      focus: 'Biomedical Signal Processing',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Maria Garcia',
      level: 'PhD Student',
      year: '2nd Year',
      focus: 'Nanomaterials',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Kim',
      level: 'Master\'s Student',
      year: '1st Year',
      focus: 'Machine Learning',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma Thompson',
      level: 'Undergraduate',
      year: '3rd Year',
      focus: 'Research Assistant',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation and discovery in our laboratory
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty</h2>
            <p className="text-xl text-gray-600">
              World-class researchers and educators leading cutting-edge investigations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {faculty.map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{person.title}</p>
                  <p className="text-gray-600 mb-4">{person.department}</p>
                  <p className="text-gray-700 mb-4">{person.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {person.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <Mail size={16} className="mr-1" />
                      <span className="text-sm">Email</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm">Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default People;