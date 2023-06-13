import { addUser } from "@/service/user";
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
    async signIn({ user: { id, name, email, image } }) {
      // 구글 로그인시 기술적으로는 email과 name이 없을 수 없으나 OAuthUser타입에 정보가 옵셔널로 지정해있음에 따라 if문 생성
      if (!email) {
        return false;
      }

      addUser({
        id,
        name: name ?? "",
        email,
        image,
        nickname: email?.split("@")[0],
      });

      return true;
    },

    async session({ session, token }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...session.user,
          nickname: user.email?.split("@")[0] || "",
          id: token.sub as string,
        };
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
