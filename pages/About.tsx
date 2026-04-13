import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X as CloseIcon, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const facilityImages = [
  {
    url: 'https://kknaturalfood.com/wp-content/uploads/2021/11/KK-Natural-Food-Industries-LLP-Linear-Layout-768x432.png',
    title: 'Processing Facility',
    description: 'State-of-the-art honey processing and bottling.',
  },
  {
    url: 'https://kknaturalfood.com/wp-content/uploads/2022/04/Pic-12.jpg',
    title: 'Quality Control Lab',
    description: 'Advanced testing equipment for ensuring honey purity.',
  },
  {
    url: 'https://kknaturalfood.com/wp-content/uploads/2022/04/Pic-2.jpg',
    title: 'Storage Warehouse',
    description: 'Temperature-controlled storage for preserving quality.',
  },
  {
    url: 'https://kknaturalfood.com/wp-content/uploads/2021/11/Honey-De-Crystallization-Filtration-Copy.jpg',
    title: 'De-Crystallization Setup',
    description: 'Industrial filtration system before bottling.',
  },
];

const commitments = [
  'Direct partnerships with beekeepers — no middlemen',
  'Sustainable and ethical sourcing practices',
  'Regular quality audits and batch testing',
  'Full supply chain transparency',
  'Support for local beekeeping communities',
  'FDA compliant cold-chain logistics',
];

const timeline = [
  {
    year: '2020',
    title: 'Founded',
    desc: 'Ashsail Honey Imports established in Columbus, Ohio with a focus on premium single-origin honey.',
  },
  {
    year: '2021',
    title: 'First International Partnerships',
    desc: 'Secured direct sourcing agreements with beekeepers in Eastern Europe, India, and the Middle East.',
  },
  {
    year: '2022',
    title: 'Certifications Achieved',
    desc: 'Obtained ISO 22000, HALAL, and FDA compliance certifications across our supply chain.',
  },
  {
    year: '2023',
    title: 'National Distribution',
    desc: 'Expanded to serve 5,000+ retailers, restaurants, and distributors across the United States.',
  },
  {
    year: '2024',
    title: 'Catalog Expansion',
    desc: 'Grew to 50+ honey varieties from 40+ countries, including rare Himalayan and Yemeni Sidr.',
  },
];

const HONEYCOMB_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='97'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16zm0 97l28-16V49L28 33 0 49v32z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3C/svg%3E\")";

export function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((p) => (p + 1) % facilityImages.length);
  const prevSlide = () => setSlideIndex((p) => (p - 1 + facilityImages.length) % facilityImages.length);

  return (
    <div className="min-h-screen bg-[#0c0904]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: HONEYCOMB_SVG, backgroundSize: '56px 97px' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Connecting the World's{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Finest Beekeepers
            </span>{' '}
            to Your Table
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Since 2020, Ashsail has revolutionized honey imports — sourcing authentically from 40+ countries and delivering certified quality to American businesses.
          </motion.p>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 bg-[#0f0b06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-10 h-full">
                <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center mb-6 text-lg">
                  🌍
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/50 leading-relaxed">
                  To source and deliver the highest quality honey while supporting sustainable beekeeping practices and fair trade relationships with beekeepers worldwide.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-10 h-full">
                <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center mb-6 text-lg">
                  ✨
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/50 leading-relaxed">
                  To become the most trusted name in premium honey imports — known globally for uncompromising quality, full supply chain transparency, and sustainable sourcing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 bg-[#0c0904]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
              From Startup to Industry Leader
            </h2>
          </Reveal>

          <div className="relative pl-8 md:pl-0">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent md:-translate-x-px" />

            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className={`relative flex mb-10 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-4 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#0c0904] ring-2 ring-amber-400/30 md:-translate-x-1/2 z-10" />

                  <div className="hidden md:block w-1/2" />

                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
                    }`}
                  >
                    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-amber-500/20 transition-colors duration-300">
                      <span className="text-amber-400 text-sm font-bold font-mono">
                        {item.year}
                      </span>
                      <h3 className="text-white font-semibold text-lg mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMITMENTS ─── */}
      <section className="py-24 bg-[#0f0b06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
              Our Commitment to You
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {commitments.map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white/[0.02] border border-white/6 rounded-xl p-5 hover:border-amber-500/20 transition-colors duration-300">
                  <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-white/65 text-sm">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACILITY ─── */}
      <section className="py-24 bg-[#0c0904]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
              Our Facility
            </h2>
          </Reveal>

          {/* Main Carousel */}
          <div className="relative rounded-2xl overflow-hidden mb-4">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={facilityImages[slideIndex].url}
                    alt={facilityImages[slideIndex].title}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setSelectedImage(slideIndex)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {facilityImages[slideIndex].title}
                    </h3>
                    <p className="text-amber-200/60 text-sm">
                      {facilityImages[slideIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Progress dots */}
            <div className="absolute bottom-6 right-8 flex gap-2">
              {facilityImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slideIndex ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-3">
            {facilityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                  i === slideIndex
                    ? 'ring-2 ring-amber-400 opacity-100'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODAL ─── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-amber-400 transition-colors"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
              <img
                src={facilityImages[selectedImage].url}
                alt={facilityImages[selectedImage].title}
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
