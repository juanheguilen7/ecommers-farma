import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export function middleware(request: NextRequest) {
    const currentUser = localStorage.getItem('user');
    const pathname = request.nextUrl.pathname;

    console.log(currentUser);

    if (currentUser) {
        if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
}

export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico|images|icon).*)'
}
