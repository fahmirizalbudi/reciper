import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    // Connects to Supabase Session Pooler
    connectionString: process.env.DATABASE_URL,
  }),
  // Other Better Auth configurations go here...
});
