import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "@/lib/authClientProvider";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  //
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <section className="flex justify-between items-center gap-2 p-4 bg-[#007F73] text-white mb-4">
            <Link href="/">
              <h2 className="text-2xl font-bold">Auth</h2>
            </Link>
            <Navbar />
          </section>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
