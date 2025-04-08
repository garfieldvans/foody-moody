import React from "react";
import { heroData } from "@/utils/data";

export default function Home() {
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
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {heroData.map((item, index) => (
            <div
              key={index}
              className={`hidden duration-700 ease-in-out ${index === 0 ? "block" : "hidden"}`}
              data-carousel-item
            >
              <h1>{item.title}</h1>
              <img
                src={item.imageUrl}
                className="absolute block object-cover w-full h-full"
                alt={item.imageAlt}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
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
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
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
