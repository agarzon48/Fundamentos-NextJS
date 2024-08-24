import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex gap-2 justify-center items-centerpt-4 bg-slate-100 shadow-sm text-slate-800 py-2 font-semibold">
        <ul className="flex gap-2 justify-center items-center">
          <li>
            <Link className="p-2 hover:text-purple-800" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="p-2 hover:text-purple-800" href="/users">
              Users
            </Link>
          </li>
          <li>
            <Link className="p-2 hover:text-purple-800" href="/tickets">
              Tickets
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
