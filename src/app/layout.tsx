import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luyến Academy",
  description: "Học việc đào tạo Luyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
