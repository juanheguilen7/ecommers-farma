import React from "react";
import type { Metadata } from "next";
import "./layout.scss";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Farmacia Heguilen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body>
        <SessionAuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
