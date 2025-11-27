import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CurrentStatusSection } from "./CurrentStatusSection";
import { useRef, useState, useEffect } from "react";

interface ProjectHeroProps {
  onNavigate: (view: string) => void;
}

// Animation Presets
const animationPresets = {
  heroTitle: {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }
  },
  card: {
    initial: { opacity: 0, y: 60, scale: 0.94 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }
  },
  backgroundShape: {
    initial: { opacity: 0, scale: 0.85, y: 30 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }
  }
};

// Magnetic Button Component with hover micro-interactions
function MagneticButton({ onClick, children, delay = 0, variant = "white" }: any) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceFromCenter = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      if (distanceFromCenter < 150) {
        const pullStrength = Math.max(0, 1 - distanceFromCenter / 150);
        const offsetX = (e.clientX - centerX) * pullStrength * 0.3;
        const offsetY = (e.clientY - centerY) * pullStrength * 0.3;
        setMousePosition({ x: offsetX, y: offsetY });
      } else {
        setMousePosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const baseClass = variant === "white" 
    ? "bg-white/20 hover:bg-white/30"
    : "bg-gray-400 hover:bg-gray-500";

  return (
    <motion.button
      ref={buttonRef}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: isHovered ? 1 : 0.8, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`self-end w-12 h-12 sm:w-14 sm:h-14 rounded-full ${baseClass} transition-colors flex items-center justify-center group cursor-pointer`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovered ? 1.06 : 1,
        opacity: isHovered ? 1 : 0.8
      }}
      style={{
        transition: 'background-color 200ms ease'
      }}
      whileHover={{
        scale: 1.06,
        opacity: 1,
        transition: { 
          duration: 0.2,
          ease: [0.34, 1.56, 0.64, 1] // Spring with 15% overshoot
        }
      }}
    >
      {children}
    </motion.button>
  );
}

// Parallax Background Layer Component
function ParallaxLayer({ children, speed = 0.6, className = "" }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: ySpring }} className={className}>
      {children}
    </motion.div>
  );
}

