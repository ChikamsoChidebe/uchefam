import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaTruck, 
  FaWarehouse, 
  FaBoxes, 
  FaHeadset, 
  FaClock, 
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaUsers,
  FaAward,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalculator,
  FaFileAlt,
  FaDownload,
  FaPlay,
  FaQuoteLeft,
  FaIndustry,
  FaRocket,
  FaBolt,
  FaEye,
  FaHandshake,
  FaBullseye,
  FaMedal,
  FaBuilding,
  FaRoute,
  FaBarcode,
  FaWifi,
  FaLock,
  FaThermometerHalf
} from 'react-icons/fa';
import { useRef } from 'react';

const Logistics = () => {
  const [activeService, setActiveService] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [quoteForm, setQuoteForm] = useState({
    service: '',
    weight: '',
    distance: '',
    urgency: 'standard'
  });
  const [trackingNumber, setTrackingNumber] = useState('');
  const [stats, setStats] = useState({
    deliveries: 0,
    clients: 0,
    cities: 0,
    satisfaction: 0
  });

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });

  // Animate stats when in view
  useEffect(() => {
    if (statsInView) {
      const animateStats = () => {
        const targets = { deliveries: 15000, clients: 850, cities: 42, satisfaction: 99.8 };
        const duration = 2500;
        const steps = 100;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = easeOutQuart(step / steps);
          
          setStats({
            deliveries: Math.floor(targets.deliveries * progress),
            clients: Math.floor(targets.clients * progress),
            cities: Math.floor(targets.cities * progress),
            satisfaction: Math.floor(targets.satisfaction * progress * 100) / 100
          });

          if (step >= steps) {
            clearInterval(timer);
            setStats(targets);
          }
        }, stepTime);
      };

      const timer = setTimeout(animateStats, 500);
      return () => clearTimeout(timer);
    }
  }, [statsInView]);

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const services = [
    {
      icon: FaTruck,
      title: 'Express Delivery',
      subtitle: 'Lightning-Fast Solutions',
      description: 'Same-day and next-day delivery services with real-time tracking and guaranteed delivery windows. Perfect for urgent shipments and time-sensitive deliveries.',
      features: [
        { icon: FaBolt, text: 'Same-day delivery available' },
        { icon: FaClock, text: '2-hour delivery windows' },
        { icon: FaEye, text: 'Real-time GPS tracking' },
        { icon: FaShieldAlt, text: 'Insurance coverage included' }
      ],
      pricing: 'From ₦2,500',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    },
    {
      icon: FaWarehouse,
      title: 'Smart Warehousing',
      subtitle: 'Secure Storage Solutions',
      description: 'State-of-the-art warehousing facilities with climate control, 24/7 security, and advanced inventory management systems for optimal storage conditions.',
      features: [
        { icon: FaThermometerHalf, text: 'Climate-controlled environment' },
        { icon: FaLock, text: '24/7 security monitoring' },
        { icon: FaWifi, text: 'IoT-enabled tracking' },
        { icon: FaBarcode, text: 'Automated inventory system' }
      ],
      pricing: 'From ₦500/m²/month',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop'
    },
    {
      icon: FaBoxes,
      title: 'Inventory Management',
      subtitle: 'Intelligent Stock Control',
      description: 'Comprehensive inventory management with automated reordering, demand forecasting, and detailed analytics to optimize your supply chain efficiency.',
      features: [
        { icon: FaChartLine, text: 'Demand forecasting' },
        { icon: FaRocket, text: 'Automated reordering' },
        { icon: FaFileAlt, text: 'Detailed reporting' },
        { icon: FaBullseye, text: 'Stock optimization' }
      ],
      pricing: 'Custom pricing',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop'
    },
    {
      icon: FaHeadset,
      title: 'Customer Support',
      subtitle: '24/7 Dedicated Service',
      description: 'Round-the-clock customer support with dedicated account managers, multilingual assistance, and proactive communication for seamless service experience.',
      features: [
        { icon: FaClock, text: '24/7 availability' },
        { icon: FaUsers, text: 'Dedicated account managers' },
        { icon: FaGlobe, text: 'Multilingual support' },
        { icon: FaHandshake, text: 'Proactive communication' }
      ],
      pricing: 'Included in all packages',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      price: '₦25,000',
      period: '/month',
      description: 'Perfect for small businesses starting their logistics journey',
      features: [
        'Up to 50 deliveries/month',
        'Basic tracking system',
        'Email support',
        'Standard delivery speed',
        'Basic insurance coverage'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Business Package',
      price: '₦75,000',
      period: '/month',
      description: 'Ideal for growing businesses with regular shipping needs',
      features: [
        'Up to 200 deliveries/month',
        'Advanced tracking & analytics',
        'Priority phone support',
        'Express delivery options',
        'Enhanced insurance coverage',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solutions for large-scale operations',
      features: [
        'Unlimited deliveries',
        'Custom integration & API',
        '24/7 premium support',
        'Same-day delivery guarantee',
        'Full insurance coverage',
        'Dedicated logistics team',
        'Custom reporting dashboard'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Adebayo Ogundimu',
      role: 'Supply Chain Director',
      company: 'MedCare Pharmaceuticals',
      content: 'Uche Logistics transformed our medical supply distribution. Their temperature-controlled warehousing and reliable delivery network have been crucial for our pharmaceutical operations. We\'ve seen a 40% improvement in delivery efficiency.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Mrs. Funmi Adeleke',
      role: 'Operations Manager',
      company: 'Adeleke Fashion House',
      content: 'The inventory management system provided by Uche Logistics has revolutionized our fashion retail operations. Real-time stock tracking and automated reordering have reduced our inventory costs by 30% while improving customer satisfaction.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Engr. Chukwuma Nwosu',
      role: 'Logistics Coordinator',
      company: 'Nwosu Electronics',
      content: 'Outstanding service quality and reliability. Their express delivery service has enabled us to offer same-day delivery to our customers in Lagos and Abuja. The real-time tracking system gives us complete visibility of our shipments.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Handle quote calculation
    console.log('Quote request:', quoteForm);
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    // Handle tracking lookup
    console.log('Tracking:', trackingNumber);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FaTruck className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Uche Logistics
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-4 opacity-90 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Moving Your World Forward
            </motion.p>
            
            <motion.p 
              className="text-xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Revolutionary logistics solutions that redefine efficiency and reliability. From same-day delivery to comprehensive supply chain management, we ensure your goods reach their destination with precision, speed, and absolute security.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="btn btn-secondary text-lg px-10 py-5 group">
                Get Instant Quote
                <FaCalculator className="ml-3 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button className="btn btn-outline text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-gray-900 group">
                <FaPlay className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </motion.div>

            {/* Quick Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleTrackingSubmit} className="flex">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-r-xl transition-colors duration-300"
                >
                  Track
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaTruck className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.deliveries.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Successful Deliveries</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaUsers className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaMapMarkerAlt className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.cities}
              </div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaStar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Comprehensive Logistics Solutions
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              From express delivery to intelligent warehousing, our integrated logistics platform delivers end-to-end solutions that drive efficiency and growth for your business.
            </motion.p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeService === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {React.createElement(service.icon, { className: "w-5 h-5" })}
                  <span>{service.title}</span>
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                      {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-gray-900">
                        {services[activeService].title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          {React.createElement(feature.icon, { className: "w-4 h-4 text-green-600" })}
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {services[activeService].pricing}
                      </div>
                    </div>
                    
                    <button className="btn btn-primary group">
                      Get Quote
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                Pricing Plans
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Choose Your Perfect Plan
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Flexible pricing options designed to scale with your business needs, from startups to enterprise-level operations.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {pkg.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Client Success Stories
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold mb-8"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <FaQuoteLeft className="w-8 h-8 text-white/60 mb-6" />
                
                <p className="text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                    <div className="text-sm opacity-60">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                  Get In Touch
                </span>
                
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
                  Ready to Transform Your Logistics?
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Contact our logistics experts today and discover how Uche Logistics can streamline your operations, reduce costs, and accelerate your business growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+234 XXX XXX XXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">logistics@uchegroup.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Manager</div>
                    <div className="text-gray-600">Chidera Uche - Chief Operations Officer</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Get Your Custom Quote
              </h3>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                    required
                  />
                </div>
                
                <select
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({...quoteForm, service: e.target.value})}
                  className="input-field"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="express">Express Delivery</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="inventory">Inventory Management</option>
                  <option value="custom">Custom Solution</option>
                </select>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Package Weight (kg)"
                    value={quoteForm.weight}
                    onChange={(e) => setQuoteForm({...quoteForm, weight: e.target.value})}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Distance (km)"
                    value={quoteForm.distance}
                    onChange={(e) => setQuoteForm({...quoteForm, distance: e.target.value})}
                    className="input-field"
                  />
                </div>
                
                <textarea
                  placeholder="Additional Requirements"
                  rows="4"
                  className="input-field"
                ></textarea>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg py-4 group"
                >
                  Get Instant Quote
                  <FaCalculator className="ml-3 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;