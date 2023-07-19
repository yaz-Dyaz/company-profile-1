import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>123 Street, City, Country</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>info@company.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>+123 4567890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#fb" className="text-blue-500 hover:text-blue-700">Facebook</a>
              </li>
              <li>
                <a href="#tw" className="text-blue-500 hover:text-blue-700">Twitter</a>
              </li>
              <li>
                <a href="#ig" className="text-blue-500 hover:text-blue-700">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
