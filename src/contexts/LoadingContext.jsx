import React, { createContext, useContext, useState, useCallback } from 'react'

const LoadingContext = createContext()

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')

  const startLoading = useCallback((message = 'Loading...') => {
    setLoading(true)
    setLoadingMessage(message)
  }, [])

  const stopLoading = useCallback(() => {
    setLoading(false)
    setLoadingMessage('')
  }, [])

  const withLoading = useCallback(async (asyncFunction, message = 'Loading...') => {
    startLoading(message)
    try {
      const result = await asyncFunction()
      return result
    } finally {
      stopLoading()
    }
  }, [startLoading, stopLoading])

  const value = {
    loading,
    loadingMessage,
    startLoading,
    stopLoading,
    withLoading
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  )
}