import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', fullScreen = true }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  };

  const spinnerVariants = {
    start: {
      rotate: 0
    },
    end: {
      rotate: 360
    }
  };

  const containerVariants = {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  if (fullScreen) {
    return (
      <motion.div
        variants={containerVariants}
        initial="start"
        animate="end"
        className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="text-center">
          <motion.div
            variants={spinnerVariants}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary-600 rounded-full mx-auto mb-4`}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${textSizes[size]} text-gray-600 font-medium`}
          >
            {text}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      className="flex items-center justify-center p-8"
    >
      <div className="text-center">
        <motion.div
          variants={spinnerVariants}
          initial="start"
          animate="end"
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary-600 rounded-full mx-auto mb-4`}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${textSizes[size]} text-gray-600 font-medium`}
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;