import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Reserve = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center px-3 lg:px-0 py-12 lg:py-24">
                <div className="absolute left-0 top-16 flex items-center justify-center w-fit h-fit overflow-hidden">
                    <Image
                        src="/images/serving/Ellipse.png"
                        width={1920}
                        height={1021}
                        alt="center"
                    // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="z-40 flex flex-col gap-32 h-full w-full max-w-[1300px] items-center justify-center py-24">
                    <div className="w-full flex flex-col lg:flex-row h-fit lg:h-[500px]">
                        <div className="relative w-full lg:w-1/3 flex justify-end items-start h-full">
                            <Image
                                src="/images/reserve/image1.png"
                                width={668}
                                height={754}
                                alt="center"
                                className="lg:absolute lg:left-28 lg:-top-9 w-full h-fit lg:h-8/12"
                            />
                        </div>
                        <div className="flex flex-col justify-center h-full w-full lg:w-2/3 gap-5 ">
                            <div className="bg-[#0f0f0f] h-full w-full lg:w-[90%] flex items-center justify-center">
                                <div className="flex flex-col gap-5 px-2 lg:px-0 py-6">
                                    <p className="text-[#C1C1C1] font-gotu text-3xl lg:text-5xl">Reserve<br />
                                        Your Table</p>
                                    <p className="w-fit lg:w-[400px] text-[#BBB4AA] font-poppins">Here at Lara Restaurant we have over 20
                                        year`s experience. With all our dishes are prepared daily with authentic fresh ingredients. Discover the taste of our delicious meat, chicken & fish at our new restaurant.</p>
                                    <Link href=''>
                                        <Button className="flex items-center justify-center gap-3 px-10 py-7 text-[#FEC679] border-[#FEC679] bg-transparent" variant='outline'>View Menu</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col-reverse lg:flex-row h-fit lg:h-[500px] ml-0 lg:ml-11">
                        <div className="flex flex-col justify-center items-end h-full w-full lg:w-2/3 gap-5 ">
                            <div className="bg-[#0f0f0f] h-full w-full lg:w-[90%] flex items-center justify-center">
                                <div className="flex flex-col gap-5 px-2 lg:px-0 py-6">
                                    <p className="text-[#C1C1C1] font-gotu text-3xl lg:text-5xl">Experience
                                        <br />
                                        the Flavors</p>
                                    <p className="w-full lg:w-[400px] text-[#BBB4AA] font-poppins">Here at Lara Restaurant we have over 20
                                        year`s experience. With all our dishes are prepared daily with authentic fresh ingredients. Discover the taste of our delicious meat, chicken & fish at our new restaurant.</p>
                                    <Link href=''>
                                        <Button className="flex items-center justify-center gap-3 px-10 py-7 text-[#FEC679] border-[#FEC679] bg-transparent" variant='outline'>View Menu</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/3 flex justify-end items-start h-full">
                            <Image
                                src="/images/reserve/image2.png"
                                width={668}
                                height={754}
                                alt="center"
                                className="lg:absolute lg:right-28 lg:-top-9 w-full lg:h-8/12"
                            />
                        </div>
                    </div>

                </div>
            </div >
        </section >
    );
};

export default Reserve;
