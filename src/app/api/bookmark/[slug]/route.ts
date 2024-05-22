import { connectionToDB } from '@/utils/database';
import { NextRequest } from 'next/server';
import Bookmark from '@/models/bookmark';
interface Params {
    slug: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { slug } = params;
    try {
        await connectionToDB();

        const bookmark = await Bookmark.findById(slug).populate('products');

        return new Response(JSON.stringify(bookmark), { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response('', { status: 500 });
    }
}