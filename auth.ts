import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import {
  GetUserByEmailService,
  UpdateUserService,
} from "./app/services/users.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (user.email) {
        const data = await GetUserByEmailService(user.email);
        if (data && data.active === false) {
          console.log(
            `Denied access to ${user.email} because it's disabled`,
            data
          );
          return false;
        }

        if (data && user.image !== data.picture)
          await UpdateUserService(user.email, { picture: user.image });
      }
      return true;
    },
  },
});
