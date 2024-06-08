// import { SupabaseAdapter } from "@auth/supabase-adapter";
// import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";
 


export const { handlers: { GET, POST } ,auth,signIn,signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  // adapter: SupabaseAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  // })as Adapter,
  // CALLBACKS
  ...authConfig
  })