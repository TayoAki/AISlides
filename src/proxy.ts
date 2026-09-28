import { NextResponse, type NextRequest } from "next/server";

// Optimistic gate for the app: no session cookie means straight to login.
// The app layout still validates the session against the database.
export function proxy(request: NextRequest) {
  if (!request.cookies.has("rw_session")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?next=${encodeURIComponent(request.nextUrl.pathname + request.nextUrl.search)}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/app", "/app/:path*"],
};
