import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Users, Award, Clock, ArrowRight, Star, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import firmData from '../../config/firm.json'
import { useLoading } from '../contexts/LoadingContext'

const Home = () => {
  const { practiceAreas, contact } = firmData
  const { startLoading, stopLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    startLoading('Loading legal expertise...')
    const timer = setTimeout(() => {
      stopLoading()
      setIsVisible(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [startLoading, stopLoading])

  const testimonials = [
    {
      name: "John Mwangi",
      role: "Business Owner",
      content: "Njoroge & Partners handled our corporate merger flawlessly. Their expertise saved us time and money.",
      rating: 5
    },
    {
      name: "Grace Wanjiku", 
      role: "Real Estate Client",
      content: "Professional and efficient conveyancing services. They made my property purchase stress-free.",
      rating: 5
    },
    {
      name: "Robert Ochieng",
      role: "Family Law Client", 
      content: "Compassionate and knowledgeable family law representation during a difficult divorce.",
      rating: 4
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

  if (!isVisible) return null

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-legal-900 to-slate-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-legal-500/10 rounded-full blur-3xl animate-pulse" />
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
              <span className="text-sm text-white/90 font-medium">Trusted Legal Services Since 2008</span>
            </motion.div>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug tracking-tight">
  Expert
  <span className="block bg-gradient-to-r from-legal-200 to-legal-100 bg-clip-text text-transparent pb-[0.15em]">
    Legal Counsel 
  </span>
</h1>

            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Premier legal representation with uncompromising integrity. 
              Your rights protected, your future secured.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/appointment"
                  className="group relative bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-legal-500/25 inline-flex items-center gap-3"
                >
                  <span className="relative z-10">Book Consultation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-legal-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm inline-flex items-center gap-3"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Premium Emergency Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span className="text-red-200 text-sm font-semibold">24/7 Emergency</span>
                </div>
                <a 
                  href={`tel:${contact.emergency}`}
                  className="text-white font-semibold text-lg hover:text-red-200 transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{contact.emergency}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

      
      </section>

      {/* Premium Practice Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Legal Excellence Across
              <span className="block text-legal-600">Multiple Practice Areas</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Comprehensive legal solutions tailored to protect your interests and achieve your objectives.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-legal-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 font-light">
                    {area.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-legal-600 font-semibold group/link"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Clients Choose
              <span className="block text-legal-300">Our Firm</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Experience the difference of working with legal professionals dedicated to excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Integrity First',
                description: 'Uncompromising ethical standards in every case we handle.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Team',
                description: 'Seasoned attorneys with proven track records of success.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Proven Results',
                description: 'Consistent success in complex legal matters and disputes.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Always Available',
                description: 'Round-the-clock support for urgent legal matters.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-legal-500/20 rounded-2xl flex items-center justify-center group-hover:bg-legal-500/30 transition-colors duration-500">
                  <div className="text-legal-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Discover how we,ve helped clients achieve their legal objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-slate-200"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
               <p className="text-slate-700 mb-6 leading-relaxed italic text-lg font-light">
  {`"${testimonial.content}"`}
</p>

                <div>
                  <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                  <p className="text-slate-500 font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Rights?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Take the first step towards resolving your legal matters with a confidential consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/appointment"
                  className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Schedule Consultation</span>
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

export default Home