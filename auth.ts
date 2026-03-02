import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"

// Custom error for better error messages
class InvalidCredentialsError extends CredentialsSignin {
  code = "invalid_credentials"
}

const credentialsSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "admin",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "••••••••",
        },
      },
      async authorize(credentials) {
        // Validate input structure via Zod
        const parsed = credentialsSchema.safeParse(credentials)
        if (!parsed.success) {
          throw new InvalidCredentialsError()
        }

        const { username, password } = parsed.data

        // Compare against single admin credentials in environment variables
        const validUsername = process.env.ADMIN_USERNAME
        const validPassword = process.env.ADMIN_PASSWORD

        if (!validUsername || !validPassword) {
          console.error("Missing ADMIN_USERNAME or ADMIN_PASSWORD in environment variables.")
          throw new InvalidCredentialsError()
        }

        if (username === validUsername && password === validPassword) {
          // Add authorized user to session token
          return {
            id: "admin-1",
            name: "Admin User",
            email: "admin@reciper.com", // Mock email for single-admin
            role: "admin",
          }
        }

        // Fails validation
        throw new InvalidCredentialsError()
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login", // Route specifically handled by our future custom page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        // @ts-ignore - custom appended role mapping
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        // @ts-ignore
        session.user.role = token.role as string
      }
      return session
    },
  },
})
