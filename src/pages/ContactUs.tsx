import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Calendar } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general',
    });
  };

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
        'Houston, TX 77004'
      ],
      description: 'Visit us on campus',
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      description: 'When you can reach us',
    },
  ];

  const facultyContacts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Principal Investigator',
      email: 's.chen@uh.edu',
      phone: '(713) 743-4010',
      office: 'Engineering Building, Room 305',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Biomedical Imaging', 'Signal Processing'],
    },
    {
      name: 'Dr. Michael Rodriguez',
      title: 'Associate Professor',
      email: 'm.rodriguez@uh.edu',
      phone: '(713) 743-4011',
      office: 'Engineering Building, Room 307',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Nanomaterials', 'Energy Systems'],
    },
    {
      name: 'Dr. Jennifer Wu',
      title: 'Assistant Professor',
      email: 'j.wu@uh.edu',
      phone: '(713) 743-4012',
      office: 'Engineering Building, Room 309',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Machine Learning', 'AI Applications'],
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'student', label: 'Student Opportunities' },
    { value: 'industry', label: 'Industry Partnership' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Get in touch with our research team for collaborations, inquiries, and opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Brief subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
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
              
              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:lab@uh.edu"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Email Us Directly
                </a>
                
                <a
                  href="tel:+17137434000"
                  className="w-full border-2 border-red-600 text-red-600 py-3 px-6 rounded-lg font-medium hover:bg-red-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Contacts</h2>
            <p className="text-xl text-gray-600">
              Connect directly with our research faculty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyContacts.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{faculty.name}</h3>
                  <p className="text-red-600 font-medium">{faculty.title}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail size={16} className="mr-3 text-red-600" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-red-600">
                      {faculty.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-3 text-red-600" />
                    <a href={`tel:${faculty.phone}`} className="hover:text-red-600">
                      {faculty.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-3 text-red-600" />
                    <span>{faculty.office}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Laboratory</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the University of Houston campus
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">
                University of Houston<br />
                4800 Calhoun Road<br />
                Houston, TX 77004
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our research and collaboration opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I collaborate with your lab?</h3>
              <p className="text-gray-600">
                We welcome collaborations from academic institutions, industry partners, and research organizations. 
                Contact us with your research proposal and we'll discuss potential opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer student research positions?</h3>
              <p className="text-gray-600">
                Yes! We regularly offer research opportunities for undergraduate and graduate students. 
                Check our "Join Us" page for current openings or reach out to discuss possibilities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I visit your laboratory?</h3>
              <p className="text-gray-600">
                Laboratory visits can be arranged by appointment. Please contact us in advance to 
                schedule a visit and we'll be happy to show you our facilities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I access your research publications?</h3>
              <p className="text-gray-600">
                Our publications are available through our Research page, as well as through academic 
                databases. For specific papers or collaborations, feel free to contact the relevant faculty member.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;