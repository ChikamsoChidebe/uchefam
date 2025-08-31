import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPrint, 
  FaPalette, 
  FaTshirt, 
  FaGift, 
  FaBuilding, 
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaDownload,
  FaPlay,
  FaCalculator,
  FaFileAlt,
  FaImage,
  FaCrown,
  FaGem,
  FaRocket,
  FaInfinity,
  FaMagic,
  FaEye,
  FaHeart,
  FaThumbsUp,
  FaClock,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaBolt,
  FaFire,
  FaChartLine
} from 'react-icons/fa';

const Printing = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [orderForm, setOrderForm] = useState({
    productType: '',
    quantity: '',
    design: '',
    urgency: 'standard'
  });
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    designs: 0,
    satisfaction: 0
  });

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const productsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });

  // Animate stats when in view
  useEffect(() => {
    if (statsInView) {
      const animateStats = () => {
        const targets = { projects: 8500, clients: 650, designs: 12000, satisfaction: 99.5 };
        const duration = 2500;
        const steps = 100;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = easeOutQuart(step / steps);
          
          setStats({
            projects: Math.floor(targets.projects * progress),
            clients: Math.floor(targets.clients * progress),
            designs: Math.floor(targets.designs * progress),
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

  const productCategories = [
    {
      icon: FaTshirt,
      title: 'Custom Apparel',
      subtitle: 'Wear Your Brand with Pride',
      description: 'Premium quality custom clothing that makes a statement. From corporate uniforms to personal fashion, we transform your ideas into wearable art with precision printing and superior materials.',
      features: [
        { icon: FaCrown, text: 'Premium fabric selection' },
        { icon: FaGem, text: 'High-resolution printing' },
        { icon: FaRocket, text: 'Fast production times' },
        { icon: FaInfinity, text: 'Unlimited design revisions' }
      ],
      products: ['T-Shirts', 'Hoodies', 'Polo Shirts', 'Caps', 'Uniforms', 'Jackets'],
      pricing: 'From ₦2,500',
      image: '/api/placeholder/600/400'
    },
    {
      icon: FaGift,
      title: 'Souvenirs & Gifts',
      subtitle: 'Memories That Last Forever',
      description: 'Create meaningful keepsakes and memorable gifts that capture special moments. Our personalized souvenirs combine quality craftsmanship with emotional value.',
      features: [
        { icon: FaMagic, text: 'Personalized designs' },
        { icon: FaHeart, text: 'Emotional connection' },
        { icon: FaEye, text: 'Attention to detail' },
        { icon: FaShieldAlt, text: 'Durable materials' }
      ],
      products: ['Mugs', 'Keychains', 'Photo Frames', 'Calendars', 'Notebooks', 'Awards'],
      pricing: 'From ₦1,500',
      image: '/api/placeholder/600/400'
    },
    {
      icon: FaBuilding,
      title: 'Corporate Branding',
      subtitle: 'Professional Identity Solutions',
      description: 'Elevate your business image with comprehensive branding solutions. From business cards to large-format displays, we help establish your professional presence.',
      features: [
        { icon: FaLightbulb, text: 'Strategic design thinking' },
        { icon: FaHandshake, text: 'Professional consultation' },
        { icon: FaBolt, text: 'Quick turnaround' },
        { icon: FaFire, text: 'Impact-driven results' }
      ],
      products: ['Business Cards', 'Letterheads', 'Banners', 'Brochures', 'Signage', 'Displays'],
      pricing: 'Custom pricing',
      image: '/api/placeholder/600/400'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Starter Package',
      price: '₦15,000',
      period: '/project',
      description: 'Perfect for small orders and personal projects',
      features: [
        'Up to 50 pieces',
        'Basic design consultation',
        'Standard materials',
        '5-7 business days delivery',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Business Package',
      price: '₦45,000',
      period: '/project',
      description: 'Ideal for businesses and medium-scale orders',
      features: [
        'Up to 200 pieces',
        'Professional design service',
        'Premium materials',
        '3-5 business days delivery',
        'Priority phone support',
        'Free design revisions'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Enterprise Package',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solutions for large organizations',
      features: [
        'Unlimited quantities',
        'Dedicated design team',
        'Premium & specialty materials',
        '24-48 hours rush delivery',
        'Account manager support',
        'Brand guidelines development',
        'Bulk pricing discounts'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Mrs. Adunni Bakare',
      role: 'Brand Manager',
      company: 'Bakare Fashion House',
      content: 'Uche Custom Prints transformed our brand identity with exceptional quality merchandise. The attention to detail and creative expertise resulted in a 70% increase in brand recognition. Their team understands fashion and delivers beyond expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Dr. Kemi Adeleke',
      role: 'Event Coordinator',
      company: 'Adeleke Medical Conference',
      content: 'Outstanding service for our annual medical conference. They produced 500 custom t-shirts, branded materials, and souvenirs with perfect precision. The quality exceeded our expectations and impressed all our international delegates.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Chief Emeka Okafor',
      role: 'CEO',
      company: 'Okafor Industries',
      content: 'Professional corporate branding solutions that elevated our company image. From business cards to large banners, every piece reflects quality and professionalism. Our clients consistently compliment our branded materials.',
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

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log('Order request:', orderForm);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
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
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FaPrint className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Uche Custom Prints
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-4 opacity-90 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Vision, Our Masterpiece
            </motion.p>
            
            <motion.p 
              className="text-xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transform your ideas into stunning reality with our premium printing services. From corporate branding to personal keepsakes, we deliver exceptional quality that makes lasting impressions and builds memorable experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="btn btn-secondary text-lg px-10 py-5 group">
                Start Your Project
                <FaRocket className="ml-3 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button className="btn btn-outline text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-gray-900 group">
                <FaPlay className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaFileAlt className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.projects.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaUsers className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaImage className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.designs.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Unique Designs</div>
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

      {/* Products Section */}
      <section ref={productsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                Our Products
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Premium Printing Solutions
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              From custom apparel to corporate branding, our comprehensive printing services deliver exceptional quality and creative excellence for every project.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {productCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {React.createElement(category.icon, { className: "w-5 h-5" })}
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                      {React.createElement(productCategories[activeCategory].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-gray-900">
                        {productCategories[activeCategory].title}
                      </h3>
                      <p className="text-lg text-purple-600 font-medium">
                        {productCategories[activeCategory].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {productCategories[activeCategory].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {productCategories[activeCategory].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          {React.createElement(feature.icon, { className: "w-4 h-4 text-green-600" })}
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Available Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {productCategories[activeCategory].products.map((product, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Starting from</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {productCategories[activeCategory].pricing}
                      </div>
                    </div>
                    
                    <button className="btn btn-primary group">
                      Order Now
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={productCategories[activeCategory].image}
                    alt={productCategories[activeCategory].title}
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
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">
                Pricing Plans
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Flexible Pricing Options
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Choose the perfect package for your printing needs, from personal projects to large-scale corporate campaigns.
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
                    ? 'border-purple-500 scale-105' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {pkg.id === 'premium' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white">
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
              Creative Excellence Recognized
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
                <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
                  Start Your Project
                </span>
                
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
                  Ready to Bring Your Vision to Life?
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Contact our creative team today and discover how Uche Custom Prints can transform your ideas into stunning printed materials that make lasting impressions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+234 XXX XXX XXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">printing@uchegroup.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Creative Director</div>
                    <div className="text-gray-600">Chinonso Uche</div>
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
              
              <form onSubmit={handleOrderSubmit} className="space-y-6">
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
                  value={orderForm.productType}
                  onChange={(e) => setOrderForm({...orderForm, productType: e.target.value})}
                  className="input-field"
                  required
                >
                  <option value="">Select Product Type</option>
                  <option value="apparel">Custom Apparel</option>
                  <option value="souvenirs">Souvenirs & Gifts</option>
                  <option value="corporate">Corporate Branding</option>
                  <option value="other">Other</option>
                </select>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({...orderForm, quantity: e.target.value})}
                    className="input-field"
                    min="1"
                  />
                  <select
                    value={orderForm.urgency}
                    onChange={(e) => setOrderForm({...orderForm, urgency: e.target.value})}
                    className="input-field"
                  >
                    <option value="standard">Standard (5-7 days)</option>
                    <option value="express">Express (3-5 days)</option>
                    <option value="rush">Rush (24-48 hours)</option>
                  </select>
                </div>
                
                <textarea
                  placeholder="Design Requirements & Special Instructions"
                  rows="4"
                  className="input-field"
                ></textarea>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg py-4 group"
                >
                  Get Custom Quote
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

export default Printing;