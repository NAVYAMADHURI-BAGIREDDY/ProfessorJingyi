import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['lab@uh.edu', 'info@researchlab.uh.edu'],
      description: 'General inquiries and collaboration opportunities',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['(713) 743-4000', '(713) 743-4001'],
      description: 'Direct line to our laboratory',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: [
        'Research Laboratory',
        'University of Houston',
        '4800 Calhoun Road',
        'Houston, TX 77004',
      ],
      description: 'Visit us on campus',
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed',
      ],
      description: 'When you can reach us',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <div className="text-gray-600 mb-1">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>{detail}</div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Laboratory Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Laboratory</h2>
          <p className="text-lg text-gray-600 mb-8">
            Located in the heart of the University of Houston campus
          </p>

          <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
            <MapPin size={40} className="text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
            <p className="text-gray-600 mb-4">
              University of Houston<br />
              4800 Calhoun Road<br />
              Houston, TX 77004
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
