import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Reserve = ({}) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden bg-[#0b0b0b]">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center px-3 py-12 lg:px-0 lg:py-24">
                <div className="absolute left-0 top-16 flex h-fit w-fit items-center justify-center overflow-hidden">
                    <Image
                        src="/images/serving/Ellipse.png"
                        width={1920}
                        height={1021}
                        alt="center"
                        // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="z-40 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-32 py-24">
                    <div className="flex h-fit w-full flex-col lg:h-[500px] lg:flex-row">
                        <div className="relative flex h-full w-full items-start justify-end lg:w-1/3">
                            <Image src="/images/reserve/image1.png" width={668} height={754} alt="center" className="lg:h-8/12 h-fit w-full lg:absolute lg:-top-9 lg:left-28" />
                        </div>
                        <div className="flex h-full w-full flex-col justify-center gap-5 lg:w-2/3">
                            <div className="flex h-full w-full items-center justify-center bg-[#0f0f0f] lg:w-[90%]">
                                <div className="flex flex-col gap-5 px-2 py-6 lg:px-0">
                                    <p className="font-gotu text-3xl text-[#C1C1C1] lg:text-5xl">
                                        Reserve
                                        <br />
                                        Your Table
                                    </p>
                                    <p className="w-fit font-poppins text-[#BBB4AA] lg:w-[400px]">
                                        Discover the vibrant flavors of Lara, where traditional and modern cuisines blend in every dish. Reserve your table today to experience an
                                        unforgettable culinary journey.
                                    </p>
                                    <Link href="/table-booking">
                                        <Button className="relative px-10 py-7 font-medium uppercase transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] hover:bg-primary/90 before:hover:left-1 before:hover:top-1 before:hover:rounded-xl before:hover:border-b-primary before:hover:border-r-primary">
                                            Book Table
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ml-0 flex h-fit w-full flex-col-reverse lg:ml-11 lg:h-[500px] lg:flex-row">
                        <div className="flex h-full w-full flex-col items-end justify-center gap-5 lg:w-2/3">
                            <div className="flex h-full w-full items-center justify-center bg-[#0f0f0f] lg:w-[90%]">
                                <div className="flex flex-col gap-5 px-2 py-6 lg:px-0">
                                    <p className="font-gotu text-3xl text-[#C1C1C1] lg:text-5xl">
                                        Experience
                                        <br />
                                        the Flavors
                                    </p>
                                    <p className="w-full font-poppins text-[#BBB4AA] lg:w-[400px]">
                                        Indulge in a world of rich, authentic flavors crafted to excite your palate. Experience the fusion of tradition and innovation in every
                                        bite, only at Lara.
                                    </p>
                                    <Link href="/table-booking">
                                        <Button className="relative px-10 py-7 font-medium transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] hover:bg-primary/90 before:hover:left-1 before:hover:top-1 before:hover:rounded-xl before:hover:border-b-primary before:hover:border-r-primary">
                                            Book Table
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex h-full w-full items-start justify-end lg:w-1/3">
                            <Image src="/images/reserve/image2.png" width={668} height={754} alt="center" className="lg:h-8/12 w-full lg:absolute lg:-top-9 lg:right-28" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reserve;
