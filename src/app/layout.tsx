import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Taman Pintar Yogyakarta",
  description:
    "Wahana wisata pendidikan sains terbaik di Yogyakarta. Temukan pengalaman belajar yang menyenangkan untuk seluruh keluarga.",
  icons: {
    icon: "/images/logo-tp.png",
    apple: "/images/logo-tp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
