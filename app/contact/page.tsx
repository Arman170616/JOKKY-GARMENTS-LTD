// pages/contact.tsx

import { FC } from 'react';

const ContactPage: FC = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-700">We would love to hear from you! Please fill out the form below to get in touch.</p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            placeholder="Your Message" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
