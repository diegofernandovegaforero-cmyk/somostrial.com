import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SOMOSTRIAL",
    description: "Próximamente",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <main className="min-h-screen flex items-center justify-center bg-white text-slate-900">
                    {children}
                </main>
            </body>
        </html>
    );
}
