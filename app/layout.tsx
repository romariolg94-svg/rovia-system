import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Rovia System | Software, IT & Smart Solutions",
  description:
    "Rovia System dezvoltă aplicații software personalizate, ERP, pontaj, digital signage, CCTV, infrastructură IT și soluții smart pentru companii.",

  keywords: [
    "software",
    "erp",
    "pontaj",
    "digital signage",
    "cctv",
    "dezvoltare software",
    "it",
    "brașov",
    "rovia system",
  ],

  authors: [{ name: "Rovia System" }],

  creator: "Rovia System",

  metadataBase: new URL("https://rovia-system.com"),

  openGraph: {
    title: "Rovia System",
    description:
      "Software personalizat, ERP, Digital Signage, CCTV și soluții IT.",
    url: "https://rovia-system.com",
    siteName: "Rovia System",
    locale: "ro_RO",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
