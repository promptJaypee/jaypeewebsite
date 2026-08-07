import type { Metadata } from "next";
import { Google_Sans_Flex, Montserrat } from "next/font/google";
import "./globals.css";
import GlobalLoader from "@/src/component/GlobalLoader";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Jaypee Draws",
  description:
    "Jaypee Draws is a personal website showcasing the artwork and illustrations of Jaypee, a talented artist. Explore a collection of unique and captivating drawings, from digital art to traditional sketches. Discover the creative world of Jaypee Draws and get inspired by the artistic journey.",
 icons: {
    icon: "/jaypeedraws-icon.png",
  },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning className={`${googleSansFlex.variable} ${montserrat.variable}`}>
    
    <body className="font-sans">
      <GlobalLoader />
      {children}
    </body>
  </html>
);
}
