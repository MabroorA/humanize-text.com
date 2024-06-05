import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  SessionProvider  from "../components/SessionProvider";
import NavBar from "../components/navBar"
import authConfig from "@/lib/auth.config";
import { auth } from "@/lib/auth";

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

  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="max-w-7xl max-h-lvh mx-auto p-3">
            <NavBar session={session}/>
            {children}
          </main>
        </body>
    </html>
  );
}
