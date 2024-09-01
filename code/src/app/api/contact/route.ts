import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./transporter";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Message sent!" });
}

export async function POST(req: NextRequest) {
  const { from, text } = await req.json();

  await sendMail({ from, text });

  return NextResponse.json({ message: "Message sent!" });
}
