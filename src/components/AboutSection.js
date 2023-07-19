import React from 'react';
import aboutImage from '../img/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

        <div className="flex flex-col md:flex-row items-center justify-center my-5">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={aboutImage}
              alt="About"
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)' }}
            />
          </div>

          <div className="md:w-1/2">
            <p className="text-lg text-center mb-5 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros ultrices, hendrerit odio vitae, fermentum nisl. Duis lacinia purus ac sem sollicitudin, nec suscipit ipsum volutpat. Vestibulum et ex ligula.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center my-5">
          <div className="md:w-1/2 mb-8 md:mt-0 order-last md:order-none">
            <p className="text-lg text-center mt-8 md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros ultrices, hendrerit odio vitae, fermentum nisl. Duis lacinia purus ac sem sollicitudin, nec suscipit ipsum volutpat. Vestibulum et ex ligula.
            </p>
          </div>

          <div className="md:w-1/2 order-first md:order-none">
            <img
              src={aboutImage}
              alt="About"
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
