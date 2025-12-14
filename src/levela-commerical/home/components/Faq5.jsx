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
            FAQs
          </h2>
          <p className="md:text-md">
            Common questions about our deconstruction process, timelines, and
            capabilities.
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
              How long does a typical strip-out take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Most office and retail projects complete in two to four weeks
              depending on size and complexity. Larger multi-level works are
              staged and may extend across several phases. We provide detailed
              timelines during the planning phase.
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
              Can you work in occupied buildings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes. We manage live site deconstruction with strict protocols for
              noise, dust, and access control. Staging and scheduling are
              coordinated with facility management to minimise disruption to
              ongoing operations.
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
              What safety certifications do you hold?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We hold current Health and Safety at Work Act certifications and
              maintain documented safety plans for all projects. Full details
              are available in our Documentation section.
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
              Do you handle waste disposal?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We manage all waste streams including segregation, recycling, and
              disposal. Materials are handled according to environmental and
              compliance standards.
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
              Can you provide references?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We have completed projects for architects, developers, and
              facility managers across New Zealand. Case studies and client
              references are available upon request.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
