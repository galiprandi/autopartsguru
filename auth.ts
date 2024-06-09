import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { DB } from "./lib/db/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(DB),
  providers: [
    Google({
      // profile(profile) {
      //    return { ...profile, role: profile.role ?? "user" };
      // },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      // session.user.role = user.role;
      return session;
    },
  },
});
