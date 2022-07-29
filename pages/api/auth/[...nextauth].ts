import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      idToken: true,
    }),
  ],
  callbacks: {
    async jwt(props) {
      if (props.user) {
        props.token.id_token = props.user.id;
      }

      return props.token;
    },
    async session({ session, token, user }) {
      session.user_id = token.id_token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
