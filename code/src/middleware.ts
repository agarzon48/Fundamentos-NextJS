import { NextResponse, NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { availableLocales } from "./translations/translations";

export async function middleware(request: NextRequest) {
  // Whitelist
  if (
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/auth") ||
    request.nextUrl.pathname.endsWith(".svg")
  ) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const isPathInLocales = checkIfPathIsInLocales(pathname);
  if (isPathInLocales) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("lang")?.value;
  const preferencesLocale = getLocaleFromPreferences(request);

  const locale = cookieLocale || preferencesLocale;

  const response = NextResponse.redirect(
    new URL(`/${locale}/${pathname}`, request.url)
  );

  if (!cookieLocale) {
    response.cookies.set("lang", locale, {
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|images|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};

const checkIfPathIsInLocales = (pathname: string) => {
  return availableLocales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );
};

const getLocaleFromPreferences = (request: NextRequest) => {
  const cookieLocale = request.cookies.get("lang")?.value;

  if (cookieLocale) {
    return cookieLocale;
  }

  const languages = new Negotiator({
    headers: request.headers as any,
  }).languages(availableLocales);
  const defaultLocale = "es";

  return match(languages, availableLocales, defaultLocale);
};
