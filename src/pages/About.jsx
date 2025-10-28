import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield, Target, Heart, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import firmData from '../../config/firm.json'

const About = () => {
  const { team, name, description } = firmData

  const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '98%', label: 'Case Success Rate' },
    { icon: Heart, value: '24/7', label: 'Client Support' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our dealings.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for exceptional results in every case we handle.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize your needs.'
    }
  ]

  // Premium animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-legal-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-legal-300/5 rounded-full blur-3xl" />
        
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
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">Trusted Since 2008</span>
            </motion.div>

            {/* Your Specified Hero Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight">
              About
              <span className="block bg-gradient-to-r from-legal-200 to-legal-100 bg-clip-text text-transparent pb-[0.15em]">
                Our Firm
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Premier legal representation with uncompromising integrity. 
              Trusted partners serving clients across Kenya with excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-legal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-legal-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium Our Story & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Our Story */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Our <span className="text-legal-600">Story</span>
              </h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed font-light">
                  Founded in 2008, {name} has grown from a small practice to one of Nairobi&apos;s most respected law firms. 
                  Our journey began with a simple mission: to provide exceptional legal services with integrity and compassion.
                </p>
                <p className="leading-relaxed font-light">
                  Over the years, we&apos;ve built a reputation for excellence in corporate law, real estate, family law, 
                  and criminal defense. Our team of dedicated attorneys brings diverse expertise and a shared commitment 
                  to client success.
                </p>
                <p className="leading-relaxed font-light">
                  We believe in the power of the law to protect rights, resolve conflicts, and create opportunities. 
                  Whether you&apos;re an individual seeking justice or a business navigating complex regulations, we&apos;re here 
                  to guide you every step of the way.
                </p>
              </div>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Values</h3>
              <div className="space-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-legal-500/10 rounded-xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500 flex-shrink-0">
                        <Icon className="w-6 h-6 text-legal-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                        <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Meet Our <span className="text-legal-600">Legal Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Experienced attorneys dedicated to protecting your rights and achieving your objectives
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-legal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/20 transition-colors duration-500">
                    <span className="text-3xl text-legal-600">👨‍⚖️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-legal-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-slate-600 mb-6 font-medium">{member.specialization}</p>
                  
                  <div className="space-y-3 text-sm text-slate-600 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Experience:</span>
                      <span className="font-semibold text-slate-900">{member.experience}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Education:</span>
                      <span className="font-semibold text-slate-900 text-right">{member.education}</span>
                    </div>
                  </div>
                  
                  {member.bio && (
                    <p className="text-slate-600 text-sm italic leading-relaxed font-light mb-6">
                      &quot;{member.bio}&quot;
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-legal-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-legal-300/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a confidential consultation with our experienced legal team today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/appointment"
                  className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Contact Our Office</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About