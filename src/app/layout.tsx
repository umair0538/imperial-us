import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import QueryProvider from "@/providers/QueryProvider";
import { CartDrawerProvider } from "@/features/cart/context/CartDrawerContext";
import CartDrawer from "@/features/cart/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imperial US | Define Your Presence",
  description:
    "Premium watches crafted for modern gentlemen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        <QueryProvider>
          <CartDrawerProvider>
            <Analytics />
            <Navbar />
            <CartDrawer />
              {children}
            <Footer />
          </CartDrawerProvider>
        </QueryProvider>
      </body>
    </html>
  );
}