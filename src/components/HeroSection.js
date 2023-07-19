import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-teal-500 text-white py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
        <p className="text-lg">We provide high-quality services to meet your needs.</p>
        <button className="mt-8 bg-white text-teal-500 font-semibold py-2 px-6 rounded hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
