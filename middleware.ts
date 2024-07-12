import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value;
  const currentCreator = request.cookies.get('creator')?.value;

  const loginUrl = new URL('/login', request.url);
  const dashboardUrl = new URL('/dashboard', request.url);
  const exploreUrl = new URL('/explore', request.url);
  const rootUrl = new URL('/', request.url);

  const protectedPaths = ['/dashboard'];

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirect logged-in users trying to access the login page
  if (currentCreator && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(exploreUrl);
  }

  if (currentUser && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(rootUrl);
  }

  // Redirect users trying to access protected paths when not authenticated
  if (isProtectedPath && !currentUser && !currentCreator) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
