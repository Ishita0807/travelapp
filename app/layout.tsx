import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX app for camping and hiking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative 
        overflow-hidden">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
