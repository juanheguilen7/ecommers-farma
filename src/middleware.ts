import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("logueo")?.value;
    const pathname = request.nextUrl.pathname;

    if (currentUser) {
        if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
}

export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico|images|icon).*)'
}

