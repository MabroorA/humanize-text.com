import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import  SessionProvider  from "../components/SessionProvider";
import NavBar from "../components/navBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humanize",
  description: "bypass ai text detection with Humanize",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="max-w-7xl max-h-lvh mx-auto p-3">
            <NavBar/>
            {children}
          </main>
          </SessionProvider>
        </body>
    </html>
  );
}
