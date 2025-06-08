// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    emailjs
      .sendForm(
        'service_pqe58hc',    // ← your Service ID
        'template_p1e1rpv',   // ← your Template ID
        formRef.current,
        'qYmZm4LWmx2IRmq5F'   // ← your Public Key (User ID)
      )
      .then(() => setStatus('sent'))
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('idle');
      });
  };

  return (
    <div className="min-h-screen pt-20 bg-amber-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-amber-100">
            Interested in our premium honey products? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="bg-white rounded-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-amber-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-amber-600" />
                <span>1-800-ASHSAIL-HONEY</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-amber-600" />
                <span>support@ashsail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-amber-600" />
                <span>Columbus, Ohio, 43220</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-amber-900 mb-6">
              Send us a message
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {status === 'sent' ? (
                <p className="text-green-600">✅ Message sent!</p>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
