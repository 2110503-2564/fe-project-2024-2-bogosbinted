import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import userLogIn from '@/libs/userLogIn'

export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "eg. name@email.com" },
              password: { label: "Password", type: "password", placeholder: "eg. 12345678" }
            },
            async authorize(credentials, req) {

              if(!credentials) return null

              const user = await userLogIn(credentials.email, credentials.password)
              
              if (user) {
                return user
              } else {
                return null
              }
              
            }
          })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token as any
            return session
        },
    }
}