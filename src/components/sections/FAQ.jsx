import React from "react";
import { faqs } from "../../../constants/faq";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const FAQ = ({ sectionId, className = "" }) => {
    const data = faqs[sectionId];
    if (!data) return null;

    return (
        <section className={`py-24 ${className}`}>
            <div className="max-w-5xl mx-auto p-12 bg-white">

                {/* Header */}
                <div className="mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl">{data.title}</h2>
                    <p className="text-lg opacity-80">{data.subtitle}</p>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-6">

                    {data.items.map((item, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-b pb-6"
                        >
                            <AccordionTrigger className="text-xl font-bold text-left">
                                {item.q}
                            </AccordionTrigger>

                            <AccordionContent className="text-lg opacity-80 max-w-3xl">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                </Accordion>

                {/* CTA */}
                <div className="mt-24 space-y-6">
                    <h3 className="text-3xl md:text-4xl">{data.cta.title}</h3>
                    <p className="opacity-80">{data.cta.text}</p>

                    <button className="px-6 py-3 border rounded-md">
                        {data.cta.button}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
