import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farhan Yudha Pratama",
  description: "Portfolio Farhan Yudha Pratama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
