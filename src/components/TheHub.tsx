import { motion } from "motion/react";
import { Building2 } from "lucide-react";

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

interface TheHubProps {
  onNavigate: (room: RoomColor) => void;
}

interface Floor {
  id: RoomColor;
  name: string;
  level: string;
  description: string;
  bgGradient: string;
  borderColor: string;
}

export function TheHub({ onNavigate }: TheHubProps) {
  const floors: Floor[] = [
    { 
      id: "indigo", 
      name: "Roof", 
      level: "Level 7",
      description: "Rooftop terrace and utilities",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "purple", 
      name: "Third Floor", 
      level: "Level 6",
      description: "Executive offices",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "blue", 
      name: "Second Floor", 
      level: "Level 5",
      description: "Private workspaces",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "teal", 
      name: "First Floor", 
      level: "Level 4",
      description: "Main offices",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "yellow", 
      name: "Mezzanine", 
      level: "Level 3",
      description: "Gallery and workspace",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "green", 
      name: "Ground Floor", 
      level: "Level 2",
      description: "Main entrance and lobby",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
    { 
      id: "red", 
      name: "Basement", 
      level: "Level 1",
      description: "Storage and parking",
      bgGradient: "bg-white",
      borderColor: "border-gray-900 hover:border-gray-700"
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6" style={{
      backgroundColor: '#f8f9fa',
      backgroundImage: 'var(--dot-bg)',
      backgroundSize: 'var(--dot-size)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Building2 className="w-8 h-8 text-[#001960]" />
            <h1 className="text-gray-900">The HUB</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Explore each floor of the Hochvolthaus. Click on any floor to view detailed room layouts and interactive features.
          </motion.p>
        </div>

        {/* Grid of Floor Squares */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {floors.map((floor, index) => (
            <motion.button
              key={floor.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(floor.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer ${floor.bgGradient} border-3 ${floor.borderColor} shadow-xl transition-all duration-300 aspect-square p-6 flex flex-col items-center justify-center group`}
            >
              {/* Floor Information */}
              <div className="text-center w-full">
                <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full mb-3">
                  <span className="text-xs text-gray-700">{floor.level}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{floor.name}</h3>
                <p className="text-xs text-gray-600 px-2">{floor.description}</p>
              </div>

              {/* Click to explore indicator */}
              <div className="absolute bottom-4 left-0 right-0 text-xs text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Click to explore
              </div>

              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)'
                }} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Building Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center gap-6 bg-white rounded-2xl shadow-lg px-8 py-4 border border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-600">Total Floors</p>
              <p className="text-[#001960]">7 Levels</p>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-600">Building Height</p>
              <p className="text-[#001960]">~32 meters</p>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-600">Total Area</p>
              <p className="text-[#001960]">3,640 m²</p>
            </div>
          </div>
        </motion.div>

        {/* Hub Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-200"
        >
          <h3 className="text-gray-900 mb-4 text-center">Interactive Floor Management</h3>
          <p className="text-gray-600 text-center mb-4">
            Each floor contains multiple rooms with detailed layouts and interactive event management features.
            Navigate through the building to explore room configurations, add comments, mark favorites, 
            and collaborate with your team.
          </p>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Click on any floor above to begin exploring
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}