import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Brain Wave",
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
            <body>
                {children}
            </body>
        </html>
    );
}
