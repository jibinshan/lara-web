import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Map = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex flex-col gap-4 h-fit lg:min-h-[60vh]  w-full max-w-[1300px] items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <div className="hidden relative lg:flex">
                    <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button>
                </div>
                <div className="flex w-full lg:hidden lg:w-0 items-center justify-center h-[250px] lg:h-0" style={{
                    backgroundImage: "url('/images/home/map/map.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                    <Button className="rounded-full flex flex-col lg:hidden h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button>
                </div>
                <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between gap-6 px-3 lg:px-0">
                    <div className="flex gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <MapPin className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                49 Allerton Rd, Liverpool L25
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <Phone className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>01512451500</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <Mail className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>info@bavetteliverpool.co.uk</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;