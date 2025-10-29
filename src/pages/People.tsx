import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const People: React.FC = () => {
  const people = [
    {
      name: 'Jingyi Luan',
      title: 'Assistant Professor',
      department: 'Mechanical & Aerospace Engineering',
      email: 'jluan@uh.edu',
      profile: 'https://www.me.uh.edu/faculty/luan-jingyi',
      specialties: [
        'Nanophotonic & plasmonic biosensing',
        'DNA nanotechnologies',
        'Molecular diagnostics',
      ],
    },
    {
      name: 'Jinyan Wang',
      title: 'PhD Student',
      department: 'Mechanical & Aerospace Engineering',
      email: 'jwang260@CougarNet.UH.EDU',
      specialties: ['Biomolecular engineering', 'Implantable sensor development'],
    },
    {
      name: 'Rui Wu',
      title: 'Undergraduate Student',
      department: 'Mechanical & Aerospace Engineering',
      email: 'rwu12@CougarNet.UH.EDU',
      specialties: ['Ultrasensitive assay development', '3D printing', 'Robotics'],
    },
    {
      name: 'Linyuan Chi',
      title: 'Master’s Student',
      department: 'Electrical & Computer Engineering',
      email: 'lchi@CougarNet.UH.EDU',
      specialties: [
        'Point-of-care assay development',
        'Electrochemical simulation',
        'AI-enhanced proteomic analysis',
      ],
    },
    {
      name: 'Ravi Jada',
      title: 'Post Doctoral Fellow',
      department: 'Mechanical Engineering',
      email: 'rjada@Central.UH.EDU',
      specialties: [],
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">People</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Meet the team advancing biosensing and molecular diagnostics.
          </p>
        </div>
      </section>

      {/* People List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {people.map((p) => (
            <article
              key={p.email}
              className="rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant p-8 bg-white"
            >
              <div>
                <h3 className="text-2xl font-semibold text-uh-black">{p.name}</h3>
                <p className="text-uh-red font-medium mt-1">{p.title}</p>
                <p className="text-uh-gray-700">{p.department}</p>

                {p.specialties?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-uh-black mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-full text-xs bg-uh-gray-50 ring-1 ring-uh-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${p.email}`}
                    className="inline-flex items-center text-uh-red hover:text-uh-red-dark font-medium"
                  >
                    <Mail size={16} className="mr-2" />
                    {p.email}
                  </a>
                  {p.profile && (
                    <a
                      href={p.profile}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-uh-red hover:text-uh-red-dark font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      UH Profile
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default People;
