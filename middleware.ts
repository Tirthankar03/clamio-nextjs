import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value


  const currentCreator = request.cookies.get('creator')?.value
  
  const loginUrl = new URL('/login', request.url)
  const dashboardUrl = new URL('/dashboard', request.url)
  const exploreUrl = new URL('/explore', request.url)
  const rootUrl = new URL('/', request.url)


  const protectedPath = ['/dashboard' ];

  // Check if the current path is protected
  const isProtectedPath = protectedPath.some(path => request.nextUrl.pathname.startsWith(path));

  if (currentCreator || currentUser  && request.nextUrl.pathname === '/login') {
    
    if(currentCreator){
      return NextResponse.redirect(exploreUrl)
    }

    if (currentUser) {
      return NextResponse.redirect(rootUrl)
    }
    
  }

  if (!currentCreator || !currentUser && isProtectedPath) {
    return NextResponse.redirect(loginUrl)
  }



  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
