
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// // export { default } from "next-auth/middleware"
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = { 
//   matcher: [
//     "/trips/:path*",
//     "/reservations/:path*",
//     "/properties/:path*",
//     "/favorites/:path*"
//   ]
// };

export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};

