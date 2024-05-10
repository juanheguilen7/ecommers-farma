import { NextMiddleware, NextResponse } from "next/server";

export type MiddlewareFactory = (middleware: any) => NextMiddleware;

export function stackMiddlewares(functions: any[] = [], index = 0): any {
    const current = functions[index];
    if (current) {
        const next = stackMiddlewares(functions, index + 1);
        return current(next);
    }
    return () => NextResponse.next();
}