import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

type Section = 
  | "home" 
  | "concept"
  | "hub" 
  | "minds" 
  | "model";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { id: "home" as Section, label: t.nav.home },
    { id: "concept" as Section, label: "The Concept" },
    { id: "hub" as Section, label: "The HUB" },
    { id: "model" as Section, label: "3D Model" },
    { id: "minds" as Section, label: "The Minds" },
  ];

  const handleSectionClick = (sectionId: Section) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-[#001960]/10 relative z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Left - Empty */}
            <div></div>

            {/* Center - Language Switcher */}
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-[#001960]" />
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${
                  language === "en"
                    ? "text-[#001960]"
                    : "text-[#001960]/60 hover:text-[#001960]"
                }`}
              >
                EN
              </button>
              <span className="text-[#001960]/40">/</span>
              <button
                onClick={() => setLanguage("de")}
                className={`transition-colors ${
                  language === "de"
                    ? "text-[#001960]"
                    : "text-[#001960]/60 hover:text-[#001960]"
                }`}
              >
                DE
              </button>
            </div>

            {/* Right - Menu Button */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-[#001960] hover:text-[#001960]/70 transition-colors p-2"
              >
                <div className="flex flex-col gap-1 w-6">
                  <div className="h-0.5 w-full bg-[#001960]"></div>
                  <div className="h-0.5 w-full bg-[#001960]"></div>
                  <div className="h-0.5 w-full bg-[#001960]"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Page Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-[90]"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[100] flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <div className="p-8 border-b border-[#001960]/10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="ml-auto flex items-center gap-2 text-[#001960] hover:text-[#001960]/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-8">
                <div className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleSectionClick(item.id)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="block text-left w-full text-[#001960] text-3xl hover:text-[#001960]/70 transition-colors py-2"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}