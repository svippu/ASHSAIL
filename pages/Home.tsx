import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Truck, Globe2, Award } from 'lucide-react';

// Honey text effect
const HoneyText = ({ children }: { children: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring, filter: 'url(#honey)' }}
      className="relative cursor-pointer"
    >
      <svg width="0" height="0">
        <filter id="honey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="honey"
          />
          <feBlend in="SourceGraphic" in2="honey" />
        </filter>
      </svg>
      <span className="text-5xl md:text-7xl font-bold text-amber-400 drop-shadow-lg">
        {children}
      </span>
    </motion.div>
  );
};

// Certification logo URLs (replace with your own if needed)
const certifications = [
  'https://kknaturalfood.com/wp-content/uploads/2021/07/ISO-22000.png',
  'https://kknaturalfood.com/wp-content/uploads/2021/07/usfda_b1.png',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/TSH-2.webp',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/BRC-3.webp',
  'https://kknaturalfood.com/wp-content/uploads/2021/07/halal_noBg.png',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/EIC-1.webp',
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://i.gyazo.com/e06ed6e54bb9150d07c36ad600a8fa30.png")',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <HoneyText>Ashsail Premium Honey Imports</HoneyText>
          <motion.p
            className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bringing the world's finest honey to American tables
          </motion.p>
          <Link to="/about">
            <motion.button
              className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div className="text-center" whileHover={{ y: -10 }}>
            <Globe2 className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl text-amber-600 font-semibold mb-2">Global Sourcing</h3>
            <p className="text-gray-600">
              Partnerships with premium honey producers worldwide
            </p>
          </motion.div>
          <motion.div className="text-center" whileHover={{ y: -10 }}>
            <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl text-amber-600 font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Strict quality control and FDA compliance
            </p>
          </motion.div>
          <motion.div className="text-center" whileHover={{ y: -10 }}>
            <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl text-amber-600 font-semibold mb-2">Reliable Delivery</h3>
            <p className="text-gray-600">Nationwide distribution network</p>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Accreditation Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-4">
          Certifications & Accreditation
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-4xl mx-auto">
          Our products have undergone comprehensive evaluations, aligning with
          international standards. From sustainable harvesting to rigorous
          quality checks, we’re proud to hold these esteemed certifications.
        </p>

        <div className="relative h-40 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-0 flex whitespace-nowrap transform -translate-y-1/2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30,
            }}
          >
            {[...certifications, ...certifications].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Certification logo"
                className="h-20 mx-20 inline-block"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}




