import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/src/models/user";
import { connectionToDB } from '../../../../utils/database.js';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "pepito@hotmail.com" },
                password: { label: "password", type: "password", placeholder: "ponga su contraseña" }
            },
            async authorize(credentials, req) {
                await connectionToDB();

                const userFound = await User.findOne({ email: credentials?.email });
                if (!userFound) throw new Error('No user Found');

                return {
                    id: userFound._id,
                    name: userFound.username,
                    email: userFound.email
                }

            }
        })
    ],
    pages: {
        signIn: "auth/login",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };