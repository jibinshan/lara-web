"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
    const { modelData } = useRestaurant();
    return (
        <section className="relative flex h-full w-full justify-center bg-[#070707]">
            <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 px-3 py-12 lg:px-0">
                <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
                    <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-7">
                        <h3 className="w-full text-center font-gotu uppercase italic text-[#727272] lg:text-start">Our Menu</h3>
                        <h1 className="w-full text-center font-gotu text-5xl sm:text-7xl lg:max-w-[600px] lg:text-start">
                            Lara
                            <br />
                            Specials
                        </h1>
                        <Link href="/menu">
                            <Button className="relative px-10 py-7 font-medium uppercase transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] hover:bg-primary/90 before:hover:left-1 before:hover:top-1 before:hover:rounded-xl before:hover:border-b-primary before:hover:border-r-primary">
                                View Menu
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <p className="max-w-[400px] px-2 text-center font-light leading-[160%] text-[#BBB4AA] md:px-0 md:text-xl lg:text-start">
                            Lara was born from a passion for bringing the finest cuisine to the table, with a commitment to sustainability.
                        </p>
                    </div>
                </div>
                {modelData && (
                    <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
                        <EmblaCarousel slides={modelData} options={OPTIONS} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Special;
