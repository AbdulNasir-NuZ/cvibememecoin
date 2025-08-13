"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type GlassCardProps = {
  title?: string
  children: ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
}

export default function GlassCard({ title, children, className, headerClassName, contentClassName }: GlassCardProps) {
  return (
    <Card
      className={cn(
        // Enhanced glassmorphism styles with ocean theme
        "group relative border border-cyan-300/30 bg-gradient-to-br from-cyan-200/15 to-blue-200/10",
        "backdrop-blur-xl shadow-[0_12px_32px_rgba(6,182,212,0.2)]",
        // Enhanced hover effects
        "transition-all duration-300 ease-out hover:border-cyan-300/50 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] hover:-translate-y-2",
        "focus-within:ring-2 focus-within:ring-cyan-400/40 focus-within:ring-offset-0",
        // Glass reflection effect
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/15 before:to-transparent before:opacity-60",
        className,
      )}
    >
      {title ? (
        <CardHeader className={cn("space-y-1 relative z-10", headerClassName)}>
          <CardTitle className="text-cyan-100 font-semibold">{title}</CardTitle>
        </CardHeader>
      ) : null}
      <CardContent className={cn("text-cyan-50/90 relative z-10", contentClassName)}>{children}</CardContent>
    </Card>
  )
}
