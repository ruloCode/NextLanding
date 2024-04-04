"use server";

import { NextResponse } from "next/server";

export async function middleware(request) {
  const authTokens = request.cookies.get("tkr_usr_session")?.value;

  if (request.nextUrl.pathname.startsWith("/paciente") && !authTokens) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("tkr_usr_session");
    return response;
  }
  if (authTokens && request.nextUrl.pathname.startsWith("/login")) {
    const response = NextResponse.redirect(new URL("/paciente", request.url));
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/paciente(.*)", "/login"]
};
