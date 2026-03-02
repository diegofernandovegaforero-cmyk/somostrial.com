import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DIGITRIAL - Centro de Soluciones",
    description: "Transformamos desafíos complejos en oportunidades de crecimiento medibles a través de tecnología y estrategia.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={inter.className} style={{ position: 'relative', backgroundColor: 'white' }}>
                {/* Contenido principal */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </div>
            </body>
        </html>
    );
}
