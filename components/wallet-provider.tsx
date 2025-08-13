"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type WalletContextValue = {
  account: string | null
  isConnected: boolean
  hasProvider: boolean
  connect: () => Promise<void>
  disconnect: () => void
  error: string | null
}

const WalletContext = createContext<WalletContextValue | null>(null)

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [hasProvider, setHasProvider] = useState(false)

  useEffect(() => {
    // Check if MetaMask is available
    if (typeof window !== "undefined") {
      setHasProvider(!!(window as any).ethereum)
    }
  }, [])

  const connect = async () => {
    if (typeof window === "undefined") {
      setError("Browser required")
      return
    }

    if (!(window as any).ethereum) {
      setError("MetaMask not installed")
      // Redirect to MetaMask download
      setTimeout(() => {
        window.open("https://metamask.io/download/", "_blank")
      }, 1000)
      return
    }

    try {
      setError(null)
      const ethereum = (window as any).ethereum

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Connection timeout")), 8000)
      })

      const requestPromise = ethereum.request({
        method: "eth_requestAccounts",
      })

      const accounts = await Promise.race([requestPromise, timeoutPromise])

      if (accounts && Array.isArray(accounts) && accounts.length > 0) {
        setAccount(accounts[0])
        setError(null)
      } else {
        setError("No accounts found")
      }
    } catch (err: any) {
      console.error("Wallet connect failed:", err)

      if (err.code === 4001) {
        setError("User rejected connection")
      } else if (err.code === -32002) {
        setError("Connection request pending")
      } else if (err.message?.includes("timeout")) {
        setError("Connection timeout")
      } else {
        setError("Connection failed")
      }
    }
  }

  const disconnect = () => {
    setAccount(null)
    setError(null)
  }

  const value = useMemo<WalletContextValue>(
    () => ({
      account,
      isConnected: !!account,
      hasProvider,
      connect,
      disconnect,
      error,
    }),
    [account, hasProvider, error],
  )

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

export function useWallet() {
  const ctx = useContext(WalletContext)
  if (!ctx) {
    throw new Error("useWallet must be used within WalletProvider")
  }
  return ctx
}
