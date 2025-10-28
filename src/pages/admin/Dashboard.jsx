// src/pages/admin/Dashboard.jsx
import React from 'react'
import { useTier } from '../../contexts/TierContext'

const AdminDashboard = () => {
  const { hasFeature, currentTier } = useTier()

  if (!hasFeature('admin')) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">
            This feature is available only in the Premium tier
          </p>
          <p className="text-gray-600 mb-4">Current tier: {currentTier}</p>
          <a href="/contact" className="btn-primary">
            Upgrade to Premium
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Case Management</h3>
            <p className="text-gray-600">Manage client cases and documents</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Client Portal</h3>
            <p className="text-gray-600">Client access and communication</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">Firm performance and insights</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard