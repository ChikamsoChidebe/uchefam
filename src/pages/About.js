import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaGlobe, FaAward, FaRocket, FaHeart, FaEye, FaBullseye, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: FaAward },
    { number: '500+', label: 'Happy Clients', icon: FaUsers },
    { number: '6', label: 'Business Units', icon: FaGlobe },
    { number: '50+', label: 'Team Members', icon: FaHandshake }
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Family First',
      description: 'We believe in the power of family bonds and bring that warmth to every business relationship.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'Honesty and transparency guide every decision we make and every service we provide.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We continuously evolve and adapt to meet the changing needs of our clients and markets.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: FaChartLine,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering quality that exceeds expectations.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'The Beginning',
      description: 'Uche Group was founded with a vision to create a family business that serves the community.',
      icon: FaRocket
    },
    {
      year: '2012',
      title: 'First Expansion',
      description: 'Launched our logistics and printing services, establishing our presence in multiple sectors.',
      icon: FaGlobe
    },
    {
      year: '2016',
      title: 'Real Estate Venture',
      description: 'Entered the real estate market, providing quality housing solutions for families.',
      icon: FaAward
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Embraced technology to enhance our services and reach more clients nationwide.',
      icon: FaChartLine
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to grow and innovate while maintaining our family values and commitment to excellence.',
      icon: FaBullseye
    }
  ];

  const team = [
    {
      name: 'Chidera Uche',
      role: 'Logistics Manager',
      description: 'Leading our logistics operations with precision and dedication to timely deliveries.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Chinonso Uche',
      role: 'Printing Services Manager',
      description: 'Ensuring quality printing solutions that bring your ideas to life with professional excellence.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Uzoma Uche',
      role: 'Beauty Supply Manager',
      description: 'Curating the finest beauty products to help our clients look and feel their absolute best.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Daniel Uche',
      role: 'Events Manager',
      description: 'Creating memorable experiences through expertly planned and executed events.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 min-h-screen md:min-h-[110vh] bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden pt-4 md:pt-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Uche Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A family business built on trust, innovation, and excellence. Serving communities across Nigeria with integrity and dedication.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
                  <stat.icon className="text-2xl" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Uche Group began as a small family business with big dreams. What started as a single venture has grown into a diversified group of companies serving thousands of clients across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been guided by strong family values, unwavering commitment to quality, and a deep understanding of our clients' needs. Each business unit operates with the same core principles that have made us successful.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our services while maintaining the personal touch and attention to detail that sets us apart in the marketplace.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaUsers className="text-6xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Family Business</h3>
                  <p className="text-gray-600">Built on trust, powered by innovation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8"
            >
              <FaBullseye className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional services across multiple industries while maintaining the highest standards of quality, integrity, and customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8"
            >
              <FaEye className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading family business group in Nigeria, known for innovation, reliability, and positive impact on communities we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8"
            >
              <FaHeart className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Family, integrity, innovation, and excellence guide everything we do. These values shape our culture and drive our success.
              </p>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} text-white rounded-lg mb-4`}>
                  <value.icon className="text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a diversified business group, here's how we've grown over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center ${index % 2 === 0 ? 'ml-auto mr-3' : 'mr-auto ml-3'}`}>
                        <item.icon className="text-sm" />
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated family members and professionals who make Uche Group a success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <FaUsers className="text-4xl text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;