// 3D Card Component with Parallax and Hover Effects
function Card3D({ children, backgroundColor, delay = 0, onClick, textColor = "white" }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / rect.height) * -4; // Max 4° rotation
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 4;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 0.61, 0.36, 1] 
      }}
      style={{ 
        y: ySpring,
        backgroundColor: '#f8f9fa',
        backgroundImage: 'var(--dot-bg)',
        backgroundSize: 'var(--dot-size)'
      }}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-8 sm:p-12 lg:p-20"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.03 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        style={{
          backgroundColor,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        className="relative w-full max-w-6xl min-h-[80vh] rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col justify-between cursor-pointer"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ProjectHero({ onNavigate }: ProjectHeroProps) {
  const heroImage = "https://images.unsplash.com/photo-1486718448742-163732cd1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwZmFjYWRlfGVufDF8fHx8MTc2MzY0NTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageYSpring = useSpring(imageY, { stiffness: 100, damping: 30 });

  // Scroll-based text scaling
  const { scrollY } = useScroll();
  const titleScale = useTransform(scrollY, [0, 500], [1, 0.7]);
  const titleScaleSpring = useSpring(titleScale, { stiffness: 100, damping: 30 });

  return (
    <div className="relative w-full">
      {/* First Section - Historic Hochvolthaus with Parallax */}
      <div ref={heroRef} className="relative w-full h-screen overflow-hidden" style={{
        backgroundColor: '#f8f9fa',
        backgroundImage: 'var(--dot-bg)',
        backgroundSize: 'var(--dot-size)'
      }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 sm:p-16 lg:p-20 gap-8">
          <motion.div 
            {...animationPresets.heroTitle}
            style={{ y: imageYSpring }}
            className="relative w-full max-w-6xl aspect-[4/3]"
          >
            <img 
              src={heroImage} 
              alt="Hochvolthaus Building" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Title Inside Image with layered parallax */}
            <div className="absolute inset-0 flex items-end justify-start p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ scale: titleScaleSpring }}
                className="text-left"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight" style={{ color: '#ffffff' }}>
                  The Hochvolthaus
                </h1>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Subtitle Below Image */}
          <motion.div
            {...animationPresets.subtitle}
            className="text-center"
          >
            <p className="text-lg sm:text-xl lg:text-2xl" style={{ color: '#001960' }}>
              Fusion_Lab , Winter 2025-2026, Masters ITBE
            </p>
          </motion.div>
        </div>
      </div>

      {/* Second Section - Current Status */}
      <CurrentStatusSection />

      {/* Decorative Squares Section with Staggered Animation */}
      <div 
        className="relative w-full min-h-[40vh] overflow-hidden flex items-center justify-center p-8 sm:p-12 lg:p-20"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: 'var(--dot-bg)',
          backgroundSize: 'var(--dot-size)'
        }}
      >
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div 
            {...animationPresets.backgroundShape}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 2,
              transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
            }}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-3xl border-2 border-gray-300 shadow-lg cursor-pointer"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          />
          <motion.div 
            {...animationPresets.backgroundShape}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ 
              scale: 1.05, 
              rotate: -2,
              transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
            }}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-3xl border-2 border-blue-200 shadow-lg cursor-pointer"
            style={{ backgroundColor: 'rgba(0, 25, 96, 0.05)' }}
          />
          <motion.div 
            {...animationPresets.backgroundShape}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 2,
              transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
            }}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-3xl border-2 border-gray-300 shadow-lg cursor-pointer"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          />
        </div>
      </div>

      {/* Third Section - The Concept with 3D Card */}
      <Card3D
        backgroundColor="#001960"
        delay={0.1}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Explore</p>
          <motion.h2 
            style={{ scale: titleScaleSpring }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white"
          >
            The Concept
          </motion.h2>
          <p className="text-lg text-white/80 max-w-2xl">
            Discover the architectural vision and design philosophy behind the Hochvolthaus redesign.
          </p>
        </motion.div>
        <MagneticButton
          delay={0.5}
          onClick={() => onNavigate('concept')}
          variant="white"
        >
          <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </MagneticButton>
      </Card3D>

      {/* Fourth Section - The HUB with 3D Card */}
      <Card3D
        backgroundColor="#f3f4f6"
        delay={0.1}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Interactive Hub</p>
          <motion.h2 
            style={{ scale: titleScaleSpring, color: '#001960' }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            The HUB
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Navigate through the building's floors and explore each room interactively.
          </p>
        </motion.div>
        <MagneticButton
          delay={0.5}
          onClick={() => onNavigate('hub')}
          variant="gray"
        >
          <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </MagneticButton>
      </Card3D>

      {/* Fifth Section - 3D Model with 3D Card */}
      <Card3D
        backgroundColor="#ffffff"
        delay={0.1}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Experience</p>
          <motion.h2 
            style={{ scale: titleScaleSpring, color: '#001960' }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            3D Model
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore the Hochvolthaus in an immersive 3D environment.
          </p>
        </motion.div>
        <MagneticButton
          delay={0.5}
          onClick={() => onNavigate('model')}
          variant="gray"
        >
          <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </MagneticButton>
      </Card3D>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: '#001960',
          backgroundImage: 'var(--dot-bg)',
          backgroundSize: 'var(--dot-size)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h3 className="mb-2 text-white" style={{ fontSize: '0.9rem' }}>The Hochvolthaus</h3>
              <p className="text-white/70 leading-relaxed" style={{ fontSize: '0.7rem' }}>
                A reimagined architectural project for the Technical University of Munich, 
                transforming historic space into an innovative hub for ITBE master's students.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h3 className="mb-2 text-white" style={{ fontSize: '0.9rem' }}>Contact</h3>
              <div className="space-y-1.5">
                <motion.a 
                  href="mailto:contact@hochvolthaus.com" 
                  className="block text-white/70 hover:text-white transition-colors"
                  style={{ fontSize: '0.7rem' }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }
                  }}
                >
                  contact@hochvolthaus.com
                </motion.a>
                <motion.a 
                  href="mailto:info@fusionlab.tum.de" 
                  className="block text-white/70 hover:text-white transition-colors"
                  style={{ fontSize: '0.7rem' }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }
                  }}
                >
                  info@fusionlab.tum.de
                </motion.a>
              </div>
            </motion.div>

            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h3 className="mb-2 text-white" style={{ fontSize: '0.9rem' }}>Course</h3>
              <div className="space-y-0.5 text-white/70" style={{ fontSize: '0.7rem' }}>
                <p>Fusion Lab</p>
                <p>Winter 2025-2026</p>
                <p>Masters ITBE</p>
                <p>Technical University of Munich</p>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 pt-4 border-t border-white/10 text-center"
          >
            <p className="text-white/50" style={{ fontSize: '0.65rem' }}>
              © 2025 The Hochvolthaus Project. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}