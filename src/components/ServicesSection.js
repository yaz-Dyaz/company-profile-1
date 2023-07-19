import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros ultrices.</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Service 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros ultrices.</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Service 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros ultrices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
