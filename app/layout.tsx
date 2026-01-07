import * as React from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Garber Bros, Inc.",
  description: "For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <main className="max-w-6xl mx-auto px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
