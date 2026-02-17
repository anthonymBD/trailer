import React from "react";
import { testimonials } from "../../../constants/testimonials";
import StarRating from "../ui/StarsRating";

const Testimonials = ({ sectionId, className = "" }) => {
    const data = testimonials[sectionId];
    if (!data) return null;

    return (
        <section className={`py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <h2 className="text-4xl md:text-6xl">{data.eyebrow}</h2>
                    <p className="text-lg opacity-80">{data.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white text-neutral-900 rounded-xl p-8 border border-black/10 space-y-6"
                        >
                            <StarRating rating={item.rating} />

                            <p className="text-lg leading-relaxed">
                                “{item.quote}”
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                                <img
                                    src={item.avatar}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm opacity-70">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;