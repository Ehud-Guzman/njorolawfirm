import React, { createContext, useContext, useState, useEffect } from 'react'
import { storage } from '../utils/api'

const TierContext = createContext()

export const useTier = () => {
  const context = useContext(TierContext)
  if (!context) {
    throw new Error('useTier must be used within a TierProvider')
  }
  return context
}

export const TierProvider = ({ children }) => {
  const [currentTier, setCurrentTier] = useState('basic')
  const [tierConfig, setTierConfig] = useState(null)
  
  useEffect(() => {
    // Load tier configuration
    const loadTierConfig = async () => {
      try {
        const response = await fetch('/config/tiers.json')
        const config = await response.json()
        setTierConfig(config)
      } catch (error) {
        console.error('Failed to load tier configuration:', error)
      }
    }

    loadTierConfig()
  }, [])

  const tierFeatures = {
    basic: ['services', 'team', 'contact'],
    standard: ['services', 'team', 'contact', 'blog', 'case-studies', 'appointments', 'analytics'],
    premium: ['services', 'team', 'contact', 'blog', 'case-studies', 'appointments', 'admin', 'client-portal', 'analytics']
  }

  const hasFeature = (feature) => {
    return (tierFeatures[currentTier] || []).includes(feature)
  }

  const getTierInfo = () => {
    return tierConfig ? tierConfig[currentTier] : null
  }

  const switchTier = (tier) => {
    if (['basic', 'standard', 'premium'].includes(tier)) {
      setCurrentTier(tier)
      storage.set('lawFirmTier', tier)
      
      // Analytics event
      if (window.gtag) {
        window.gtag('event', 'tier_switch', {
          'event_category': 'engagement',
          'event_label': tier
        })
      }
    }
  }

  useEffect(() => {
    const savedTier = storage.get('lawFirmTier')
    if (savedTier && ['basic', 'standard', 'premium'].includes(savedTier)) {
      setCurrentTier(savedTier)
    }
  }, [])

  const value = {
    currentTier,
    switchTier,
    hasFeature,
    getTierInfo,
    features: tierFeatures[currentTier] || [],
    tierConfig
  }

  return (
    <TierContext.Provider value={value}>
      {children}
    </TierContext.Provider>
  )
}