import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Serving from "./(section)/Serving";
import Special from "./(section)/(special)/Special";
import Reserve from "./(section)/Reserve";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Footer from "@/components/Footer";
import Contact from "./(section)/Contact";
import Map from "./(section)/Map";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero />
        <Welcome />
        <Serving />
        <Special />
        <Reserve />
        <Reviews />
        {/* <Flavour /> */}
        {/* <Testimonials /> */}
        <Contact />
        <Map />
        <ConnectWithUs />
        <Footer />
      </div>
    </main>
  );
}
