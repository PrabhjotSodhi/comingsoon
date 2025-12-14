"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Project-based
          </h2>
          <p className="md:text-md">
            Each project is unique. We provide transparent, tailored quotes.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How do you quote projects?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We assess scope, complexity, and timeline on-site before providing
              a fixed price. Each project is different, so we build quotes
              around your specific requirements and constraints.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What's included in estimates?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our estimates cover labour, equipment, waste management, and
              compliance documentation. We're transparent about costs upfront so
              there are no surprises during execution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can you work within budget constraints?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes. We'll discuss your budget early and stage the work or adjust
              scope to fit. We'd rather be honest about what's possible than
              overcommit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How quickly can you mobilise?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Mobilisation depends on project size and site access. We typically
              move fast, but we'll give you a realistic start date once we've
              walked the space and confirmed logistics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Do you offer staged pricing?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We can structure work in phases if your project demands it. This
              helps manage cash flow and lets you coordinate with other trades
              on your timeline.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
