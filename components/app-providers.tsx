"use client"

import type React from "react"
import { WalletProvider } from "./wallet-provider"

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children}</WalletProvider>
}
