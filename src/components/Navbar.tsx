"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
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
      className={`${position} top-0 z-50 flex h-[10vh] w-full max-w-[1400px] items-center bg-transparent p-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.png" width={188} height={56} alt="logo" />
        </Link>
        {!isScrolled && (
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 font-poppins tracking-[0.72px] text-white"
            >
              <Link href="">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-poppins tracking-[0.72px] text-white"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-poppins tracking-[0.72px] text-white"
            >
              <Link href="">Reservation</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-poppins tracking-[0.72px] text-white"
            >
              <Link href="">Gift Voucher</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-poppins tracking-[0.72px] text-white"
            >
              <Link href="">Contact us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden md:flex bg-transparent font-poppins tracking-[0.72px] text-white"
            >
              <Link href="/menu">Order Now</Link>
            </Button>
          </div>
        )}
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              asChild
            >
              <Link href="">
                <span className="sr-only">Menu</span>
                <Icons.menu />
              </Link>
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
              asChild
            >
              <Link href="">
                <span className="sr-only">Menu</span>
                <Icons.menu />
              </Link>
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
