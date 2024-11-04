import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Welcome = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#131313] lg:h-screen">
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit lg:min-h-[100vh] w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="lg:absolute lg:left-6/12 lg:top-5/12 flex items-center justify-center w-fit h-fit overflow-hidden">
                    <Image
                        src="/images/welcome/center.png"
                        width={450}
                        height={722}
                        alt="center"
                        className="h-[550px] w-[350px]"
                    />
                </div>
                <div className="z-50 flex flex-col lg:flex-row gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center lg:items-start justify-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-start items-start">
                        <p className="w-full text-2xl lg:text-lg text-center text-[#727272] font-gotu">Welcome</p>
                        <div className="w-full flex justify-center lg:justify-end">
                            <p className="font-gotu text-5xl lg:text-7xl">
                                <span className="text-[#C1C1C1]">
                                    Authentic
                                </span>
                                <br />
                                <span className="text-[#FEC679]">
                                    Turkish
                                </span>
                                <br />
                                <span className="w-full pl-28 text-end text-[#C1C1C1]">
                                    Flavor
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
                        <div className="flex flex-col gap-5">
                            <Image
                                src="/images/welcome/logo.png"
                                width={118}
                                height={118}
                                alt="center"
                                className=""
                            />
                            <p className="text-[#FEC679]">What we do</p>
                            <p className="text-[#BBB4AA] w-[320px]">Here at Lara Restaurant we have over 20 year`s experience. With all our dishes are prepared daily with authentic fresh ingredients. Discover the taste of our delicious meat, chicken & fish at our new restaurant.</p>
                            <Link href=''>
                                <Button className="flex items-center justify-center gap-3 px-10 py-7 text-[#FEC679] border-[#FEC679] bg-transparent" variant='outline'> Book Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Welcome;
