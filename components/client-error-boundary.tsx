"use client"

import React from "react"

type Props = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

export default class ClientErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error but don't throw
    console.error("ClientErrorBoundary caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-md p-6 bg-white rounded-xl shadow-lg border border-purple-200">
              <h2 className="text-xl font-semibold text-purple-900 mb-2">Something went wrong</h2>
              <p className="text-indigo-700 text-sm mb-4">
                We encountered an error. Please refresh the page to try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      )
    }
    return this.props.children
  }
}
