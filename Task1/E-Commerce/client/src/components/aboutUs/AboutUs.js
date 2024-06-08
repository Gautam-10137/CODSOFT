import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us bg-gradient-to-r from-gray-100 to-blue-50 p-10 min-h-screen">
      <div className="container mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-700">About Us</h1>
        <p className="text-lg mb-6 text-gray-700">
          Welcome to <strong>CartEase</strong>, your number one source for all things electronics and fashion. We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          Founded in 2024 by Gautam Pahwa, <strong>CartEase</strong> has come a long way from its beginnings in Mullana, Ambala. When Gautam Pahwa first started out, his passion for providing high-quality products drove him to do intense research so that <strong>CartEase</strong> can offer you the best selection of electronics and fashion items. We now serve customers all over India, and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg font-bold text-gray-800">Sincerely,</p>
        <p className="text-lg text-gray-800">Gautam Pahwa, Founder</p>
      </div>
    </div>
  );
};

export default AboutUs;
