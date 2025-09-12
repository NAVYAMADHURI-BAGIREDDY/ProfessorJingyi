import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const People: React.FC = () => {
  // ----- DATA (from your list) -----
  const PI = {
    name: 'Jingyi Luan',
    title: 'Assistant Professor',
    department: 'Mechanical & Aerospace Engineering',
    email: 'jluan@uh.edu',
    // Replace with your local headshot (recommended)
    image: '/Assets/luan.png',
    profile: 'https://www.me.uh.edu/faculty/luan-jingyi',
    specialties: [
      'Nanophotonic & plasmonic biosensing',
      'DNA nanotechnologies',
      'Molecular diagnostics',
    ],
  };

  const students = [
    {
      name: 'Jinyan Wang',
      role: 'PhD Student',
      department: 'Mechanical & Aerospace Engineering',
      email: 'jwang260@CougarNet.UH.EDU',
      image: '/assets/people/jinyan-wang.jpg',
      specialties: ['Biomolecular engineering', 'Implantable sensor development'],
    },
    {
      name: 'Rui Wu',
      role: 'Undergraduate Student',
      department: 'Mechanical & Aerospace Engineering',
      email: 'rwu12@CougarNet.UH.EDU',
      image: '/assets/people/rui-wu.jpg',
      specialties: ['Ultrasensitive assay development', '3D printing', 'Robotics'],
    },
    {
      name: 'Linyuan Chi',
      role: 'Master’s Student',
      department: 'Electrical & Computer Engineering',
      email: 'lchi@CougarNet.UH.EDU',
      image: '/assets/people/linyuan-chi.jpg',
      specialties: [
        'Point-of-care assay development',
        'Electrochemical simulation',
        'AI-enhanced proteomic analysis',
      ],
    },
    {
      name: 'Ravi Jada',
      role: 'Post Doctoral Fellow',
      department: 'Mechanical Engineering',
      email: 'rjada@Central.UH.EDU',
      chat: 'rjada@CougarNet.UH.EDU',
      location: 'D N227',
      image: '/assets/people/ravi-jada.jpg', // <- add his headshot here later
      specialties: [
        // if you know his focus areas, add them here, otherwise leave empty
      ],
    },
  ];

  // ----- UI -----
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">People</h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              Meet the team advancing biosensing and molecular diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* PI */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-uh-black mb-6 sm:mb-8 text-center">
            Principal Investigator
          </h2>

          <article className="mx-auto max-w-4xl rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
              <div className="bg-uh-gray-50">
                <img
                  src={PI.image}
                  alt={PI.name}
                  className="w-full h-64 md:h-full object-cover"
                  onError={(e) => {
                    // fallback color block if image missing
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-uh-black">{PI.name}</h3>
                <p className="text-uh-red font-medium mt-1">{PI.title}</p>
                <p className="text-uh-gray-700">{PI.department}</p>

                {PI.specialties?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-uh-black mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {PI.specialties.map((s) => (
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
                    href={`mailto:${PI.email}`}
                    className="inline-flex items-center text-uh-red hover:text-uh-red-dark font-medium"
                  >
                    <Mail size={16} className="mr-2" />
                    {PI.email}
                  </a>
                  <a
                    href={PI.profile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-uh-red hover:text-uh-red-dark font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    UH Profile
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Students */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-uh-black mb-6 sm:mb-8 text-center">
            Students & Trainees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {students.map((p) => (
              <article
                key={p.email}
                className="bg-white rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-uh-black">{p.name}</h3>
                  <p className="text-uh-red font-medium mt-0.5">{p.role}</p>
                  <p className="text-uh-gray-700">{p.department}</p>

                  {p.specialties?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 rounded-full text-xs bg-uh-gray-50 ring-1 ring-uh-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`mailto:${p.email}`}
                    className="mt-4 inline-flex items-center text-uh-red hover:text-uh-red-dark font-medium"
                  >
                    <Mail size={16} className="mr-2" />
                    {p.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default People;
