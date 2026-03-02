"use client"

import { signOut } from "next-auth/react"

export function SignOutButton({ children }: { children: React.ReactNode }) {
  return (
    <div onClick={() => signOut({ callbackUrl: '/' })} className="w-full h-full flex items-center justify-start cursor-pointer">
      {children}
    </div>
  )
}
