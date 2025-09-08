import React from 'react';
import { Mail, ArrowRight, BookOpen, FlaskConical, Microscope } from 'lucide-react';

const JoinUs: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-uh-red text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Join Us</h1>
          <p className="mt-3 text-white/90 max-w-3xl mx-auto">
            We are recruiting a Postdoctoral Researcher to advance materials-enabled biosensing.
          </p>
        </div>
      </section>

      {/* Single opening */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <article className="rounded-2xl ring-1 ring-uh-gray-200 shadow-elegant bg-white overflow-hidden">
            <header className="px-6 sm:px-8 py-6 border-b">
              <h2 className="text-xl sm:text-2xl font-bold text-uh-black">Postdoctoral Researcher</h2>
              <p className="mt-1 text-uh-red font-medium">Full-time · Houston, TX (On-site)</p>
            </header>

            <div className="px-6 sm:px-8 py-6 space-y-6">
              <section>
                <h3 className="font-semibold text-uh-black mb-2">Focus areas</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-uh-gray-700 text-sm">
                  <li className="flex items-center gap-2"><Microscope size={16}/> Non-invasive neurological biomarkers</li>
                  <li className="flex items-center gap-2"><FlaskConical size={16}/> Wearable & implantable biosensors</li>
                  <li className="flex items-center gap-2"><BookOpen size={16}/> Multiplexed single-molecule detection</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-uh-black mb-2">What we’re looking for</h3>
                <ul className="list-disc pl-5 text-uh-gray-700 text-sm space-y-1">
                  <li>Ph.D. in Materials/Biomedical/Mechanical/Electrical Engineering or related field</li>
                  <li>Experience in biosensing, micro/nanofabrication, or assay development</li>
                  <li>Strong publication record and collaborative mindset</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-uh-black mb-2">How to apply</h3>
                <p className="text-uh-gray-700 text-sm">
                  Email <a href="mailto:jluan@uh.edu" className="text-uh-red font-medium hover:text-uh-red-dark">jluan@uh.edu</a> with the subject
                  <span className="font-semibold"> “Postdoc Application — Luan Lab”</span> and include:
                </p>
                <ul className="list-disc pl-5 text-uh-gray-700 text-sm mt-2 space-y-1">
                  <li>CV</li>
                  <li>1-page cover letter (research interests & fit)</li>
                  <li>1–2 representative publications</li>
                  <li>Contact info for 2–3 references</li>
                </ul>
              </section>

              <div className="pt-2">
                <a
                  href="mailto:jluan@uh.edu?subject=Postdoc%20Application%20—%20Luan%20Lab"
                  className="inline-flex items-center justify-center rounded-lg bg-uh-red text-white font-semibold px-5 py-3 shadow-md hover:bg-uh-red-dark transition"
                >
                  Email Prof. Luan
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </article>

          <p className="text-xs text-uh-gray-700/80 mt-4 text-center">
            Students at UH interested in research are welcome to email a brief note and CV.
          </p>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
