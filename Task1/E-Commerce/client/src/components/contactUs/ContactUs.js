import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us bg-gray-100 p-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Contact Us</h1>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Our Address</h2>
          <p className="text-lg text-gray-700">Hostel 13, Room no. 16, MMU, Mullana, Ambala</p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Phone</h2>
          <p className="text-lg text-gray-700">8689014713</p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Email</h2>
          <p className="text-lg text-gray-700">pahwagautam786@gmail.com</p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Operating Hours</h2>
          <p className="text-lg text-gray-700">10 AM to 6 PM</p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">Get in Touch</h2>
          <form className="contact-form bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-800" htmlFor="name">Name</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="text" id="name" name="name" required />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-800" htmlFor="email">Email</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" required />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-800" htmlFor="message">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
