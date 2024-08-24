import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return NextResponse.next();
}
