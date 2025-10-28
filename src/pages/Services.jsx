import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Shield, Zap, Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import firmData from '../../config/firm.json'

const Services = () => {
  const { practiceAreas } = firmData
  const [activeService, setActiveService] = useState(0)

  // Premium animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardHover = {
    rest: { 
      scale: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-legal-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-legal-300/5 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-legal-300" />
              <span className="text-sm text-white/90 font-medium">Expert Legal Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight">
              Our Legal
              <span className="block bg-gradient-to-r from-legal-200 to-legal-100 bg-clip-text text-transparent pb-[0.15em]">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Comprehensive legal expertise tailored to protect your interests and achieve your objectives. 
              From corporate counsel to personal legal matters.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-white/70"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-sm font-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm font-light">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm font-light">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Legal
              <span className="block text-legal-600">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Specialized legal services designed to address your unique challenges and opportunities
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 border border-slate-200 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-legal-50/0 via-legal-50/0 to-legal-100/0 group-hover:from-legal-50/30 group-hover:via-legal-50/20 group-hover:to-legal-100/10 transition-all duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-legal-500/0 via-legal-500/0 to-legal-600/0 group-hover:from-legal-500/10 group-hover:via-legal-500/5 group-hover:to-legal-600/10 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon & Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                      {area.icon}
                    </div>
                    <div className="w-8 h-8 bg-legal-500/10 rounded-full flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                      <ArrowRight className="w-4 h-4 text-legal-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-legal-700 transition-colors duration-300">
                    {area.name}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 font-light line-clamp-3">
                    {area.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3 mb-8">
                    {area.services.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-slate-700 group/item"
                      >
                        <div className="w-5 h-5 bg-legal-500/10 rounded-full flex items-center justify-center group-hover/item:bg-legal-500/20 transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-legal-600" />
                        </div>
                        <span className="text-sm font-medium group-hover/item:text-legal-700 transition-colors duration-300">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/appointment"
                      className="group/btn w-full bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-legal-700 hover:shadow-lg hover:shadow-legal-500/25 inline-flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Consult Now</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Approach to
              <span className="block text-legal-600">Legal Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              A structured methodology ensuring comprehensive legal representation and optimal outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Case Assessment",
                description: "Thorough evaluation of your legal situation and objectives",
                icon: Shield
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Customized legal strategy tailored to your specific needs",
                icon: Star
              },
              {
                step: "03",
                title: "Execution",
                description: "Precise implementation of legal actions and representations",
                icon: Zap
              },
              {
                step: "04",
                title: "Resolution",
                description: "Achieving optimal outcomes and protecting your interests",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-legal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                    <process.icon className="w-8 h-8 text-legal-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-legal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-legal-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your Interests?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a confidential consultation with our legal experts and take the first step towards resolving your legal matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  to="/appointment"
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group-hover:shadow-legal-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-legal-300" />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-legal-300" />
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-legal-300" />
                <span>Rapid Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services