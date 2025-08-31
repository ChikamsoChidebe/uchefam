import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaUser, 
  FaSignOutAlt,
  FaTruck,
  FaPrint,
  FaHome,
  FaSprayCan,
  FaCalendarAlt,
  FaSeedling,
  FaCog,
  FaBell,
  FaSearch,
  FaBuilding,
  FaShoppingCart,
  FaHeart,
  FaBookmark,
  FaGlobe,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Enhanced scroll effect with threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setBusinessDropdown(false);
    setUserDropdown(false);
    setShowSearch(false);
  }, [location]);

  // Mock notifications for authenticated users
  useEffect(() => {
    if (user) {
      setNotifications([
        { id: 1, message: 'New order received', time: '2 min ago', type: 'order' },
        { id: 2, message: 'Project milestone completed', time: '1 hour ago', type: 'project' },
        { id: 3, message: 'Monthly report available', time: '3 hours ago', type: 'report' }
      ]);
    }
  }, [user]);

  const businessUnits = [
    { 
      name: 'Logistics', 
      path: '/logistics', 
      icon: FaTruck, 
      color: 'text-blue-600',
      description: 'Delivery & Warehousing Solutions',
      manager: 'Chidera Uche'
    },
    { 
      name: 'Custom Printing', 
      path: '/printing', 
      icon: FaPrint, 
      color: 'text-purple-600',
      description: 'Premium Printing Services',
      manager: 'Chinonso Uche'
    },
    { 
      name: 'Real Estate', 
      path: '/real-estate', 
      icon: FaBuilding, 
      color: 'text-green-600',
      description: 'Property Development & Management',
      manager: 'Real Estate Team'
    },
    { 
      name: 'Beauty Supply', 
      path: '/beauty', 
      icon: FaSprayCan, 
      color: 'text-pink-600',
      description: 'Premium Beauty Products',
      manager: 'Uzoma Uche'
    },
    { 
      name: 'Events', 
      path: '/events', 
      icon: FaCalendarAlt, 
      color: 'text-orange-600',
      description: 'Event Management & Planning',
      manager: 'Daniel Uche'
    },
    { 
      name: 'Agriculture', 
      path: '/agriculture', 
      icon: FaSeedling, 
      color: 'text-emerald-600',
      description: 'Sustainable Farming Solutions',
      manager: 'Agriculture Team'
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickActions = [
    { name: 'Get Quote', path: '/contact', icon: FaEnvelope },
    { name: 'Call Us', path: 'tel:+234XXXXXXXXX', icon: FaPhone },
    { name: 'Live Chat', path: '#', icon: FaGlobe }
  ];

  const handleLogout = () => {
    logout();
    setUserDropdown(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-lg shadow-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl lg:text-2xl">U</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </motion.div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-playfair font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                UCHE GROUP
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 -mt-1 group-hover:text-gray-800 transition-colors duration-300">
                Building Legacy, Empowering Generations
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* Enhanced Business Units Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBusinessDropdown(!businessDropdown)}
                onMouseEnter={() => setBusinessDropdown(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
              >
                <span>Our Businesses</span>
                <FaChevronDown 
                  className={`w-3 h-3 transition-transform duration-300 ${
                    businessDropdown ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence>
                {businessDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 overflow-hidden"
                    onMouseLeave={() => setBusinessDropdown(false)}
                  >
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-1">Our Business Portfolio</h3>
                      <p className="text-sm text-gray-600">Explore our diverse range of services</p>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {businessUnits.map((unit, index) => (
                        <Link
                          key={unit.name}
                          to={unit.path}
                          className="flex items-start space-x-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                            <unit.icon className={`w-6 h-6 ${unit.color}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {unit.name}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {unit.description}
                            </p>
                            <p className="text-xs text-gray-500">
                              Managed by {unit.manager}
                            </p>
                          </div>
                          
                          <FaChevronDown className="w-4 h-4 text-gray-400 transform -rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      ))}
                    </div>
                    
                    <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
                      <Link
                        to="/about"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn more about our company →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 20 }}
                    className="absolute top-full right-0 mt-2 w-80"
                  >
                    <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search services, products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          autoFocus
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 relative">
                    <FaBell className="w-5 h-5" />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdown(!userDropdown)}
                    className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 border border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500 capitalize">{user.role}</div>
                    </div>
                    <FaChevronDown 
                      className={`w-3 h-3 transition-transform duration-200 ${
                        userDropdown ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {userDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="font-semibold text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.email}</div>
                        </div>
                        
                        <Link
                          to="/dashboard"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaUser className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700">Dashboard</span>
                        </Link>
                        
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaCog className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700">Settings</span>
                        </Link>
                        
                        <Link
                          to="/favorites"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaHeart className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700">Favorites</span>
                        </Link>
                        
                        <div className="border-t border-gray-100 mt-2">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors duration-200 text-left"
                          >
                            <FaSignOutAlt className="w-4 h-4 text-red-600" />
                            <span className="text-red-600">Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {/* Quick Actions */}
                <div className="flex items-center space-x-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.path}
                      className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 group"
                      title={action.name}
                    >
                      <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    </Link>
                  ))}
                </div>
                
                <div className="w-px h-6 bg-gray-300"></div>
                
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  Sign In
                </Link>
                
                <Link
                  to="/register"
                  className="btn btn-primary px-6 py-2 text-sm"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
            >
              <div className="py-6 space-y-4 max-h-96 overflow-y-auto">
                {/* Search Bar */}
                <div className="px-4">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </form>
                </div>

                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl mx-4 font-medium transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Business Units */}
                <div className="px-4">
                  <button
                    onClick={() => setBusinessDropdown(!businessDropdown)}
                    className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <span>Our Businesses</span>
                    <FaChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        businessDropdown ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {businessDropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 space-y-2 pl-4 border-l-2 border-gray-100"
                      >
                        {businessUnits.map((unit) => (
                          <Link
                            key={unit.name}
                            to={unit.path}
                            className="flex items-center space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                          >
                            <unit.icon className={`w-4 h-4 ${unit.color}`} />
                            <span className="text-sm">{unit.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Auth */}
                <div className="px-4 pt-4 border-t border-gray-200">
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 py-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600 capitalize">{user.role}</div>
                        </div>
                      </div>
                      
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaUser className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 py-2 text-red-600 hover:text-red-700 transition-colors duration-300"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        to="/login"
                        className="block py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="block py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;