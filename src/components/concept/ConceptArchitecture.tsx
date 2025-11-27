import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Card } from "../ui/card";

interface ConceptArchitectureProps {
  onBack: () => void;
}

export function ConceptArchitecture({ onBack }: ConceptArchitectureProps) {
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

      {/* Architecture Content */}
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
              Architecture
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              Exploring the architectural evolution, challenges, and innovative solutions of the Hochvolthaus redesign
            </p>
          </motion.div>

          {/* Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Analysis</h2>
            <Card className="p-12 shadow-lg">
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
                
                {/* Row 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="aspect-square bg-gray-100 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
              </div>
            </Card>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Challenges</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-red-50 to-white border-2 border-red-100">
                <h3 className="text-xl text-gray-900 mb-3">Heritage Preservation</h3>
                <p className="text-gray-600">
                  Balancing historic preservation requirements with modern building codes and performance standards
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100">
                <h3 className="text-xl text-gray-900 mb-3">Energy Efficiency</h3>
                <p className="text-gray-600">
                  Achieving contemporary energy standards while maintaining the building's architectural integrity
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-100">
                <h3 className="text-xl text-gray-900 mb-3">Structural Integration</h3>
                <p className="text-gray-600">
                  Integrating new mechanical, electrical, and digital systems into the existing fabric
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-100">
                <h3 className="text-xl text-gray-900 mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Ensuring full accessibility across all floors while respecting historic spatial relationships
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
                <h3 className="text-xl text-gray-900 mb-3">Urban Context</h3>
                <p className="text-gray-600">
                  Responding to surrounding buildings and street patterns while creating a distinctive presence
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100">
                <h3 className="text-xl text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Meeting ambitious sustainability goals within budget and technical constraints
                </p>
              </Card>
            </div>
          </motion.div>

          {/* The Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">The Concept</h2>
            <Card className="p-12 shadow-lg bg-white">
              <div className="mb-8">
                <h3 className="text-2xl text-gray-900 mb-4">Design Philosophy</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our architectural concept embraces a "future-heritage" approach: honoring the building's industrial 
                  past while creating a flexible, sustainable framework for future generations. The design strategy 
                  focuses on revealing and celebrating original structural elements while introducing contemporary 
                  interventions as distinct, reversible additions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center mb-4 text-xl">
                    01
                  </div>
                  <h4 className="text-lg text-gray-900 mb-2">Layer & Reveal</h4>
                  <p className="text-gray-600">
                    Expose original concrete structure and brick while inserting transparent modern elements
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center mb-4 text-xl">
                    02
                  </div>
                  <h4 className="text-lg text-gray-900 mb-2">Green Integration</h4>
                  <p className="text-gray-600">
                    Weave nature throughout the building with gardens, green walls, and planted terraces
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#001960] text-white rounded-xl flex items-center justify-center mb-4 text-xl">
                    03
                  </div>
                  <h4 className="text-lg text-gray-900 mb-2">Smart Systems</h4>
                  <p className="text-gray-600">
                    Deploy intelligent building systems that optimize energy use and enhance user experience
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
                <p className="text-gray-700 text-lg italic">
                  "The redesign doesn't seek to erase history but rather to create a dialogue between past and present, 
                  where each era's contribution remains legible and celebrated."
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl text-[#001960] mb-8">Transformation</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 shadow-lg">
                <div className="bg-gray-100 rounded-xl p-6 mb-6 text-center">
                  <div className="text-sm text-gray-500 mb-2">BEFORE</div>
                  <div className="text-3xl text-gray-900">1925 - 2023</div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Single-pane windows with high heat loss</li>
                  <li>• No thermal insulation</li>
                  <li>• Outdated HVAC systems</li>
                  <li>• Limited natural light penetration</li>
                  <li>• Inflexible floor layouts</li>
                  <li>• No renewable energy systems</li>
                </ul>
              </Card>
              
              <Card className="p-8 shadow-lg bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                <div className="bg-[#001960] text-white rounded-xl p-6 mb-6 text-center">
                  <div className="text-sm text-white/80 mb-2">AFTER</div>
                  <div className="text-3xl">2024 & Beyond</div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Triple-glazed, thermally broken windows</li>
                  <li>• High-performance insulation envelope</li>
                  <li>• Smart HVAC with heat recovery</li>
                  <li>• Maximized daylight with light wells</li>
                  <li>• Adaptable open-plan spaces</li>
                  <li>• Rooftop solar + ground-source heat pumps</li>
                </ul>
              </Card>
            </div>

            <Card className="p-12 bg-[#001960] text-white shadow-xl">
              <h3 className="text-3xl mb-6 text-center">Transformation Metrics</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-2">60%</div>
                  <p className="text-white/80">Energy Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">85%</div>
                  <p className="text-white/80">Renewable Energy</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">+40%</div>
                  <p className="text-white/80">Usable Space</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">100%</div>
                  <p className="text-white/80">Accessibility</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}