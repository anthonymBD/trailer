import React from "react";
import { motion } from "motion/react";
import { testimonials } from "../../../constants/testimonials";
import StarRating from "../ui/StarsRating";

const ease = [0.25, 0.1, 0.25, 1];

const Testimonials = ({ sectionId, className = "" }) => {
    const data = testimonials[sectionId];
    if (!data) return null;

    return (
        <section className={`py-28 ${className}`}>
            <div className="max-w-7xl mx-auto  px-6">

                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <motion.h2
                        className="text-4xl md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease }}
                    >
                        {data.eyebrow}
                    </motion.h2>
                    <motion.p
                        className="text-lg opacity-80"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
                        hidden: {},
                    }}
                >
                    {data.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white text-neutral-900 rounded-xl p-8 border border-black/10 space-y-6"
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.55, ease }}
                        >
                            <StarRating rating={item.rating} />

                            <p className="text-lg leading-relaxed">
                                “{item.quote}”
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                                <img
                                    src={item.avatar}
                                    alt=""
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm opacity-70">{item.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;