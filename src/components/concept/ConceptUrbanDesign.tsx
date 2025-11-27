import { motion } from "motion/react";
import { ArrowLeft, MapPin, Search, AlertTriangle, Lightbulb, Link as LinkIcon } from "lucide-react";
import { Card } from "../ui/card";

interface ConceptUrbanDesignProps {
  onBack: () => void;
}

export function ConceptUrbanDesign({ onBack }: ConceptUrbanDesignProps) {
  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#f8f9fa',
      backgroundImage: 'var(--dot-bg)',
      backgroundSize: 'var(--dot-size)'
    }}>
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#001960] hover:text-[#001960]/70 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to The Concept</span>
          </button>
        </div>
      </div>

      {/* Urban Design Content */}
      <section className="py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-5xl sm:text-6xl text-[#001960]">
              Urban Design
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              Understanding the urban context, challenges, and integration strategies that shape 
              the Hochvolthaus redesign within Munich's urban fabric
            </p>
          </motion.div>

          {/* 1. Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center text-xl">
                1
              </div>
              <h2 className="text-4xl text-[#001960]">Context</h2>
            </div>
            
            <Card className="p-12 shadow-lg">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-[#001960]" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-3">Munich Urban Context</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The Hochvolthaus is strategically located in Munich's dynamic urban core, near Theresienstraße. 
                    This neighborhood blends historic architecture with contemporary development, proximity to cultural 
                    institutions, and excellent public transportation connectivity.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 text-sm">
                    Central Munich, mixed-use district with residential, commercial, and cultural activities
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg text-gray-900 mb-2">Connectivity</h4>
                  <p className="text-gray-600 text-sm">
                    5-minute walk to U-Bahn, multiple bus routes, extensive cycling infrastructure
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg text-gray-900 mb-2">Surroundings</h4>
                  <p className="text-gray-600 text-sm">
                    Universities, museums, parks, cafes, and diverse neighborhood amenities
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 2. Site Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center text-xl">
                2
              </div>
              <h2 className="text-4xl text-[#001960]">Site Analysis</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-8 h-8 text-[#001960]" />
                  <h3 className="text-2xl text-gray-900">Physical Characteristics</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Site Area:</strong> 1,200 m² footprint</li>
                  <li><strong>Building Height:</strong> 7 floors, ~28 meters</li>
                  <li><strong>Street Frontage:</strong> 45m on primary street</li>
                  <li><strong>Orientation:</strong> North-South primary axis</li>
                  <li><strong>Setbacks:</strong> Minimal; aligned with street edge</li>
                  <li><strong>Adjacencies:</strong> Mixed-height neighbors (4-8 floors)</li>
                </ul>
              </Card>

              <Card className="p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-8 h-8 text-[#001960]" />
                  <h3 className="text-2xl text-gray-900">Urban Flows</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Pedestrian Traffic:</strong> High foot traffic on main street</li>
                  <li><strong>Vehicular Access:</strong> Secondary street access for service</li>
                  <li><strong>Cycling Routes:</strong> Protected bike lane along frontage</li>
                  <li><strong>Public Transit:</strong> U2 station 400m away</li>
                  <li><strong>View Corridors:</strong> Visible from multiple approaches</li>
                  <li><strong>Sun Path:</strong> South-facing courtyard opportunities</li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* 3. Urban Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center text-xl">
                3
              </div>
              <h2 className="text-4xl text-[#001960]">Urban Challenges</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-red-50 to-white border-2 border-red-100">
                <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Density Pressure</h3>
                <p className="text-gray-600">
                  Balancing increased density with quality public space and neighborhood character
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100">
                <AlertTriangle className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Limited Green Space</h3>
                <p className="text-gray-600">
                  Highly urbanized site with minimal existing vegetation or permeable surfaces
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-100">
                <AlertTriangle className="w-10 h-10 text-yellow-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Street Activation</h3>
                <p className="text-gray-600">
                  Previously inactive ground floor; opportunity to energize street life
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-100">
                <AlertTriangle className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Parking Constraints</h3>
                <p className="text-gray-600">
                  Limited on-site parking; need to encourage sustainable mobility options
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
                <AlertTriangle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Scale Transition</h3>
                <p className="text-gray-600">
                  Mediating between varying building heights and architectural styles
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100">
                <AlertTriangle className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">Urban Heat Island</h3>
                <p className="text-gray-600">
                  Contributing to cooling strategies in dense urban environment
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 4. Urban Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center text-xl">
                4
              </div>
              <h2 className="text-4xl text-[#001960]">Urban Concept</h2>
            </div>
            
            <Card className="p-12 shadow-lg bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-[#001960] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-4">Strategic Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our urban concept transforms the Hochvolthaus from an inward-looking industrial building 
                    into an engaged urban citizen—porous, accessible, and generous to its surroundings. 
                    The design creates multiple scales of public interaction: from intimate street-level encounters 
                    to broader contributions to the neighborhood's ecological and social infrastructure.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🌳</div>
                  <h4 className="text-lg text-gray-900 mb-2">Vertical Green Network</h4>
                  <p className="text-gray-600 text-sm">
                    Green roofs, terraces, and living walls that visually connect to neighborhood parks
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🚶</div>
                  <h4 className="text-lg text-gray-900 mb-2">Activated Ground Plane</h4>
                  <p className="text-gray-600 text-sm">
                    Transparent facades, public seating, retail, and cafe creating street vitality
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🔗</div>
                  <h4 className="text-lg text-gray-900 mb-2">Connected Mobility</h4>
                  <p className="text-gray-600 text-sm">
                    Generous bike parking, EV charging, and pedestrian-priority design
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 5. Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center text-xl">
                5
              </div>
              <h2 className="text-4xl text-[#001960]">Integration</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <LinkIcon className="w-8 h-8 text-[#001960]" />
                  <h3 className="text-2xl text-gray-900">Contextual Integration</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Height Alignment:</strong> Respects cornice lines of adjacent buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Material Harmony:</strong> Contemporary materials that echo neighborhood palette</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Rhythm & Proportion:</strong> Facade articulation responds to street patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Street Wall Continuity:</strong> Maintains urban edge while adding texture</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <LinkIcon className="w-8 h-8 text-[#001960]" />
                  <h3 className="text-2xl text-gray-900">Community Integration</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Public Access:</strong> Ground floor spaces open to neighborhood use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Local Economy:</strong> Supporting small businesses and local entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Cultural Programming:</strong> Exhibition space for local artists and events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#001960] rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Safety & Eyes:</strong> Active uses that enhance neighborhood security</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-12 bg-[#001960] text-white shadow-xl">
              <h3 className="text-3xl mb-6 text-center">Integration Outcomes</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-2">100%</div>
                  <p className="text-white/80">Accessible Public Space</p>
                </div>
                <div>
                  <div className="text-5xl mb-2">200+</div>
                  <p className="text-white/80">Bicycle Parking Spots</p>
                </div>
                <div>
                  <div className="text-5xl mb-2">30%</div>
                  <p className="text-white/80">Green Coverage</p>
                </div>
                <div>
                  <div className="text-5xl mb-2">24/7</div>
                  <p className="text-white/80">Street Activation</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-12 border border-gray-200"
          >
            <p className="text-xl text-gray-700 leading-relaxed text-center italic">
              "The Hochvolthaus redesign demonstrates how adaptive reuse can strengthen urban fabric—
              respecting heritage while contributing new vitality, sustainability, and community value 
              to Munich's evolving cityscape."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}