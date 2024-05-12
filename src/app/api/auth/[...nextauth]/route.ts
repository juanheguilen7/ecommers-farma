import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/models/user";
import { connectionToDB } from '@/utils/database.js';

import bcrypt from 'bcrypt';
import { cookies } from "next/headers.js";


export const authOptions: any = {
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

                if (credentials && credentials.password) {
                    const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
                    if (!matchPassword) throw new Error('Wrong password')
                }
                if (userFound.rol === 'admin') {
                    cookies().set('auth', 'ready')
                }
                return {
                    name: userFound.username,
                    email: userFound.email,
                    cart: userFound.cart,
                    id: userFound._id,
                    rol: userFound.rol
                }

            }
        })
    ],
    pages: {
        signIn: "auth/login",
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }: any) {
            if (user) {
                token.id = user._id,
                    token.cart = user.cart,
                    token.rol = user.rol,
                    token.id = user.id,
                    token.rol = user.rol
            }
            return token;
        },
        async session({ session, token, user }: any) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.id = token.id
            session.user.cart = token.cart
            session.user.rol = token.rol

            return session
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };