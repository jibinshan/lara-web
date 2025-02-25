import BavetteStory from "@/app/about-us/(section)/BavetteStory";
import Hero from "@/app/about-us/(section)/Hero";
import Review from "@/app/about-us/(section)/Review";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { abouttype } from "@/types/about-contact.type";

const aboutdata: abouttype = {
    hero: {
        photourl: "/images/about-us/hero.png",
        header: "Welcome to Lara - Where Every Bite is an Art Form",
        description: " Indulge in the finest cuts, masterfully prepared to perfection. At Lara, we don`t just serve steak—we serve an experience. Savor the richness, embrace the flavor, and discover the steak you`ve been waiting for."
    },
    restaurantName: "Lara",
    story: {
        photourl: "/images/about-us/story.png",
        header: "From Dream to Sizzle",
        description1: "Lara Restaurant started as a vision to bring bold and unforgettable flavors to the heart of our community. Inspired by the warmth of genuine hospitality, we’ve transformed this dream into a culinary haven where every meal tells a story.",
        description2: "At Lara, the sizzle of our grills and the aroma of freshly prepared dishes invite you to savor moments of true delight. Every plate is crafted with love, using the finest ingredients and a dedication to excellence.Whether you`re here for a family feast or an intimate meal, our team is committed to making your dining experience truly special.",
    },
    unforgettable: {
        bgimgurl: "",
        header: "",
        description: ""
    }
}

const page = ({ }) => {
    return (
        <main className="relative flex h-full w-full">
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#050505]">
                <Navbar position="absolute" />
                <Hero aboutdata={aboutdata} />
                <BavetteStory aboutdata={aboutdata} />
                <Review />
                <Footer />
            </div>
        </main>
    );
};

export default page;

// Images:
// public/images/about-us
