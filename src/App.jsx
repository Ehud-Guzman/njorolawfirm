import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TierProvider } from './contexts/TierContext'
import { LoadingProvider } from './contexts/LoadingContext'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Appointment from './pages/Appointment'
import AdminDashboard from './pages/admin/Dashboard'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <TierProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </TierProvider>
      </LoadingProvider>
    </ErrorBoundary>
  )
}

export default App