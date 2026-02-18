import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
// import StarsCanvas from "@/components/StarsCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Modern Developer Portfolio",
  description: "A premium portfolio for a full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-y-scroll overflow-x-hidden`}>
        <ThemeProvider>
          {/* <StarsCanvas /> */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
