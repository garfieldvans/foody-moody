"use client";

import React from 'react'
import "./home.css";
import { HeroComponent } from './pages/hero/page';
import { CategoriesPage } from './pages/categories/page';

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1440px" }}
      className="flex flex-col min-h-screen mx-auto mt-10"
    >
     <HeroComponent /> 
     <CategoriesPage />

    </main>
  );
}
