import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olshop Management",
  description: "Olshop Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden border">
      <div className="w-full flex-none md:w-64 border">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 border">{children}</div>
    </div>
  );
}
