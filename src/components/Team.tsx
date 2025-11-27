import { Users, Mail, Linkedin, ArrowLeft, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

interface TeamProps {
  onBack?: () => void;
}

export function Team({ onBack }: TeamProps) {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: "Samin Eghbali",
      role: language === "en" ? "ITBE Master's Student" : "ITBE Master-Student",
      background: language === "en" ? "Architecture Background" : "Architektur Hintergrund",
      email: "samin.eghbali@example.com",
      image: null,
    },
    {
      name: "Mays Alsheikh",
      role: language === "en" ? "ITBE Master's Student" : "ITBE Master-Student",
      email: "mays.alsheikh@example.com",
      image: null,
    },
    {
      name: "Rafael Rodrigues Giglio",
      role: language === "en" ? "ITBE Master's Student" : "ITBE Master-Student",
      email: "rafael.giglio@example.com",
      image: null,
    },
    {
      name: "Chandana Mahesh",
      role: language === "en" ? "ITBE Master's Student" : "ITBE Master-Student",
      email: "chandana.mahesh@example.com",
      image: null,
    },
    {
      name: "Antonia-Ioulia Pozatzidou",
      role: language === "en" ? "ITBE Master's Student" : "ITBE Master-Student",
      email: "antonia.pozatzidou@example.com",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6" style={{
      backgroundColor: '#f8f9fa',
      backgroundImage: 'var(--dot-bg)',
      backgroundSize: 'var(--dot-size)'
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#001960] hover:text-[#001960]/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === "en" ? "Back to Home" : "Zurück zur Startseite"}</span>
          </button>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-12 h-12 text-[#001960]" />
          </div>
          <h1 className="text-[#001960] mb-4">
            {language === "en" ? "The Minds Behind the Project" : "Die Köpfe hinter dem Projekt"}
          </h1>
          <p className="text-[#001960]/70 max-w-2xl mx-auto">
            {language === "en"
              ? "ITBE Master's students at Technical University of Munich working on the Fusion Lab course."
              : "ITBE Master-Studenten an der Technischen Universität München arbeiten am Fusion Lab Kurs."}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.email}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Circular Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#001960]/10 to-[#001960]/5 flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <User className="w-16 h-16 text-[#001960]/30" />
                )}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-[#001960] mb-1 text-base">{member.name}</h3>
                <p className="text-[#001960]/60 mb-2 text-sm">{member.role}</p>
                {member.background && (
                  <p className="text-[#001960]/50 text-xs mb-3">{member.background}</p>
                )}

                {/* Contact */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#001960]/5 hover:bg-[#001960] text-[#001960] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#001960]/5 hover:bg-[#001960] text-[#001960] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#001960] text-white rounded-2xl p-12">
            <h2 className="mb-4">
              {language === "en" ? "Fusion Lab Course" : "Fusion Lab Kurs"}
            </h2>
            <p className="mb-6 text-white/80">
              {language === "en"
                ? "This project is part of the Fusion Lab course at TUM, where ITBE students explore innovative approaches to architectural redesign."
                : "Dieses Projekt ist Teil des Fusion Lab Kurses an der TUM, in dem ITBE-Studenten innovative Ansätze zur architektonischen Neugestaltung erforschen."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}