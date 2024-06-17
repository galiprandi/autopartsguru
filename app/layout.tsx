import type { Metadata } from "next";
import localFont from "next/font/local";
import "./pico.indigo.min.css";
import "./globals.css";
import styles from "./layout.module.css";
import { DB } from "@/lib/db/db";
import { Avatar } from "@components/auth/Avatar";
import UserMenu from "./components/ui/UserMenu";
import { IconButtonMenu } from "./components/ui/IconButtonMenu";
import { Header } from "./components/ui/layout/Header";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
      >
        <div className={styles.layout}>
          <aside>
            <header>
              <IconButtonMenu href="/" icon="house" tooltip="Home" />
            </header>
            <main>
              <UserMenu />
            </main>
            <footer>
              <Avatar />
            </footer>
          </aside>
          <main className="container">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
