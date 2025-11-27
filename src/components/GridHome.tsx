import { motion } from "motion/react";
import { Building2, Heart, MessageCircle, Share2 } from "lucide-react";

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

interface GridHomeProps {
  onNavigate: (room: RoomColor) => void;
}

interface Floor {
  id: RoomColor;
  name: string;
  level: string;
  bgGradient: string;
  borderColor: string;
}

export function GridHome({ onNavigate }: GridHomeProps) {
  const floors: Floor[] = [
    { 
      id: "indigo", 
      name: "Roof", 
      level: "Level 7",
      bgGradient: "from-indigo-100 to-indigo-50",
      borderColor: "border-indigo-300 hover:border-indigo-500"
    },
    { 
      id: "purple", 
      name: "Third Floor", 
      level: "Level 6",
      bgGradient: "from-purple-100 to-purple-50",
      borderColor: "border-purple-300 hover:border-purple-500"
    },
    { 
      id: "blue", 
      name: "Second Floor", 
      level: "Level 5",
      bgGradient: "from-blue-100 to-blue-50",
      borderColor: "border-blue-300 hover:border-blue-500"
    },
    { 
      id: "teal", 
      name: "First Floor", 
      level: "Level 4",
      bgGradient: "from-teal-100 to-teal-50",
      borderColor: "border-teal-300 hover:border-teal-500"
    },
    { 
      id: "yellow", 
      name: "Mezzanine", 
      level: "Level 3",
      bgGradient: "from-yellow-100 to-yellow-50",
      borderColor: "border-yellow-300 hover:border-yellow-500"
    },
    { 
      id: "green", 
      name: "Ground Floor", 
      level: "Level 2",
      bgGradient: "from-green-100 to-green-50",
      borderColor: "border-green-300 hover:border-green-500"
    },
    { 
      id: "red", 
      name: "Basement", 
      level: "Level 1",
      bgGradient: "from-red-100 to-red-50",
      borderColor: "border-red-300 hover:border-red-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Building2 className="w-8 h-8 text-[#001960]" />
            <h1 className="text-gray-900">Building Floor Plan</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore the architectural redesign across all seven floors. Click on any floor to view the interactive room layout and event management system.
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
              className={`relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${floor.bgGradient} border-3 ${floor.borderColor} shadow-xl transition-all duration-300 aspect-square p-6 flex flex-col items-center justify-between group`}
            >
              {/* Floor Information */}
              <div className="text-center w-full">
                <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full mb-2">
                  <span className="text-xs text-gray-700">{floor.level}</span>
                </div>
                <h3 className="text-gray-900">{floor.name}</h3>
              </div>

              {/* Three Action Circles */}
              <div className="flex items-center gap-3">
                {/* Red Circle - Favorites */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-red-500 shadow-lg flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-white fill-white" />
                </motion.div>

                {/* Green Circle - Comments */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="w-12 h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center"
                >
                  <MessageCircle className="w-6 h-6 text-white fill-white" />
                </motion.div>

                {/* Blue Circle - Share */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-blue-500 shadow-lg flex items-center justify-center"
                >
                  <Share2 className="w-6 h-6 text-white fill-white" />
                </motion.div>
              </div>

              {/* Click to explore indicator */}
              <div className="text-xs text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity">
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
              <p className="text-xs text-gray-600">Interactive Features</p>
              <div className="flex gap-1 justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-600">Total Area</p>
              <p className="text-[#001960]">3,640 m²</p>
            </div>
          </div>
        </motion.div>

        {/* Feature Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200"
        >
          <h3 className="text-gray-900 mb-3 text-center">Interactive Floor Features</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-8 h-8 rounded-full bg-red-500 mx-auto mb-2 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <p className="text-sm text-gray-700">Favorite Rooms</p>
              <p className="text-xs text-gray-500 mt-1">Mark your preferred spaces</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-green-500 mx-auto mb-2 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white fill-white" />
              </div>
              <p className="text-sm text-gray-700">Add Comments</p>
              <p className="text-xs text-gray-500 mt-1">Share feedback and notes</p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center">
                <Share2 className="w-4 h-4 text-white fill-white" />
              </div>
              <p className="text-sm text-gray-700">Share Spaces</p>
              <p className="text-xs text-gray-500 mt-1">Collaborate with your team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
