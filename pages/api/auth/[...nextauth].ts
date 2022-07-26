import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      idToken: true,
    }),
  ],
  callbacks: {
    async jwt(props) {
      if (props.account) {
        props.token.id_token = props.account.id_token;
      }
      return props.token;
    },
    async session({ session, token, user }) {
      session.user_id = token.id_token;
      return session;
    },
  },
});
