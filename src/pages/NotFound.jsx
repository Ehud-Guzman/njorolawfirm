
// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Phone, Search, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', description: 'Return to our homepage' },
   
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center"
          >
            <MapPin className="w-12 h-12 text-indigo-600" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Lost in Paradise
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Seems like you`ve wandered off the main resort path. Don’t worry — we’ll guide you back to comfort and luxury.
          </p>
        </motion.div>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <Link
            to="/"
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200 group"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
              <Home className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Return Home</h3>
            <p className="text-gray-600 text-sm">Back to our main entrance</p>
          </Link>

          <Link
            to="/contact"
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200 group"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
              <Phone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Concierge</h3>
            <p className="text-gray-600 text-sm">We’ll help you find your way</p>
          </Link>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Search className="w-5 h-5 mr-2 text-indigo-600" />
            Explore More
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 group border border-transparent hover:border-indigo-200"
                >
                  <div className="font-medium text-gray-900 group-hover:text-indigo-700 mb-1">
                    {link.name}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-indigo-600">
                    {link.description}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-indigo-900 mb-2">
              Need Assistance?
            </h4>
            <p className="text-indigo-700 text-sm mb-4">
              Our concierge is available 24/7 for any inquiries or reservations.
            </p>
            <a
              href="tel:+254711123456"
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +254 711 123 456</span>
            </a>
          </div>
        </motion.div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            Still can’t find what you’re looking for?{' '}
            <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Contact our guest relations
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
