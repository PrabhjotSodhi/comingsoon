"use client";

import React from "react";

export function Timeline17() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Timeline</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Typical project schedule and milestones
            </h2>
            <p className="md:text-md">
              Every project follows a structured sequence. Site assessment,
              staged dismantling, waste management, and final handover—each
              phase planned and executed with discipline.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row">
          <div className="absolute left-0 top-1.5 z-10 hidden h-1 w-16 bg-gradient-to-r from-background-primary to-transparent md:block" />
          <div className="flex flex-col md:flex-row">
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Week one</h3>
                <p>Site walkthrough and safety planning with your team</p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Week two</h3>
                <p>
                  Systematic dismantling begins with MEP isolation and removal
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Week three
                </h3>
                <p>
                  Waste segregation, recycling coordination, and site cleanup
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Week four
                </h3>
                <p>Final inspection and handover to incoming contractors</p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full hidden md:block" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Planning</h3>
                <p>Execution</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1.5 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
        </div>
      </div>
    </section>
  );
}
