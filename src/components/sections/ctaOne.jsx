import React from "react";

const CtaOne = ({ variant = "simple", theme = "light", data, images = [] }) => {
    const isDark = theme === "dark";

    /* ---------------- SIMPLE CTA (old school) ---------------- */

    if (variant === "simple") {
        return (
            <section className={`${isDark ? "bg-primary text-white" : "bg-white text-[#001426]"} py-28`}>
                <div className="max-w-5xl mx-auto px-6 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        {data.headline}
                    </h2>

                    <p className="text-xl max-w-2xl opacity-80">
                        {data.description}
                    </p>
                </div>
            </section>
        );
    }

    /* ---------------- FEATURE CTA (your RELAX one) ---------------- */

    if (variant === "feature") {
        return (
            <section className={`${isDark ? "bg-primary text-white" : "bg-white text-primary"} py-24`}>
                <div className="max-w-7xl mx-auto px-6">

                    <div className="relative mb-24">
                        <h2 className={`font-black leading-none tracking-tight select-none
              text-[20vw] md:text-[12vw] lg:text-[10vw]
              ${isDark ? "text-white/5" : "text-primary/20"}`}
                        >
                            {data.word}
                        </h2>

                        <div className="absolute bottom-0 left-0 max-w-xl space-y-4">
                            <h3 className="text-3xl md:text-4xl font-semibold">
                                {data.headline}
                            </h3>

                            <p className="text-lg opacity-80">
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <img src={images[0]} className="md:col-span-2 h-[500px] w-full object-cover rounded-2xl" />
                        <img src={images[1]} className="h-[500px] w-full object-cover rounded-2xl" />
                    </div>

                </div>
            </section>
        );
    }

    return null;
};

export default CtaOne;
