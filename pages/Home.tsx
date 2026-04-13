import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from 'framer-motion';
import { Globe2, Award, Truck, ArrowRight, ChevronRight, Star } from 'lucide-react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 2.5,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

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

const stats = [
  { value: 40, suffix: '+', label: 'Countries' },
  { value: 50, suffix: '+', label: 'Honey Varieties' },
  { value: 5000, suffix: '+', label: 'B2B Clients' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
];

const features = [
  {
    icon: Globe2,
    title: 'Global Sourcing',
    desc: 'Direct partnerships with artisan beekeepers across 40+ countries. Authentic varietals, every time.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 22000, FDA compliant, HALAL certified. Every batch tested for purity and authenticity.',
  },
  {
    icon: Truck,
    title: 'Seamless Delivery',
    desc: 'Temperature-controlled logistics from source to your door, preserving flavor and nutrients.',
  },
];

const featuredProducts = [
  {
    name: 'Yemeni Sidr Honey',
    origin: 'Yemen',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Sidr-Jujube-Honey.jpg',
    tag: 'Bestseller',
    desc: 'Dark amber with velvety medicinal depth',
  },
  {
    name: 'Hungarian Acacia',
    origin: 'Hungary',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/acacia-honey.jpg',
    tag: 'Premium',
    desc: 'Delicate vanilla notes, ultra-smooth',
  },
  {
    name: 'Himalayan Multiflora',
    origin: 'Himalayan Region',
    image: 'https://kknaturalfood.com/wp-content/uploads/2021/07/Multiflora-Himalayan-Honey.jpg',
    tag: 'Rare',
    desc: 'Vibrant floral bouquet, rich in nutrients',
  },
];

const testimonials = [
  {
    quote: "Ashsail's Acacia honey is unlike anything we've sourced before — our customers keep coming back for it.",
    name: 'Marcus T.',
    role: 'Specialty Foods Retailer, NYC',
    rating: 5,
  },
  {
    quote: 'Transparent supply chain, fast shipping, and the quality is consistently world-class.',
    name: 'Priya S.',
    role: 'Restaurant Group Procurement, Chicago',
    rating: 5,
  },
  {
    quote: 'The Sidr Jujube honey we import through Ashsail has become our best-selling premium item.',
    name: 'David L.',
    role: 'Natural Grocery Chain, California',
    rating: 5,
  },
];

const certifications = [
  'https://kknaturalfood.com/wp-content/uploads/2021/07/ISO-22000.png',
  'https://kknaturalfood.com/wp-content/uploads/2021/07/usfda_b1.png',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/TSH-2.webp',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/BRC-3.webp',
  'https://kknaturalfood.com/wp-content/uploads/2021/07/halal_noBg.png',
  'https://kknaturalfood.com/wp-content/uploads/2023/08/EIC-1.webp',
];

const HONEYCOMB_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='97'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16zm0 97l28-16V49L28 33 0 49v32z' fill='none' stroke='%23fbbf24' stroke-width='1.5'/%3E%3C/svg%3E\")";

export function Home() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 700], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0c0904]">
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              'url("https://i.gyazo.com/e06ed6e54bb9150d07c36ad600a8fa30.png")',
            y: heroImageY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-[#0c0904]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: HONEYCOMB_SVG, backgroundSize: '56px 97px' }}
        />

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Premium Honey Imports · Columbus, Ohio
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            The World's Finest{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              Honey
            </span>
            ,{' '}Delivered
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Ashsail sources single-origin, artisan honeys from 40+ countries — connecting exceptional beekeepers with American consumers and businesses.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/products">
              <motion.button
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-200 flex items-center gap-2 group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="border border-white/25 hover:border-amber-400/60 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-2 bg-amber-400 rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-amber-400 mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/40 text-xs font-medium uppercase tracking-widest">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-28 bg-[#0f0b06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Why Ashsail
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
              Built on Trust & Quality
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <motion.div
                  className="group relative bg-white/[0.03] hover:bg-amber-500/8 border border-white/8 hover:border-amber-500/25 rounded-2xl p-8 transition-all duration-300 overflow-hidden cursor-default"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/25 transition-colors duration-300">
                    <f.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                  <p className="text-white/45 leading-relaxed text-sm">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-28 bg-[#0c0904]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
                Our Catalog
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                Featured Varieties
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
            >
              View All Products <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredProducts.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                      {p.origin}
                    </p>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{p.name}</h3>
                    <p className="text-white/50 text-sm mb-5">{p.desc}</p>
                    <Link to="/contact">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-full transition-colors">
                        Inquire <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10 md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-amber-400 font-medium text-sm"
            >
              View All Products <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 bg-[#0f0b06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
              Trusted by Businesses
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col gap-5 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm flex-1">"{t.quote}"</p>
                  <div className="border-t border-white/8 pt-5">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-20 overflow-hidden border-t border-white/5">
        <Reveal className="text-center mb-12">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
            Accreditation
          </span>
          <h2 className="text-3xl font-serif font-bold text-white mt-4">
            Certified & Compliant
          </h2>
        </Reveal>

        <div className="relative overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0c0904] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0c0904] to-transparent z-10 pointer-events-none" />
          <div
            className="marquee-track flex items-center"
            style={{ width: 'max-content' }}
          >
            {[...certifications, ...certifications].map((src, idx) => (
              <div
                key={idx}
                className="mx-5 bg-white rounded-2xl px-5 py-3 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-sm flex-shrink-0"
                style={{ minWidth: '110px', height: '72px' }}
              >
                <img
                  src={src}
                  alt="cert"
                  className="max-h-12 max-w-[90px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/25 via-amber-800/10 to-transparent" />
        <div className="absolute inset-0 border-y border-amber-500/10" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: HONEYCOMB_SVG, backgroundSize: '56px 97px' }}
        />
        <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to source the{' '}
            <span className="italic text-amber-400">world's best</span> honey?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Retailer, restaurant, or distributor — we have the right variety and volume for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button
                className="border border-white/20 hover:border-amber-400/50 text-white/70 hover:text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Products
              </motion.button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
