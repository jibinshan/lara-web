import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
    return (
        <footer className="z-50 flex h-full w-full items-center justify-center bg-[#131313] px-4 pt-12 lg:pt-24 pb-7">
            <div className="flex h-full w-full max-w-[1300px] flex-col gap-10 lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <Image
                        src="/images/logo.png"
                        width={205}
                        height={68}
                        alt="logo"
                    />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-9">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <Button
                            variant="link"
                            className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#C1C1C1]"
                        >
                            Home
                        </Button>
                        <Button
                            variant="link"
                            className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#C1C1C1]"
                        >
                            Menu
                        </Button>
                        <Button
                            variant="link"
                            className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#C1C1C1]"
                        >
                            Reservation
                        </Button>
                        <Button
                            variant="link"
                            className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#C1C1C1]"
                        >
                            Order Online
                        </Button>
                        <Button
                            variant="link"
                            className="w-fit items-center justify-start px-0 py-0 text-start text-accent text-[#C1C1C1]"
                        >
                            Contact us
                        </Button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold uppercase font-gotu text-[#C1C1C1]">Working Hours</h3>
                        <p className="text-[#757575] font-poppins">Everyday : From 12.30 To 23.00<br />
                            Kitchen Closes At 22.00</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="flex w-full flex-col justify-between gap-10 lg:h-[300px]">
                        <div className="flex h-full flex-col gap-10">
                            <p className="max-w-[380px] text-[#C1C1C1] font-gotu text-lg font-semibold">
                                Subscribe Newsletter
                            </p>
                            <div className="flex flex-col gap-2 lg:flex-row">
                                <input
                                    placeholder="Email"
                                    className="min-w-[300px] border-b border-primary bg-transparent text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                                />
                                <Button
                                    className="group items-center gap-[1.19rem] border border-accent bg-transparent font-semibold uppercase text-accent hover:border-primary hover:bg-primary hover:text-[#282828]"
                                    variant="secondary"
                                >
                                    Subscribe
                                    <Icons.rightArrow className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-5 items-end">
                            <div className="flex w-full justify-end pt-[1.22rem]">
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="px-1 py-1 hover:bg-transparent"
                                >
                                    <Link href="https://www.instagram.com/bavettesteakhouse/">
                                        <span className="sr-only">Instagram</span>
                                        <Icons.instagram />
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="px-1 py-1 hover:bg-transparent"
                                >
                                    <Link href="https://www.tripadvisor.com/Restaurant_Review-g186337-d23660134-Reviews-or30-Bavette_Steak_House_Liverpool-Liverpool_Merseyside_England.html">
                                        <span className="sr-only">Trip Advisor</span>
                                        <Icons.tripAdvisor />
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="px-1 py-1 hover:bg-transparent"
                                >
                                    <Link href="https://g.co/kgs/3rHehs1">
                                        <span className="sr-only">Google</span>
                                        <Icons.google />
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="px-1 py-1 hover:bg-transparent"
                                >
                                    <Link href="https://www.facebook.com/bavettesteakhouse/">
                                        <span className="sr-only">Facebook</span>
                                        <Icons.facebook />
                                    </Link>
                                </Button>
                            </div>
                            <p className="text-[#64615C]">© 2024 lara,all rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
