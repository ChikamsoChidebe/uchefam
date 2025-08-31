import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">UCHE GROUP</h3>
            <p className="text-gray-300 mb-4">Building Legacy, Empowering Generations</p>
            <div className="flex space-x-4">
              <FaFacebook className="w-5 h-5 hover:text-primary-400 cursor-pointer" />
              <FaTwitter className="w-5 h-5 hover:text-primary-400 cursor-pointer" />
              <FaInstagram className="w-5 h-5 hover:text-primary-400 cursor-pointer" />
              <FaLinkedin className="w-5 h-5 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Business Units</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/logistics" className="hover:text-white">Logistics</Link></li>
              <li><Link to="/printing" className="hover:text-white">Custom Printing</Link></li>
              <li><Link to="/real-estate" className="hover:text-white">Real Estate</Link></li>
              <li><Link to="/beauty" className="hover:text-white">Beauty Supply</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/agriculture" className="hover:text-white">Agriculture</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span>info@uchegroup.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                <span>+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Uche Group. All rights reserved. Building Legacy, Empowering Generations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;