import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-legal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚖️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Njoroge & Partners Advocates</h3>
                <p className="text-gray-400">Your Trusted Legal Partners in Kenya</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Leading law firm in Kenya providing expert legal services with integrity and excellence. 
              Serving clients across Nairobi, Mombasa, Kisumu and beyond with over 15 years of combined experience.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((link) => (
                <motion.div key={link} whileHover={{ x: 5 }}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-legal-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+254700123456" className="hover:text-legal-400 transition-colors">
                    +254 700 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-legal-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:info@njorogeadvocates.co.ke" className="hover:text-legal-400 transition-colors">
                    info@njorogeadvocates.co.ke
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-legal-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-400 text-sm">Law Society Building, Nairobi CBD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Njoroge & Partners Advocates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Enhanced Credits */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
            <span>Website crafted with expertise by</span>
            <motion.a 
              href="https://glimmerink.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-legal-400 hover:text-legal-300 transition-colors font-semibold flex items-center space-x-1 group"
              whileHover={{ scale: 1.05 }}
            >
              <span>GlimmerInk Creations</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <div className="flex items-center space-x-4">
              <motion.a 
                href="tel:0746527253" 
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-3 h-3" />
                <span>0746527253</span>
              </motion.a>
              <motion.a 
                href="mailto:nyamuehud@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-3 h-3" />
                <span>nyamuehud@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer