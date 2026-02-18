import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FiPhone, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

import { modelPages } from "../../constants/models";
import Testimonials from "../components/sections/Testimonials";
import CtaOne from "../components/sections/ctaOne";
import { ctaContent } from "../../constants/cta";

/* ---------------- FEATURE CARD (progressive reveal) ---------------- */
const FeatureCard = ({ section }) => {
    const [open, setOpen] = useState(false);
    const cardRef = useRef(null);

    const previewCount = 3;
    const preview = section.items.slice(0, previewCount);
    const rest = section.items.slice(previewCount);

    const toggle = () => {
        if (!cardRef.current) return;

        // Get position BEFORE state change
        const before = cardRef.current.getBoundingClientRect().top;
        const scrollY = window.scrollY;

        // Update state
        setOpen(prev => !prev);

        // Use double requestAnimationFrame to ensure DOM has fully updated
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (!cardRef.current) return;
                
                // Get position AFTER state change
                const after = cardRef.current.getBoundingClientRect().top;
                
                // Calculate the difference and adjust scroll
                const diff = after - before;
                if (Math.abs(diff) > 0.5) { // Only adjust if difference is significant
                    window.scrollBy({
                        top: diff,
                        behavior: 'instant'
                    });
                }
            });
        });
    };

    return (
        <div
            ref={cardRef}
            className="group border border-[#001426]/10 rounded-2xl p-7 hover:border-[#6B9C9C]/50 hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
        >
            {/* Category */}
            <h3 className="text-lg font-semibold tracking-wide text-[#001426] mb-6">
                {section.title}
            </h3>

            {/* Items */}
            <ul className="space-y-4 text-[#001426]/75 font-[DM_Sans] flex-1">
                {[...preview, ...(open ? rest : [])].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle className="text-[#6B9C9C] mt-1 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Expand button */}
            {rest.length > 0 && (
                <button
                    onClick={toggle}
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-[#6B9C9C] hover:text-[#001426] transition"
                >
                    {open ? "Show less" : `View ${rest.length} more`}
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                </button>
            )}
        </div>
    );
};

/* ---------------- MAIN PAGE ---------------- */

const ModelPage = () => {
    const { slug } = useParams();
    const model = modelPages[slug];

    if (!model) {
        return <div className="p-20 text-center">Model not found</div>;
    }

    return (
        <div className="bg-white text-[#001426] font-[Outfit]">

            {/* HERO */}
            <section className="w-full min-h-[85vh] flex items-center justify-center px-6 md:px-20 py-24 bg-[#001426] text-white">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl w-full">

                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
                            {model.title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 font-[DM_Sans] leading-relaxed max-w-xl">
                            {model.description}
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <button className="flex items-center gap-3 bg-[#E07A5F] text-white px-7 py-4 rounded-xl hover:opacity-90 transition">
                                <FiCalendar />
                                Book Viewing
                            </button>

                            <button className="flex items-center gap-3 border border-white/40 px-7 py-4 rounded-xl hover:bg-white/10 transition">
                                <FiPhone />
                                Call Team
                            </button>
                        </div>

                        <div className="text-2xl text-[#6B9C9C] font-medium pt-6">
                            {model.price}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#6B9C9C]/30 to-transparent rounded-3xl blur-2xl" />
                        <img
                            src={model.hero}
                            alt={model.title}
                            className="relative rounded-3xl shadow-2xl w-full object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* FEATURES */}
            <section className="py-28 px-6 md:px-20 max-w-7xl mx-auto">

                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Included Features
                    </h2>
                    <p className="text-lg text-[#001426]/70 font-[DM_Sans] mt-4">
                        Everything you need for comfortable off-grid travel, thoughtfully built into a compact footprint.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {model.sections.map((section, idx) => (
                        <FeatureCard key={idx} section={section} />
                    ))}
                </div>

            </section>

            {/* SHARED SECTIONS */}
            <Testimonials sectionId={1} className="bg-primary text-white" />
            <CtaOne data={ctaContent.main} images={ctaContent.images} variant="simple" />

            {/* FINAL CTA */}
            <section className="bg-white text-primary py-24 px-6 md:px-20 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        See it in person
                    </h2>
                    <p className="text-primary text-lg font-dm-sans">
                        Photos never tell the full story. Step inside, feel the space, and decide if it fits your weekends.
                    </p>
                    <div className="flex justify-center gap-6 pt-6">
                        <button className="flex items-center gap-3 bg-secondary text-white px-7 py-4 rounded-xl hover:opacity-90 transition">
                            <FiCalendar />
                            Book Viewing
                        </button>
                        <button className="flex items-center gap-3 border border-primary px-7 py-4 rounded-xl hover:bg-white/10 transition">
                            <FiPhone />
                            Talk to the team
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ModelPage;
