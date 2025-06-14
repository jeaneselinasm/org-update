import type { Metadata } from "next";
import { DM_Sans,Inter, Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets : ['latin']})
const dmSans = DM_Sans({subsets : ['latin']})
const montserrat = Montserrat({subsets : ['latin']})
export const metadata: Metadata = {
  title: "Bahtraku",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body
       className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}
