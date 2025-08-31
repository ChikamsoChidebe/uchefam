import React, { createContext, useContext, useState } from 'react';

const BusinessContext = createContext();

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

export const BusinessProvider = ({ children }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [businessData, setBusinessData] = useState({});

  const businessUnits = [
    {
      id: 'logistics',
      name: 'Uche Logistics',
      manager: 'Chidera',
      email: 'logistics@uchegroup.com',
      services: ['Delivery', 'Warehousing', 'Inventory Management']
    },
    {
      id: 'printing',
      name: 'Uche Custom Prints',
      manager: 'Chinonso',
      email: 'printing@uchegroup.com',
      services: ['Custom Apparel', 'Souvenirs', 'Corporate Branding']
    },
    {
      id: 'realestate',
      name: 'Uche Properties',
      manager: 'Real Estate Team',
      email: 'realestate@uchegroup.com',
      services: ['Property Sales', 'Asset Management', 'Development']
    },
    {
      id: 'beauty',
      name: 'Uche Beauty Supply',
      manager: 'Uzoma',
      email: 'beauty@uchegroup.com',
      services: ['Hair Extensions', 'Beauty Products', 'Bulk Supply']
    },
    {
      id: 'events',
      name: 'Uche Events',
      manager: 'Daniel',
      email: 'events@uchegroup.com',
      services: ['Event Planning', 'T-shirt Branding', 'Promotions']
    },
    {
      id: 'agriculture',
      name: 'Uche Agro',
      manager: 'Agriculture Team',
      email: 'agriculture@uchegroup.com',
      services: ['Crop Production', 'Trade Services', 'Export']
    }
  ];

  const value = {
    businessUnits,
    selectedBusiness,
    setSelectedBusiness,
    businessData,
    setBusinessData
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessContext;