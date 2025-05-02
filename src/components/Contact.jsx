import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#07072b] text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="desc text-center lg:text-left w-full lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaPhone className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 mr-2">Phone (Whatsapp):</span>
                <p className="text-lg">(+33)6 31 11 36 93</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 mr-2">E-mail:</span>
                <p className="text-lg">mlaine@live.fr</p>
              </div>
              <div className="flex items-center mb-4">
                <FaLinkedin className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 mr-2">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/maximelaine/" target="_blank" rel="noopener noreferrer" className="text-lg">linkedin.com/in/maximelaine/</a>
              </div>
            </div>
          </div>
          <div className="desc text-center lg:text-left w-full lg:w-1/2">
            <br />
            <p className="text-xl font-bold">Certifications</p>
            <ul className="list-disc pl-5">
              <li><a href="https://www.youracclaim.com/badges/ec95cf09-26fc-40b1-a665-f4b609c25386/linked_in_profile" target="_blank" rel="noopener noreferrer">Tableau Server Certified Associate</a></li>
              <li><a href="https://www.youracclaim.com/badges/7df9a55c-4efc-4143-a039-37bd5fc70207/linked_in_profile" target="_blank" rel="noopener noreferrer">Tableau Desktop Certified Professional</a></li>
              <li><a href="https://www.youracclaim.com/badges/e55f5d61-d39f-4386-8db8-f418805f833f/linked_in_profile" target="_blank" rel="noopener noreferrer">Tableau Desktop Certified Associate</a></li>
            </ul>
            <br />
            <p className="text-xl font-bold">Tableau Public</p>
            <a href="https://public.tableau.com/profile/maxime.laine#!/" target="_blank" rel="noopener noreferrer">My Tableau Public Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}
