import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Subfooter from "@/components/sub-footer";
import Widget from "@/components/widget";
import AddressFooter from "@/components/address-footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision med",
  description: "Vison med",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-[70px]">{children}</div>
            <Widget />
            <Subfooter />
            <AddressFooter />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
