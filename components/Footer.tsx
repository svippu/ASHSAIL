import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Our Products' },
  { to: '/contact', label: 'Contact' },
];

const productLinks = [
  'Acacia Honey',
  'Sidr Jujube Honey',
  'Himalayan Multiflora',
  'Wild Flora Honey',
  'Eucalyptus Honey',
  'Sunflower Honey',
];

export function Footer() {
  return (
    <footer className="bg-[#070503] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.gyazo.com/7fe34311942fdda53e9b0155c16d26e3.png"
                alt="Ashsail Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold text-white">
                Ashsail <span className="text-amber-400">Honey</span> Imports
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Bringing the world's finest single-origin honeys to American consumers and businesses since 2020.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['FDA Compliant', 'ISO 22000', 'HALAL Certified', 'BRC Approved'].map((cert) => (
                <span
                  key={cert}
                  className="bg-amber-500/10 border border-amber-500/20 text-amber-400/80 px-3 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/35 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-white/35 text-sm">Columbus, Ohio, 43220</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-600 shrink-0" />
                <a
                  href="mailto:support@ashsail.com"
                  className="text-white/35 hover:text-amber-400 text-sm transition-colors"
                >
                  support@ashsail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-600 shrink-0" />
                <span className="text-white/35 text-sm">1-800-ASHSAIL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Ashsail Honey Imports. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Columbus, Ohio · Premium Honey Imports · B2B & Retail
          </p>
        </div>
      </div>
    </footer>
  );
}
