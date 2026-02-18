import React from "react";
import { featuresOne } from "../../../constants/featuresOne";

// react-icons
import { TbCamper } from "react-icons/tb";
import { LuCar } from "react-icons/lu";
import { ArrowRight } from "lucide-react"; // cleaner arrow than image

// map icons to features (order based)
const featureIcons = [
    TbCamper,
    LuCar,
];

const FeaturesOne = ({ className = "" }) => {
    return (
        <section className={`mt-24 md:mt-6 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">

                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 space-y-10">

                        <div className="space-y-6 max-w-xl">
                            <span className="text-primary font-bold">
                                {featuresOne.eyebrow}
                            </span>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
                                {featuresOne.title}
                            </h2>

                            <p className="text-lg sm:text-xl text-primary/80">
                                {featuresOne.subtitle}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-10">
                            {featuresOne.features.map((item, i) => {
                                const Icon = featureIcons[i];

                                return (
                                    <div key={i} className="space-y-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary text-2xl">
                                            <Icon />
                                        </div>

                                        <h3 className="text-xl md:text-2xl text-primary">
                                            {item.title}
                                        </h3>

                                        <p className="text-primary/80">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-6 pt-4">
                            <a
                                href={featuresOne.cta.primary.href}
                                className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition"
                            >
                                {featuresOne.cta.primary.label}
                            </a>

                            <a
                                href={featuresOne.cta.secondary.href}
                                className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                            >
                                {featuresOne.cta.secondary.label}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full">
                        <img
                            src={featuresOne.image}
                            className="w-full h-[380px] sm:h-[480px] md:h-[620px] object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesOne;
