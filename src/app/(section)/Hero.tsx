'use client'
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap';

const Hero = ({ }) => {
    useEffect(() => {

        const tl = gsap.timeline()
        tl.from('.head-container', 1.5, {
            y: 50,
            opacity: 1,
            ease: 'power4.out'
        }).from('.head-hero', 1, {
            x: 200,
            opacity: 0,
            delay: -1.5
        }).from('.hero-button', 1, {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            delay: -1.5
        })
        tl.from('.down-button', 1, {
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration (1 second)
            delay: -0.5, // Optional delay before starting animation
        }).to('.down-button', 1, {
            opacity: 1, // End with opacity 1
            duration: -1.5, // Animation duration (1 second)
            ease: "bounce.out",
        });
    }, [])
    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    };
    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 h-full w-full bg-black/50 z-10"></div>
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                    <video
                        className="min-h-full min-w-full scale-x-[-1] object-cover"
                        style={{ objectPosition: "center" }}
                        src="/videos/hero.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
                <div className="head-container z-50 flex flex-col gap-9 h-full w-full max-w-[1300px] items-center justify-center">
                    <div className="head-hero flex w-fit flex-col items-center justify-center gap-2">
                        <h1 className="font-gotu text-[#fff4e3] text-5xl  lg:leading-[80px] sm:text-5xl md:text-8xl text-center md:tracking-[-5.12px]">
                            Welcome to<br />
                            Lara restaurant
                            <br />
                        </h1>
                        <p className="font-poppins text-white text-center text-sm uppercase tracking-[4.4px]">TURKISH BBQ & MEZE BAR HOUSE</p>
                    </div>
                    <div className="hero-button w-full flex flex-col justify-center items-center md:flex-row gap-4">
                        <Link href='/menu'>
                            <Button className="relative py-7 px-10 font-medium uppercase transition-colors hover:bg-primary/90 before:absolute 
                            before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all 
                            before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-b-primary before:hover:border-r-primary before:hover:rounded-xl">
                                View Menu
                            </Button>
                        </Link>
                        <Link href='/table-booking' className="md:hidden">
                            <Button className="relative py-7 px-10 font-medium uppercase transition-colors hover:bg-primary/90 before:absolute 
                            before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all 
                            before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-b-primary before:hover:border-r-primary before:hover:rounded-xl">
                                Table Booking
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-20 z-40" onClick={scrollToBottom}>
                    <Button className="down-button flex items-center justify-center px-1 bg-transparent rounded-full text-white  hover:text-black" variant='outline'><ArrowDown className="font-extralight" /></Button>
                </div>
            </div>
        </section >
    );
};

export default Hero;
