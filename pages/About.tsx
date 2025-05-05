import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const facilityImages = [
  {
    url: "https://kknaturalfood.com/wp-content/uploads/2021/11/KK-Natural-Food-Industries-LLP-Linear-Layout-768x432.png",
    title: "Processing Facility",
    description: "State-of-the-art honey processing and bottling facility."
  },
  {
    url: "https://kknaturalfood.com/wp-content/uploads/2022/04/Pic-12.jpg",
    title: "Quality Control Lab",
    description: "Advanced testing equipment for ensuring honey purity."
  },
  {
    url: "https://kknaturalfood.com/wp-content/uploads/2022/04/Pic-2.jpg",
    title: "Storage Warehouse",
    description: "Temperature-controlled storage for preserving honey quality."
  },
  {
    url: "https://kknaturalfood.com/wp-content/uploads/2021/11/Honey-De-Crystallization-Filtration-Copy.jpg",
    title: "Industrial Honey De-Crystallization and Filtration Setup",
    description: "The jacketed tank melts and filters crystallized honey before bottling."
  }
];

export function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const closeModal = () => setSelectedImage(null);
  
  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % facilityImages.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
  };

  return (
    <div className="min-h-screen pt-20 bg-amber-50">
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">Our Story</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Founded in 2020, Ashsail Honey Imports has revolutionized the honey industry by bringing the world's finest honey varieties to American consumers and businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To source and deliver the highest quality honey while supporting sustainable beekeeping practices worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted name in premium honey imports, known for quality, sustainability, and innovation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-amber-900 mb-6">Quality Assurance</h2>
          <p className="text-xl text-gray-700 mb-6">
            Every batch of honey we import undergoes rigorous testing and quality control measures to ensure it meets our strict standards for purity and excellence.
          </p>

          <div className="bg-amber-100 p-8 rounded-lg my-8">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Our Commitment</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Direct partnerships with beekeepers</li>
              <li>Sustainable and ethical sourcing practices</li>
              <li>Regular quality audits and testing</li>
              <li>Full supply chain transparency</li>
              <li>Support for local beekeeping communities</li>
            </ul>
          </div>

          {/* Facility Section */}
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Facility</h2>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-4 mb-8"
              animate={{ x: -slideIndex * 100 + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {facilityImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="min-w-full cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                      <p className="text-amber-200">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
              <img
                src={facilityImages[selectedImage].url}
                alt={facilityImages[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {facilityImages[selectedImage].title}
                </h3>
                <p className="text-lg text-amber-200">
                  {facilityImages[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );





}


