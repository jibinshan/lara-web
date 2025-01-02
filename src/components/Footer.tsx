import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
    return (
        <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-[#131313] px-2 py-12">
            <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
                <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
                    <Button
                        className="w-fit items-center justify-center px-0 py-0 text-start text-xl text-[#959595] text-accent bg-transparent hover:bg-transparent"
                        asChild
                    >
                        <div className="group relative w-fit">
                            <Link href="/menu">Menu</Link>
                            <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                            <span className="absolute left-1/2 bottom-[-0.25rem] w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                        </div>
                    </Button>
                    <Button
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent bg-transparent hover:bg-transparent"
                        asChild
                    >
                        <div className="group relative w-fit">
                            <Link href="/about-us">About</Link>
                            <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                            <span className="absolute left-1/2 bottom-[-0.25rem] w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                        </div>
                    </Button>
                    <Button
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent bg-transparent hover:bg-transparent"
                        asChild
                    >
                        <div className="group relative w-fit">
                            <Link href="/contact">Contact</Link>
                            <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                            <span className="absolute left-1/2 bottom-[-0.25rem] w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                        </div>
                    </Button>
                    <Button
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent bg-transparent hover:bg-transparent"
                        asChild
                    >
                        <div className="group relative w-fit">
                            <Link href="/table-booking">Table booking</Link>
                            <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                            <span className="absolute left-1/2 bottom-[-0.25rem] w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:translate-x-[-50%]"></span>
                        </div>
                    </Button>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-12 md:w-1/3">
                    <Image
                        src="/images/logo.png"
                        width={188}
                        height={57}
                        alt="logo"
                    />
                    <Link href="https://maps.app.goo.gl/Ra3eBuEFHEJpSa7E9" className="text-center" target="_blank">
                        3 Bradgate Rd, Anstey, Leicester<br />
                        LE7 7AB, United Kingdom
                    </Link>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/menu">Menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/about-us">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/table-booking">Table booking</Link>
                    </Button>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3">
                    <div></div>
                    <p className="font-semibold uppercase text-[#959595]">
                        Opening hours
                    </p>
                    <p className="text-[##959595]">Mon - Thur : 16:00 - 23:00</p>
                    <p className="text-[##959595]">Fri - Sun : 12:00 - 23:45</p>
                </div>
            </div>
            <div className="flex w-full items-center justify-center">
                <p className="w-fit px-4 text-center text-xl">
                    © 2024 lara restaurant,all rights reserved | {" "}
                    <Link
                        href="https://foodo.ai"
                        className="text-primary hover:underline"
                        target="_blank"
                    >
                        Powered By Foodo
                    </Link>
                </p>
            </div>
        </footer >
    );
};

export default Footer;