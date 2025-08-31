import React from 'react';
import { FaSeedling } from 'react-icons/fa';

const Agriculture = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container-custom text-center">
          <FaSeedling className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-playfair font-bold mb-6">Uche Agro</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Agricultural ventures, trade, and export services
          </p>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;