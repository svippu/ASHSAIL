import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';
import { MapPin, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const products = [
  {
    name: 'Acacia Honey',
    origin: 'Eastern Europe',
    region: 'Europe',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/acacia-honey.jpg',
    description: 'Light and sweet with delicate floral notes. Slow to crystallize.',
  },
  {
    name: 'Rapeseed Honey',
    origin: 'Poland',
    region: 'Europe',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Rapeseed-Mustard-Honey.jpg',
    description: 'Strong taste, fast-crystallizing. Creamy white-to-amber with low acidity.',
  },
  {
    name: 'Sunflower Honey',
    origin: 'Ukraine',
    region: 'Europe',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Sunflower-honey.jpg',
    description: 'Sun-kissed amber sweetness. Fast-crystallizing golden nectar with buttery notes.',
  },
  {
    name: 'Acacia Honey',
    origin: 'Hungary',
    region: 'Europe',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/acacia-honey.jpg',
    description: 'Delicate vanilla aroma, light golden sweetness. Ultra-smooth, low-sucrose.',
  },
  {
    name: 'Eucalyptus Honey',
    origin: 'Australia',
    region: 'Asia-Pacific',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Eucalyptus-Honeyjpg.jpg',
    description: 'Distinctive herbal aroma. Smooth amber sweetness with natural medicinal benefits.',
  },
  {
    name: 'Lychee Honey',
    origin: 'China',
    region: 'Asia-Pacific',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/lychee-honey-1.jpg',
    description: 'Exotic lychee aroma. Golden sweetness with tropical tang and creamy texture.',
  },
  {
    name: 'Multiflora Honey',
    origin: 'Himalayan Region',
    region: 'Asia-Pacific',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Multiflora-Himalayan-Honey.jpg',
    description: 'Vibrant floral bouquet. Golden nectar rich in nutrients and immunity boosters.',
  },
  {
    name: 'Wild Flora Honey',
    origin: 'Worldwide',
    region: 'Asia-Pacific',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Wild-Flora-Honey.jpg',
    description: 'Earthy wildflower aroma. Raw amber nectar bursting with organic wellness.',
  },
  {
    name: 'Sidr Jujube Honey',
    origin: 'Yemen',
    region: 'Middle East',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Sidr-Jujube-Honey.jpg',
    description: 'Rich fruity aroma. Dark amber sweetness with velvety, medicinal depth.',
  },
];

const tabs = ['All', 'Europe', 'Asia-Pacific', 'Middle East'];

const HONEYCOMB_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='97'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16zm0 97l28-16V49L28 33 0 49v32z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3C/svg%3E\")";

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.07}>
      <motion.div
        className="group bg-white/[0.03] border border-white/8 hover:border-amber-500/25 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-white/70">
              <MapPin className="h-3 w-3 text-amber-400" />
              {product.origin}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">
            {product.description}
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-black bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-full transition-colors duration-200">
              Request Quote <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Products() {
  return (
    <div className="min-h-screen bg-[#0c0904]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/15 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: HONEYCOMB_SVG, backgroundSize: '56px 97px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Catalog
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Premium{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Honey
            </span>{' '}
            Selection
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From Yemeni Sidr to Himalayan Multiflora — every variety in our catalog is sourced directly from trusted beekeepers and certified for quality.
          </motion.p>
        </div>
      </section>

      {/* ─── CATALOG ─── */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <TabGroup>
            <div className="flex justify-center mb-12">
              <TabList className="inline-flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/8 rounded-full">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }: { selected: boolean }) =>
                      clsx(
                        'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 outline-none',
                        selected
                          ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                          : 'text-white/55 hover:text-white hover:bg-white/8'
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {tabs.map((tab) => {
                const filtered =
                  tab === 'All' ? products : products.filter((p) => p.region === tab);
                return (
                  <TabPanel key={tab}>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filtered.map((product, i) => (
                        <ProductCard
                          key={`${product.name}-${product.origin}`}
                          product={product}
                          index={i}
                        />
                      ))}
                    </motion.div>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </TabGroup>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 bg-[#0f0b06] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Don't see what you need?
          </h2>
          <p className="text-white/45 mb-8">
            We can source virtually any honey variety. Contact us with your requirements.
          </p>
          <Link to="/contact">
            <motion.button
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
