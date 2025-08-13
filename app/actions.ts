"use server"

export async function sendContact(formData: FormData) {
  // Simulate processing (replace with your email/webhook integration)
  const name = String(formData.get("name") || "")
  const email = String(formData.get("email") || "")
  const message = String(formData.get("message") || "")

  console.log("[Contact] New message", { name, email, message, ts: new Date().toISOString() })

  // Simulate latency
  await new Promise((res) => setTimeout(res, 600))

  return { ok: true }
}
