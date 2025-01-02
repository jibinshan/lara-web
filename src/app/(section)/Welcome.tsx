'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Welcome = ({ }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to('.center-img', {
        scrollTrigger: {
          trigger: ".center-img",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8

      });

      gsap.to('.section-one', {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        y: -160,
        duration: 0.8

      })

      gsap.to('.section-two', {
        scrollTrigger: {
          trigger: ".section-two",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        y: -100,
        duration: 0.8

      });
    })


    mm.add("(min-width:501px)", () => {
      gsap.to('.section-two', {
        scrollTrigger: {
          trigger: ".section-two",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: -40,
        duration: 0.8

      });

      gsap.to('.center-img', {
        scrollTrigger: {
          trigger: ".center-img",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 40,
        duration: 0.8

      });

      gsap.to('.section-one', {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        y: -160,
        duration: 0.8

      })
    })


  }, [])
  return (
    <section
      id="welcome"
      className="flex w-full items-center justify-center bg-[#131313] lg:h-screen"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden px-3 py-12 lg:min-h-[100vh] lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="center-img lg:left-[450px] lg:top-5/12 flex h-fit w-fit items-center justify-center overflow-hidden lg:absolute">
          <Image
            src="/images/welcome/center.png"
            width={450}
            height={722}
            alt="center"
            className="h-[550px] w-[350px]"
          />
        </div>
        <div className="z-40 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-9">
          <div className="section-one flex w-full flex-col items-start justify-start gap-10 lg:w-1/2 mt-[200px]">
            <p className="w-full text-center font-gotu text-2xl text-[#727272] lg:text-lg lg:-ml-[130px]">
              Welcome
            </p>
            <div className="flex w-full justify-center lg:justify-center">
              <p className="font-gotu text-5xl lg:text-7xl">
                <span className="text-[#C1C1C1]">Authentic</span>
                <br />
                <span className="text-[#FEC679]">Turkish</span>
                <br />
                <span className="w-full pl-28 text-end text-[#C1C1C1]">
                  Flavor
                </span>
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end">
            <div className="section-two flex flex-col gap-5">
              <Image
                src="/images/welcome/logo.png"
                width={118}
                height={118}
                alt="center"
                className=""
              />
              <p className="text-[#FEC679]">About Us</p>
              <p className="w-[320px] text-[#BBB4AA]">
                Here at Lara Restaurant we have over 20 year`s experience. With
                all our dishes are prepared daily with authentic fresh
                ingredients. Discover the taste of our delicious meat, chicken &
                fish at our new restaurant.
              </p>
              <Button className="relative py-7 px-10 font-medium uppercase transition-colors hover:bg-primary/90 before:absolute 
                            before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all 
                            before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-b-primary before:hover:border-r-primary before:hover:rounded-xl">
                <Link href='/table-booking' className="w-full">
                  Table Booking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Welcome;
