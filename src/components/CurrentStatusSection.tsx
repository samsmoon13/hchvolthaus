import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CurrentStatusSection() {
  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-8 sm:p-12 lg:p-20"
      style={{
        backgroundColor: '#f8f9fa',
        backgroundImage: 'var(--dot-bg)',
        backgroundSize: 'var(--dot-size)'
      }}
    >
      {/* Current Status Image - Centered with padding */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl aspect-video"
      >
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1644411813513-ad77c1b77581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYzNjQ1ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hochvolthaus Current Status" 
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        
        {/* Content - Inside Image at Bottom Left */}
        <div className="absolute inset-0 flex items-end justify-start p-8 sm:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight" style={{ color: '#ffffff' }}>
              Current Status
            </h2>
            <p className="text-xl sm:text-2xl mt-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Reimagining the Hochvolthaus
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}