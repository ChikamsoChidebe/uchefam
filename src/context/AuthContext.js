import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('ucheGroupUser');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          // Verify token is still valid (basic check)
          if (userData.token && userData.expiresAt > Date.now()) {
            setUser(userData);
          } else {
            localStorage.removeItem('ucheGroupUser');
          }
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        localStorage.removeItem('ucheGroupUser');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await simulateLogin(credentials);
      
      if (response.success) {
        const userData = {
          ...response.user,
          token: response.token,
          expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        };
        
        setUser(userData);
        localStorage.setItem('ucheGroupUser', JSON.stringify(userData));
        return { success: true };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (error) {
      const errorMessage = 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await simulateRegister(userData);
      
      if (response.success) {
        const newUser = {
          ...response.user,
          token: response.token,
          expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        };
        
        setUser(newUser);
        localStorage.setItem('ucheGroupUser', JSON.stringify(newUser));
        return { success: true };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (error) {
      const errorMessage = 'Registration failed. Please try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('ucheGroupUser');
  };

  const updateProfile = async (profileData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await simulateProfileUpdate(profileData);
      
      if (response.success) {
        const updatedUser = {
          ...user,
          ...response.user,
          expiresAt: Date.now() + (24 * 60 * 60 * 1000) // Refresh expiry
        };
        
        setUser(updatedUser);
        localStorage.setItem('ucheGroupUser', JSON.stringify(updatedUser));
        return { success: true };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (error) {
      const errorMessage = 'Profile update failed. Please try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await simulatePasswordReset(email);
      
      if (response.success) {
        return { success: true, message: 'Password reset email sent successfully.' };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (error) {
      const errorMessage = 'Password reset failed. Please try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    resetPassword,
    clearError,
    isAuthenticated: !!user,
    isManager: user?.role === 'manager' || user?.role === 'admin',
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Simulate API calls - replace with actual API integration
const simulateLogin = async (credentials) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock user database
      const mockUsers = [
        {
          id: 1,
          email: 'chidera@uchegroup.com',
          password: 'password123',
          name: 'Chidera',
          role: 'manager',
          businessUnit: 'logistics',
          avatar: '/api/placeholder/150/150'
        },
        {
          id: 2,
          email: 'chinonso@uchegroup.com',
          password: 'password123',
          name: 'Chinonso',
          role: 'manager',
          businessUnit: 'printing',
          avatar: '/api/placeholder/150/150'
        },
        {
          id: 3,
          email: 'admin@uchegroup.com',
          password: 'admin123',
          name: 'Chinenye',
          role: 'admin',
          businessUnit: 'all',
          avatar: '/api/placeholder/150/150'
        },
        {
          id: 4,
          email: 'customer@example.com',
          password: 'password123',
          name: 'John Doe',
          role: 'customer',
          businessUnit: null,
          avatar: '/api/placeholder/150/150'
        }
      ];

      const user = mockUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        const { password, ...userWithoutPassword } = user;
        resolve({
          success: true,
          user: userWithoutPassword,
          token: `mock-jwt-token-${user.id}-${Date.now()}`
        });
      } else {
        resolve({
          success: false,
          message: 'Invalid email or password'
        });
      }
    }, 1000); // Simulate network delay
  });
};

const simulateRegister = async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate email validation
      if (userData.email.includes('uchegroup.com')) {
        resolve({
          success: false,
          message: 'This email domain is reserved for staff members'
        });
        return;
      }

      // Simulate successful registration
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        role: 'customer',
        businessUnit: null,
        avatar: '/api/placeholder/150/150',
        createdAt: new Date().toISOString()
      };

      resolve({
        success: true,
        user: newUser,
        token: `mock-jwt-token-${newUser.id}-${Date.now()}`
      });
    }, 1000);
  });
};

const simulateProfileUpdate = async (profileData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: profileData
      });
    }, 800);
  });
};

const simulatePasswordReset = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Password reset instructions sent to your email'
      });
    }, 1000);
  });
};

export default AuthContext;