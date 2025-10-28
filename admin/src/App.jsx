import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Cases from './pages/Cases'
import Settings from './pages/Settings'

function AdminApp() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminApp