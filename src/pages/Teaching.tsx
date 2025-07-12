import React from 'react';
import { BookOpen, Users, Calendar, Award, Download } from 'lucide-react';

const Teaching: React.FC = () => {
  const courses = [
    {
      code: 'BMEN 4380',
      title: 'Biomedical Signal Processing',
      instructor: 'Dr. Sarah Chen',
      semester: 'Fall 2024',
      credits: 3,
      description: 'Advanced techniques for analyzing and processing biomedical signals including ECG, EEG, and EMG.',
      syllabus: '/syllabus/bmen4380.pdf',
      enrollment: 25,
      level: 'Undergraduate',
    },
    {
      code: 'BMEN 6350',
      title: 'Machine Learning in Healthcare',
      instructor: 'Dr. Jennifer Wu',
      semester: 'Spring 2025',
      credits: 3,
      description: 'Application of machine learning techniques to healthcare problems and medical data analysis.',
      syllabus: '/syllabus/bmen6350.pdf',
      enrollment: 18,
      level: 'Graduate',
    },
    {
      code: 'MSEN 5320',
      title: 'Nanomaterials for Biomedical Applications',
      instructor: 'Dr. Michael Rodriguez',
      semester: 'Fall 2024',
      credits: 3,
      description: 'Design and synthesis of nanomaterials for drug delivery, imaging, and therapeutic applications.',
      syllabus: '/syllabus/msen5320.pdf',
      enrollment: 15,
      level: 'Graduate',
    },
    {
      code: 'BMEN 4390',
      title: 'Medical Imaging Systems',
      instructor: 'Dr. Sarah Chen',
      semester: 'Spring 2025',
      credits: 3,
      description: 'Principles and applications of medical imaging technologies including MRI, CT, and ultrasound.',
      syllabus: '/syllabus/bmen4390.pdf',
      enrollment: 30,
      level: 'Undergraduate',
    },
  ];

  const workshops = [
    {
      title: 'Introduction to MATLAB for Biomedical Applications',
      date: 'February 15, 2025',
      duration: '4 hours',
      instructor: 'Dr. Jennifer Wu',
      capacity: 20,
      description: 'Hands-on workshop covering MATLAB basics and biomedical signal processing examples.',
    },
    {
      title: 'Python for Data Science in Healthcare',
      date: 'March 20, 2025',
      duration: '6 hours',
      instructor: 'Dr. Sarah Chen',
      capacity: 25,
      description: 'Comprehensive introduction to Python programming for healthcare data analysis.',
    },
    {
      title: 'Nanomaterial Characterization Techniques',
      date: 'April 10, 2025',
      duration: '8 hours',
      instructor: 'Dr. Michael Rodriguez',
      capacity: 15,
      description: 'Laboratory workshop on advanced characterization methods for nanomaterials.',
    },
  ];

  const resources = [
    {
      title: 'Biomedical Signal Processing Toolkit',
      description: 'MATLAB/Python toolbox for common biomedical signal processing tasks.',
      type: 'Software',
      downloads: 1250,
    },
    {
      title: 'Machine Learning in Healthcare: A Practical Guide',
      description: 'Comprehensive guide with code examples and case studies.',
      type: 'Tutorial',
      downloads: 890,
    },
    {
      title: 'Nanomaterials Database',
      description: 'Curated database of nanomaterial properties and applications.',
      type: 'Dataset',
      downloads: 450,
    },
    {
      title: 'Medical Imaging Algorithms',
      description: 'Collection of image processing algorithms for medical applications.',
      type: 'Software',
      downloads: 670,
    },
  ];

  const studentProjects = [
    {
      title: 'AI-Powered ECG Analysis System',
      student: 'Alex Johnson',
      course: 'BMEN 6350',
      year: '2024',
      description: 'Developed a deep learning model for automated ECG arrhythmia detection with 95% accuracy.',
      award: 'Best Project Award',
    },
    {
      title: 'Smart Drug Delivery Nanoparticles',
      student: 'Maria Garcia',
      course: 'MSEN 5320',
      year: '2024',
      description: 'Designed pH-responsive nanoparticles for targeted cancer drug delivery.',
      award: 'Innovation Award',
    },
    {
      title: 'Ultrasound Image Enhancement',
      student: 'David Kim',
      course: 'BMEN 4390',
      year: '2023',
      description: 'Implemented novel algorithms to improve ultrasound image quality and contrast.',
      award: 'Outstanding Achievement',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Teaching</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Educating the next generation of scientists and engineers through innovative curriculum and hands-on learning
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses</h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum covering cutting-edge topics in biomedical engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{course.code}</h3>
                    <h4 className="text-lg text-red-600 font-medium">{course.title}</h4>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    course.level === 'Graduate' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-red-600" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    {course.semester}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen size={16} className="mr-2 text-red-600" />
                    {course.credits} Credits
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-red-600" />
                    {course.enrollment} Students
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={course.syllabus}
                    className="text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    <Download size={16} className="mr-1" />
                    Syllabus
                  </a>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshops & Training</h2>
            <p className="text-xl text-gray-600">
              Specialized training sessions and skill-building workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-red-600" />
                    {workshop.instructor}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Duration: {workshop.duration}</span>
                    <span>Capacity: {workshop.capacity}</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Resources</h2>
            <p className="text-xl text-gray-600">
              Free tools and materials to support learning and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    {resource.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                  <button className="text-red-600 hover:text-red-700 inline-flex items-center">
                    <Download size={16} className="mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outstanding Student Projects</h2>
            <p className="text-xl text-gray-600">
              Celebrating exceptional work and innovation by our students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {studentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <Award size={20} className="text-red-600" />
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Student: {project.student}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="text-sm text-gray-600">Course: {project.course}</div>
                </div>
                
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {project.award}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;