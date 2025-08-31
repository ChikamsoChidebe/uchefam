import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaTruck, 
  FaPrint, 
  FaHome, 
  FaSprayCan, 
  FaCalendarAlt, 
  FaSeedling,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaAward,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaPlay,
  FaCheckCircle,
  FaIndustry,
  FaRocket,
  FaHeart,
  FaCrown,
  FaFire,
  FaEye,
  FaThumbsUp,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaDollarSign,
  FaTrophy,
  FaGem,
  FaBullseye,
  FaMagic,
  FaBolt,
  FaInfinity
} from 'react-icons/fa';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
    revenue: 0,
    employees: 0
  });

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const businessRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const businessInView = useInView(businessRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const heroControls = useAnimation();
  const statsControls = useAnimation();
  const businessControls = useAnimation();
  const testimonialsControls = useAnimation();

  // Advanced stats animation with easing
  useEffect(() => {
    if (statsInView) {
      const animateStats = () => {
        const targets = { 
          clients: 2500, 
          projects: 5800, 
          years: 8, 
          satisfaction: 99,
          revenue: 150,
          employees: 45
        };
        const duration = 3000;
        const steps = 120;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = easeOutQuart(step / steps);
          
          setStats({
            clients: Math.floor(targets.clients * progress),
            projects: Math.floor(targets.projects * progress),
            years: Math.floor(targets.years * progress),
            satisfaction: Math.floor(targets.satisfaction * progress),
            revenue: Math.floor(targets.revenue * progress),
            employees: Math.floor(targets.employees * progress)
          });

          if (step >= steps) {
            clearInterval(timer);
            setStats(targets);
          }
        }, stepTime);

        return () => clearInterval(timer);
      };

      const timer = setTimeout(animateStats, 500);
      return () => clearTimeout(timer);
    }
  }, [statsInView]);

  // Easing function for smooth animation
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  // Auto-rotate testimonials with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Building Tomorrow's Business Empire Today",
      subtitle: "Where Innovation Meets Legacy",
      description: "From our grandparents' vision to cutting-edge solutions, we're creating sustainable enterprises that transform communities and empower generations through strategic innovation and unwavering excellence.",
      cta: "Discover Our Vision",
      background: "from-indigo-900 via-purple-900 to-pink-900"
    },
    {
      title: "Transforming Industries, Empowering Communities",
      subtitle: "Excellence in Every Venture",
      description: "Six dynamic business units working in perfect harmony to deliver unparalleled value. We don't just serve markets – we create them, lead them, and revolutionize them with purpose-driven solutions.",
      cta: "Explore Our Impact",
      background: "from-blue-900 via-indigo-900 to-purple-900"
    },
    {
      title: "Your Success Story Starts Here",
      subtitle: "Partnership Beyond Business",
      description: "Join thousands of satisfied clients who've experienced the Uche Group difference. We're not just service providers – we're strategic partners committed to your growth, success, and long-term prosperity.",
      cta: "Start Your Journey",
      background: "from-purple-900 via-pink-900 to-red-900"
    }
  ];

  const businessUnits = [
    {
      name: 'Uche Logistics',
      tagline: 'Moving Your World Forward',
      description: 'Revolutionary logistics solutions that redefine efficiency. From same-day delivery to comprehensive supply chain management, we ensure your goods reach their destination with precision, speed, and absolute reliability.',
      icon: FaTruck,
      path: '/logistics',
      color: 'from-blue-600 to-cyan-600',
      features: [
        { icon: FaBolt, text: 'Lightning-Fast Delivery' },
        { icon: FaShieldAlt, text: 'Secure Warehousing' },
        { icon: FaChartLine, text: 'Real-Time Tracking' },
        { icon: FaClock, text: '24/7 Operations' }
      ],
      manager: 'Chidera Uche',
      role: 'Chief Operations Officer',
      stats: { deliveries: '10K+', satisfaction: '99.8%', coverage: '36 States' }
    },
    {
      name: 'Uche Custom Prints',
      tagline: 'Your Vision, Our Masterpiece',
      description: 'Transform ideas into stunning reality with our premium printing services. From corporate branding to personal keepsakes, we deliver exceptional quality that makes lasting impressions and builds memorable experiences.',
      icon: FaPrint,
      path: '/printing',
      color: 'from-purple-600 to-pink-600',
      features: [
        { icon: FaMagic, text: 'Custom Designs' },
        { icon: FaGem, text: 'Premium Quality' },
        { icon: FaRocket, text: 'Fast Turnaround' },
        { icon: FaInfinity, text: 'Unlimited Revisions' }
      ],
      manager: 'Chinonso Uche',
      role: 'Creative Director',
      stats: { projects: '5K+', clients: '800+', satisfaction: '99.5%' }
    },
    {
      name: 'Uche Properties',
      tagline: 'Building Dreams, Creating Wealth',
      description: 'Navigate the real estate landscape with confidence. Our comprehensive property solutions encompass development, management, and strategic investments that generate sustainable returns and build generational wealth.',
      icon: FaBuilding,
      path: '/real-estate',
      color: 'from-green-600 to-emerald-600',
      features: [
        { icon: FaHome, text: 'Prime Properties' },
        { icon: FaDollarSign, text: 'Investment Advisory' },
        { icon: FaTrophy, text: 'Award-Winning Projects' },
        { icon: FaBullseye, text: 'Strategic Locations' }
      ],
      manager: 'Real Estate Division',
      role: 'Property Specialists',
      stats: { properties: '200+', value: '₦2.5B+', roi: '25%+' }
    },
    {
      name: 'Uche Beauty Supply',
      tagline: 'Unleashing Natural Beauty',
      description: 'Elevate beauty standards with our curated collection of premium products. From luxury hair extensions to professional cosmetics, we supply the tools that help you look and feel absolutely magnificent.',
      icon: FaSprayCan,
      path: '/beauty',
      color: 'from-pink-600 to-rose-600',
      features: [
        { icon: FaCrown, text: 'Premium Products' },
        { icon: FaGlobe, text: 'Global Sourcing' },
        { icon: FaHeart, text: 'Cruelty-Free' },
        { icon: FaFire, text: 'Trending Styles' }
      ],
      manager: 'Uzoma Uche',
      role: 'Beauty Consultant',
      stats: { products: '1K+', brands: '50+', satisfaction: '98.9%' }
    },
    {
      name: 'Uche Events',
      tagline: 'Creating Unforgettable Moments',
      description: 'Transform occasions into extraordinary experiences. Our full-service event management creates seamless, memorable celebrations that exceed expectations and leave lasting impressions on every guest.',
      icon: FaCalendarAlt,
      path: '/events',
      color: 'from-orange-600 to-amber-600',
      features: [
        { icon: FaMagic, text: 'Creative Planning' },
        { icon: FaUsers, text: 'Expert Coordination' },
        { icon: FaAward, text: 'Premium Vendors' },
        { icon: FaEye, text: 'Attention to Detail' }
      ],
      manager: 'Daniel Uche',
      role: 'Event Director',
      stats: { events: '500+', guests: '50K+', rating: '4.9/5' }
    },
    {
      name: 'Uche Agro',
      tagline: 'Cultivating Sustainable Futures',
      description: 'Revolutionizing agriculture through innovation and sustainability. From farm to market, we provide comprehensive agricultural solutions that feed communities while protecting our environment for future generations.',
      icon: FaSeedling,
      path: '/agriculture',
      color: 'from-emerald-600 to-green-600',
      features: [
        { icon: FaSeedling, text: 'Sustainable Farming' },
        { icon: FaGlobe, text: 'Export Quality' },
        { icon: FaChartLine, text: 'Market Analysis' },
        { icon: FaShieldAlt, text: 'Organic Certified' }
      ],
      manager: 'Agriculture Division',
      role: 'Agricultural Specialists',
      stats: { farms: '25+', exports: '12 Countries', yield: '40% Above Average' }
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Adebayo',
      role: 'Chief Executive Officer',
      company: 'Adebayo Medical Centers',
      content: 'Uche Logistics has revolutionized our medical supply chain. Their precision, reliability, and commitment to excellence have enabled us to serve our patients better while reducing operational costs by 35%. They are not just service providers; they are strategic partners in our mission to deliver world-class healthcare.',
      rating: 5,
      image: '/api/placeholder/80/80',
      location: 'Lagos, Nigeria',
      partnership: '3 Years'
    },
    {
      name: 'Michael Okonkwo',
      role: 'Brand Manager',
      company: 'Okonkwo Fashion House',
      content: 'The custom printing quality from Uche Group is absolutely phenomenal. They transformed our brand identity with stunning merchandise that our customers love. Sales increased by 60% after launching our new branded collection. Their attention to detail and creative expertise is unmatched in the industry.',
      rating: 5,
      image: '/api/placeholder/80/80',
      location: 'Abuja, Nigeria',
      partnership: '2 Years'
    },
    {
      name: 'Mrs. Chioma Nwankwo',
      role: 'Retail Chain Owner',
      company: 'Beauty Empress Stores',
      content: 'Uche Beauty Supply has been instrumental in our expansion across Nigeria. Their premium products, competitive pricing, and exceptional customer service have helped us build a loyal customer base. Our revenue has tripled since partnering with them. They truly understand the beauty industry.',
      rating: 5,
      image: '/api/placeholder/80/80',
      location: 'Port Harcourt, Nigeria',
      partnership: '4 Years'
    },
    {
      name: 'Ambassador James Okoro',
      role: 'Former Ambassador',
      company: 'Okoro Foundation',
      content: 'Uche Events managed our international charity gala with over 500 distinguished guests. The event was flawlessly executed, raising over ₦50 million for our cause. Their professionalism, creativity, and attention to detail made it the most successful fundraising event in our foundation\'s history.',
      rating: 5,
      image: '/api/placeholder/80/80',
      location: 'Abuja, Nigeria',
      partnership: '1 Year'
    }
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: 'Industry Leadership',
      description: 'Recognized as the fastest-growing family business conglomerate in West Africa',
      year: '2024'
    },
    {
      icon: FaAward,
      title: 'Excellence Award',
      description: 'Nigerian Business Excellence Award for Outstanding Customer Service',
      year: '2023'
    },
    {
      icon: FaGlobe,
      title: 'International Expansion',
      description: 'Successfully expanded operations to 12 African countries',
      year: '2023'
    },
    {
      icon: FaUsers,
      title: 'Community Impact',
      description: 'Created over 500 direct and indirect employment opportunities',
      year: '2024'
    }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation Excellence',
      description: 'Pioneering cutting-edge solutions that transform industries and create new market opportunities through strategic thinking and technological advancement.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaHandshake,
      title: 'Unwavering Integrity',
      description: 'Building unshakeable trust through transparent business practices, ethical decision-making, and honest communication in every interaction.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Assurance',
      description: 'Delivering exceptional excellence in every service and product through rigorous quality control and continuous improvement processes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaUsers,
      title: 'Community Empowerment',
      description: 'Creating sustainable employment opportunities and contributing to community development while building lasting positive social impact.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Advanced Hero Section with Carousel */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].background} transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {heroSlides[currentSlide].subtitle}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="btn btn-secondary text-lg px-10 py-5 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {heroSlides[currentSlide].cta}
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-outline text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-gray-900 group"
              >
                <FaPlay className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Advanced Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-6 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.clients.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.projects.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaTrophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.years}+
              </div>
              <div className="text-gray-600 font-medium">Years Excellence</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaThumbsUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaDollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                ₦{stats.revenue}M+
              </div>
              <div className="text-gray-600 font-medium">Revenue Generated</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBuilding className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stats.employees}+
              </div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Our Foundation
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Built on Legacy, Driven by Vision
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12"
            >
              The Uche Group stands as a testament to the power of family values, strategic vision, and unwavering commitment to excellence. From our grandparents' humble beginnings to today's multi-industry empire, we've consistently transformed challenges into opportunities, creating sustainable businesses that serve communities while building generational wealth.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link
                to="/about"
                className="btn btn-primary text-lg px-8 py-4 group"
              >
                Discover Our Journey
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
                className="card p-8 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Recognized Excellence
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders and prestigious organizations across Africa.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {achievement.year}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Business Units Section */}
      <section ref={businessRef} className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={businessInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                Our Portfolio
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8"
            >
              Six Pillars of Excellence
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Each business unit represents a cornerstone of our empire, managed by dedicated family members and designed to deliver exceptional value while maintaining our core principles of integrity, innovation, and excellence.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={businessInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {businessUnits.map((unit, index) => (
              <motion.div
                key={unit.name}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
                className="card p-10 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${unit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <unit.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Managed by</div>
                    <div className="font-semibold text-gray-900">{unit.manager}</div>
                    <div className="text-sm text-gray-600">{unit.role}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
                    {unit.name}
                  </h3>
                  
                  <div className="text-lg text-blue-600 font-medium mb-4">
                    {unit.tagline}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {unit.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {unit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                  {Object.entries(unit.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Link
                  to={unit.path}
                  className="btn btn-primary w-full group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore {unit.name}
                    <FaArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
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
              Voices of Success
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
            >
              Don't just take our word for it. Here's what industry leaders, successful entrepreneurs, and satisfied clients have to say about their transformative experiences with the Uche Group.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="card p-12 lg:p-16 text-center bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <FaQuoteLeft className="w-16 h-16 text-white/60 mx-auto mb-8" />
                
                <p className="text-2xl lg:text-3xl leading-relaxed mb-12 italic font-light">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="w-6 h-6 text-yellow-400 mx-1" />
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className="text-left">
                    <h4 className="text-2xl font-semibold mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-lg opacity-90 mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-base opacity-75 mb-2">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <div className="flex items-center space-x-4 text-sm opacity-70">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                        {testimonials[currentTestimonial].location}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        {testimonials[currentTestimonial].partnership}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation */}
              <div className="flex justify-center space-x-4 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
          <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Ready to Transform Your Business?
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-playfair font-bold mb-8"
            >
              Your Success Story Begins Today
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied clients who have experienced the Uche Group difference. Whether you're looking for logistics solutions, custom printing, real estate opportunities, beauty supplies, event management, or agricultural services – we're here to exceed your expectations and drive your success.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/contact"
                className="btn btn-secondary text-xl px-12 py-6 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <FaRocket className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="/about"
                className="btn btn-outline text-xl px-12 py-6 border-white text-white hover:bg-white hover:text-gray-900 group"
              >
                <FaEye className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Explore Our Story
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <FaPhone className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="font-semibold mb-2">Call Us Today</div>
                <div className="opacity-80">+234 XXX XXX XXXX</div>
              </div>
              
              <div className="text-center">
                <FaEnvelope className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="font-semibold mb-2">Email Us</div>
                <div className="opacity-80">info@uchegroup.com</div>
              </div>
              
              <div className="text-center">
                <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="font-semibold mb-2">Visit Our Office</div>
                <div className="opacity-80">Nigeria</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <FaPlay className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl opacity-75">Video Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;