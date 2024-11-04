import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex flex-col h-fit lg:min-h-[60vh] max-w-[1300px] w-full items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <p className="text-5xl font-gotu text-center text-[#C1C1C1]">Contact us</p>
                <form className="h-full w-full">
                    <div className="flex gap-4 pt-7">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16">
                            <div>
                                <Label className="text-sm text-[#787571] ">First Name</Label>
                                <Input
                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                            </div>
                            <div>
                                <Label className="text-sm text-[#787571] ">Phone</Label>
                                <Input
                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                            </div>
                            <div>
                                <Label className="text-sm text-[#787571] ">Email</Label>
                                <Input
                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                            </div>
                            <div>
                                <Label className="text-sm text-[#787571] ">Your Message</Label>
                                <Input
                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center pt-7 lg:flex-row">
                        <Button className="w-fit border-[#dbab69] text-[#dbab69] bg-transparent" variant='outline'> Submit</Button>
                    </div>
                </form >
            </div >
        </section >
    );
};

export default Contact;
