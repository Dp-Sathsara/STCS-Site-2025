import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
const Contact: React.FC = () => {
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch
            with the SCSSA team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MailIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 mb-1">General Inquiries:</p>
                  <a href="mailto:scssa@kln.ac.lk" className="text-blue-600 hover:underline">
                    scssa@kln.ac.lk
                  </a>
                  <p className="text-gray-600 mb-1 mt-3">President:</p>
                  <a href="mailto:president.scssa@kln.ac.lk" className="text-blue-600 hover:underline">
                    president.scssa@kln.ac.lk
                  </a>
                  <p className="text-gray-600 mb-1 mt-3">Secretary:</p>
                  <a href="mailto:secretary.scssa@kln.ac.lk" className="text-blue-600 hover:underline">
                    secretary.scssa@kln.ac.lk
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600 mb-1">Department Office:</p>
                  <p className="text-gray-800">+94 11 2903470</p>
                  <p className="text-gray-600 mb-1 mt-3">President:</p>
                  <p className="text-gray-800">+94 71 1234567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Department of Statistics & Computer Science,
                    <br />
                    Faculty of Science,
                    <br />
                    University of Kelaniya,
                    <br />
                    Kelaniya, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Office Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 4:00 PM
                <br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input type="email" id="email" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Event Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={6} className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center w-full transition-colors">
                Send Message
                <SendIcon size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        {/* Map or Location */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* Placeholder for map - in a real implementation, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p>Map Embed Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;