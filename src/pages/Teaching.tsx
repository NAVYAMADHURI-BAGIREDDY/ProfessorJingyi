import React from 'react';
import { BookOpen, Calendar, Users, Download } from 'lucide-react';

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
    },
    {
      code: 'BMEN 6350',
      title: 'Machine Learning in Healthcare',
      instructor: 'Dr. Jennifer Wu',
      semester: 'Spring 2025',
      credits: 3,
      description: 'Application of machine learning techniques to healthcare problems and medical data analysis.',
      syllabus: '/syllabus/bmen6350.pdf',
    },
    {
      code: 'MSEN 5320',
      title: 'Nanomaterials for Biomedical Applications',
      instructor: 'Dr. Michael Rodriguez',
      semester: 'Fall 2024',
      credits: 3,
      description: 'Design and synthesis of nanomaterials for drug delivery, imaging, and therapeutic applications.',
      syllabus: '/syllabus/msen5320.pdf',
    },
    {
      code: 'BMEN 4390',
      title: 'Medical Imaging Systems',
      instructor: 'Dr. Sarah Chen',
      semester: 'Spring 2025',
      credits: 3,
      description: 'Principles and applications of medical imaging technologies including MRI, CT, and ultrasound.',
      syllabus: '/syllabus/bmen4390.pdf',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Red Header Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teaching</h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
            Courses offered by our faculty to prepare the next generation of biomedical engineers
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-2 text-red-600 font-semibold">{course.code}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>

              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-red-500" />
                  Instructor: {course.instructor}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-red-500" />
                  Semester: {course.semester}
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2 text-red-500" />
                  Credits: {course.credits}
                </div>
              </div>

              <a
                href={course.syllabus}
                className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
              >
                <Download size={16} className="mr-1" />
                View Syllabus
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teaching;
