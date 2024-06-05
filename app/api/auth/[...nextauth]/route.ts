import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"

import { SupabaseAdapter } from "@auth/supabase-adapter"
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  })as Adapter,
  ...authConfig
});




export { handler as GET, handler as POST }