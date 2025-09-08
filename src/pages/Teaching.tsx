import React from 'react';
import { BookOpen, Calendar, Users, Download } from 'lucide-react';

const Teaching: React.FC = () => {
  const courses = [
    {
      code: 'MECE 6397', // UH course code (can adjust if exact differs)
      title: 'Biomaterials and Nanotechnology',
      instructor: 'Prof. Jingyi Luan',
      semester: 'Fall 2025',
      credits: 3,
      description:
        'Foundations of biomaterials, nanostructures, and their applications in biosensing and diagnostics.',
      syllabus: '/syllabus/biomaterials-nanotech.pdf', // replace with real file if available
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Teaching</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Graduate-level courses taught by Prof. Jingyi Luan at the University of Houston
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border border-uh-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-uh-red font-semibold mb-1">{course.code}</div>
              <h2 className="text-xl font-bold text-uh-black mb-2">{course.title}</h2>
              <p className="text-uh-gray-700 mb-4">{course.description}</p>

              <div className="text-sm text-uh-gray-700 space-y-1 mb-4">
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-uh-red" />
                  Instructor: {course.instructor}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-uh-red" />
                  Semester: {course.semester}
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2 text-uh-red" />
                  Credits: {course.credits}
                </div>
              </div>

             
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teaching;
