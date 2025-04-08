"use client";

import React, { useEffect } from "react";
import { heroData } from "@/utils/data";
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions } from "flowbite";

export default function Home() {
  useEffect(() => {
    const carouselElement = document.getElementById("animation-carousel");

    if (!carouselElement) return;

    const items: CarouselItem[] = heroData.map((_, index) => {
      const el = document.getElementById(`hero-item-${index}`);
      if (!el) throw new Error(`Element hero-item-${index} not found`);
      return {
        position: index,
        el: el,
      };
    });

    const indicators = heroData.map((_, index) => {
      const el = document.getElementById(`carousel-indicator-${index}`);
      if (!el) throw new Error(`Element carousel-indicator-${index} not found`);
      return {
        position: index,
        el: el,
      };
    });

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: indicators,
      },
      onNext: () => console.log("next slider item is shown"),
      onPrev: () => console.log("previous slider item is shown"),
      onChange: () => console.log("new slider item has been shown"),
    };

    const carousel = new Carousel(carouselElement, items, options);
    carousel.pause();

    const $prevButton = document.getElementById("hero-prev");
    const $nextButton = document.getElementById("hero-next");

    $prevButton?.addEventListener("click", () => carousel.prev());
    $nextButton?.addEventListener("click", () => carousel.next());

    return () => {
      // cleanup listener kalau perlu
      $prevButton?.removeEventListener("click", () => carousel.prev());
      $nextButton?.removeEventListener("click", () => carousel.next());
    };
  }, []);
  return (
    <main
      style={{ maxWidth: "1440px" }}
      className="flex flex-col min-h-screen mx-auto"
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to My Site</h2>
        <p className="mt-2">This is the main content of the homepage.</p>
      </div>

      <div
        id="animation-carousel"
        className="relative w-full"
      >
        <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {heroData.map((item, index) => (
            <div
              key={index}
              id={`hero-item-${index}`}
              className={`duration-700 ease-in-out ${index === 0 ? "block" : "hidden"}`}
            >
              <img
                src={item.imageUrl}
                className="absolute flex object-cover w-full h-full"
                alt={item.imageAlt}
              />
              
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {heroData.map((_, index) => (
            <button
              key={index}
              id={`carousel-indicator-${index}`}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          id="hero-prev"
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          id="hero-next"
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </main>
  );
}
