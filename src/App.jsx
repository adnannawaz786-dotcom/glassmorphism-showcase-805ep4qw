import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        </div>
        
        {/* Floating orbs for depth */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-purple-400/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Glass navigation */}
        <motion.nav 
          className="relative z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Glassmorphism
              </motion.div>
              
              <div className="flex gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/" 
                    className="text-white/90 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                  >
                    Home
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.nav>
        
        {/* Main content area */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        {/* Subtle noise texture overlay */}
        <div 
          className="fixed inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </Router>
  )
}

export default App