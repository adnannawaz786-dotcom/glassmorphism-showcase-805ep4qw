import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap, Eye, Code, Palette } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Layered Effects",
      description: "Multiple glass layers with depth and dimension"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Blur & Transparency",
      description: "Beautiful backdrop blur with subtle transparency"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Elements",
      description: "Hover effects and smooth animations"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Hierarchy",
      description: "Clear content structure with glass morphism"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern CSS",
      description: "Built with latest CSS techniques and Tailwind"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Schemes",
      description: "Multiple themes and color variations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-800/30 via-transparent to-cyan-800/30"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Glassmorphism
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of UI design with stunning glass morphism effects, 
            beautiful transparency, and modern aesthetics
          </motion.p>
          
          {/* Glass Card Hero */}
          <motion.div
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div 
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255,255,255,0.1)'
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Glass Effect Showcase</h3>
              <p className="text-white/70 leading-relaxed">
                This card demonstrates the core principles of glassmorphism: backdrop blur, 
                subtle transparency, and elegant borders that create depth and visual interest.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer"
            >
              <div 
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.2)'
                }}
              >
                <div className="text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Showcase */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Interactive Elements</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* Button Examples */}
            <motion.button
              className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-full px-8 py-3 text-white font-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 8px 25px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Primary Button
            </motion.button>
            
            <motion.button
              className="backdrop-blur-md bg-white/5 border border-cyan-400/30 rounded-full px-8 py-3 text-cyan-300 font-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(34, 211, 238, 0.1)",
                boxShadow: "0 8px 25px rgba(34, 211, 238, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Secondary Button
            </motion.button>
            
            <motion.button
              className="backdrop-blur-md bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full px-8 py-3 text-emerald-300 font-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Success Button
            </motion.button>
          </div>

          {/* Large Showcase Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div 
              className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Modern Glass Design
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Glassmorphism combines transparency, blur effects, and subtle borders 
                    to create interfaces that feel both modern and ethereal. This design 
                    trend brings depth and hierarchy to your applications while maintaining 
                    visual clarity.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="backdrop-blur-sm bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-purple-200 text-sm">
                      Backdrop Blur
                    </span>
                    <span className="backdrop-blur-sm bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-cyan-200 text-sm">
                      Transparency
                    </span>
                    <span className="backdrop-blur-sm bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 text-emerald-200 text-sm">
                      Subtle Borders
                    </span>
                  </div>
                </div>
                
                <div className="relative">
                  <motion.div
                    className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/10 border border-white/30 rounded-2xl p-8"
                    animate={{
                      rotateY: [0, 5, 0],
                      rotateX: [0, 2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                    }}
                  >
                    <div className="w-full h-4 bg-gradient-to-r from-purple-400/50 to-cyan-400/50 rounded-full mb-4"></div>
                    <div className="w-3/4 h-3 bg-white/30 rounded-full mb-3"></div>
                    <div className="w-1/2 h-3 bg-white/20 rounded-full mb-4"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-square bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-lg"></div>
                      <div className="aspect-square bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-lg"></div>
                      <div className="aspect-square bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-lg"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;