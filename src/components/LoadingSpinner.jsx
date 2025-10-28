import React from 'react'

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${sizeClasses[size]} border-4 border-legal-200 border-t-legal-600 rounded-full animate-spin-slow`}></div>
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  )
}

export default LoadingSpinner