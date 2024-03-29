import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Unstyled Components",
  description: "Open source component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
