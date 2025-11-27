import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Lightbulb, Leaf, Users } from "lucide-react";

export function VisualShowcase() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 text-muted-foreground">{t.showcase.sectionTitle}</div>
          <h2 className="mb-6 text-4xl sm:text-5xl">
            {t.showcase.heading}
          </h2>
        </motion.div>

        {/* Diagram Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary flex items-center justify-center z-10 shadow-2xl"
          >
            <div className="text-center text-primary-foreground">
              <div className="text-sm uppercase tracking-wider mb-1">Design</div>
              <div className="text-2xl">Philosophy</div>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Line to top */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="400"
              y1="300"
              x2="400"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="text-primary"
            />
            {/* Line to bottom left */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              x1="400"
              y1="300"
              x2="150"
              y2="500"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="text-primary"
            />
            {/* Line to bottom right */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              x1="400"
              y1="300"
              x2="650"
              y2="500"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="text-primary"
            />
          </svg>

          {/* Three Philosophy Circles */}
          <div className="relative h-[600px]">
            {/* Top - Technical Excellence */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64"
            >
              <div className="bg-secondary border-2 border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3">{t.showcase.technical.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.showcase.technical.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom Left - Eco-Conscious Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-64"
            >
              <div className="bg-secondary border-2 border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3">{t.showcase.eco.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.showcase.eco.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom Right - Human-Centered Spaces */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 right-0 w-64"
            >
              <div className="bg-secondary border-2 border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3">{t.showcase.human.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.showcase.human.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
