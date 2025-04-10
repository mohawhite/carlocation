// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "@/app/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarLocation - Location de voitures",
  description: "Trouvez la voiture idéale pour vos déplacements",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr">
      <body className={inter.className}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Toaster />
      </body>
      </html>
  );
}