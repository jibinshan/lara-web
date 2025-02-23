import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const ConnectWithUs = ({}) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden bg-[#0b0b0b]">
            <div className="max-w-[1300px] px-4 py-12 lg:px-0 lg:py-24">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="flex w-full flex-col gap-14"
                >
                    <div className="flex w-full flex-col items-center justify-between lg:flex-row">
                        <div>
                            <p className="text-center font-gotu text-3xl font-semibold text-[#C1C1C1] lg:text-start lg:text-5xl">Connect with us</p>
                            <Link href="https://www.instagram.com/lararestaurant/?hl=en" target="_blank">
                                <p className="text-center font-poppins font-light uppercase text-[#D7D7D7] underline lg:text-start">Lara @instagram</p>
                            </Link>
                        </div>
                        <div className="mt-10 flex items-center gap-7">
                            <CarouselPrevious className="static" variant="ghost" />
                            <CarouselNext className="static" />
                        </div>
                    </div>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Image src="/images/home/connect/image1.png" width={499} height={501} alt="alt" className="max-h-[250px] lg:max-h-[400px]" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Image src="/images/home/connect/image2.png" width={397} height={501} alt="alt" className="max-h-[250px] lg:max-h-[400px]" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Image src="/images/home/connect/image3.png" width={499} height={501} alt="alt" className="max-h-[250px] lg:max-h-[400px]" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Image src="/images/home/connect/image1.png" width={499} height={501} alt="alt" className="max-h-[250px] lg:max-h-[400px]" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default ConnectWithUs;
