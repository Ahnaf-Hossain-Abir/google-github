import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import { getUser } from "./data/users";
export const {handlers, signIn, signOut, auth} = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers:[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization:{
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        Credentials({
            async authorize (credentials){
                if(credentials === null) return null;
                try{
                    const user = getUser(credentials?.email);
                    if(user){
                        const isMatch = user?.password === credentials?.password;
                        if (isMatch){
                            return user;
                        }
                        else{
                            throw new Error("Password does not match");
                        }
                    }
                    else{
                        throw new Error("User does not exist");
                    }
                } catch(error){
                    throw new Error(error.message)
                }
            }
        })
    ],
})