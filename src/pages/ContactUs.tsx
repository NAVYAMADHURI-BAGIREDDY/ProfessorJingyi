import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['engineeringlab@uh.edu', 'contact@uh.edu'],
      description: 'General inquiries, research collaborations, and student opportunities',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['(713) 743-4500'],
      description: 'Main office line for the Engineering Laboratory',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: [
        'Engineering Building 1 (ENG1)',
        'University of Houston',
        '4726 Calhoun Rd',
        'Houston, TX 77004',
      ],
      description: 'Visit us in the UH Cullen College of Engineering',
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday - Sunday: Closed',
      ],
      description: 'We are available during regular university business hours',
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
      {/* Visit Our Laboratory Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Laboratory</h2>
    <p className="text-lg text-gray-600 mb-8">
      Located in the heart of the University of Houston campus
    </p>

    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <MapPin size={40} className="text-red-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Engineering Building Location</h3>
      <p className="text-gray-600 mb-6">
        University of Houston<br />
        Engineering Building 1 (ENG1)<br />
        4800 Calhoun Road<br />
        Houston, TX 77004
      </p>

      {/* Embedded Google Map */}
      <div className="w-full h-96 rounded-lg overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.4230815156194!2d-95.342293!3d29.721707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0b18e6e9c3d%3A0xd1a6a38c04cc4a0!2sEngineering%20Building%201%20-%20University%20of%20Houston!5e0!3m2!1sen!2sus!4v1694201100000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;
