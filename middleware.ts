import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const { data: { user }, } = await supabase.auth.getUser();
    console.log("middleware: pathname = " + req.nextUrl.pathname);

    // if user signed in, redirect to /properties
    if (user && req.nextUrl.pathname === '/') {
        console.log("middleware: found user, redirecting to /properties")
        return NextResponse.redirect(new URL('/properties', req.url));
    }

    if (!user && req.nextUrl.pathname !== '/') {
        console.log("middleware: no user, redirecting to /")
        return NextResponse.redirect(new URL('/', req.url));
    }

    return res;
}

export const config = {
    matcher: ['/', '/properties', '/property_details'],
}
