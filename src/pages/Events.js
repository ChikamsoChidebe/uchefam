import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Events = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container-custom text-center">
          <FaCalendarAlt className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-playfair font-bold mb-6">Uche Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional event management, T-shirt branding, and promotional services
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;