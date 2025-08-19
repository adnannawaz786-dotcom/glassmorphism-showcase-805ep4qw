import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const GlassCard = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default',
  blur = 'md',
  opacity = 75,
  hover = true,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white/10 border-white/20',
    primary: 'bg-blue-500/10 border-blue-400/30',
    secondary: 'bg-purple-500/10 border-purple-400/30',
    accent: 'bg-pink-500/10 border-pink-400/30',
    dark: 'bg-black/20 border-white/10',
  }

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  }

  const baseClasses = `
    rounded-xl border
    ${variants[variant]}
    ${blurClasses[blur]}
    backdrop-saturate-150
    shadow-lg shadow-black/5
    transition-all duration-300
    ${hover ? 'hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02] hover:border-white/30' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  if (hover) {
    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
})

GlassCard.displayName = 'GlassCard'

export default GlassCard