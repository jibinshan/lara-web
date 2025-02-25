import type { abouttype } from "@/types/about-contact.type";
import Image from "next/image";

const BavetteStory = ({ aboutdata }: { aboutdata: abouttype }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
            <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
                <h2 className="font-oswald text-center text-8xl text-[#262626] md:left-[15%] md:text-8xl">
                    The {aboutdata?.restaurantName}
                    <br />
                    Story
                </h2>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
                    <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
                        <Image src={aboutdata?.story?.photourl} width={577} height={676} alt="private dining" className="h-auto w-full rounded-lg md:rounded-none" />
                    </div>
                    <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
                        <h1 className="font-oswald max-w-[500px] text-center text-6xl sm:text-7xl md:text-start">
                            {aboutdata?.story?.header}
                        </h1>
                        <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
                            {aboutdata?.story?.description1}
                            <br />
                            <br />
                            {aboutdata?.story?.description2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BavetteStory;
