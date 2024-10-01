import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-around items-center h-[56px] text-[20px] font-black bg-black fixed w-full text-white">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"champions"}>
            <p>Champions</p>
          </Link>
          <Link href={"items"}>
            <p>Items</p>
          </Link>
          <Link href={"rotation"}>
            <p>Rotation</p>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
