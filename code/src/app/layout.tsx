import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, Footer } from "@/UI";
import { WebVitals } from "@/components/WebVitals";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <SessionProvider>
            <Navbar
              links={[
                {
                  text: "pricing",
                  href: "/pricing",
                },
                {
                  text: "sales",
                  href: "/contact-sales",
                },
              ]}
            />
            <main className="min-h-screen text-balance">{children}</main>
          </SessionProvider>
        </NextUIProvider>
        <Footer />
        <WebVitals />
      </body>
    </html>
  );
}
