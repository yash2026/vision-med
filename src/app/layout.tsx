import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Subfooter from "@/components/sub-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vision med",
  description: "Vison med",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Subfooter />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
