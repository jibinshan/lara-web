"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import CartSheet from "./cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();
  const { cartItems } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-[10vh] w-full flex-col items-center bg-transparent p-4 transition-all duration-0 ease-in-out`,
        isScrolled && "bg-black",
      )}
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-2">
        <div
          className={cn(
            "mb-2 flex w-full justify-between border-white/30 md:border-b md:py-2",
            (isScrolled || pathname !== "/") && "hidden",
          )}
        >
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="https://maps.app.goo.gl/Ra3eBuEFHEJpSa7E9"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <MapPin />3 Bradgate Rd,Anstey Leicester LE7 7AB
            </Link>
            <p className="flex items-center gap-2 text-sm text-white md:text-sm">
              <Clock />
              Mon-Thur 16:00 - 23:00, Fri-Sun 12:00 - 23:45
            </p>
          </div>
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="tel:0116 235 2888"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Phone />
              0116 235 2888
            </Link>
            <Link
              href="mailto:lararestaurant2024@outlook.com"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Mail />
              lararestaurant2024@outlook.com
            </Link>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.png" width={188} height={56} alt="logo" />
          </Link>
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className={cn(
                "flex",
                isScrolled || pathname !== "/"
                  ? "px-0 uppercase text-accent"
                  : "hidden",
              )}
            >
              <Link href="/table-booking">Table Booking</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/table-booking">Table Booking</Link>
            </Button> */}
            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
          </div>
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            {pathname !== "/" && (
              <CartSheet>
                <Button
                  variant="ghost"
                  className="relative px-1 py-1 hover:bg-transparent hover:text-primary/90"
                  disabled={!BetaMenuActive}
                >
                  <span className="sr-only">Shopping Cart</span>
                  {cartItems.length && (
                    <span className="absolute -right-2 -top-2 z-20 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {cartItems.length}
                    </span>
                  )}
                  <Icons.shoppingCart className="z-0" />
                </Button>
              </CartSheet>
            )}
            <div
              className={cn(
                "flex",
                (isScrolled || pathname !== "/") && "hidden",
              )}
            >
              <Link href="/table-booking">
                <Button className="relative flex items-center justify-center gap-3 px-10 py-7 font-medium uppercase transition-colors duration-300 ease-in-out before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] hover:bg-primary/90 before:hover:left-1 before:hover:top-1 before:hover:rounded-xl before:hover:border-b-primary before:hover:border-r-primary group-hover:translate-x-1">
                  Book A Table
                  <Icons.rightArrow />
                </Button>
              </Link>
            </div>
            <div
              className={cn(
                "hidden",
                (isScrolled || pathname !== "/") && "flex",
              )}
            >
              <Link
                href="tel:0116 235 2888"
                target="_blank"
                className="flex items-center gap-2 text-lg text-white md:text-sm"
              >
                <Phone />
                0116 235 2888
              </Link>
            </div>
          </div>
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
