"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import { Autoplay, Pagination } from "swiper/modules";
import { heroData } from "@/utils/data";

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1440px" }}
      className="flex flex-col min-h-screen mx-auto mt-10"
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {heroData.map((item, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="relative overflow-hidden flex rounded-[40px] w-full min-h-[550px] transition-all duration-300 ease-in-out justify-center items-center mx-auto"
            >
              <div className="absolute z-10 flex flex-col gap-6 w-full h-full bg-[linear-gradient(to_right,_#E7FAFE_55%,_#E7FAFE_40%,_rgba(52,211,153,0.0)_40%)]">
                <div className="flex flex-col max-w-[50%] my-auto px-[50px] gap-[30px]">
                  <React.Fragment>
                    {item.badges && item.badges.length > 0 && (
                      <div className="">
                        <a
                          href={item.badges[0].badgeUrl}
                          className="flex items-center"
                        >
                          <span
                            key={item.badges[0].id}
                            className="bg-white rounded-full flex gap-2 items-center text-[14px] font-semibold py-[14px] px-[20px] capitalize"
                          >
                            {item.badges[0].icon ? (
                              <span className="text-[20px] text-gray-700">
                                {item.badges[0].icon}
                              </span>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 196.979 196.979"
                                className="w-[30px] h-[30px] text-gray-700" // bisa custom ukuran dan warna pakai Tailwind
                                fill="brown" // biar bisa ganti warna dari class
                              >
                                <path d="M43.48,0C28.1,0.003,15.588,12.517,15.588,27.896v141.188c0,15.38,12.512,27.894,27.893,27.896h131.66c3.452,0,6.25-2.798,6.25-6.25v-21.646v-21.646V49.542V6.25c0-3.452-2.798-6.25-6.25-6.25H43.48z M43.481,12.5h125.41v37.042v91.645H43.48c-5.687,0.001-10.978,1.716-15.392,4.649V27.896C28.088,19.408,34.994,12.501,43.481,12.5z M168.891,184.479H43.482c-8.488-0.001-15.394-6.908-15.394-15.396c0-8.488,6.905-15.395,15.393-15.396h125.41v9.146h-98.41c-3.452,0-6.25,2.798-6.25,6.25c0,3.452,2.798,6.25,6.25,6.25h98.41V184.479z" />
                                <path d="M73.496,87.7v23.664c0,3.452,2.798,6.25,6.25,6.25h37.486c3.452,0,6.25-2.798,6.25-6.25V87.701c8.258-3.315,13.982-11.413,13.982-20.669c0-11.935-9.437-21.706-21.24-22.244c-4.161-5.506-10.644-8.791-17.734-8.791c-7.093,0-13.575,3.285-17.735,8.791c-11.804,0.538-21.241,10.31-21.241,22.244C59.514,76.289,65.239,84.386,73.496,87.7z M81.782,57.265c0.473,0,0.954,0.035,1.433,0.105c2.686,0.397,5.313-0.986,6.512-3.418c1.661-3.364,5.02-5.455,8.765-5.455c3.744,0,7.103,2.091,8.766,5.457c1.2,2.432,3.839,3.811,6.513,3.416c0.476-0.07,0.956-0.105,1.429-0.105c5.386,0,9.768,4.382,9.768,9.768c0,4.905-3.663,9.069-8.52,9.685c-3.122,0.396-5.463,3.053-5.463,6.2v22.196H85.996V83.331c0-0.007,0.001-0.015,0.001-0.021c0.207-3.293-2.182-6.18-5.455-6.593c-4.862-0.613-8.528-4.776-8.528-9.685C72.014,61.646,76.396,57.265,81.782,57.265z" />
                              </svg>
                            )}
                            {item.badges[0].displayText}
                          </span>
                        </a>
                      </div>
                    )}
                  </React.Fragment>
                  <React.Fragment>
                    <div className="flex flex-col gap-[24px]">
                      <h1 className="text-start font-extrabold text-[64px] leading-[1.3] text-wrap capitalize">
                        {item.title}
                      </h1>
                      <p className="text-start text-[16px] text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </React.Fragment>
                  {(item.cooktime || (item.tags && item.tags.length > 0)) && (
                    <React.Fragment>
                      <div className="flex gap-[24px] items-center justify-start">
                        {/* cooktime */}
                        {item.cooktime && (
                          <span className="flex items-center gap-3 px-[16px] py-[10px] bg-cyan-100 rounded-full">
                            <svg
                              fill="#000000"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[30px] h-[30px] text-gray-700" // bisa custom ukuran dan warna pakai Tailwind
                            >
                              <path d="M4,14a8,8,0,1,0,8-8A8,8,0,0,0,4,14Zm7-4.8a1,1,0,0,1,2,0V13h3a1,1,0,0,1,0,2H12a1,1,0,0,1-1-1ZM8,4A1,1,0,0,1,8,2h8a1,1,0,0,1,0,2Z" />
                            </svg>
                            <p className="text-start text-[16px] text-slate-800">
                              {item.cooktime}
                            </p>
                          </span>
                        )}
                        {/* tags */}
                        {item.tags && item.tags.length > 0 && (
                          <a
                            href={
                              typeof item.tags[0] === "object" &&
                              "tagUrl" in item.tags[0]
                                ? item.tags[0].tagUrl
                                : "#"
                            }
                          >
                            <span className="flex items-center gap-3 px-[16px] py-[10px] bg-cyan-100 rounded-full">
                              <svg
                                fill="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[30px] h-[30px] text-gray-700"
                              >
                                <path d="M16.84,11.63A3,3,0,0,0,19,10.75l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.55,9.33a1,1,0,0,1-1.42,0h0L19.67,5.8a1,1,0,1,0-1.42-1.42L14.72,7.92a1,1,0,0,1,0-1.41l2.83-2.83a1,1,0,1,0-1.42-1.42L13.3,5.09a3,3,0,0,0,0,4.24h0L12,10.62,3.73,2.32l-.1-.06a.71.71,0,0,0-.17-.11l-.18-.07L3.16,2H3.09l-.2,0a.57.57,0,0,0-.18,0,.7.7,0,0,0-.17.09l-.16.1-.07,0-.06.1a1,1,0,0,0-.11.17,1.07,1.07,0,0,0-.07.19s0,.07,0,.11a11,11,0,0,0,3.11,9.34l2.64,2.63-5.41,5.4a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L9.9,15.57h0l2.83-2.83h0l2-2A3,3,0,0,0,16.84,11.63ZM9.19,13.45,6.56,10.81A9.06,9.06,0,0,1,4,5.4L10.61,12Zm6.24.57A1,1,0,0,0,14,15.44l6.3,6.3A1,1,0,0,0,21,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z" />
                              </svg>
                              <p>
                                {typeof item.tags[0] === "object" &&
                                "tagText" in item.tags[0]
                                  ? item.tags[0].tagText
                                  : item.tags[0]}
                              </p>
                            </span>
                          </a>
                        )}
                      </div>
                    </React.Fragment>
                  )}
                  {item.cta.show && (
                    <React.Fragment>
                      <div className="flex gap-[24px] items-center justify-end">
                        <a
                          href={
                            typeof item.cta.ctaType === "object" &&
                            "url" in item.cta.ctaType
                              ? item.cta.ctaType.url
                              : "#"
                          }
                          className="bg-black text-white px-[16px] py-[10px] rounded-full flex items-center justify-center gap-2"
                        >
                          {typeof item.cta.ctaType === "object" &&
                          "ctatext" in item.cta.ctaType ? (
                            <span>{item.cta.ctaType.ctatext}</span>
                          ) : null}

                          {item.cta.ctaType &&
                            typeof item.cta.ctaType === "object" && (
                              <>
                                {item.cta.ctaType.type === "article" && (
                                  <svg
                                    fill="#FFF"
                                    viewBox="0 0 52 52"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[24px] h-[24px] text-white"
                                  >
                                    <path
                                      d="m31.2 4.24a2.24 2.24 0 1 1 -2.2-2.24 2.24 2.24 0 0 1 2.2 2.24zm-8.2 8.32a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm19.44 31-10-15.36v-8.2a2.14 2.14 0 0 0 2.4-2.24 2 2 0 0 0 -1.84-2.16h-13.8a2 2 0 0 0 -2 2 2.09 2.09 0 0 0 0 .25 2.16 2.16 0 0 0 2.4 2.24v8.31l-10 15.2a4.26 4.26 0 0 0 -.24 4.24 3.91 3.91 0 0 0 3.52 2.16h26.12a3.9 3.9 0 0 0 3.52-2.16 4 4 0 0 0 -.16-4.24zm-18.8-14v-9.16h4.8v9.28l4.72 7.52h-14.28z"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                )}
                                {item.cta.ctaType.type === "video" && (
                                  <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 485.74 485.74"
                                    className="w-[24px] h-[24px] text-white"
                                    fill="#FFF"
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <g>
                                        <path
                                          d="M242.872,0C108.732,0,0.004,108.736,0.004,242.864c0,134.14,108.728,242.876,242.868,242.876
  c134.136,0,242.864-108.736,242.864-242.876C485.736,108.736,377.008,0,242.872,0z M338.412,263.94l-134.36,92.732
  c-16.776,11.588-30.584,4.248-30.584-16.316V145.38c0-20.556,13.808-27.9,30.584-16.312l134.32,92.732
  C355.136,233.384,355.176,252.348,338.412,263.94z"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                )}
                              </>
                            )}
                        </a>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
              <img
                src={item.imageUrl}
                className="flex w-full h-full object-cover absolute right-0 top-0"
                alt={item.imageAlt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
