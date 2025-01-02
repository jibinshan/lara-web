import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Lara<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Lara Restaurant started as a vision to bring bold and unforgettable flavors to the heart of our community. Inspired by the warmth of genuine hospitality, we’ve transformed this dream into a culinary haven where every meal tells a story.
              <br />
              <br />
              At Lara, the sizzle of our grills and the aroma of freshly prepared dishes invite you to savor moments of true delight. Every plate is crafted with love, using the finest ingredients and a dedication to excellence. Whether you`re here for a family feast or an intimate meal, our team is committed to making your dining experience truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
