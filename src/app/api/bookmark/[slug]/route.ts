import { connectionToDB } from '@/utils/database';
import { NextRequest } from 'next/server';
import Bookmark from '@/models/bookmark';
interface Params {
    slug: string;
}

export async function GET(request: NextRequest,  { params }: { params: Params }) {
    const { slug } = params;
    try {
        await connectionToDB();

        // Encuentra el bookmark basado en el ID del bookmark
        const bookmark = await Bookmark.findById(slug).populate('products');

        if (!bookmark) {
            return new Response(JSON.stringify({ products: [] }), { status: 200 });
        }

        return new Response(JSON.stringify({ products: bookmark.products }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response('Error fetching bookmarks', { status: 500 });
    }
}
