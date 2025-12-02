"use client"

import React from "react";
import Hero from "@/components/Hero";
import NextHeader from "@/components/Header";
import InfoCards from "@/components/InfoCards";
import WorkProcess from "@/components/WorkProcess";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="dak:text-white min-h-screen bg-white dark:bg-neutral-700">
      <div className="mx-auto max-w-[50%]">
        <NextHeader />
        <Hero />
        <InfoCards />
        <Location />
        <WorkProcess />
      </div>
    </div>
  );
}
