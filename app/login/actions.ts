"use server"

import { redirect } from "next/navigation"

export async function login(
  prevState: string | undefined,
  formData: FormData,
) {
  // Simple mock login logic
  const username = formData.get("username")
  const password = formData.get("password")

  if (username && password) {
    redirect("/dashboard")
  }

  return "Invalid credentials."
}
