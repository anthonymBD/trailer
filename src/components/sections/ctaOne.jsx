import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1];
const WORD_DURATION = 2.2;

const CtaOne = ({ variant = "simple", data, images = [] }) => {

    /* ---------- SCROLL HOOKS (must exist every render) ---------- */

    const wordRef = useRef(null);
    const contentRef = useRef(null);

    const { scrollYProgress: wordProgress } = useScroll({
        target: wordRef,
        offset: ["start 80%", "end end"],
    });

    const wordX = useTransform(wordProgress, [0, 1], ["90%", "0%"]);
    const wordScale = useTransform(wordProgress, [0, 1], [2, 1]);

    const { scrollYProgress: contentProgress } = useScroll({
        target: contentRef,
        offset: ["start 85%", "start 45%"],
    });

    const contentOpacity = useTransform(contentProgress, [0, 1], [0, 1]);
    const contentY = useTransform(contentProgress, [0, 1], [40, 0]);

    /* ---------------- SIMPLE CTA ---------------- */
    if (variant === "simple") {
        const bgImage = images && images.length > 0 ? images[0] : "";
        return (
            <section
                className="py-28"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-5xl mx-auto px-6 space-y-8 py-28">
                    <motion.h2
                        className="text-4xl md:text-5xl font-semibold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease }}
                    >
                        {data.headline}
                    </motion.h2>
                    <motion.p
                        className="text-xl max-w-2xl opacity-80 text-white"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>
        );
    }

    /* ---------------- FEATURE CTA (scroll driven but same layout) ---------------- */
    if (variant === "feature") {
        return (
            <section className="bg-white text-primary overflow-hidden pb-16">

                {/* Word — same space as original design */}
                <div
                    ref={wordRef}
                    className="w-full overflow-hidden"
                    style={{ minHeight: "clamp(10rem, 38vw, 18rem)" }}
                >
                    <motion.strong
                        className="block font-black leading-none tracking-tight select-none text-secondary whitespace-nowrap"
                        style={{
                            fontSize: "clamp(10rem, 38vw, 18rem)",
                            transformOrigin: "right center",
                            willChange: "transform",
                            x: wordX,
                            scale: wordScale,
                        }}
                    >
                        {data.word}
                    </motion.strong>
                </div>

                {/* Headline + description */}
                <div ref={contentRef} className="max-w-7xl mx-auto px-6 pt-4 pb-12">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
                        style={{ opacity: contentOpacity, y: contentY }}
                    >
                        <h3 className="text-3xl md:text-4xl font-semibold text-primary shrink-0">
                            {data.headline}
                        </h3>
                        <p className="text-lg text-primary/90 max-w-xl">
                            {data.description}
                        </p>
                    </motion.div>
                </div>

                {/* Images */}
                <motion.div
                    className="max-w-7xl mx-auto px-6"
                    style={{ opacity: contentOpacity, y: contentY }}
                >
                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        <div className="md:col-span-2 relative">
                            <img
                                src={images[0]}
                                alt=""
                                className="w-full h-[500px] object-cover rounded-2xl"
                            />
                        </div>
                        <div>
                            <img
                                src={images[1]}
                                alt=""
                                className="w-full h-[500px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

            </section>
        );
    }

    return null;
};

export default CtaOne;
