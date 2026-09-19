import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../app/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js Application",
  description: "A scalable project structure example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow  mx-auto ">{children}</main>
      </body>
    </html>
  );
}
