import Link from "next/link";
import { cookies } from "next/headers";
import { getTranslations, AvailableLocales } from "@/translations/translations";
import { auth } from "@/auth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const langCookie = cookies()?.get("lang")?.value || "es";
  const t = await getTranslations(langCookie as AvailableLocales);
  const session = await auth();

  if (!session) {
    throw new Error("You need to be authenticated to access this page");
  }

  return (
    <>
      <nav className="flex gap-2 justify-center items-centerpt-4 bg-slate-100 shadow-sm text-slate-800 py-2 font-semibold">
        <ul className="flex gap-2 justify-center items-center">
          <li>
            <Link className="p-2 hover:text-purple-800" href="/dashboard">
              {t.global.dashboard}
            </Link>
          </li>
          <li>
            <Link className="p-2 hover:text-purple-800" href="/users">
              {t.global.users}
            </Link>
          </li>
          <li>
            <Link className="p-2 hover:text-purple-800" href="/tickets">
              {t.global.tickets}
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </>
  );
}
