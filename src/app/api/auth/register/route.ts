import { connectionToDB } from '@/utils/database';
import User from '@/models/user';
import Cart from '@/models/cart';

import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import Bookmark from '@/models/bookmark';

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { user } = await req.json();

    try {
        await connectionToDB();
        //USER EXIST?
        const userExist = await User.findOne({ email: user.email });

        if (userExist) return new Response('User already exist', { status: 400 })

        //HASH PASSWORD
        const hashedPassword = await bcrypt.hash(user.password, 10);

        //CREATE USER
        const newUser = new User({
            username: user.username,
            lastname: user.lastname,
            password: hashedPassword,
            email: user.email,
            rol: 'user',
        });

        await newUser.save();

        //CREATE CART 
        const newCart = new Cart({ user: newUser._id });
        await newCart.save();

        //CREATE BOOKMARK
        const newBookmark = new Bookmark({ user: newUser._id });
        await newBookmark.save();

        //SAVE _ID CART FOR USER
        newUser.cart = newCart._id;
        newUser.bookmark = newBookmark._id;

        await newUser.save();
        //RETURN CREATED 201
        return new Response(JSON.stringify(newUser), { status: 201 })

    } catch (error) {
        console.log(error)
        return new Response('Error to create new user', { status: 500 })

    }
}