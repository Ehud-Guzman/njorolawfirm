// src/layouts/Layout.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLoading } from '../contexts/LoadingContext'
import LoadingSpinner from '../components/LoadingSpinner'

const Layout = ({ children }) => {
  const { loading, loadingMessage } = useLoading()

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <LoadingSpinner size="lg" text={loadingMessage} />
          </div>
        </div>
      )}
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout