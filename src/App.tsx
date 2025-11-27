import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navigation } from "./components/Navigation";
import { ProjectHero } from "./components/ProjectHero";
import { CurrentStatusSection } from "./components/CurrentStatusSection";
import { TheConcept } from "./components/TheConcept";
import { ConceptHistory } from "./components/concept/ConceptHistory";
import { ConceptArchitecture } from "./components/concept/ConceptArchitecture";
import { ConceptUrbanDesign } from "./components/concept/ConceptUrbanDesign";
import { TheHub } from "./components/TheHub";
import { Team } from "./components/Team";
import { Model3D } from "./components/Model3D";
import { RedRoom } from "./components/rooms/RedRoom";
import { GreenRoom } from "./components/rooms/GreenRoom";
import { BlueRoom } from "./components/rooms/BlueRoom";
import { YellowRoom } from "./components/rooms/YellowRoom";
import { PurpleRoom } from "./components/rooms/PurpleRoom";
import { OrangeRoom } from "./components/rooms/OrangeRoom";
import { PinkRoom } from "./components/rooms/PinkRoom";
import { TealRoom } from "./components/rooms/TealRoom";
import { IndigoRoom } from "./components/rooms/IndigoRoom";
import { Toaster } from "./components/ui/sonner";

type Section = 
  | "home" 
  | "concept"
  | "hub" 
  | "minds" 
  | "model";

type ConceptPage = 
  | "history"
  | "architecture"
  | "urbandesign";

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

type ViewMode = Section | ConceptPage | RoomColor;

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>("home");

  const handleNavigate = (view: Section | ConceptPage | RoomColor) => {
    setActiveView(view);
  };

  const handleBackToHub = () => {
    setActiveView("hub");
  };

  const handleBackToConcept = () => {
    setActiveView("concept");
  };

  return (
    <LanguageProvider>
      <div className="size-full flex flex-col">
        <Navigation activeSection={activeView as Section} onSectionChange={handleNavigate} />
        
        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="size-full"
            >
              {/* Floor/Room Pages */}
              {activeView === "red" && <RedRoom onBack={handleBackToHub} />}
              {activeView === "green" && <GreenRoom onBack={handleBackToHub} />}
              {activeView === "blue" && <BlueRoom onBack={handleBackToHub} />}
              {activeView === "yellow" && <YellowRoom onBack={handleBackToHub} />}
              {activeView === "purple" && <PurpleRoom onBack={handleBackToHub} />}
              {activeView === "orange" && <OrangeRoom onBack={handleBackToHub} />}
              {activeView === "pink" && <PinkRoom onBack={handleBackToHub} />}
              {activeView === "teal" && <TealRoom onBack={handleBackToHub} />}
              {activeView === "indigo" && <IndigoRoom onBack={handleBackToHub} />}
              
              {/* Concept Sub-Pages */}
              {activeView === "history" && <ConceptHistory onBack={handleBackToConcept} />}
              {activeView === "architecture" && <ConceptArchitecture onBack={handleBackToConcept} />}
              {activeView === "urbandesign" && <ConceptUrbanDesign onBack={handleBackToConcept} />}
              
              {/* Main Navigation Pages */}
              {activeView === "home" && <ProjectHero onNavigate={handleNavigate} />}
              {activeView === "concept" && <TheConcept onNavigate={handleNavigate} />}
              {activeView === "hub" && <TheHub onNavigate={handleNavigate} />}
              {activeView === "minds" && <Team onBack={() => setActiveView("home")} />}
              {activeView === "model" && <Model3D />}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Toaster />
      </div>
    </LanguageProvider>
  );
}