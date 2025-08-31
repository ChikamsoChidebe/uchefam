import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <h1 className="text-4xl font-playfair font-bold mb-8">Dashboard</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">Role: {user?.role}</p>
          {user?.businessUnit && (
            <p className="text-gray-600">Business Unit: {user.businessUnit}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;