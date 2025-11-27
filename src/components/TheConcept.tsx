import { motion } from "motion/react";

type ConceptPage = "history" | "architecture" | "urbandesign";

interface TheConceptProps {
  onNavigate: (page: ConceptPage) => void;
}

interface ConceptSection {
  id: ConceptPage;
  title: string;
}

export function TheConcept({ onNavigate }: TheConceptProps) {
  const sections: ConceptSection[] = [
    {
      id: "history",
      title: "History"
    },
    {
      id: "architecture",
      title: "Architecture"
    },
    {
      id: "urbandesign",
      title: "Urban Design"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-6 flex items-center justify-center" style={{
      backgroundColor: '#f8f9fa',
      backgroundImage: 'var(--dot-bg)',
      backgroundSize: 'var(--dot-size)'
    }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl text-[#001960]">The Concept</h1>
        </motion.div>

        {/* Three Circles */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(section.id)}
              className="w-64 h-64 rounded-full bg-white border-4 border-[#001960] hover:bg-[#001960] hover:text-white transition-all duration-300 flex items-center justify-center group shadow-xl"
            >
              <span className="text-2xl text-[#001960] group-hover:text-white transition-colors text-center px-8">
                {section.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}