import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials, req) {
        const userData = {
          email: credentials.username,
          password: credentials.password,
        };
        const loginResp = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/signin`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userData),
          }
        );

        const loginRespData = await loginResp.json();

        if (loginResp.ok) {
          return {
            email: loginRespData.email,
            image: loginRespData.image,
            name: loginRespData.name,
          };
        } else {
          throw new Error(loginRespData.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async signOut() {
      return "/signin";
    },

    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl);
      return baseUrl;
    },
  },
});

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
