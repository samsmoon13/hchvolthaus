import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import renderingImage from "figma:asset/edda7ef71948c00d39d3515e02987df4bfbff0c9.png";

const renderings = [
  {
    id: 1,
    url: renderingImage,
    title: "Modern Architecture Rendering",
  },
  {
    id: 2,
    url: renderingImage,
    title: "Building Exterior Render",
  },
  {
    id: 3,
    url: renderingImage,
    title: "Architecture Visualization",
  },
  {
    id: 4,
    url: renderingImage,
    title: "Contemporary Building Design",
  },
  {
    id: 5,
    url: renderingImage,
    title: "Architectural Interior Render",
  },
  {
    id: 6,
    url: renderingImage,
    title: "Modern House Exterior",
  },
];

export function RenderingsGallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 text-muted-foreground">
            {t.renderings?.sectionTitle || "Project Renderings"}
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl">
            {t.renderings?.heading || "Visual Explorations"}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            {t.renderings?.description ||
              "Browse through our architectural renderings and visualizations. Click on any image to view it in full size."}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderings.map((rendering, index) => (
            <motion.div
              key={rendering.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-muted"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={rendering.url}
                alt={rendering.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{rendering.title}</span>
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                onClick={() => setSelectedImage(null)}
                aria-label={t.renderings?.closeImage || "Close"}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-7xl max-h-[90vh] w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <ImageWithFallback
                  src={renderings[selectedImage].url}
                  alt={renderings[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4">
                  {selectedImage > 0 && (
                    <button
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage - 1);
                      }}
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="flex-1" />
                  {selectedImage < renderings.length - 1 && (
                    <button
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage + 1);
                      }}
                      aria-label="Next image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  {selectedImage + 1} / {renderings.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
