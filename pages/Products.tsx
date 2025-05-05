import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const products = [
  
  {
    name: "Acacia Honey",
    origin: "Eastern Europe",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/acacia-honey.jpg",
    description: "Light and sweet with delicate floral notes.",
    price: "Premium Grade"
  },

  {
    name: "Rapeseed Honey",
    origin: "Poland",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Rapeseed-Mustard-Honey.jpg",
    description: "Strong taste; fast-crystallizing, creamy white-to-amber delight; low acidity.",
    price: "Contact for more info"
  },
  {
    name: "Eucalyptus Honey",
    origin: "Australia",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Eucalyptus-Honeyjpg.jpg",
    description: "Distinctive herbal aroma; smooth amber sweetness with natural medicinal benefits.",
    price: "Contact for more info"
  },
  {
    name: "Lychee Honey",
    origin: "China",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/lychee-honey-1.jpg",
    description: "Exotic lychee aroma; golden sweetness with tropical tang, creamy texture.",
    price: "Contact for more info"
  },
  {
    name: "Sidr Jujube Honey",
    origin: "Yemen",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Sidr-Jujube-Honey.jpg",
    description: "Rich fruity aroma; dark amber sweetness with velvety, medicinal depth.",
    price: "Contact for more info"
  },
  {
    name: "Sunflower Honey",
    origin: "Ukraine",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Sunflower-honey.jpg",
    description: "Sun-kissed amber sweetness; fast-crystallizing golden nectar with buttery notes.",
    price: "Contact for more info"
  },
  {
    name: "Acacia Honey",
    origin: "Hungary",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/acacia-honey.jpg",
    description: "Delicate vanilla aroma; light golden sweetness; ultra-smooth, low-sucrose delight.",
    price: "Contact for more info"
  },
  {
    name: "Multiflora Honey",
    origin: "Himalayan Region",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Multiflora-Himalayan-Honey.jpg",
    description: "Vibrant floral bouquet; golden nectar rich in nutrients and immunity.",
    price: "Contact for more info"
  },
  {
    name: "Wild Flora Honey",
    origin: "Worldwide",
    image: "https://kknaturalfood.com/wp-content/uploads/2021/07/Wild-Flora-Honey.jpg",
    description: "Earthy wildflower aroma; raw amber nectar bursting with organic wellness.",
    price: "Contact for more info"
  }
];






export function Products() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Premium Honey Selection
        </motion.h1>

        {/* New tagline under the heading */}
        <motion.p
          className="text-center text-amber-600 font-semibold mb-12 md:text-1xl max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          The diversity of honey is determined by the flowers and the geographical region from which it’s harvested. India’s global recognition is attributed to its diverse weather patterns and varied landscapes. These varying conditions facilitate the growth of various flora, resulting in the production of numerous honey varieties. Thanks to these favorable natural conditions, a wide range of honey forms and types can be found throughout the country.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-amber-50 rounded-lg overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="text-amber-500 w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-amber-900 mb-2">Origin: {product.origin}</p>
                <p className="text-amber-900 mb-4">{product.description}</p>

                <div className="mt-auto flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">{product.price}</span>
                  <Link
                    to="/contact"
                    className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
