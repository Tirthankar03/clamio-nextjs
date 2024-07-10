import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value
  
  const loginUrl = new URL('/login', request.url)
  const dashboardUrl = new URL('/dashboard', request.url)

  const protectedPath = ['/dashboard' ];

  // Check if the current path is protected
  const isProtectedPath = protectedPath.some(path => request.nextUrl.pathname.startsWith(path));

  if (currentUser && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(dashboardUrl)
  }

  if (!currentUser && isProtectedPath) {
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
