export { default } from 'next-auth/middleware'; //corrobora que exista la session

export const config = {
    matcher: ["/cart/:path*", "/bookmark/:path*", "/profile/:path*", "/createProduct/:path*", "/showProduct"]
}

