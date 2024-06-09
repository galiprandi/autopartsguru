import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { DB } from "./lib/db/db";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(DB),
  experimental: { enableWebAuthn: true },
  providers: [
    Google({
      profile(profile) {
        return { ...profile, role: profile.role ?? "user" };
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
});
