"use client";

import React from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import InfoCards from "@/components/InfoCards";
import WorkProcess from "@/components/WorkProcess";
import Location from "@/components/Location"

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-700">
      <div className="mx-auto max-w-[50%]">
        <Header />
        <Hero />
        <InfoCards />
        <Location />
        <WorkProcess />
      </div>
    </div>
  );
}
