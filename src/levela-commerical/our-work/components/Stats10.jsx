"use client";

import React from "react";

export function Stats10() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            Numbers that demonstrate our track record
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              127
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Projects delivered
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              68%
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Repeat clients
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              6.2
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Average handover time
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
