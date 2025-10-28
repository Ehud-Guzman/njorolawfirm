// src/pages/Appointment.jsx
import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import firmData from '../../config/firm.json'
import { useLoading } from '../contexts/LoadingContext'

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { startLoading, stopLoading } = useLoading()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const { practiceAreas, contact } = firmData

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  const onSubmit = async (data) => {
    startLoading('Booking your consultation...')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Appointment booked:', data)
    stopLoading()
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for booking a consultation. We will contact you within 24 hours to confirm your appointment.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-legal-600 text-white py-3 rounded-lg font-semibold hover:bg-legal-700 transition-colors"
              >
                Book Another Appointment
              </button>
              <a
                href="/"
                className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-legal-700 to-legal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
            <p className="text-xl text-legal-100 max-w-3xl mx-auto">
              Schedule a free initial consultation with our legal experts
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Appointment</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        {...register("name", { required: "Full name is required" })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="tel"
                        {...register("phone", { 
                          required: "Phone number is required",
                          pattern: {
                            value: /^[+]?[\d\s-()]+$/,
                            message: "Invalid phone number"
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                        placeholder="+254 700 123 456"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Area *
                    </label>
                    <select
                      {...register("practiceArea", { required: "Please select a practice area" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                    >
                      <option value="">Select Practice Area</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area.name}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                    {errors.practiceArea && (
                      <p className="text-red-600 text-sm mt-1">{errors.practiceArea.message}</p>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="date"
                        {...register("preferredDate", { required: "Please select a date" })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <select
                        {...register("preferredTime", { required: "Please select a time" })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.preferredTime && (
                      <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description of Your Legal Matter
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-500 focus:border-transparent resize-vertical"
                    placeholder="Please provide a brief description of your legal matter (optional)..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-legal-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-legal-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </motion.button>

                <p className="text-center text-gray-600 text-sm">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </form>
            </motion.div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Consultation Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Free Consultation</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>✓ 30-minute initial consultation</p>
                  <p>✓ Case evaluation and legal advice</p>
                  <p>✓ No obligation to hire</p>
                  <p>✓ Confidential and secure</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-legal-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href={`tel:${contact.phone}`} className="text-gray-900 font-medium hover:text-legal-600">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-legal-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-gray-900 font-medium hover:text-legal-600">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-legal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="text-gray-900 font-medium">{contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Legal Assistance</h3>
                <p className="text-red-700 text-sm mb-3">
                  Available 24/7 for urgent legal matters
                </p>
                <a
                  href={`tel:${contact.emergency}`}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-red-700 transition-colors"
                >
                  Call {contact.emergency}
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-legal-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-legal-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-legal-700">Monday - Friday</span>
                    <span className="text-legal-900 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-legal-700">Saturday</span>
                    <span className="text-legal-900 font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-legal-700">Emergency</span>
                    <span className="text-legal-900 font-medium">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment