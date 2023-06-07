import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...session.user,
          nickname: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
