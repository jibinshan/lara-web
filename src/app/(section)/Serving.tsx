"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Serving = ({}) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden bg-[#0b0b0b]">
            <div className="relative flex h-fit w-full items-center justify-center px-3 py-12 lg:min-h-[100vh] lg:px-0 lg:py-24">
                <div className="absolute left-56 top-36 hidden h-fit w-fit items-center justify-center overflow-hidden lg:flex">
                    <Image
                        src="/images/serving/food.png"
                        width={354}
                        height={170}
                        alt="center"
                        // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="absolute -bottom-3/4 left-0 flex h-fit w-fit items-center justify-center overflow-hidden">
                    <Image
                        src="/images/serving/Ellipse.png"
                        width={1920}
                        height={1021}
                        alt="center"
                        // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="absolute right-4 top-9 z-40 hidden h-fit w-fit items-center justify-center overflow-hidden lg:right-64 lg:top-36 lg:flex">
                    <Button
                        className="h-32 rounded-full bg-[#fec679] px-2 py-7 text-center font-poppins text-xs leading-5 tracking-[3.2px] text-[#0C0C0C] shadow-none lg:px-6 lg:py-10 lg:text-lg"
                        asChild
                    >
                        <Link href="/menu">
                            Explore
                            <br />
                            menu
                        </Link>
                    </Button>
                </div>
                <div className="lg:top-5/12 absolute flex h-fit w-fit -rotate-12 items-center justify-center overflow-hidden lg:right-52">
                    <Image
                        src="/images/serving/drink.png"
                        width={552}
                        height={848}
                        alt="center"
                        // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-9">
                    <p className="text-center font-gotu text-[#727272]">we`ll be serving you</p>
                    <p className="text-center font-gotu text-6xl text-[#B5B5B5] lg:text-8xl">
                        Lunch
                        <br />
                        Dinner
                        <br />
                        Drinks &<br />
                        Cocktails.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Serving;
