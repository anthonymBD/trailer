import React from "react";
import { useParams } from "react-router-dom";
import { FiPhone, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { modelPages } from "../../constants/models";
import Testimonials from "../components/sections/Testimonials";
import CtaOne from "../components/sections/ctaOne";
import { ctaContent } from "../../constants/cta";

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
                                Call Owner
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
                <div className="space-y-20">
                    {model.sections.map((section, idx) => (
                        <div key={idx} className="grid md:grid-cols-2 gap-12 items-start">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                                {section.title}
                            </h2>

                            <ul className="space-y-5 font-[DM_Sans] text-lg text-[#001426]/80">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <FiCheckCircle className="text-[#6B9C9C] mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* SHARED SECTIONS: TESTIMONIALS + CTA */}
            <Testimonials sectionId={1} className="bg-primary text-white" />
            <CtaOne data={ctaContent.main} images={ctaContent.images} variant="simple" />

            {/* CTA */}
            <section className="bg-[#001426] text-white py-24 px-6 md:px-20 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        See it in person
                    </h2>
                    <p className="text-white/70 text-lg font-[DM_Sans]">
                        Photos never tell the full story. Step inside, feel the space, and decide if it fits your weekends.
                    </p>
                    <div className="flex justify-center gap-6 pt-6">
                        <button className="flex items-center gap-3 bg-[#E07A5F] text-white px-7 py-4 rounded-xl hover:opacity-90 transition">
                            <FiCalendar />
                            Book Viewing
                        </button>
                        <button className="flex items-center gap-3 border border-white/40 px-7 py-4 rounded-xl hover:bg-white/10 transition">
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