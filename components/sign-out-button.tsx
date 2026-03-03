"use client"

import { useRouter } from "next/navigation"

export function SignOutButton({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/login')} className="w-full h-full flex items-center justify-start cursor-pointer">
      {children}
    </div>
  )
}
