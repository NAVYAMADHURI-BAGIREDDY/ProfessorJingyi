import React from 'react';
import { MapPin, Clock, DollarSign, GraduationCap, Users, Star, Mail, FileText } from 'lucide-react';

const JoinUs: React.FC = () => {
  const positions = [
    {
      title: 'Postdoctoral Research Associate',
      department: 'Biomedical Engineering',
      type: 'Full-time',
      location: 'Houston, TX',
      salary: '$55,000 - $65,000',
      posted: '2 days ago',
      requirements: [
        'Ph.D. in Biomedical Engineering, Electrical Engineering, or related field',
        'Experience with medical imaging and signal processing',
        'Strong programming skills in Python/MATLAB',
        'Publication record in peer-reviewed journals',
      ],
      responsibilities: [
        'Conduct independent research in biomedical signal processing',
        'Collaborate with faculty and students on ongoing projects',
        'Mentor graduate students and assist with laboratory management',
        'Contribute to grant writing and publication activities',
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Access to state-of-the-art research facilities',
      ],
    },
    {
      title: 'Graduate Research Assistant',
      department: 'Materials Science',
      type: 'Part-time',
      location: 'Houston, TX',
      salary: '$2,500/month + tuition',
      posted: '1 week ago',
      requirements: [
        'B.S. in Materials Science, Chemistry, or related field',
        'Interest in nanomaterials and biomedical applications',
        'Laboratory experience preferred',
        'Strong analytical and problem-solving skills',
      ],
      responsibilities: [
        'Assist with nanomaterial synthesis and characterization',
        'Conduct literature reviews and experimental planning',
        'Maintain laboratory equipment and safety protocols',
        'Present research findings at group meetings',
      ],
      benefits: [
        'Monthly stipend and full tuition coverage',
        'Health insurance provided',
        'Conference attendance opportunities',
        'Mentorship from world-class faculty',
      ],
    },
    {
      title: 'Research Scientist',
      department: 'Machine Learning',
      type: 'Full-time',
      location: 'Houston, TX',
      salary: '$75,000 - $95,000',
      posted: '3 days ago',
      requirements: [
        'Ph.D. in Computer Science, Machine Learning, or related field',
        'Experience with deep learning frameworks (TensorFlow, PyTorch)',
        'Background in healthcare or biomedical applications',
        'Strong publication record in AI/ML conferences',
      ],
      responsibilities: [
        'Develop AI algorithms for medical applications',
        'Lead collaborative research projects',
        'Supervise student researchers',
        'Contribute to technology transfer initiatives',
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive benefits package',
        'Flexible work arrangements',
        'Industry collaboration opportunities',
      ],
    },
  ];

  const programs = [
    {
      title: 'PhD Program',
      duration: '4-6 years',
      funding: 'Full funding available',
      description: 'Comprehensive doctoral program with focus on independent research and innovation.',
      requirements: [
        'B.S./M.S. in relevant field',
        'Strong academic record (GPA > 3.5)',
        'GRE scores (recommended)',
        'Research experience preferred',
      ],
      benefits: [
        'Full tuition coverage',
        'Monthly stipend ($2,500-$3,000)',
        'Health insurance',
        'Conference funding',
      ],
    },
    {
      title: 'Master\'s Program',
      duration: '1.5-2 years',
      funding: 'Partial funding available',
      description: 'Focused master\'s program combining coursework with hands-on research experience.',
      requirements: [
        'B.S. in relevant field',
        'Strong academic record (GPA > 3.0)',
        'Statement of purpose',
        'Letters of recommendation',
      ],
      benefits: [
        'Research assistantship opportunities',
        'Access to advanced facilities',
        'Industry connections',
        'Career development support',
      ],
    },
    {
      title: 'Visiting Scholar',
      duration: '3-12 months',
      funding: 'External funding required',
      description: 'Collaborative research opportunities for international researchers and academics.',
      requirements: [
        'PhD or equivalent research experience',
        'Active research project',
        'Host faculty sponsor',
        'External funding source',
      ],
      benefits: [
        'Access to laboratory facilities',
        'Collaboration opportunities',
        'Networking events',
        'Research seminars',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Alex Johnson',
      role: 'Former PhD Student, Now Research Scientist at Google',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The research opportunities and mentorship I received here were exceptional. The interdisciplinary approach and cutting-edge facilities prepared me perfectly for my career in industry.',
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Postdoc, Currently Assistant Professor at MIT',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This lab provided the perfect environment for pushing the boundaries of nanomaterial research. The collaborative culture and world-class faculty made all the difference.',
    },
    {
      name: 'David Kim',
      role: 'Current PhD Student',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The support system here is incredible. From state-of-the-art equipment to amazing colleagues, everything you need to succeed in research is available.',
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete online application with required documents',
      timeline: 'Application deadline varies by position',
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'Applications reviewed by faculty committee',
      timeline: '2-3 weeks after deadline',
    },
    {
      step: 3,
      title: 'Interview Process',
      description: 'Selected candidates invited for interviews',
      timeline: '1-2 weeks after review',
    },
    {
      step: 4,
      title: 'Final Decision',
      description: 'Offers extended to successful candidates',
      timeline: '1 week after interviews',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Be part of a world-class research team driving innovation in biomedical engineering and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Exciting opportunities to advance your career in cutting-edge research
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-lg text-red-600 mb-4">{position.department}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign size={16} className="mr-2" />
                        {position.salary}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        Posted {position.posted}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600">
              Comprehensive educational opportunities for aspiring researchers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <GraduationCap size={24} className="text-red-600" />
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-red-600" />
                    Duration: {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-red-600" />
                    {program.funding}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Alumni Say</h2>
            <p className="text-xl text-gray-600">
              Hear from former team members about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our research team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-sm text-red-600 font-medium">{step.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8 text-red-100">
              Get in touch with us to learn more about opportunities in our laboratory
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@lab.uh.edu"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors inline-flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </a>
              <a
                href="/application-form"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
              >
                <FileText size={20} className="mr-2" />
                Application Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;