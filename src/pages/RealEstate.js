import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBuilding, 
  FaHome, 
  FaKey, 
  FaChartLine, 
  FaDollarSign, 
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaCalculator,
  FaFileAlt,
  FaEye,
  FaHandshake,
  FaShieldAlt,
  FaTrophy,
  FaBullseye,
  FaCrown,
  FaGem,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaThumbsUp,
  FaClock,
  FaIndustry,
  FaWarehouse,
  FaCity
} from 'react-icons/fa';

const RealEstate = () => {
  const [activeService, setActiveService] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('residential');
  const [inquiryForm, setInquiryForm] = useState({
    propertyType: '',
    budget: '',
    location: '',
    purpose: 'buy'
  });
  const [stats, setStats] = useState({
    properties: 0,
    clients: 0,
    value: 0,
    roi: 0
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
        const targets = { properties: 350, clients: 280, value: 4.2, roi: 28 };
        const duration = 2500;
        const steps = 100;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = easeOutQuart(step / steps);
          
          setStats({
            properties: Math.floor(targets.properties * progress),
            clients: Math.floor(targets.clients * progress),
            value: Math.floor(targets.value * progress * 10) / 10,
            roi: Math.floor(targets.roi * progress)
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
      icon: FaHome,
      title: 'Property Sales',
      subtitle: 'Premium Real Estate Solutions',
      description: 'Discover exceptional properties that match your lifestyle and investment goals. Our curated portfolio features prime residential and commercial properties in strategic locations across Nigeria.',
      features: [
        { icon: FaCrown, text: 'Prime locations only' },
        { icon: FaGem, text: 'Luxury property portfolio' },
        { icon: FaRocket, text: 'Fast transaction process' },
        { icon: FaShieldAlt, text: 'Legal documentation support' }
      ],
      pricing: 'From ₦15M',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      icon: FaDollarSign,
      title: 'Investment Advisory',
      subtitle: 'Strategic Property Investment',
      description: 'Maximize your returns with expert investment guidance. Our team analyzes market trends, identifies high-potential properties, and provides comprehensive investment strategies.',
      features: [
        { icon: FaLightbulb, text: 'Market analysis & insights' },
        { icon: FaChartLine, text: 'ROI optimization' },
        { icon: FaHandshake, text: 'Portfolio management' },
        { icon: FaBullseye, text: 'Strategic planning' }
      ],
      pricing: 'Consultation from ₦50K',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    },
    {
      icon: FaTrophy,
      title: 'Property Development',
      subtitle: 'Award-Winning Projects',
      description: 'Transform visions into reality with our comprehensive development services. From concept to completion, we deliver exceptional residential and commercial projects.',
      features: [
        { icon: FaAward, text: 'Award-winning designs' },
        { icon: FaUsers, text: 'Expert project team' },
        { icon: FaClock, text: 'Timely delivery' },
        { icon: FaHeart, text: 'Sustainable development' }
      ],
      pricing: 'Custom project pricing',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop'
    },
    {
      icon: FaKey,
      title: 'Property Management',
      subtitle: 'Complete Asset Care',
      description: 'Protect and enhance your property investments with our comprehensive management services. We handle everything from tenant relations to maintenance and financial reporting.',
      features: [
        { icon: FaThumbsUp, text: 'Tenant satisfaction' },
        { icon: FaFileAlt, text: 'Detailed reporting' },
        { icon: FaShieldAlt, text: 'Asset protection' },
        { icon: FaDollarSign, text: 'Revenue optimization' }
      ],
      pricing: '5-8% of rental income',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop'
    }
  ];

  const propertyTypes = [
    {
      id: 'residential',
      name: 'Residential Properties',
      icon: FaHome,
      description: 'Luxury homes, apartments, and condominiums in prime locations',
      properties: [
        { name: 'Luxury Apartments', price: '₦25M - ₦80M', location: 'Victoria Island, Lagos' },
        { name: 'Executive Homes', price: '₦45M - ₦150M', location: 'Lekki, Lagos' },
        { name: 'Penthouses', price: '₦100M - ₦300M', location: 'Ikoyi, Lagos' }
      ]
    },
    {
      id: 'commercial',
      name: 'Commercial Properties',
      icon: FaBuilding,
      description: 'Office spaces, retail outlets, and commercial complexes',
      properties: [
        { name: 'Office Complexes', price: '₦200M - ₦2B', location: 'Central Business District' },
        { name: 'Retail Spaces', price: '₦50M - ₦500M', location: 'Shopping Districts' },
        { name: 'Warehouses', price: '₦80M - ₦800M', location: 'Industrial Areas' }
      ]
    },
    {
      id: 'industrial',
      name: 'Industrial Properties',
      icon: FaIndustry,
      description: 'Manufacturing facilities, warehouses, and industrial complexes',
      properties: [
        { name: 'Manufacturing Plants', price: '₦500M - ₦5B', location: 'Industrial Zones' },
        { name: 'Logistics Centers', price: '₦300M - ₦2B', location: 'Transport Hubs' },
        { name: 'Storage Facilities', price: '₦100M - ₦1B', location: 'Strategic Locations' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Alhaji Musa Ibrahim',
      role: 'Real Estate Investor',
      company: 'Ibrahim Holdings',
      content: 'Uche Properties helped me build a diversified real estate portfolio worth over ₦2 billion. Their market insights and strategic guidance have consistently delivered returns above 25% annually. Exceptional service and professionalism.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Mrs. Folake Adebayo',
      role: 'Property Developer',
      company: 'Adebayo Developments',
      content: 'Outstanding property management services for our luxury apartment complex. They increased our occupancy rate to 98% and rental income by 40%. Their attention to detail and tenant relations are exemplary.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Chief Emeka Okafor',
      role: 'Business Executive',
      company: 'Okafor Group',
      content: 'Purchased three commercial properties through Uche Properties. Their due diligence process, legal support, and market analysis were thorough. All properties have appreciated significantly and generate excellent rental yields.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
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

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    console.log('Property inquiry:', inquiryForm);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
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
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FaBuilding className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Uche Properties
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-4 opacity-90 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building Dreams, Creating Wealth
            </motion.p>
            
            <motion.p 
              className="text-xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Navigate the real estate landscape with confidence through our comprehensive property solutions. We specialize in premium developments, strategic investments, and professional management services that generate sustainable returns and build generational wealth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="btn btn-secondary text-lg px-10 py-5 group">
                View Properties
                <FaEye className="ml-3 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button className="btn btn-outline text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-gray-900 group">
                <FaCalculator className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Investment Calculator
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaBuilding className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.properties}+
              </div>
              <div className="text-gray-600 font-medium">Properties Sold</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaUsers className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaDollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                ₦{stats.value}B+
              </div>
              <div className="text-gray-600 font-medium">Property Value</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaChartLine className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.roi}%+
              </div>
              <div className="text-gray-600 font-medium">Average ROI</div>
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
              <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Comprehensive Real Estate Solutions
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              From property acquisition to development and management, our integrated real estate platform delivers end-to-end solutions that maximize value and minimize risk.
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
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
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
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
                      {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-gray-900">
                        {services[activeService].title}
                      </h3>
                      <p className="text-lg text-green-600 font-medium">
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
                      Learn More
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

      {/* Property Types */}
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
              <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                Property Portfolio
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Premium Property Selection
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our curated collection of premium properties across residential, commercial, and industrial sectors in Nigeria's most desirable locations.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {propertyTypes.map((type, index) => (
              <motion.div
                key={type.id}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(type.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                
                <div className="space-y-4">
                  {type.properties.map((property, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{property.name}</h4>
                        <span className="text-green-600 font-bold text-sm">{property.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                        {property.location}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  View All Properties
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
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
              Wealth Creation Through Real Estate
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
                <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
                  Property Inquiry
                </span>
                
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
                  Ready to Invest in Your Future?
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Contact our real estate experts today and discover premium property opportunities that align with your investment goals and lifestyle preferences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+234 XXX XXX XXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">realestate@uchegroup.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Property Specialists</div>
                    <div className="text-gray-600">Real Estate Division</div>
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
                Property Inquiry Form
              </h3>
              
              <form onSubmit={handleInquirySubmit} className="space-y-6">
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
                  value={inquiryForm.propertyType}
                  onChange={(e) => setInquiryForm({...inquiryForm, propertyType: e.target.value})}
                  className="input-field"
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="land">Land</option>
                </select>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={inquiryForm.purpose}
                    onChange={(e) => setInquiryForm({...inquiryForm, purpose: e.target.value})}
                    className="input-field"
                  >
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    <option value="invest">Investment</option>
                    <option value="develop">Development</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Budget Range"
                    value={inquiryForm.budget}
                    onChange={(e) => setInquiryForm({...inquiryForm, budget: e.target.value})}
                    className="input-field"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Preferred Location"
                  value={inquiryForm.location}
                  onChange={(e) => setInquiryForm({...inquiryForm, location: e.target.value})}
                  className="input-field"
                />
                
                <textarea
                  placeholder="Additional Requirements"
                  rows="4"
                  className="input-field"
                ></textarea>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg py-4 group"
                >
                  Submit Inquiry
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;