"use client"

import { useState } from "react"
import Button3D from "./button-3d"

export default function WalletConnectButton({
  color = "indigo",
  className = "",
}: { color?: "purple" | "indigo"; className?: string }) {
  const [account, setAccount] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async () => {
    if (isConnecting) return

    setIsConnecting(true)
    setError(null)

    try {
      // Check if we're in browser environment
      if (typeof window === "undefined") {
        setError("Please use a web browser")
        setIsConnecting(false)
        return
      }

      // Check if MetaMask is installed
      if (!(window as any).ethereum) {
        setError("MetaMask not found")
        // Open MetaMask download page
        setTimeout(() => {
          window.open("https://metamask.io/download/", "_blank")
        }, 1000)
        setIsConnecting(false)
        return
      }

      const ethereum = (window as any).ethereum

      // Check if MetaMask is the provider
      if (!ethereum.isMetaMask) {
        setError("Please use MetaMask")
        setIsConnecting(false)
        return
      }

      // Request account access with timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Connection timeout")), 10000)
      })

      const connectPromise = ethereum.request({
        method: "eth_requestAccounts",
      })

      const accounts = await Promise.race([connectPromise, timeoutPromise])

      if (accounts && Array.isArray(accounts) && accounts.length > 0) {
        setAccount(accounts[0])
        setError(null)
      } else {
        setError("No accounts available")
      }
    } catch (err: any) {
      console.error("Wallet connection error:", err)

      // Handle specific error cases
      if (err.code === 4001) {
        setError("Connection rejected")
      } else if (err.code === -32002) {
        setError("Connection pending in MetaMask")
      } else if (err.message?.includes("timeout")) {
        setError("Connection timeout - try again")
      } else if (err.message?.includes("MetaMask")) {
        setError("MetaMask connection failed")
      } else {
        setError("Connection failed - please try again")
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const copyAddress = async () => {
    if (!account) return

    try {
      await navigator.clipboard.writeText(account)
      // Could add a "copied" state here if needed
    } catch (err) {
      console.error("Failed to copy address:", err)
    }
  }

  const getButtonText = () => {
    if (isConnecting) return "Connecting..."
    if (account) return `${account.slice(0, 6)}...${account.slice(-4)}`
    if (typeof window !== "undefined" && !(window as any).ethereum) return "Get MetaMask"
    return "Connect Wallet"
  }

  const handleClick = () => {
    if (account) {
      copyAddress()
    } else {
      connectWallet()
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button3D onClick={handleClick} color={color} className={className}>
        {getButtonText()}
      </Button3D>
      {error && <p className="text-xs text-red-600 max-w-xs text-center">{error}</p>}
    </div>
  )
}
