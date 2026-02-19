import React from "react";
import { motion } from "motion/react";
import { featuresOne } from "../../../constants/featuresOne";

const ease = [0.25, 0.1, 0.25, 1];

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
                            <motion.span
                                className=" font-bold block"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, ease }}
                            >
                                {featuresOne.eyebrow}
                            </motion.span>

                            <motion.h2
                                className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: 0.08, ease }}
                            >
                                {featuresOne.title}
                            </motion.h2>

                            <motion.p
                                className="text-lg sm:text-xl"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: 0.16, ease }}
                            >
                                {featuresOne.subtitle}
                            </motion.p>
                        </div>

                        {/* Features */}
                        <motion.div
                            className="grid sm:grid-cols-2 gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                hidden: {},
                            }}
                        >
                            {featuresOne.features.map((item, i) => {
                                const Icon = featureIcons[i];

                                return (
                                    <motion.div
                                        key={i}
                                        className="space-y-4"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.5, ease }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary text-2xl">
                                            <Icon />
                                        </div>

                                        <h3 className="text-xl md:text-2x">
                                            {item.title}
                                        </h3>

                                        <p className="">{item.text}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="flex items-center gap-6 pt-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: 0.3, ease }}
                        >
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
                        </motion.div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease }}
                    >
                        <img
                            src={featuresOne.image}
                            alt=""
                            className="w-full h-[380px] sm:h-[480px] md:h-[620px] object-cover rounded-xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesOne;
