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
  title: "O.Skybina | Portfolio Frontend Developer",
  metadataBase: new URL("https://my-portfolio-ebon-tau-56.vercel.app/"),
  description:
    "Portfolio of Oleksandra Skybina, a Frontend Developer specializing in modern web technologies. Explore projects, skills, and experience in building responsive and user-friendly web applications.",
  icons: {
    icon: "/icons/portfolio-bag.svg",
  },

  openGraph: {
    title: "O.Skybina | Portfolio Frontend Developer",
    description:
      "Explore the portfolio of Oleksandra Skybina — frontend developer creating modern, responsive, and user-focused web applications.",
    url: "/",
    images: [
      {
        url: "/meta-img.jpg",
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
