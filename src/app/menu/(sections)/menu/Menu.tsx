"use client";
import MenuItem from "@/app/menu/(sections)/menu/MenuItem";
import Search from "@/app/menu/(sections)/menu/Search";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import { getFilteredMenuItems } from "@/lib/menu-item-filter";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuItemMobile from "./MenuItemMobile";
import debounce from "lodash.debounce";

const Menu = () => {
  const [query, setQuery] = useState("");
  const { sortedMenu } = useRestaurant();
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const { menuCategory } = useRestaurant();

  const fixedElementHeight = 150; // Adjust this value to match the height of your fixed element
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCategory = (categoryId: string) => {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      const elementPosition =
        categoryElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - fixedElementHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "instant",
      });
      setCurrentCategory(categoryId);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const updateCurrentCategory = debounce(() => {
    let foundCategory = null;
    menuCategory?.forEach((item) => {
      const categoryElement = document.getElementById(item._id);
      if (categoryElement) {
        const rect = categoryElement.getBoundingClientRect();
        if (
          rect.top <= fixedElementHeight &&
          rect.bottom >= fixedElementHeight
        ) {
          foundCategory = item._id;
        }
      }
    });
    if (foundCategory) {
      setCurrentCategory(foundCategory);
    }
  }, 100); // Adjust the delay as needed

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      updateCurrentCategory();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuCategory, updateCurrentCategory]);

  useEffect(() => {
    if (currentCategory && buttonRefs.current[currentCategory]) {
      buttonRefs.current[currentCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [currentCategory]);

  const lastCategory = sortedMenu?.[sortedMenu.length - 1];
  const lastCategoryItemsCount = lastCategory?.items.length ?? 0;

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-4 px-2 py-[2.5rem] pb-28 md:gap-[2rem]">
        <div className="fixed top-0 z-50 flex w-full flex-col gap-4 bg-[#070707] pb-2 pt-3 md:sticky md:gap-2 md:pt-2">
          <div className="flex w-full items-center justify-between gap-4">
            <Search query={query} setQuery={setQuery} />
            <Button
              className="hidden items-center gap-2 font-semibold text-black md:flex"
              asChild
            >
              <Link href="\pdf\woolton-a-la-carte.pdf" target="_blank">
                <FileText />
                Download Menu
              </Link>
            </Button>
          </div>
          <div
            ref={containerRef}
            className="hidden-scrollbar flex w-full max-w-[1300px] items-center gap-[0.4rem] overflow-x-scroll whitespace-nowrap"
          >
            {menuCategory?.map((item) => {
              return (
                <button
                  key={item._id}
                  ref={(el) => {
                    buttonRefs.current[item._id] = el;
                  }}
                  className={cn(
                    "w-fit border-b-2 border-b-transparent bg-primary px-6 py-4 font-semibold transition-all duration-300 ease-in-out md:bg-transparent",
                    currentCategory === item._id &&
                    "bg-[#02264E] md:border-b-primary",
                  )}
                  onClick={() => handleScrollToCategory(item._id)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        {sortedMenu &&
          getFilteredMenuItems({
            data: sortedMenu,
            query,
          }).map((data) => {
            return (
              <section
                key={data._id}
                id={data._id}
                className="flex w-full flex-col gap-2 mt-6 lg:mt-0"
              >
                <h1
                  id={data._id}
                  className={cn(
                    data._id === currentCategory && "bg-[#070707] py-3 z-40 sticky lg:static top-[150px] lg:top-0 w-full",
                    "font-sans text-xl font-bold tracking-[0.00938em] lg:font-sans lg:text-base lg:font-normal lg:tracking-normal",
                  )}
                >
                  {data.categoryName}
                </h1>
                <div className="hidden h-full w-full grid-cols-1 gap-4 md:grid lg:grid-cols-2">
                  {data.items.map((item) => {
                    return <MenuItem key={item._id} id={item._id} />;
                  })}
                </div>
                <div className="grid h-full w-full grid-cols-1 gap-4 md:hidden lg:grid-cols-2">
                  {data.items.map((item) => {
                    return <MenuItemMobile key={item._id} id={item._id} />;
                  })}
                </div>
              </section>
            );
          })}
        {sortedMenu && (
          <>
            {lastCategoryItemsCount < 3 && (
              <div className="block h-[50vh] w-full md:hidden"></div>
            )}
            {lastCategoryItemsCount < 6 && (
              <div className="hidden h-[50vh] w-full md:block"></div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Menu;
