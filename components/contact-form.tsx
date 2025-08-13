"use client"

import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContact } from "@/app/actions"

export default function ContactForm() {
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  return (
    <form
      action={(formData) => {
        setStatus("idle")
        startTransition(async () => {
          try {
            await sendContact(formData)
            setStatus("success")
          } catch (e) {
            setStatus("error")
          }
        })
      }}
      className="grid gap-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" placeholder="Satoshi Beach" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@beachmail.com" required />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" name="message" placeholder="Tell us how you want to collaborate..." rows={5} required />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && (
          <p role="status" className="text-sm text-emerald-700">
            Message sent! We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p role="status" className="text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  )
}
