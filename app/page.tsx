import React from "react";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import WorkProcess from "@/components/WorkProcess";
import Location from "@/components/Location";

export default async function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <Location />
      <WorkProcess />
    </>
  );
}
