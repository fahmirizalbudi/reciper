import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { auth } from "@/auth"
import { SignOutButton } from "@/components/sign-out-button"

export async function SiteNavbar() {
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 w-full bg-background pt-4 pb-2">
      <div className="container flex h-14 items-center justify-between mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Reciper Logo" width={24} height={24} className="rounded-sm" />
            <span className="inline-block font-semibold">Reciper</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/recipes"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Recipes
            </Link>
            <Link
              href="/#features"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#community"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Button variant="ghost" asChild className="hidden md:flex">
                <SignOutButton>Log out</SignOutButton>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </>
          ) : (
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/login">Admin Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
