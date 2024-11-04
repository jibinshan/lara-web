import Image from "next/image";

const Serving = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex h-fit lg:min-h-[100vh] w-full items-center justify-center px-3 lg:px-0 py-12 lg:py-24">
                <div className="hidden absolute left-56 top-36 lg:flex items-center justify-center w-fit h-fit overflow-hidden">
                    <Image
                        src="/images/serving/food.png"
                        width={354}
                        height={170}
                        alt="center"
                    // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="absolute left-0 -bottom-3/4 flex items-center justify-center w-fit h-fit overflow-hidden">
                    <Image
                        src="/images/serving/Ellipse.png"
                        width={1920}
                        height={1021}
                        alt="center"
                    // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="hidden absolute right-4 top-9 lg:right-64 lg:top-36 lg:flex items-center justify-center w-fit h-fit overflow-hidden">
                    <div className="px-2 py-5 lg:px-6 lg:py-10 rounded-full bg-[#fec679]">
                        <p className="font-poppins text-xs lg:text-lg text-center text-[#0C0C0C] leading-5 tracking-[3.2px]">Explore<br />
                            menu</p>
                    </div>
                </div>
                <div className="absolute lg:right-52 lg:top-5/12 flex items-center justify-center w-fit h-fit overflow-hidden -rotate-12">
                    <Image
                        src="/images/serving/drink.png"
                        width={552}
                        height={848}
                        alt="center"
                    // className="h-[550px] w-[300px]"
                    />
                </div>
                <div className="z-50 flex flex-col gap-9 h-full w-full max-w-[1300px] items-center justify-center">
                    <p className="text-[#727272] font-gotu text-center">we`ll be serving you</p>
                    <p className="text-[#B5B5B5] font-gotu text-6xl lg:text-8xl text-center">Breakfast<br />Lunch<br />Dinner<br />Drinks &<br />Cocktails.</p>
                </div>

            </div>
        </section>
    );
};

export default Serving;
