import { motion } from "motion/react";
import { ArrowLeft, Image as ImageIcon, FileText, Landmark } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card } from "../ui/card";

interface ConceptHistoryProps {
  onBack: () => void;
}

export function ConceptHistory({ onBack }: ConceptHistoryProps) {
  const { t } = useLanguage();

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

      {/* History Content */}
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
              {t.history.heading}
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              {t.history.paragraph1}
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Timeline</h2>
            
            <div className="relative">
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-[#001960]/20" />
              
              <div className="space-y-8">
                {t.history.timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                    className="relative flex items-start gap-6"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-[#001960] text-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <p className="text-gray-700 text-lg">{item.event}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Archival Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Archival Plans</h2>
            <Card className="p-12 shadow-lg">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-[#001960]" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-3">Original Drawings & Documentation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Munich City Archives house a comprehensive collection of original architectural drawings 
                    from 1925, including floor plans, elevations, structural details, and construction specifications. 
                    These documents provide invaluable insights into the building's original design intent and 
                    construction methodology.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Floor Plans</div>
                  <div className="text-2xl text-gray-900">7 Levels</div>
                  <p className="text-gray-600 text-sm mt-2">Complete set of original floor layouts</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Structural Drawings</div>
                  <div className="text-2xl text-gray-900">24 Sheets</div>
                  <p className="text-gray-600 text-sm mt-2">Reinforced concrete details and calculations</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Historic Photos</div>
                  <div className="text-2xl text-gray-900">50+ Images</div>
                  <p className="text-gray-600 text-sm mt-2">Construction and early occupation</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Historic Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Historic Images</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Construction Phase (1925)</h3>
                <p className="text-gray-600">
                  Rare photographs documenting the construction process, showing the reinforced concrete 
                  framework and the building taking shape in the urban landscape.
                </p>
              </Card>
              
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Early Operations (1926-1940)</h3>
                <p className="text-gray-600">
                  Historical images showing the building in its original industrial use, with period machinery, 
                  workspaces, and the surrounding neighborhood context.
                </p>
              </Card>
              
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Post-War Era (1950s-1970s)</h3>
                <p className="text-gray-600">
                  Documentation of the building's adaptation and modifications during Munich's 
                  reconstruction period, showing evolving uses and minor alterations.
                </p>
              </Card>
              
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Recent History (1990-2023)</h3>
                <p className="text-gray-600">
                  Contemporary photographs capturing the building's state prior to the current redesign, 
                  documenting wear, alterations, and opportunities for transformation.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Identity</h2>
            <Card className="p-12 shadow-lg bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-[#001960] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-3">Cultural & Architectural Significance</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The Hochvolthaus represents a pivotal moment in Munich's industrial modernization. 
                    Built during the Weimar Republic's construction boom, it embodies the era's progressive 
                    spirit—combining functional efficiency with architectural ambition. Its reinforced concrete 
                    construction was cutting-edge for the time, and the building's honest expression of structure 
                    reflects the modernist principles emerging across Europe.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl text-gray-900 mb-3">Architectural Character</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Industrial modernism with clean lines</li>
                    <li>• Rational grid-based façade composition</li>
                    <li>• Large industrial windows for natural light</li>
                    <li>• Exposed structural expression</li>
                    <li>• Functional aesthetic without ornamentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 mb-3">Historical Context</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Part of Munich's electrification era</li>
                    <li>• Symbol of technological progress</li>
                    <li>• Witness to 100 years of urban change</li>
                    <li>• Connection to industrial heritage</li>
                    <li>• Community landmark and memory</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="mt-8 bg-[#001960] text-white rounded-3xl p-12">
              <p className="text-xl text-white/90 leading-relaxed text-center italic">
                "The identity of Hochvolthaus is rooted in its honest expression of purpose—a building 
                that proudly served its industrial function. Our redesign honors this legacy by maintaining 
                that same honesty, now in service of sustainable, community-centered architecture."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}