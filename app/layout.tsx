import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./layout.module.css";
import { DB } from "@/lib/db/db";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Auto Parts Guru",
  description: "A best place find auto parts and their equivalents",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const usersCount = await DB.user.count();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
      >
        <div className={styles.layout}>
          <aside>aside</aside>
          <main>
            <header>
              <nav>
                <h1>👨‍🔧 Auto Parts Guru</h1>
                <button>Login</button>
              </nav>
            </header>
            {children}
          </main>
          <footer>
            <p>Users: {usersCount}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
