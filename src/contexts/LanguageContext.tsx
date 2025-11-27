import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface Translations {
  nav: {
    title: string;
    home: string;
    concept: string;
    hub: string;
    minds: string;
    model: string;
  };
  hero: {
    badge: string;
    transformationPrefix: string;
    title: string;
    description: string;
    exploreButton: string;
    timelineButton: string;
    scrollText: string;
  };
  overview: {
    sectionTitle: string;
    heading: string;
    description: string;
    stats: {
      area: string;
      capacity: string;
      timeline: string;
      location: string;
    };
  };
  features: {
    sectionTitle: string;
    heading: string;
    description: string;
    items: {
      greenSpaces: { title: string; description: string };
      solar: { title: string; description: string };
      water: { title: string; description: string };
      ventilation: { title: string; description: string };
      smart: { title: string; description: string };
      materials: { title: string; description: string };
    };
  };
  showcase: {
    sectionTitle: string;
    heading: string;
    technical: { title: string; description: string };
    eco: { title: string; description: string };
    human: { title: string; description: string };
  };
  cta: {
    heading: string;
    description: string;
    downloadButton: string;
    contactButton: string;
    stats: {
      energy: string;
      certification: string;
      renewable: string;
    };
  };
  team: {
    sectionTitle: string;
    heading: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  };
  contactInfo: {
    sectionTitle: string;
    heading: string;
    email: string;
    phone: string;
    website: string;
    instagram: string;
    linkedin: string;
  };
  feedback: {
    sectionTitle: string;
    heading: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
  };
  model3d: {
    sectionTitle: string;
    heading: string;
    description: string;
    instructions: string;
  };
  location: {
    sectionTitle: string;
    heading: string;
    description: string;
    addressLabel: string;
    country: string;
    directionsButton: string;
    accessTitle: string;
    publicTransport: string;
    parking: string;
    accessibility: string;
  };
  renderings: {
    sectionTitle: string;
    heading: string;
    description: string;
    viewImage: string;
    closeImage: string;
  };
  history: {
    sectionTitle: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    timeline: Array<{
      year: string;
      event: string;
    }>;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      title: "Architecture Redesign",
      home: "Home",
      concept: "Concept",
      hub: "Hub",
      minds: "Minds",
      model: "3D Model",
    },
    hero: {
      badge: "Architectural Redesign 2025",
      transformationPrefix: "Transformation of ",
      title: "The Hochvolthaus",
      description:
        "A transformative approach to sustainable architecture that blends modern design principles with environmental consciousness, creating spaces that inspire and endure.",
      exploreButton: "Explore the Design",
      timelineButton: "View Timeline",
      scrollText: "Scroll to explore",
    },
    overview: {
      sectionTitle: "Project Overview",
      heading: "A Vision for Sustainable Development",
      description:
        "This redesign project represents a fundamental shift in how we approach urban architecture. By integrating cutting-edge sustainable technologies with timeless design principles, we're creating a space that serves both present needs and future generations.",
      stats: {
        area: "Total Area",
        capacity: "Capacity",
        timeline: "Timeline",
        location: "Location",
      },
    },
    features: {
      sectionTitle: "Key Features",
      heading: "Sustainability at the Core",
      description:
        "Every aspect of this redesign has been carefully considered to minimize environmental impact while maximizing functionality and beauty.",
      items: {
        greenSpaces: {
          title: "Green Spaces",
          description:
            "Integrated vertical gardens and rooftop terraces that promote biodiversity and improve air quality.",
        },
        solar: {
          title: "Solar Integration",
          description:
            "Advanced photovoltaic panels seamlessly incorporated into the building facade for clean energy generation.",
        },
        water: {
          title: "Water Management",
          description:
            "Rainwater harvesting and greywater recycling systems that reduce water consumption by 40%.",
        },
        ventilation: {
          title: "Natural Ventilation",
          description:
            "Strategically designed airflow patterns that minimize the need for mechanical cooling systems.",
        },
        smart: {
          title: "Smart Systems",
          description:
            "IoT-enabled building management for optimal energy efficiency and occupant comfort.",
        },
        materials: {
          title: "Sustainable Materials",
          description:
            "Locally sourced, recycled, and low-carbon materials throughout the construction process.",
        },
      },
    },
    showcase: {
      sectionTitle: "Design Philosophy",
      heading: "Where Form Meets Function",
      technical: {
        title: "Technical Excellence",
        description: "Precision engineering meets innovative design thinking",
      },
      eco: {
        title: "Eco-Conscious Design",
        description: "Harmony between built environment and nature",
      },
      human: {
        title: "Human-Centered Spaces",
        description: "Thoughtfully designed for comfort and wellbeing",
      },
    },
    cta: {
      heading: "Ready to Learn More?",
      description:
        "Get the full project documentation, technical specifications, and sustainability reports. Join us in reimagining the future of architecture.",
      downloadButton: "Download Project Brief",
      contactButton: "Contact the Team",
      stats: {
        energy: "Energy Reduction",
        certification: "Certification Target",
        renewable: "Renewable Energy",
      },
    },
    model3d: {
      sectionTitle: "3D Model",
      heading: "Interactive 3D Model",
      description:
        "Drag to rotate, scroll to zoom, and explore the design from every angle",
      instructions: "🖱️ Drag to rotate • Scroll to zoom • Right-click to pan",
    },
    location: {
      sectionTitle: "Location",
      heading: "Project Location",
      description: "Visit us at our project site in the heart of Munich",
      addressLabel: "Address",
      country: "Germany",
      directionsButton: "Get Directions",
      accessTitle: "Access Information",
      publicTransport: "U-Bahn: Theresienstraße (U2)",
      parking: "Parking available in nearby facilities",
      accessibility: "Wheelchair accessible entrance",
    },
    renderings: {
      sectionTitle: "Project Renderings",
      heading: "Visual Explorations",
      description: "Browse through our architectural renderings and visualizations. Click on any image to view it in full size.",
      viewImage: "View Full Image",
      closeImage: "Close",
    },
    history: {
      sectionTitle: "01 / History",
      heading: "Building Heritage",
      paragraph1: "Originally constructed in 1925, this landmark building has served the community for nearly a century. Its classical architecture represents an important chapter in the city's development, featuring distinctive period characteristics that must be carefully preserved.",
      paragraph2: "Throughout its history, the structure has witnessed significant urban transformations while maintaining its architectural integrity. Today, it stands as a testament to timeless design principles.",
      timeline: [
        { year: "1925", event: "Original construction completed" },
        { year: "1950", event: "First major renovation" },
        { year: "1985", event: "Designated as heritage building" },
        { year: "2020", event: "Initial assessment for redesign" },
      ],
    },
    team: {
      sectionTitle: "Our Team",
      heading: "Meet the Team",
      members: [
        {
          name: "Team Member",
          role: "ITBE Master's Student",
          bio: "Master's student in Integrated Building Engineering with a background in architecture.",
        },
        {
          name: "Mays Alsheikh",
          role: "ITBE Master's Student",
          bio: "Master's student in Integrated Building Engineering contributing to sustainable design solutions.",
        },
        {
          name: "Rafael Rodrigues Giglio",
          role: "ITBE Master's Student",
          bio: "Master's student in Integrated Building Engineering with expertise in building systems.",
        },
        {
          name: "Chandana Mahesh",
          role: "ITBE Master's Student",
          bio: "Master's student in Integrated Building Engineering focused on innovative building technologies.",
        },
        {
          name: "Antonia-Ioulia Pozatzidou",
          role: "ITBE Master's Student",
          bio: "Master's student in Integrated Building Engineering specializing in sustainable architecture.",
        },
      ],
    },
    contactInfo: {
      sectionTitle: "Get in Touch",
      heading: "Contact Information",
      email: "contact@architectproject.com",
      phone: "+49 89 123 456 789",
      website: "www.architectproject.com",
      instagram: "@architectproject",
      linkedin: "Architect Project Team",
    },
    feedback: {
      sectionTitle: "Feedback",
      heading: "Share Your Thoughts",
      description: "We value your feedback and suggestions. Let us know what you think about this project.",
      namePlaceholder: "Your name (optional)",
      emailPlaceholder: "Your email (optional)",
      messagePlaceholder: "Your feedback...",
      submitButton: "Submit Feedback",
      successMessage: "Thank you for your feedback!",
    },
  },
  de: {
    nav: {
      title: "Architektur Neugestaltung",
      home: "Startseite",
      concept: "Konzept",
      hub: "Hub",
      minds: "Minds",
      model: "3D-Modell",
    },
    hero: {
      badge: "Architektonische Neugestaltung 2025",
      transformationPrefix: "Umbau des ",
      title: "Das Hochvolthaus",
      description:
        "Ein transformativer Ansatz für nachhaltige Architektur, der moderne Designprinzipien mit Umweltbewusstsein verbindet und Räume schafft, die inspirieren und Bestand haben.",
      exploreButton: "Design erkunden",
      timelineButton: "Zeitplan ansehen",
      scrollText: "Scrollen zum Erkunden",
    },
    overview: {
      sectionTitle: "Projektübersicht",
      heading: "Eine Vision für nachhaltige Entwicklung",
      description:
        "Dieses Neugestaltungsprojekt stellt einen grundlegenden Wandel in unserem Ansatz zur Stadtarchitektur dar. Durch die Integration modernster nachhaltiger Technologien mit zeitlosen Designprinzipien schaffen wir einen Raum, der sowohl gegenwärtigen Bedürfnissen als auch zukünftigen Generationen dient.",
      stats: {
        area: "Gesamtfläche",
        capacity: "Kapazität",
        timeline: "Zeitplan",
        location: "Standort",
      },
    },
    features: {
      sectionTitle: "Hauptmerkmale",
      heading: "Nachhaltigkeit im Kern",
      description:
        "Jeder Aspekt dieser Neugestaltung wurde sorgfältig durchdacht, um Umweltauswirkungen zu minimieren und gleichzeitig Funktionalität und Schönheit zu maximieren.",
      items: {
        greenSpaces: {
          title: "Grünflächen",
          description:
            "Integrierte vertikale Gärten und Dachterrassen, die Biodiversität fördern und die Luftqualität verbessern.",
        },
        solar: {
          title: "Solarintegration",
          description:
            "Fortschrittliche Photovoltaik-Paneele, nahtlos in die Gebäudefassade integriert für saubere Energieerzeugung.",
        },
        water: {
          title: "Wassermanagement",
          description:
            "Regenwassersammlung und Grauwasser-Recyclingsysteme, die den Wasserverbrauch um 40% reduzieren.",
        },
        ventilation: {
          title: "Natürliche Belüftung",
          description:
            "Strategisch gestaltete Luftströmungsmuster, die den Bedarf an mechanischen Kühlsystemen minimieren.",
        },
        smart: {
          title: "Intelligente Systeme",
          description:
            "IoT-fähiges Gebäudemanagement für optimale Energieeffizienz und Bewohnerkomfort.",
        },
        materials: {
          title: "Nachhaltige Materialien",
          description:
            "Lokal bezogene, recycelte und kohlenstoffarme Materialien während des gesamten Bauprozesses.",
        },
      },
    },
    showcase: {
      sectionTitle: "Design-Philosophie",
      heading: "Wo Form auf Funktion trifft",
      technical: {
        title: "Technische Exzellenz",
        description: "Präzisionstechnik trifft auf innovatives Designdenken",
      },
      eco: {
        title: "Umweltbewusstes Design",
        description: "Harmonie zwischen gebauter Umwelt und Natur",
      },
      human: {
        title: "Menschenzentrierte Räume",
        description: "Durchdacht gestaltet für Komfort und Wohlbefinden",
      },
    },
    cta: {
      heading: "Bereit, mehr zu erfahren?",
      description:
        "Erhalten Sie die vollständige Projektdokumentation, technische Spezifikationen und Nachhaltigkeitsberichte. Begleiten Sie uns bei der Neugestaltung der Zukunft der Architektur.",
      downloadButton: "Projektübersicht herunterladen",
      contactButton: "Team kontaktieren",
      stats: {
        energy: "Energiereduzierung",
        certification: "Zertifizierungsziel",
        renewable: "Erneuerbare Energie",
      },
    },
    model3d: {
      sectionTitle: "3D-Modell",
      heading: "Interaktives 3D-Modell",
      description:
        "Ziehen zum Drehen, scrollen zum Zoomen und das Design aus jedem Winkel erkunden",
      instructions: "🖱️ Ziehen zum Drehen • Scrollen zum Zoomen • Rechtsklick zum Verschieben",
    },
    location: {
      sectionTitle: "Standort",
      heading: "Projektstandort",
      description: "Besuchen Sie uns an unserem Projektstandort im Herzen Münchens",
      addressLabel: "Adresse",
      country: "Deutschland",
      directionsButton: "Wegbeschreibung",
      accessTitle: "Zugangshinweise",
      publicTransport: "U-Bahn: Theresienstraße (U2)",
      parking: "Parkplätze in nahegelegenen Einrichtungen verfügbar",
      accessibility: "Rollstuhlgerechter Eingang",
    },
    renderings: {
      sectionTitle: "Projekt-Renderings",
      heading: "Visuelle Erkundungen",
      description: "Durchsuchen Sie unsere architektonischen Renderings und Visualisierungen. Klicken Sie auf ein Bild, um es in voller Größe anzuzeigen.",
      viewImage: "Vollbild anzeigen",
      closeImage: "Schließen",
    },
    history: {
      sectionTitle: "01 / Geschichte",
      heading: "Gebäudeerbe",
      paragraph1: "Ursprünglich 1925 erbaut, hat dieses Wahrzeichen-Gebäude der Gemeinschaft fast ein Jahrhundert lang gedient. Seine klassische Architektur stellt ein wichtiges Kapitel in der Stadtentwicklung dar und weist charakteristische Merkmale der Epoche auf, die sorgfältig bewahrt werden müssen.",
      paragraph2: "Im Laufe seiner Geschichte hat das Gebäude bedeutende städtebauliche Veränderungen miterlebt und dabei seine architektonische Integrität bewahrt. Heute steht es als Zeugnis zeitloser Designprinzipien.",
      timeline: [
        { year: "1925", event: "Ursprünglicher Bau abgeschlossen" },
        { year: "1950", event: "Erste größere Renovierung" },
        { year: "1985", event: "Als Denkmal ausgewiesen" },
        { year: "2020", event: "Erste Bewertung für Neugestaltung" },
      ],
    },
    team: {
      sectionTitle: "Unser Team",
      heading: "Lernen Sie das Team kennen",
      members: [
        {
          name: "Teammitglied",
          role: "ITBE-Masterstudentin",
          bio: "Masterstudentin im Integrierten Bauingenieurwesen mit Hintergrund in Architektur.",
        },
        {
          name: "Mays Alsheikh",
          role: "ITBE-Masterstudent",
          bio: "Masterstudent im Integrierten Bauingenieurwesen mit Beitrag zu nachhaltigen Designlösungen.",
        },
        {
          name: "Rafael Rodrigues Giglio",
          role: "ITBE-Masterstudent",
          bio: "Masterstudent im Integrierten Bauingenieurwesen mit Expertise in Gebäudesystemen.",
        },
        {
          name: "Chandana Mahesh",
          role: "ITBE-Masterstudent",
          bio: "Masterstudent im Integrierten Bauingenieurwesen mit Fokus auf innovative Gebäudetechnologien.",
        },
        {
          name: "Antonia-Ioulia Pozatzidou",
          role: "ITBE-Masterstudentin",
          bio: "Masterstudentin im Integrierten Bauingenieurwesen spezialisiert auf nachhaltige Architektur.",
        },
      ],
    },
    contactInfo: {
      sectionTitle: "Kontakt aufnehmen",
      heading: "Kontaktinformationen",
      email: "contact@architectproject.com",
      phone: "+49 89 123 456 789",
      website: "www.architectproject.com",
      instagram: "@architectproject",
      linkedin: "Architect Project Team",
    },
    feedback: {
      sectionTitle: "Feedback",
      heading: "Teilen Sie Ihre Gedanken",
      description: "Wir schätzen Ihr Feedback und Ihre Vorschläge. Lassen Sie uns wissen, was Sie von diesem Projekt halten.",
      namePlaceholder: "Ihr Name (optional)",
      emailPlaceholder: "Ihre E-Mail (optional)",
      messagePlaceholder: "Ihr Feedback...",
      submitButton: "Feedback senden",
      successMessage: "Vielen Dank für Ihr Feedback!",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}