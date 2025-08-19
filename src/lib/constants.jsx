// Animation configurations
export const ANIMATION_CONFIGS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.5 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  floatingCard: {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

// Glassmorphism style presets
export const GLASS_STYLES = {
  primary: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
  },
  secondary: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)"
  },
  dark: {
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(25px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
  },
  colorful: {
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
  }
};

// Color themes for different sections
export const COLOR_THEMES = {
  purple: {
    primary: "#8B5CF6",
    secondary: "#A78BFA",
    accent: "#C4B5FD",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  blue: {
    primary: "#3B82F6",
    secondary: "#60A5FA",
    accent: "#93C5FD",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  pink: {
    primary: "#EC4899",
    secondary: "#F472B6",
    accent: "#F9A8D4",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  green: {
    primary: "#10B981",
    secondary: "#34D399",
    accent: "#6EE7B7",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  orange: {
    primary: "#F59E0B",
    secondary: "#FBBF24",
    accent: "#FCD34D",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  }
};

// Background gradients
export const BACKGROUND_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)"
];

// Sample showcase items
export const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: "Dashboard Card",
    description: "Modern analytics dashboard with glassmorphism effects",
    category: "dashboard",
    theme: "purple",
    features: ["Real-time data", "Interactive charts", "Responsive design"]
  },
  {
    id: 2,
    title: "Profile Widget",
    description: "User profile component with frosted glass background",
    category: "profile",
    theme: "blue",
    features: ["Avatar display", "Social links", "Status indicators"]
  },
  {
    id: 3,
    title: "Navigation Menu",
    description: "Floating navigation with blur effects and smooth animations",
    category: "navigation",
    theme: "pink",
    features: ["Hover effects", "Active states", "Mobile responsive"]
  },
  {
    id: 4,
    title: "Product Card",
    description: "E-commerce product showcase with glass morphism styling",
    category: "ecommerce",
    theme: "green",
    features: ["Image gallery", "Price display", "Add to cart"]
  },
  {
    id: 5,
    title: "Weather Widget",
    description: "Weather information display with translucent background",
    category: "weather",
    theme: "orange",
    features: ["Current conditions", "5-day forecast", "Location based"]
  },
  {
    id: 6,
    title: "Music Player",
    description: "Audio player interface with frosted glass design",
    category: "media",
    theme: "purple",
    features: ["Playback controls", "Progress bar", "Playlist view"]
  }
];

// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Components", href: "/components", icon: "Layers" },
  { name: "Gallery", href: "/gallery", icon: "Image" },
  { name: "About", href: "/about", icon: "Info" }
];

// Component categories
export const CATEGORIES = [
  { id: "all", name: "All", count: 6 },
  { id: "dashboard", name: "Dashboard", count: 1 },
  { id: "profile", name: "Profile", count: 1 },
  { id: "navigation", name: "Navigation", count: 1 },
  { id: "ecommerce", name: "E-commerce", count: 1 },
  { id: "weather", name: "Weather", count: 1 },
  { id: "media", name: "Media", count: 1 }
];

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};