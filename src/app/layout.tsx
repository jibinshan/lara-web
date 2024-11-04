import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Gotu, Poppins } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Lara",
  description: "lorem",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Gotu({
  subsets: ["latin"],
  variable: "--font-gotu",
  weight: ["400"],
});

const playfair = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-poppins flex min-h-screen bg-[#070707] text-[#FBEAD2] antialiased",
          manrope.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
