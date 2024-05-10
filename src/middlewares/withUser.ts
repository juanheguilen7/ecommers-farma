import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

function getSearchParam(param: string, url: any) {
    return url.searchParams.get(param);
}

export const withUser: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;

        // Lista de rutas protegidas que requieren autenticación
        const protectedRoutes = ["/profile", "/bookmark", "/cart", "/createProduct"];

        // Si la ruta actual está en la lista de rutas protegidas
        if (protectedRoutes.some((path) => pathname.startsWith(path))) {
            const userId = request.cookies.get("next-auth.session-token");
            // Si no hay usuario autenticado, redireccionar a la página de inicio de sesión
            if (!userId) {
                const url = new URL(`/auth/login`, request.url);
                return NextResponse.redirect(url);
            }
        }

        // Si la ruta es de registro o inicio de sesión y hay un usuario autenticado, redireccionar a la página de inicio
        if (["/auth/register", "/auth/login"].some((path) => pathname.startsWith(path))) {
            const userId = request.cookies.get("next-auth.session-token");

            // Si hay usuario autenticado, redireccionar a la página de inicio
            if (userId) {
                const url = new URL(`/`, request.url); // Cambia la URL de destino a la página de inicio
                return NextResponse.redirect(url);
            }
        }
        if (["/create-product", "/admin-profile", "/crud-product"].some((path) => pathname.startsWith(path))) {
            const Admin = request.cookies.get('auth');

            if (!Admin) {
                const url = new URL('/', request.url);
                return NextResponse.redirect(url);
            }
        }

        // Continuar con el resto del middleware si no hay ninguna condición de redirección
        return next(request, _next);
    };
};