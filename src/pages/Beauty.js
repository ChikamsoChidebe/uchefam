import React from 'react';
import { FaSprayCan } from 'react-icons/fa';

const Beauty = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-pink-600 to-pink-800 text-white">
        <div className="container-custom text-center">
          <FaSprayCan className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-playfair font-bold mb-6">Uche Beauty Supply</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bulk hair extensions, beauty products, and cosmetic supplies
          </p>
        </div>
      </section>
    </div>
  );
};

export default Beauty;