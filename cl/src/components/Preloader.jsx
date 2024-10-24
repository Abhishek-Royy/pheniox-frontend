import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />
      <motion.div
        className="text-white text-2xl font-semibold ml-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Preloader;
