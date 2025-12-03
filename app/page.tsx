import React from "react";
import Hero from "@/components/Hero";
import NavHeader from "@/components/NavHeader";
import InfoCards from "@/components/InfoCards";
import WorkProcess from "@/components/WorkProcess";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="dak:text-white min-h-screen bg-white dark:bg-neutral-700">
      <div className="mx-auto 2xl:max-w-[50%] xl:max-w-[70%] lg:max-w-[80%] md:max-w-[90%] w-[95%]">
        <NavHeader />
        <Hero />
        <InfoCards />
        <Location />
        <WorkProcess />
      </div>
    </div>
  );
}
