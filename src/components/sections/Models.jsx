import React from "react";
import { useNavigate } from "react-router-dom";
import { models } from "../../../constants/models";

const Models = ({ sectionId, className = "" }) => {
    const navigate = useNavigate();
    const data = models[sectionId];
    if (!data) return null;

    // Show only the first 3 models in the grid
    const visibleItems = data.items.slice(0, 3);
    // Use the remaining model (e.g. Max) for a single "View more" button
    const moreModel = data.items.find((item) => item.slug === "max");

    return (
        <section className={`py-28 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl">{data.title}</h2>
                    <p className="text-lg opacity-70">{data.subtitle}</p>
                </div>

                {/* Grid – first 3 models only */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visibleItems.map((model, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl overflow-hidden bg-white text-neutral-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              ${model.featured ? "border-2 border-[#E07A5F]" : "border border-black/10"}`}
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] bg-neutral-200">
                                <img
                                    src={model.image}
                                    alt={model.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-8 text-center space-y-4">
                                <div
                                    className={`text-xs tracking-[0.15em] font-semibold ${model.featured ? "text-[#E07A5F]" : "text-emerald-700/70"
                                        }`}
                                >
                                    {model.tag}
                                </div>

                                <h3 className="text-3xl font-semibold">{model.name}</h3>

                                <div className="space-y-1">
                                    <div className="text-4xl font-bold">{model.price}</div>
                                    <div className="opacity-60">{model.weekly}</div>
                                </div>

                                <p className="opacity-70 leading-relaxed">
                                    {model.desc}
                                </p>

                                <button
                                    onClick={() => navigate(`/models/${model.slug}`)}
                                    className={`w-full py-3 rounded-xl border-2 transition-all
                  ${model.featured
                                            ? "bg-[#2C4251] text-white border-[#2C4251] hover:bg-[#1d2d37]"
                                            : "border-black hover:bg-black hover:text-white"
                                        }`}
                                >
                                    {model.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more button for the remaining model (Max) */}
                {moreModel && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => navigate(`/models/${moreModel.slug}`)}
                            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg font-medium"
                        >
                            View more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Models;
