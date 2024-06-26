import type { Metadata } from "next";

import Header from "@/components/Header";

import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Brainwave",
    description: "Generated by create next app for resume :(",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/icons/brain.png" />
            </head>
            <body className="font-sans bg-bg-base text-tx-base text-base">
                <Header />
                {children}
            </body>
        </html>
    );
}
