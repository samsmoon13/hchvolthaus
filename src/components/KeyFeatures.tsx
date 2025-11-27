import { motion } from "motion/react";
import { Leaf, Sun, Droplet, Wind, Zap, Recycle } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { RoomGridFeature } from "./RoomGridFeature";

type RoomColor = 
  | "red" 
  | "green" 
  | "blue"
  | "yellow" 
  | "purple" 
  | "orange" 
  | "pink"
  | "teal"
  | "indigo";

interface KeyFeaturesProps {
  onNavigate?: (room: RoomColor) => void;
}

export function KeyFeatures({ onNavigate }: KeyFeaturesProps) {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Leaf,
      title: t.features.items.greenSpaces.title,
      description: t.features.items.greenSpaces.description,
    },
    {
      icon: Sun,
      title: t.features.items.solar.title,
      description: t.features.items.solar.description,
    },
    {
      icon: Droplet,
      title: t.features.items.water.title,
      description: t.features.items.water.description,
    },
    {
      icon: Wind,
      title: t.features.items.ventilation.title,
      description: t.features.items.ventilation.description,
    },
    {
      icon: Zap,
      title: t.features.items.smart.title,
      description: t.features.items.smart.description,
    },
    {
      icon: Recycle,
      title: t.features.items.materials.title,
      description: t.features.items.materials.description,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 text-muted-foreground">{t.features.sectionTitle}</div>
          <h2 className="mb-6 text-4xl sm:text-5xl">
            {t.features.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            {t.features.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 mb-6 text-primary" />
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Grid Section */}
      {onNavigate && (
        <div className="max-w-7xl mx-auto mt-20 px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-4 text-muted-foreground">Interactive Spaces</div>
            <h2 className="mb-6 text-4xl sm:text-5xl">
              Explore Room Details
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Click on any room to view detailed floor plans and event management features
            </p>
          </motion.div>
          
          <RoomGridFeature onNavigate={onNavigate} />
        </div>
      )}
    </section>
  );
}