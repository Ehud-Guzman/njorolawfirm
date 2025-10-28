import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Award, Calendar, BookOpen, ArrowRight, Star, Zap, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import firmData from '../../config/firm.json'

const Team = () => {
  const { team, name } = firmData
  const [activeMember, setActiveMember] = useState(null)

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
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const specialties = [
    {
      name: 'Corporate Law',
      description: 'Business formations, contracts, mergers & acquisitions',
      cases: '250+ cases',
      icon: '🏢'
    },
    {
      name: 'Family Law', 
      description: 'Divorce, child custody, adoption & matrimonial disputes',
      cases: '180+ cases',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      name: 'Real Estate Law',
      description: 'Property transactions, conveyancing & landlord-tenant disputes',
      cases: '200+ cases',
      icon: '🏠'
    },
    {
      name: 'Criminal Defense',
      description: 'Legal representation in criminal cases & appeals',
      cases: '150+ cases',
      icon: '⚖️'
    }
  ]

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
          transition={{ delay: 3 }}
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
              <Users className="w-4 h-4 text-legal-300" />
              <span className="text-sm text-white/90 font-medium">Expert Legal Team</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-legal-200 to-legal-100 bg-clip-text text-transparent pb-[0.15em]">
                Legal Team
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Seasoned legal professionals dedicated to protecting your rights and achieving exceptional outcomes. 
              Expertise, integrity, and client-focused representation.
            </p>

            {/* Quick Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-white/70"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{team.length}</div>
                <div className="text-sm font-light">Expert Attorneys</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-sm font-light">Years Average Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm font-light">Case Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Team Members Grid */}
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
              Our Expert
              <span className="block text-legal-600">Attorneys</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Meet the dedicated legal professionals committed to your success and protection
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                onHoverStart={() => setActiveMember(index)}
                onHoverEnd={() => setActiveMember(null)}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 border border-slate-200 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-legal-50/0 via-legal-50/0 to-legal-100/0 group-hover:from-legal-50/30 group-hover:via-legal-50/20 group-hover:to-legal-100/10 transition-all duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-legal-500/0 via-legal-500/0 to-legal-600/0 group-hover:from-legal-500/10 group-hover:via-legal-500/5 group-hover:to-legal-600/10 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Avatar & Header */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 mx-auto mb-4 bg-legal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                        <span className="text-3xl text-legal-600">👨‍⚖️</span>
                      </div>
                      {/* Online Status Indicator */}
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-legal-700 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-legal-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-slate-600 font-medium">{member.specialization}</p>
                  </div>

                  {/* Experience & Education */}
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-center gap-3 text-slate-700"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-legal-500/10 rounded-lg flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-300">
                        <Calendar className="w-5 h-5 text-legal-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-500">Experience</div>
                        <div className="font-semibold text-slate-900">{member.experience}</div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-3 text-slate-700"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-legal-500/10 rounded-lg flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-300">
                        <BookOpen className="w-5 h-5 text-legal-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-500">Education</div>
                        <div className="font-semibold text-slate-900 text-sm">{member.education}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bio */}
                  {member.bio && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: activeMember === index ? 1 : 0,
                        height: activeMember === index ? 'auto' : 0 
                      }}
                      className="mb-6 overflow-hidden"
                    >
                      <p className="text-slate-600 text-sm leading-relaxed italic font-light">
                        &quot;{member.bio}&quot;
                      </p>
                    </motion.div>
                  )}

                  {/* Contact Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={`mailto:${member.email || 'info@firm.com'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-legal-700 hover:shadow-lg hover:shadow-legal-500/25 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </motion.a>
                    <motion.a
                      href="tel:+254700000000"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-slate-300 text-slate-700 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Expertise Section */}
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
              Areas of
              <span className="block text-legal-600">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Comprehensive legal services across multiple specialized practice areas
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border border-slate-200 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-legal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                      <span className="text-2xl">{specialty.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-legal-700 transition-colors duration-300">
                      {specialty.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 font-light">
                      {specialty.description}
                    </p>
                    <div className="bg-legal-500/10 text-legal-700 px-4 py-2 rounded-full text-sm font-semibold inline-block group-hover:bg-legal-500/20 transition-colors duration-300">
                      {specialty.cases}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-legal-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '15+', label: 'Years Combined Experience', icon: Shield },
              { value: '500+', label: 'Cases Handled', icon: Award },
              { value: '98%', label: 'Success Rate', icon: Star },
              { value: '24/7', label: 'Client Support', icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-legal-300" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3 group-hover:text-legal-200 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-legal-100 font-light leading-relaxed">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Consult With Our Experts
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a confidential consultation with our experienced legal team to discuss your case and explore your options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  to="/appointment"
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group-hover:bg-legal-700 group-hover:shadow-legal-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  to="/contact"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Contact Our Office</span>
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
              className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-legal-600" />
                <span>Confidential Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-legal-600" />
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-legal-600" />
                <span>Immediate Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team