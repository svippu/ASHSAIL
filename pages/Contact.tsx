import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingInput({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const lifted = focused || hasValue;

  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required={required}
        placeholder=""
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(!!e.target.value);
        }}
        className="w-full bg-white/5 border border-white/10 focus:border-amber-500 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none transition-colors duration-200"
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          lifted ? 'top-2 text-[11px] text-amber-400 font-medium' : 'top-4 text-white/35 text-sm'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const lifted = focused || hasValue;

  return (
    <div className="relative">
      <textarea
        name={name}
        required={required}
        rows={5}
        placeholder=""
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(!!e.target.value);
        }}
        className="w-full bg-white/5 border border-white/10 focus:border-amber-500 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none transition-colors duration-200 resize-none"
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          lifted ? 'top-2 text-[11px] text-amber-400 font-medium' : 'top-4 text-white/35 text-sm'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

const HONEYCOMB_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='97'%3E%3Cpath d='M28 0l28 16v32L28 64 0 48V16zm0 97l28-16V49L28 33 0 49v32z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3C/svg%3E\")";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    emailjs
      .sendForm('service_pqe58hc', 'template_p1e1rpv', formRef.current, 'qYmZm4LWmx2IRmq5F')
      .then(() => setStatus('sent'))
      .catch(() => setStatus('idle'));
  };

  return (
    <div className="min-h-screen bg-[#0c0904]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20">
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
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mt-4 mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's Work{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Together
            </span>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Whether you're a retailer, restaurant, or distributor — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6">
          {/* Left: Info */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-500/15 rounded-2xl p-8 flex flex-col gap-8"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <img
                src="https://i.gyazo.com/7fe34311942fdda53e9b0155c16d26e3.png"
                alt="Ashsail Logo"
                className="h-12 w-12 object-contain mb-4"
              />
              <h2 className="text-xl font-serif font-bold text-white mb-2">
                Ashsail Honey Imports
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Bringing the world's finest honey to American tables since 2020.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-amber-500/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-white/70 text-sm">Columbus, Ohio, 43220</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-amber-500/15 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:support@ashsail.com"
                    className="text-white/70 text-sm hover:text-amber-400 transition-colors"
                  >
                    support@ashsail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-amber-500/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white/70 text-sm">1-800-ASHSAIL</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white/30 text-xs">Response within 24 business hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-xl font-serif font-bold text-white mb-1">Send us a message</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <FloatingInput label="Your Name" name="name" required />
              <FloatingInput label="Email Address" name="email" type="email" required />
            </div>

            <FloatingInput label="Company / Organization (optional)" name="company" />
            <FloatingInput label="Subject" name="subject" required />
            <FloatingTextarea label="Your Message" name="message" required />

            {status === 'sent' ? (
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                <span className="text-green-400 text-sm font-medium">
                  Message sent! We'll be in touch soon.
                </span>
              </div>
            ) : (
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-xl text-sm transition-colors duration-200"
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </motion.button>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
