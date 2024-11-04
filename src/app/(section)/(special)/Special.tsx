"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
  {
    name: "Adana Kebab",
    price: "30",
    modelUrl: "/models/adana-kebab.glb",
  },
  {
    name: "Lara Jumbo Platter",
    price: "30",
    modelUrl: "/models/lara-jumbo-platter.glb",
  },
  {
    name: "Mixed Vegetables",
    price: "30",
    modelUrl: "/models/mixed-vegetables.glb",
  },
  {
    name: "Roasted Kuckle Lamb",
    price: "30",
    modelUrl: "/models/roasted-kuckle-lamb.glb",
  },
  {
    name: "Saksuka",
    price: "30",
    modelUrl: "/models/saksuka.glb",
  },
  {
    name: "Turkish Sheperd Salad",
    price: "30",
    modelUrl: "/models/turkish-sheperd-salad.glb",
  },
  {
    name: "Vegetarian Kebab",
    price: "30",
    modelUrl: "/models/vegetarian-kebab.glb",
  },
];

const Special = ({}) => {
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 px-3 py-12 lg:px-0">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-7">
            <h3 className="w-full text-center font-gotu uppercase italic text-[#727272] lg:text-start">
              Our Menu
            </h3>
            <h1 className="w-full text-center font-gotu text-5xl sm:text-7xl lg:max-w-[600px] lg:text-start">
              Lara
              <br />
              Specials
            </h1>
            <Link href="">
              <Button
                className="flex items-center justify-center gap-3 border-[#FEC679] bg-transparent px-10 py-7 text-[#FEC679]"
                variant="outline"
              >
                View Menu
              </Button>
            </Link>
          </div>
          <div className="flex items-end">
            <p className="max-w-[400px] px-2 text-center font-light leading-[160%] text-[#BBB4AA] md:px-0 lg:text-start">
              Bavette was born from a passion for bringing the finest cuts of
              beef to the table, with a commitment to sustainability.
            </p>
          </div>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
