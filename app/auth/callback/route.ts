import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  console.log("callback route: code = " + code)

  if (code) {
    console.log("callback route: got code, calling supabase")
    await supabase.auth.exchangeCodeForSession(code);
  }
  console.log("callback route: redirecting to properties page")
  return NextResponse.redirect(new URL('/properties', req.url));
}
