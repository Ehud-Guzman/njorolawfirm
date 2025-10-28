// src/pages/CaseStudies.jsx
import React from 'react'
import { useTier } from '../contexts/TierContext'

const CaseStudies = () => {
  const { hasFeature } = useTier()

  if (!hasFeature('case-studies')) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 mb-8">
            This feature is available in Standard and Premium tiers
          </p>
          <a href="/contact" className="btn-primary">
            Upgrade Now
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Successful Case Studies</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Case studies will be displayed here for Standard and Premium tiers.</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies