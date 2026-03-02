import { auth } from "@/auth"

export const middleware = auth((req) => {
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard")
  const isLoggedIn = !!req.auth

  if (isDashboard && !isLoggedIn) {
    const loginUrl = new URL("/login", req.url)
    return Response.redirect(loginUrl)
  }
})

// Define paths where middleware should run
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
