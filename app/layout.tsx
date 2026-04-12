import type { Metadata } from "next";
import { Poppins, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  variable: "--font-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--second-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oleksandra Skybina | Frontend Developer Portfolio",
  description:
    "Portfolio of Oleksandra Skybina, a Frontend Developer specializing in modern web technologies. Explore projects, skills, and experience in building responsive and user-friendly web applications.",

  openGraph: {
    title: "Oleksandra Skybina | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Oleksandra Skybina — frontend developer creating modern, responsive, and user-focused web applications.",
    url: "",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oleksandra Skybina Portfolio Preview",
      },
    ],
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
      className={`${poppins.variable} ${roboto.variable} ${openSans.variable} h-full antialiased`}
    >
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
