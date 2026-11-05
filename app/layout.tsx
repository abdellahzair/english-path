import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Path — طريقك إلى إتقان الإنجليزية",
  description: "منصة تعليم الإنجليزية من A1 إلى C2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
