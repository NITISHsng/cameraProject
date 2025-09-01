import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

// Define paths that require authentication
const PROTECTED_PATHS = [
  '/admin',
  '/operator',
];

// Define paths that require specific roles
const ADMIN_ONLY_PATHS = [
  '/admin/operators',
  '/api/operators',
  '/api/operators/',
  '/api/hiring',
  '/api/hiring/',
  '/api/join_us',
  '/api/join_us/',
];

export async function middleware(request: NextRequest) {
  const userId = request.cookies.get('asan_user_id')?.value;
  const path = request.nextUrl.pathname;
  
  // Check if the path requires authentication
  const requiresAuth = PROTECTED_PATHS.some(protectedPath => 
    path.startsWith(protectedPath)
  );

  // Check if the path requires admin role
  const requiresAdmin = ADMIN_ONLY_PATHS.some(adminPath => 
    path.startsWith(adminPath)
  );

  // If path requires authentication but no userId cookie exists
  if (requiresAuth && !userId) {
    console.log('Authentication required but no userId cookie found');
    const url = new URL('/', request.url);
    return NextResponse.redirect(url);
  }

  // If path requires admin role, verify user role
  if (requiresAdmin) {
    try {
      // Fetch user data to check role
      const userResponse = await fetch(`${request.nextUrl.origin}/api/user/${userId}`);
      const userData = await userResponse.json();
      
      if (!userResponse.ok || userData.role !== 'admin') {
        // Redirect non-admin users to dashboard
        const url = new URL('/admin', request.url);
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.error('Error verifying user role:', error);
      // On error, redirect to login
      const url = new URL('/', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    '/admin/:path*',
    '/operator/:path*',
    '/api/operators/:path*',
    '/api/hiring/:path*',
    '/api/join_us/:path*',
  ],
};