import type { Metadata } from "next";
import { Inter, Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export { montserrat, nunito }

export const metadata: Metadata = {
  title: "Evolve Property Manager",
  description: "Describe your property to potential renters in 10 minutes or less",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
