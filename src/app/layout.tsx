import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Gotu, Poppins, Playfair_Display } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title:
    "Lara Restaurant Leicester | Authentic Turkish Restaurant | Grill Platters",
  description:
    "Lara Restaurant in Leicester, London, offers authentic Turkish cuisine with mouthwatering grill platters, tender lamb dishes, and a variety of flavorful, traditional Turkish recipes. Experience a true taste of Turkey in a warm, welcoming atmosphere!",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Gotu({
  subsets: ["latin"],
  variable: "--font-gotu",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-poppins text-[#FBEAD2] antialiased",
          manrope.variable,
          poppins.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
