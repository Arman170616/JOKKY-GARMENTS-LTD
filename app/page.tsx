// app/page.tsx

import React from 'react';
import Carousel from './components/Carousel';

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="py-10 bg-orange-200 text-white text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Midori</h1>
        <p className="text-lg mt-2">Sustainability through Innovation</p>
        <section className="my-12">
        <Carousel />
      </section>
      </header>

      {/* Carousel Section */}


      {/* Mission and Vision Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Mission and Vision</h2>
          <p className="text-lg leading-relaxed">
            At Midori, our mission is to create sustainable and eco-friendly solutions
            that enhance the quality of life for our customers. Our vision is to be a
            leader in green technology, inspiring others to adopt environmentally
            responsible practices.
          </p>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="py-16 px-8 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Activities</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Developing innovative green technologies</li>
            <li>Organizing community events focused on sustainability</li>
            <li>Partnering with organizations to promote eco-friendly practices</li>
          </ul>
        </div>
      </section>

      {/* Why Midori Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Why Midori</h2>
          <p className="text-lg leading-relaxed">
            Midori stands out for its commitment to sustainability and innovation. We
            prioritize the environment in all our business practices, ensuring that our
            products and services contribute to a healthier planet.
          </p>
        </div>
      </section>

      <footer className="py-10 bg-green-600 text-white text-center">
        <p>&copy; 2024 Midori. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
